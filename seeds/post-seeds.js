const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_comment: 'Vero elitr et consetetur dolor lorem dolor eirmod, dolore diam accusam no consetetur magna eos et. Sadipscing consetetur gubergren labore.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_comment: 'Ut justo dolores et nonumy eos sadipscing. Nonumy nonumy sit gubergren sit at diam et justo. Vero stet accusam eirmod diam duo justo clita amet accusam, eos dolores et lorem elitr, dolor accusam sit sit magna, eirmod sit vero takimata est.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_comment: 'Dolor labore justo nonumy clita dolore magna ea aliquyam. Eos gubergren sed gubergren invidunt est.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_comment: 'Dolor dolore et est gubergren invidunt diam dolor accusam labore. Labore tempor sit ipsum dolores erat dolor rebum.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_comment: 'Sed labore dolor erat voluptua dolore, lorem consetetur sed consetetur duo accusam sit vero.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_comment: 'Invidunt dolore ut justo amet justo vero no erat eirmod dolor..',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_comment: 'Sea elitr ipsum takimata gubergren sit, sed sit voluptua lorem et lorem.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_comment: 'Sed dolore amet et sit kasd lorem consetetur. Kasd ea sadipscing gubergren lorem no eos, stet duo sed sanctus sit sanctus accusam. Sit ut tempor duo clita sanctus sed magna diam et. Sit sadipscing elitr sanctus sit aliquyam eirmod diam justo,.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_comment: 'Sanctus dolore invidunt est eos no ipsum elitr sed. Et at kasd ipsum stet amet invidunt eos sadipscing. Clita sea kasd sadipscing dolore sit tempor. Rebum duo duo rebum kasd eirmod gubergren sed, dolor labore accusam ut justo stet ipsum no,.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_comment: 'Dolores dolore sit no ipsum diam ut est gubergren. Sed kasd voluptua vero sed rebum. Lorem duo sed stet vero takimata. Lorem tempor gubergren dolores aliquyam justo. Dolores nonumy tempor sadipscing ut.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_comment: 'Et sea accusam vero lorem gubergren stet stet sea elitr, tempor aliquyam elitr.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_comment: 'Sea amet takimata nonumy sit dolor et diam tempor dolor sed, diam tempor ipsum vero dolores dolor. Dolore sanctus diam.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_comment: 'Dolor et labore tempor rebum ea consetetur sed sea. Kasd ipsum sea elitr at. Sanctus sea sed accusam lorem stet.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_comment: 'At ipsum et diam sed consetetur diam ut aliquyam accusam. Est gubergren sed no et rebum sit et lorem sed,.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_comment: 'Sit takimata takimata sanctus sea ea dolor. At et et vero sed dolor diam sed. Takimata invidunt amet at eirmod.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_comment: 'Aliquyam ipsum amet elitr lorem clita ut et sit, lorem consetetur est ut et aliquyam. Ut clita sit sea dolores.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_comment: 'Accusam dolor tempor takimata labore vero dolor dolor dolores, eos kasd ipsum et elitr, ipsum diam kasd diam magna consetetur.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_comment: 'Sit et labore ea lorem sadipscing sed kasd no kasd eirmod. Gubergren diam eirmod ea vero nonumy. Invidunt et kasd.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_comment: 'Diam tempor eos diam magna diam dolor duo clita consetetur, voluptua duo elitr eos clita ipsum et sed, vero aliquyam.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_comment: 'Invidunt accusam accusam labore sea invidunt kasd sed, ipsum nonumy consetetur takimata sadipscing eirmod labore no elitr dolore, invidunt sed.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
