// this script to be uesed on inspect device mode to close all tabs in mobile browser
// we will target the span with action class and innerText of close
// we will use a for loop to loop through all the elements with action class
// we will use a while loop to loop through all the elements with action clas


var actions = document.getElementsByClassName("action");
// we will use a for loop to loop through all the elements with action class
for (let i = 0; i < actions.length; i++) {
    // we will use a while loop to loop through all the elements with action class
    if(actions[i].innerText ==="close") {
        actions[i].click();
    }
    }