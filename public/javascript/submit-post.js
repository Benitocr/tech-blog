

async function newPostHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const post_comment = document.querySelector('#post-content').value.trim();

    if (title && post_comment) {
      const response = await fetch('/api/posts/', {
        method: 'post',
        body: JSON.stringify({
          title,
          post_comment
          
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
            document.location.replace('/dashboard');
        } 
        else {
            alert(response.statusText);
        }
    }
}
  
document.querySelector('.login-form').addEventListener('submit', newPostHandler);