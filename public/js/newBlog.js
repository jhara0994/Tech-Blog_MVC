const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;
  
    await fetch(`/api/post`, {
      method: 'POST',
      description: JSON.stringify({
        title,
        body,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/dash');
  };
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);
  