var firstNameError=document.getElementById('firstName');
var lastNameError=document.getElementById('last-name');
var emailError=document.getElementById('Email-ID');
var govtIdError=document.getElementById('government-ID');
var dateArrivalError=document.getElementById('arrival');
var dateDepartureError=document.getElementById('departure');
var countryError=document.getElementById('C');
var numberOfPersonError=document.getElementById('TM');
var textError=document.getElementById('message');
var paymentError=document.getElementById('Pay');
var submitError=document.getElementById('submit-error');
// first name
function validatefName(){  
    var fN = document.getElementById('Fname').value;
    if(!fN.length > 0){
        firstNameError.innerHTML = '* First Name Required';
        return false;
    }
    firstNameError.innerHTML='✔️';
    return true;
}
//last name
function validatelName(){ 
    var lN = document.getElementById('Lname').value;
    if(!lN.length > 0){
        lastNameError.innerHTML = '* Last Name Required';
        return false;
    }
    lastNameError.innerHTML='✔️';
    return true;
}
//email id
function validateEmail(){ 
    var eID = document.getElementById('e-mail').value;
    if(!eID.length > 0){
        emailError.innerHTML = '* email Required';
        return false;
    }
    emailError.innerHTML='✔️';
    return true;
}
//government id
function validateGovtID(){  
    var gID = document.getElementById('govt-ID').value;
    if(!gID.length > 0){
        govtIdError.innerHTML = '* Govt ID Required';
        return false;
    }
    govtIdError.innerHTML='✔️';
    return true;   
}
//date of arrival
function validateArrival(){  
    var aD = document.getElementById('arrival-date').value;
    if(aD == ''){
        dateArrivalError.innerHTML = '***';
        return false;
    }
    dateArrivalError.innerHTML='✔️';
    return true;
}
//date of departure
function validateDeparture(){  
    var dD = document.getElementById('departure-date').value;
    if(dD == ''){
        dateDepartureError.innerHTML = '***';
        return false;
    }
    dateDepartureError.innerHTML='✔️';
    return true;
}
//country name
function validateCountry(){  
    var cN = document.getElementById('country').value;
    if(!cN.length > 0){
        countryError.innerHTML = '***';
        return false;
    }
    countryError.innerHTML='✔️';
    return true;     
}
//no of persons
function validateTotal(){  
    var tN = document.getElementById('total-person').value;
    if(tN=='0' || tN==''){
        numberOfPersonError.innerHTML = '***';
        return false;
    }
    numberOfPersonError.innerHTML='✔️';
    return true;  
}
//text-message
function validateMessage(){ 
    var message=document.getElementById('text-area').value;
    if(message==''){
        textError.innerHTML = '*text required';
        return false;
    }
    textError.innerHTML='✔️';
    return true;
}
//payment status
function validatePay(){
    var payT = document.getElementsByName("payment");
    paymentError.innerHTML='✔️';
    return true;
}
//function for form submission: submit
function myFunction(){
    if( !validatefName() || !validatelName() || !validateEmail() || !validateGovtID() || !validateArrival() || !validateDeparture() || !validateCountry() || !validateTotal() || !validateMessage() || !validatePay()){
        alert("One or More fields are left blank. All fields are required. ");
        return false;
    }
    alert(" Submitting your form");
}
