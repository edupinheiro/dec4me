const inputBinary = document.querySelector("input[name=binary]")
const inputDecimal = document.querySelector("input[name=decimal]")
const errorSpan = document.querySelector(".error")
const reg = /[^01]/g;

const keyPressHandler = (event) => {
    
    const binary = event.target.value;

    if(binary == "") {
        inputDecimal.value = "";
    }

    if(isBinary(binary)) {
        convertBinaryToDecimal(binary);
        inputBinary.classList.remove("error");
        errorSpan.classList.add("hide");
    } else {
        inputBinary.classList.add("error");
        errorSpan.classList.remove("hide");
        inputDecimal.value = "";
    }
}

const isBinary = numbers => {
    for(number of numbers) {
        if(reg.test(numbers)){
            return false;
        }
    }
    return true;
}

const convertBinaryToDecimal = binary => {
    let intBinary = parseInt(binary);
    let count = 0;
    let numberToConvert = 0;
    let decimal = 0;

    while (count < binary.length) {

        numberToConvert = intBinary % 10;
        decimal += numberToConvert * Math.pow(2, count);    
        intBinary = parseInt(intBinary / 10);
 
        count++;
    }
    inputDecimal.value = decimal;
}

inputBinary.addEventListener("input", keyPressHandler);
