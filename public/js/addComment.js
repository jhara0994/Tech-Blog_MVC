const newFormHandler = async (e) => {
    e.preventDefault()

    const comment = document.querySelector("#comment-content")
    const commentor = document.querySelector("#comment-btn").getAttribute('commentor')
    const queryString = window.location.href
    const splitQuery = queryString.split('comment/')
    blog_id = splitQuery[1]

    if(comment) {
        const response = await fetch(`api/comments`, {
            method: 'POST',
            body: JSON.stringify({comment, commentor, blog_id}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        if(response.ok) {
            document.location.replace(`/blogs/${blog_id}`)
        } else {
            alert('Failed to post new comment')
        }
    }
}

document
    .querySelector('#new-comment')
    .addEventListener('submit', newFormHandler)