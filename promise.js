// snack 1

function getPostTitle(id){
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => response.json())
        .then(data => resolve(data.title))
        .catch(reject)
    });
}

getPostTitle(3)
.then(title => console.log(title))
.catch(error => console.error(error))