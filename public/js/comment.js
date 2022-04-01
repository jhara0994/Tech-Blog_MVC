const blog_id = document.querySelector('#blog_id').innerHTML

const newFormHandler = async (event) => {
  document.location.replace(`/comments/${blog_id}`)
}


const delBtnHandler = async (event) => {
    event.preventDefault();
    console.log('Btn clicked')
  
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id')
      console.log(id)

      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });

      if(!response) {
        alert('Failed to Delete comment')
      } else {
      document.location.replace(`blogs/${blog_id}`);
    }
  }
};
  
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', newFormHandler);

  document
    .querySelector('.show-comments')
    .addEventListener('click', delBtnHandler)