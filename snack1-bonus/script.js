// Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.

function getPost(id) {

    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                fetch(`https://dummyjson.com/users/${data.userId}`)
                    .then(intResp => intResp.json())
                    .then(user => {
                        const result = {
                            ...data,
                            user
                        }
                        resolve(result)
                    })
                    .catch(reject);

            })
            .catch(reject);
    });
};

const test = getPost(3);

console.log(test);