function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Response => Response.json())
        .then(json => doShow(json))
}



function doShow(tart) {
    const postCatch = document.getElementById('add-post');
    for (const newpost of tart) {
        const headerTitle = document.createElement('h4');
        headerTitle.classList = 'postDecoraion';
        headerTitle.innerText = `USERID - ${newpost.userId} , TITLE - ${newpost.title}, ID - ${newpost.id} `
        const bodyPara = document.createElement('p');
        bodyPara.innerText = `${newpost.body}`
        postCatch.appendChild(headerTitle);
        postCatch.appendChild(bodyPara);
    }
}



