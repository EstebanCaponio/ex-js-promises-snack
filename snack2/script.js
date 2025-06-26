// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20 % dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado() {
    let count = 3;

    const countdown = setInterval(() => {
        console.log(count);
        count--;
    }, 1000);

    setTimeout(() => {

        clearInterval(countdown);

        const promessa = new Promise((resolve, reject) => {

            const probabilita = Math.random();

            if (probabilita > 0.2) {
                const dado = Math.floor(Math.random() * 6) + 1;
                resolve(console.log(`Lancio del dado: ${dado}`));
            } else {
                reject('il dado si è incastrato');
            }
        })

        return promessa;
    }, 3000);

};

lanciaDado();