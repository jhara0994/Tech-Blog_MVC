const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const nameEl = document.querySelector('#name-signup');
    const emailEl = document.querySelector('#email-signup')
    const passwordEl = document.querySelector('#password-signup');
  
    
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          name: nameEl.value,
          email: emailEl.value,
          password: passwordEl.value
      }),
        headers: { 'Content-Type': 'application/json' },
    });
  
  
    if (response.ok) {
      document.location.replace('/dash');
    } else {
      alert('Failed to sign up');
    }
  };

  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);