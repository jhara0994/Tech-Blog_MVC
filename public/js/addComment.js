const newFormHandler = async (e) => {
    e.preventDefault()

    const content = document.querySelector("#comment-content")
    const commentor = document.querySelector("#comment-btn")
    const queryString = window.location.href
    const splitQuery = queryString.split('comment/')
    post_id = splitQuery[1]

    if(content) {
        const response = await fetch(`api/comments`, {
            method: 'POST',
            body: JSON.stringify({content, commentor, post_id}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        if(!response) {
            alert('Failed to post new comment')
        } else {
            document.location.replace(`/post/${post_id}`)
        }
    }
}

document
    .querySelector('#new-comment')
    .addEventListener('submit', newFormHandler)