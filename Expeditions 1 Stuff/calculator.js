// JavaScript File
//Sup bruh. This is a calculator thing. It does really simple stuff. Imma explain it. Don't worry, mang.
var button = document.getElementById('submitButton');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);

function doMath() {
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        //This adds the first input to the second input.
    }
    else if(dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        //This subtracts the second input from the first input.
    }
    else if(dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        //This multiplies the first and second input together.
    }
    else if(dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        //This divides the first input by the second input.
    }
    else if(dropdown.value == "%"){
        answer = parseInt(input1.value) % parseInt(input2.value);
        //This finds the remainder of the two inputs after being divided.
    }
    else if(dropdown.value == "^"){
        answer =Math.pow(input1.value, input2.value)
        //This raises the first input to the value of the second input.
    }
    display.innerHTML = answer;
}