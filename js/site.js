// Get the string from the page
// Controller Function
function getValue() {

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}

// Reverse the string
// Logic Function
function reverseString(userString) {

    let revString = [];

    // Reverse the string using a for loop
    for (let i = userString.length - 1; i >= 0; i--) {
        
        revString += userString[i];
    }

    return revString;

}


// Display the reversed string to the page
// View Function
function displayString(revString) {

    // Write the message to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

    // Turn on the alert box
    document.getElementById("alert").classList.remove("invisible");

}

