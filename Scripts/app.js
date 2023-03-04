/**
 * Essam Fendish & Matthew Taormina
 * 100857078 & 100499550
 * Completed February 12, 2023
 */


//a function that is called when the submit button is clicked on the contactForm form. Retrieves the values of the forms and prints them to the console. 
//After 3 seconds, calls the window.setTimeout function and re-directs the user to the home page.
function showContactInfo() {
    let fullName = document.forms["contactform"]["fullName"].value;
    let contactNumber = document.forms["contactform"]["contactNumber"].value;
    let emailAddress = document.forms["contactform"]["emailAddress"].value;
    let additionalComments = document.forms["contactform"]["additionalComments"].value;
        console.log(`Name: ${ fullName } \n Contact Number: ${ contactNumber } \n Email Address: ${ emailAddress} \n Additional Comments: ${ additionalComments }`)
    event.preventDefault()    
    window.setTimeout(function(){

        window.location.href="./index.html"
    }, 3000)
}