
let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
let inputOriginal = document.getElementById('input-original');
let cifrador = document.getElementById('cifrador');
let resultado = document.getElementById('resultado');
let rango = document.getElementById('rango');


let shiftMessage = () => {
    let wordArray = [...inputOriginal.value.toUpperCase()];
    printChar(0, wordArray);
}

let printChar = (currentLetterIndex, wordArray) => {
    if(wordArray.length === currentLetterIndex) return;
    inputOriginal.value = inputOriginal.value.substring(1)
    let spanChar = document.createElement("span");
    resultado.appendChild(spanChar);
    animateChar(spanChar)
        .then ( () => {
            let charSinCodificar = wordArray[currentLetterIndex];
            spanChar.innerHTML = alfabeto.includes(charSinCodificar) ?
                alfabeto[(alfabeto.indexOf(charSinCodificar) + parseInt(rango.value)) % alfabeto.length] :
                charSinCodificar
            printChar(currentLetterIndex + 1, wordArray);
        });
}

let animateChar = spanChar => {
    let cambiosDeLetra = 0;
    return new Promise(resolve => {
        let intervalo = setInterval(() => {
            spanChar.innerHTML = alfabeto[Math.floor(Math.random() * alfabeto.length)];
            cambiosDeLetra++;
            if(cambiosDeLetra === 3) {
                clearInterval(intervalo);
                resolve();
            }

        }, 50)
    });
}

let submit = e => {
    e.preventDefault();
    resultado.innerHTML = ''; 
    shiftMessage();
}



cifrador.onsubmit = submit;