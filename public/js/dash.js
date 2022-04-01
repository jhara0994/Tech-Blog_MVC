const delBtnHandler = async (event) => {
    console.log("Delete clicked")
    if(event.target.hasAttributes('data-id')) {
        const id = event.target.getAttribute('data-id')
        const response = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE'
        })

        if(!response){
            alert('Failed to delete')
        } else {
            document.location.replace('/dash')
        }
    }
}

document
    .querySelector('#blog-card')
    .addEventListener('click', delBtnHandler)