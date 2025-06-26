// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

function getPostTitle(id) {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(Response => Response.json())
            .then(data => resolve(data.title))
            .catch(reject);
    });

    return promessa;
};

getPostTitle(3)
    .then(data => console.log(data))
    .catch(error => console.error(error));