/*
Carla Cleghorn 

chapter 12 case study 

8-3-21

*/ 
//create function to check validity + customize html validation 

$(document).ready(function() {


function checkValidity(){
	var name = document.getElementById("name");
	if(name.validity.valueMissing) {
		name.setCustomValidity("Please enter your name.")
	}
}
//applied jquery code to handle validation and event handling in place of js

function validateForm(evt){
	/*if (event.preventDefault) {
		event.preventDefault();
    } else {
    	event.returnValue = false; 
   	}*/
	//prevent form submission while empty 
	event.preventDefault(); 

	//reset value for validation
	var formIsValid = true;

	//check value of input variables to see if blank and display error if empty
	var name = document.getElementById("name");
	if (name.value === ""){

		//jquery statement to print error message 
		$("#nameError").html("Please enter your name.");
		//document.getElementById("nameError").innerHTML = "Please enter your name.";
		
		//tells script form is invalid 
		formIsValid = false;
	}

	var email = document.getElementById("email");
	if (email.value === ""){

		//jquery statement to print error message 
		$("#emailError").html("Please enter your email.");
		//document.getElementById("emailError").innerHTML = "Please enter your email.";

		//tells script form is invalid 
		formIsValid = false;
	}

	var plant = document.getElementById("plants");
	if (plant.value === "") {

		//jquery statement to print error message 
		$("#plantError").html("Please select a plant");
		//document.getElementById("plantError").innerHTML = "Please select a plant.";
		
		//tells script form is invalid 
		formIsValid = false;
	}


	var message = document.getElementById("message");
	if (message.value === ""){
		//jquery to replace message error 
		$("#messageError").html("Please enter a message.");
		//document.getElementById("messageError").innerHTML = "Please enter a message.";
		
		//tells script form is invalid 
		formIsValid = false;
	}


	//create reference to form 
	/*var myForm = document.forms[0];

	if(formIsValid) {
		myForm.submit();
	}*/ 
	//jquery to replace submission event after running validity check  
	$("form").submit(); 


}
//creates event listener to run check validity when submit button clicked

//jquery to replace event listeners 
$("#submit").click(validateForm);

/*function createEventListeners(){
	var submitButton = document.getElementById("submit");
	submitButton.addEventListener("click", validateForm, false);
} */ 

//implements createEventListeners

//window.addEventListener("load",createEventListeners, false);

});