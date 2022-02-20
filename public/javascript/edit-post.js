async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#post-title').value.trim();
    const post_comment = document.querySelector('#post-content').value.trim();
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    console.log(id);

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({title, post_comment}),
        headers: {'Content-Type': 'application/json'}
    });
    
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
    alert(response.statusText);
    }
}
  
document.querySelector('.edit-form').addEventListener('submit', editFormHandler);