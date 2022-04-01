const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const body = document.querySelector('#post-body').value.trim();

    if (title && body) {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        description: JSON.stringify({
          title,
          body,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if(response.ok) {
        document.location.replace('/dash')
      } else {
        alert('Failed to post new blog!')
    }
  }
};
  
document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
  