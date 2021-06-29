//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

//
//
//    querySelector () - function, used to select the heading as a reference, stored 
//                       in myHeading variable
//
//    myHeading.textContent - sets the value of the variables textContent property,
//                            which represents the content of the heading, to Hello World
//
//
//
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src'); //src is the location of hte image
    if(mySrc === 'images/red.png') {
        myImage.setAttribute('src','images/black.png');
    } else {
        myImage.setAttribute('src','images/red.png');
    }

}   




let newVariable = true;


let myLink = document.querySelector('a');
myLink.onclick = function()  {
    if (newVariable === false) {    // if (...) is the format, then {} with the action
        alert('The Variable is Set to True')  
    } else {                      // close  previous statement then being else or elseif
        alert('Why Are You Clicking Here?')
    }
};



let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Welcome ' + myName;
    }
}



//When function called, prompt appears to enter name
//localStoarge is an API, stores data using .setItem
//the data item 'name' is set to myName
//myHeading is the heading1, sets text to 'Welcome' and the selected name
//localStorage saves data in the actuall browser

if(!localStorage.getItem('name')) { //NOT checks if 'name' exists
    setUserName(); //If not setUserName function runs
} else {
    let storedName = localStorage.getItem('name');//getItem retrives name from storage
    myHeading.textContent = 'Welcome ' + storedName;
} 

myButton.onclick = function() {
    setUserName();
}


