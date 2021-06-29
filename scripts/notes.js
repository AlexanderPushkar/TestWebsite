let myVariable;
var myVariable2;

//us let, better then var - declares variable
//semi colon end each statement, should be at end of each line

myVariable = 'test1';

//sets variables value

let myVariable = 'test1';

//can call the variables value by just putting in the name, can be changed 

let myVariable = 'string'; //just text, called string, uses '' to show

let myVariable = 10;       //number, just put it

let myVariable = true;     //boolean, done need quotes for true of false

let myVariable =                 //array, bascially a list in a single reference
[1,'Object2', 'Object3', 4];  

myVariable[0] = myVariable[1]    //calling each ojbect in the list

let myVariable = document.querySelector('h1');  //Literally anything

/*
OPERATORS

+, -, *, /
A  S  M  D
d  u  u  i
d  b  l  v

=, assignes a value

===, compares two values and returns true of flase

    [

        (myVariable ===3)

    ]



!, !==, Opposite of above

    [

        !(myVariable === 3);

            OR

        myVariable !== 3;


    ]

*/

let newVariable = true;

document.querySelector('html').onclick = function() {
    if (newVariable === true) {    // if (...) is the format, then {} with the action
        alert('Dont Click the site')  
    } else {                      // close  previous statement then being else or elseif
        alert('You Shouldnt See This')
    }
}



//something followed by () is often a function, like alert()

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

multiply(4, 7); //Calls the function wtih both parameters

// This how a function is defined
//varialbes defined inside functions are local, whats in the (), not nessicary





