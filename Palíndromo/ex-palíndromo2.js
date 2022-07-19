// Solução 2

function verificaPalíndromo2(string) {
    if(!string) return "Digite uma string";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            console.log(`A palavra ${string} não é um palíndromo.`);
        }
    }

    console.log(`A palavra ${string} é um palíndromo.`)
}

verificaPalíndromo2("ovo");