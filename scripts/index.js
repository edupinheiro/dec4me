const inputBinary = document.querySelector("input[name=binary]")
const inputDecimal = document.querySelector("input[name=decimal]")
const errorSpan = document.querySelector(".error")
const reg = /[^01]/g;

const keyPressHandler = (event) => {
    
    const number = event.target.value;

    if(number == "") {
        inputDecimal.value = "";
        return
    }

    if(isBinary(number)) {
        inputDecimal.value  = parseInt(number, 2);
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

inputBinary.addEventListener("input", keyPressHandler);
