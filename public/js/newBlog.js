const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const description = document.querySelector('#post-body').value.trim();

    if (title && description) {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          description
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
  