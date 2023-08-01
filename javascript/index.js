(() =>{

const textarea = document.getElementById('inputText');
const before = document.getElementById('before');
const after = document.getElementById('after');
const textResult = document.getElementById('textResult');
const encriptar = document.getElementById('encriptar');
const desencriptar = document.getElementById('desencriptar');
const copy = document.getElementById('copy');
let  text =  "";

function encryptText(){
    let temp = "";
    let textAux = textarea.value;
    for (let i = 0; i < textAux.length; i++) {
        switch (textAux[i]) {
            case 'a':
                temp += "ai";
                break;
            case 'e':
                temp += "enter";
                break;
            case 'i':
                temp += "imes";
                break;
            case 'o':
                temp += "ober";
                break;
            case 'u':
                temp += "ufat"
                break;
            default:
                temp += textAux[i];
                break;
        }
    }

    return temp;
}

function desencryptText(){
    let temp = "";
    let textAux = textarea.value;
    let i = 0;
    while (i < textAux.length) {
        if (textAux[i] === "a" && textAux[i+1] === "i") {
            temp += "a";
            i += 2;
        } else if (textAux[i] === "e" && textAux[i+1] === "n" && textAux[i+2] === "t" && textAux[i+3] === "e" && textAux[i+4] === "r") {
            temp += "e";
            i += 5;
        } else if (textAux[i] === "i" && textAux[i+1] === "m" && textAux[i+2] === "e" && textAux[i+3] === "s") {
            temp += "i";
            i += 4;
        } else if (textAux[i] === "o" && textAux[i+1] === "b" && textAux[i+2] === "e" && textAux[i+3] === "r") {
            temp += "o";
            i += 4;
        } else if (textAux[i] === "u" && textAux[i+1] === "f" && textAux[i+2] === "a" && textAux[i+3] === "t") {
            temp += "u";
            i += 4;
        } else {
            temp += textAux[i];
            i += 1;
        }
    }
    return temp;
}

textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
});


textarea.addEventListener('input', function() {
    if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, this.maxLength);
    }
});

encriptar.addEventListener('click', function() {
    text = encryptText();
});

encriptar.addEventListener('click', function() {
        textResult.innerText = text;
});

encriptar.addEventListener('click', function(){
    before.style.display = 'none';
    after.style.display = 'flex';
});

desencriptar.addEventListener('click', function() {
    text = desencryptText();
});

desencriptar.addEventListener('click', function() {
    textResult.innerText = text;
});

desencriptar.addEventListener('click', function(){
before.style.display = 'none';
after.style.display = 'flex';
});

copy.addEventListener('click', function(){
    navigator.clipboard.writeText(textResult.innerText);
    alert("¡El texto se ha copiado al portapapeles!");
});

})();