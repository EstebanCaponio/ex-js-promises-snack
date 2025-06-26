// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20 % dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado() {
    let count = 3;

    return new Promise((resolve, reject) => {

        const countdown = setInterval(() => {
            console.log(count);
            count--;
        }, 1000);

        setTimeout(() => {

            clearInterval(countdown);

            const probabilita = Math.random();

            if (probabilita > 0.2) {

                const dado = Math.floor(Math.random() * 6) + 1;
                resolve(dado);
            } else {
                reject('il dado si è incastrato');
            }
        }, 3000);
    })

};

lanciaDado()
    .then(dado => console.log(`Il dado ha lanciato: ${dado}`))
    .catch(err => console.log(err));