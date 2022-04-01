const delBtnHandler = async (event) => {
    console.log("Delete clicked")
    if(event.target.hasAttributes('data-id')) {
        const id = event.target.getAttribute('data-id')
        const response = await festch(`/api/blog/${id}`, {
            method: 'DELETE'
        })

        document.location.replace('/dash')
    }
}

document
    .querySelector('#blog-card')
    .addEventListener('click', delBtnHandler)