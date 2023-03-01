const esPalindromo = (palabra) => {
    let palabraLimpia = palabra.toLowerCase().replace( /[^A-Za-z0-9]/g, '');
    let palabraInvertida = palabraLimpia.split('').reverse().join('');
    
    if (palabraLimpia === palabraInvertida){
        return `${palabraLimpia}, sí es un palindromo`;
    }else{
        return `${palabraLimpia}, no es un palindromo`;
    }
}

console.log(esPalindromo('oso'));
console.log(esPalindromo('Canasta,.,'));
console.log(esPalindromo('anona'));
console.log(esPalindromo('Maravilla'));
console.log(esPalindromo('reconocer'));
console.log(esPalindromo(' Isaac no ronca asi'));
console.log(esPalindromo(' Anita lava la tina'));