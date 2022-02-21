const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        include: [
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'createdAt'],
              include: {
                model: User,
                attributes: ['username']
              }
            },
            {
              model: User,
              attributes: ['username']
            }
          ]
    })
    .then(dbPostData => {
      // pass a single post object into the homepage template
      // console.log(dbPostData[0]);
      const posts = dbPostData.map(post => post.get({plain: true}));
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
  
});

router.get('/logedin', (req, res) => {
    Post.findAll({
        include: [
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'createdAt'],
              include: {
                model: User,
                attributes: ['username']
              }
            },
            {
              model: User,
              attributes: ['username']
            }
          ]
    })
    .then(dbPostData => {
      // pass a single post object into the homepage template
      // console.log(dbPostData[0]);
      const posts = dbPostData.map(post => post.get({plain: true}));
      res.render('homepagelogedin', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
  
});


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

router.get('/add-post', (req, res) => {
   
    res.render('add-post',{
        loggedIn:req.session.loggedIn
    });
});


router.get('/add-comment/:id', (req, res) => {
    Post.findOne({
        where: {
        id: req.params.id
        },
        attributes: [
            'id',
            'post_comment',
            'title',
            'createdAt'
            
         ] ,
        include: [
          {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'createdAt'],
              include: {
                model: User,
                attributes: ['username']
              }
          }, 
          {
              model: User,
              attributes: ['username']
          }
        ]
    })
    .then(dbPostData => {
    if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
    }
        // const posts = dbPostData.get({ plain: true });
        const posts = dbPostData.get({ plain: true });;
        // console.log(dbPostData);

        res.render('add-comment', {
        posts,
        loggedIn: true
        });
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
});

module.exports = router;