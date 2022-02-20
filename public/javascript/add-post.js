async function newpost() {
    event.preventDefault();
    console.log('En new-post-form');
    document.location.replace('/add-post');
    
}
  
document.querySelector('#new-post-form').addEventListener('click', newpost);