const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value;
    const body = document.querySelector('#post-body').value;

    if (title && body) {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        description: JSON.stringify({
          title,
          body,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if(!response) {
        alert('Failed to post new blog!')
      } else {
        document.location.replace('/dash')
    }
  }
};
  
document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
  