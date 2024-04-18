function message(value) {
    if (value === "yes") {
    alert("Thank you! Your response was submitted.");
    } else if (value === "no") {
        alert("Thank you! Your response was submitted.");
        }
    }
 
// Javascript code for Menu page//
document.addEventListener("DOMContentLoaded", function() {
    const toggles = document.querySelectorAll('.toggle');
 
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const info = this.parentNode.querySelector('.info');
            if (info.style.display === 'block') {
                info.style.display = 'none';
            } else {
                info.style.display = 'block';
            }
        });
    });
});
//Code for Dine In button//
function popUp(event) {
    event.preventDefault();
    alert("Thank you for choosing our Dine In option! \n\nOur food court address is 14000 University Blvd, Sugar Land TX, 77479.");
}
 
//Javascript Code for order page//
 
//Validate Phone Number//
function validateNumber(phoneNum){
    var pat = /^\d{10}$/;
    return pat.test(phoneNum);
}
 
//Validate First and Last Names//
function validateName(name){
    var pat1 = /^[a-zA-Z]+$/;
    return pat1.test(name.trim())
}
 
//Main Validation Function//
function onSubmit(){
    var phoneNum = document.getElementById("number").value;
    if(!validateNumber(phoneNum)){
        alert("Enter a valid Phone Number");
    }
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    if(fname==""){
        alert("Please enter your first name");
    }
    else{
        if(!validateName(fname)){
            alert("Name should not contain any numbers");
        }
    }
    if(lname == ""){
        alert("Please enter your last name");
    }
    else{
        if(!validateName(lname)){
            alert("Name should not contain any numbers");
        }
    }
    if(validateNumber(phoneNum)&&validateName(fname)&&validateName(lname)) {
        alert("We have recieved your order! Thank you!")
    }    
   
}
 
//choosing options to order//
function selectMenu(){
    var valueDropdown = document.getElementById("menuOption").value;
    var valueSelected1 = document.getElementById("meal_1");
    var valueSelected2 = document.getElementById("meal_2");
    var valueSelected3 = document.getElementById("meal_3");
    var valueSelected4 = document.getElementById("meal_4");
    var valueSelected5 = document.getElementById("meal_5");
    if(valueDropdown === "breakfast"){
        valueSelected1.style.display = "block";
        valueSelected2.style.display = "none";
        valueSelected3.style.display = "none";
        valueSelected4.style.display = "none";
        valueSelected5.style.display = "none";
    }
    else if(valueDropdown === "lunch"){
        valueSelected1.style.display = "none";
        valueSelected2.style.display = "block";
        valueSelected3.style.display = "none";
        valueSelected4.style.display = "none";
        valueSelected5.style.display = "none";
 
    }
    else if(valueDropdown === "dinner"){
        valueSelected1.style.display = "none";
        valueSelected2.style.display = "none";
        valueSelected3.style.display = "block";
        valueSelected4.style.display = "none";
        valueSelected5.style.display = "none";
 
    }
    else if(valueDropdown === "desserts"){
        valueSelected1.style.display = "none";
        valueSelected2.style.display = "none";
        valueSelected3.style.display = "none";
        valueSelected4.style.display = "block";
        valueSelected5.style.display = "none";
 
    }
    else if(valueDropdown === "beverages"){
        valueSelected1.style.display = "none";
        valueSelected2.style.display = "none";
        valueSelected3.style.display = "none";
        valueSelected4.style.display = "none";
        valueSelected5.style.display = "block";
 
    }
    else{
        valueSelected1.style.display = "none";
        valueSelected2.style.display = "none";
        valueSelected3.style.display = "none";
        valueSelected4.style.display = "none";
        valueSelected5.style.display = "none";
    }
}
 
function changeQuantity(event, button, increment){
    event.preventDefault();
    var row = button.parentNode.parentNode;
    var quantityElement = row.querySelector('.quantity_value');
    var quantity = parseInt(quantityElement.textContent);
    var newQuantity = quantity+increment;
    if(newQuantity>=0){
        quantityElement.textContent = newQuantity;
    }
    else{
        alert("The quantity cannot be less than 0");
    }
}
 
function updateTotal() {
    var tables = document.querySelectorAll('.menu_option');
    var subtotal = 0;
    tables.forEach(table => {
        Array.from(table.querySelectorAll('tr')).forEach(row => {
            var price = parseFloat(row.dataset.price);
            var quantity = parseInt(row.querySelector('.quantity_value').textContent, 10);
            subtotal += price * quantity;
        });
    });
 
    var taxRate = 0.0825; // Tax rate of 8.25%
    var tax = subtotal * taxRate;
    var total = subtotal + tax;
 
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('tax').textContent = tax.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
}
 
function changeQuantity(event, button, increment){
    event.preventDefault();
    var row = button.parentNode.parentNode;
    var quantityElement = row.querySelector('.quantity_value');
    var quantity = parseInt(quantityElement.textContent, 10);
    var newQuantity = quantity + increment;
 
    if (newQuantity >= 0  && newQuantity<=10) {
        quantityElement.textContent = newQuantity;
        updateTotal(); // Update total every time quantity changes
    }
   
    else if (newQuantity<0){
        alert("The quantity cannot be less than 0");}
 
    else if(newQuantity>10){
            alert("The quantity cannot be more than 10");
        }
 
    }
 
 
   
 
 
// Add the 'data-price' attribute handling to your selectMenu function
function selectMenu() {
    var valueDropdown = document.getElementById("menuOption").value;
    var menus = document.querySelectorAll('[id^="meal_"]');
    menus.forEach(menu => {
        menu.style.display = (menu.id === "meal_" + valueDropdown) ? "block" : "none";
    });
    updateTotal(); // Recalculate total when changing menu types
}