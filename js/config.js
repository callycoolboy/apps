
function codeAddress() {
            
  $( "div.page" ).slideUp( 100 ).delay( 10000 ).fadeIn( 2000 );
 
var duration = 3000;
    setTimeout(function() {
$("#carl").hide();
$("#carl2").show();
$("#carl2").hide( 9000 );

}, duration);  
   
	 }
        window.onload = codeAddress;
        


function validateForm() {
    var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var pass = document.getElementById("pass").value;
var phone = document.getElementById("phone").value;
var address = document.getElementById("address").value;
var dataString = '&name=' + name + '&email=' + email + '&pass=' + pass + '&phone=' + phone +  '&address=' + address;
// Returns successful data submission message when the entered information is stored in database.
    var a = document.forms["form1"]["name"].value;
    var b = document.forms["form1"]["email"].value;
    var c = document.forms["form1"]["pass"].value;
    var d = document.forms["form1"]["phone"].value;
    var e = document.forms["form1"]["address"].value;
    if (a == "") {
		document.forms["form1"]["name"].focus();
		document.getElementById('name').style.borderColor = "red";
		
        return false;
    }
	else if (b == "") {
		document.forms["form1"]["email"].focus();
		document.getElementById('email').style.borderColor = "red";
		return false;
    }
	else if (c.length < 4) {
		document.forms["form1"]["pass"].focus();
		document.getElementById('pass').style.borderColor = "red";
        return false;
    }
	else if (d.length < 11) {
		document.forms["form1"]["phone"].focus();
		document.getElementById('phone').style.borderColor = "red";
        return false;
    }
	else if (e == "") {
        document.forms["form1"]["address"].focus();
		document.getElementById('address').style.borderColor = "red";
        return false;
    }
	else {
		
var networkState = navigator.network.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';
if (states[networkState] == 'No network connection'){
	
    alert('Connection Error!! Ensure that your Mobile Data is turned on and try again.');
}
else 	{
	
$("#loading").show();
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "https://callysconcept.igg.biz/app/reg.php",
data: dataString,
cache: false,
success: function(data){
if(data=="success")
{
$("#loading").hide();
alert("Thank you for Registering with us! you can login now");
window.location = "#page4";
$( '#form1' ).each(function(){
    this.reset();
});
}
else if(data=="exist")
{
$("#loading").hide();
alert("Hey! That phone Number is associated with an account! Try again with a different Number");
}
else if(data=="failed")
{
$("#loading").hide();
alert("Something Went wrong");
}
}
});
}
}
return false;
}

function validateForm2() {
var phone = document.getElementById("phone1").value;
var pass = document.getElementById("pass1").value;
var dataString = '&phone=' + phone + '&pass=' + pass;
// Returns successful data submission message when the entered information is stored in database.
    
    var f = document.forms["form2"]["phone1"].value;
    var g = document.forms["form2"]["pass1"].value;
    if (f.length < 11) {
		document.forms["form2"]["phone1"].focus();
		document.getElementById('phone1').style.borderColor = "red";
        return false;
    }
	else if (g.length < 4) {
		document.forms["form2"]["pass1"].focus();
		document.getElementById('pass1').style.borderColor = "red";
        return false;
    }
	else {
		
var networkState = navigator.network.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';
if (states[networkState] == 'No network connection'){
	
    alert('Connection Error!! Ensure that your Mobile Data is turned on and try again.');
}
else 	{
	
$("#loading2").show();
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "https://callysconcept.igg.biz/app/login.php",
data: dataString,
cache: false,
success: function(data){
if(data!=="failed")
{
$("#loading2").hide();
$('.usern').html(data);
window.location = "#pageb";
$( '#form2' ).each(function(){
    this.reset();
});
}
else if(data=="failed")
{
$("#loading2").hide();
alert("Invalid Phone Number and Password Combination. Please Try again!!!");
document.forms["form2"]["pass1"].focus();
document.getElementById('pass1').style.borderColor = "red";
document.getElementById("pass1").value = "";
}

}
});
}
	}
return false;
}

function validateForm3() {
var phone = document.getElementById("phone2").value;
var dataString = '&phone=' + phone;
// Returns successful data submission message when the entered information is stored in database.
    
    var h = document.forms["form3"]["phone2"].value;

    if (h.length < 11) {
		document.forms["form3"]["phone2"].focus();
		document.getElementById('phone2').style.borderColor = "red";
        return false;
    }
	else {
var networkState = navigator.network.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';
if (states[networkState] == 'No network connection'){
	
    alert('Connection Error!! Ensure that your Mobile Data is turned on and try again.');
}
else 	{
		
		
		
		
		
		
		
$("#loading3").show();
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "https://callysconcept.igg.biz/app/reset.php",
data: dataString,
cache: false,
success: function(data){
if(data!=="failed")
{
$("#loading3").hide();
alert(data);
window.location = "#page4";
$( '#form3' ).each(function(){
    this.reset();
});

}
else if(data=="failed")
{
$("#loading3").hide();
alert("Invalid Phone Number. Please Try again!!!");
}
} 

});
}
}
return false;
}


function logout() {
$('#usern').value = "";
alert("You Have sucessfully Logged out!!!");
window.location = "#page";
return true;
}

function signin() {
var networkState = navigator.network.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';
if (states[networkState] == 'No network connection'){
	
    alert('You are currentlly OFFLINE!! Ensure that your Network is up in order to access this page.');
}
else 	{
    alert('Current Network Status: ' + states[networkState] + ' Click OK to Continue');
window.location = "#page4";
}
return true;
}

function closeMeNow() {
    navigator.app.exitApp();
}
