// JavaScript File
var button = document.getElementById('submitButton');
    //This corresponds to the "Calculate" button on the web page. The viewer clicks on it to solve the problem.
    
var input1 = document.getElementById('input1');
    //This is for the first box where the viewer types in the first number of their problem.
    
var input2 = document.getElementById('input2');
    //This is for the second box where the viewer types in the second number of their problem.
    
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);

function doMath() {
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        //If the viewer selects the plus sign, the calculator adds the first input to the second input.
    }
    else if(dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        //If the viewer selects the minus sign, the calculator subtracts the second input from the first input.
    }
    else if(dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        // If the viewer selects the "x", the calculator multiplies the first and second input together.
    }
    else if(dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        //If the viewer selects the slash mark, the calculator divides the first input by the second input.
    }
    else if(dropdown.value == "%"){
        answer = parseInt(input1.value) % parseInt(input2.value);
        //If the viewer selects the percent sign, the calculator finds the remainder of the two inputs after being divided.
    }
    else if(dropdown.value == "^"){
        answer =Math.pow(input1.value, input2.value)
        //If the viewer selects the caret symbol, the calculator raises the first input to the value of the second input.
    }
    display.innerHTML = answer;
    //This displays the answer of whatever problem the viewer would like to solve.
}