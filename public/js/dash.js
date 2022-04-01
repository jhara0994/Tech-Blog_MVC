const delBtnHandler = async (event) => {
    console.log("Delete clicked")
    if(event.target.hasAttributes('data-id')) {
        const id = event.target.getAttribute('data-id')
        const response = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE'
        })

        if(response.ok){
            document.location.replace('/dash')
        } else {
            alert('Failed to delete')
        }
    }
}

document
    .querySelector('#blog-card')
    .addEventListener('click', delBtnHandler)