// Script for Calculator



// Getting Values
function action(value) {
    let a = value.innerText;
    set(a);
}



// Setting Values
var prev_val;
function set(value) {
    // Selecting DOM
    const display = document.getElementById("display");

    // let prev_val = value;
    let new_val = value;


    // Setting Values
    // Array of Functions
    const funcs = ["+", "-", "*", "/", "%", "√", "^", "π"];

    // Check if there is function key pressed or not
    if (funcs.includes(new_val, 0)) {
        if (funcs.includes(prev_val, 0)) {
            let prev_display = display.innerText;
            let new_display = prev_display.slice(0, -1) + new_val;
            display.innerText = new_display;
        } else {
            display.innerText += new_val;
        }
    } else if (new_val == "C") {
        display.innerText = "";
    } else if (new_val == "Del") {
        let prev_display = display.innerText;
        let new_display = prev_display.slice(0, -1);
        display.innerText = new_display;
    } else if (new_val == "AC") {
        display.innerText = "";
    } else if (new_val == "=") {
        calc();
    } else {
        display.innerText += new_val;
    }

    prev_val = new_val;
}



// Calculation
function calc() {

    const funcs = ["+", "-", "*", "/", "%", "√", "^", "π"];
    const initial_out = ["*", "/", "%", "√", "^", "π"];


    // Getting everything on Screen
    let all_values = display.innerText;
    let first_char = all_values.charAt(0)
    if (initial_out.includes(first_char, 0)) {
        all_values = all_values.slice(1);
        // console.log(all_values);
        let sum = eval(all_values);
        display.innerText = sum;
    } else {
        let sum = eval(all_values);
        display.innerText = sum;
    }



}