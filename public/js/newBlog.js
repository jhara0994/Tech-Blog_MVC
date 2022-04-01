const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value;
    const body = document.querySelector('#post-body').value;
  
    await fetch(`/api/blog`, {
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
  