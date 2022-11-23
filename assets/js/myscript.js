/*    //Username validation started
    const username = document.getElementById('username').value;

    console.log('>>>>>', username);

    if(username.length < 10){
        document.getElementById("username").style.borderColor = "red";
        document.getElementById("usernameErr").style.display = "block";
    }
    if(username.length >= 10){
        document.getElementById("username").style.borderColor = "green";
        document.getElementById("usernameErr").style.display = "none";
    }
    //Username validation ended
    //Email validation started
    const email = document.getElementById('inputEmail').value;
    let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    console.log('sdfsdfsd',email)
    if(email){
        if(emailPattern.test(email)){
            document.getElementById("inputEmail").style.borderColor = "green";
            document.getElementById("emailErr").style.display = "none";
        } else {
            document.getElementById("inputEmail").style.borderColor = "red";
            document.getElementById("emailErr").style.display = "block";
        }
    }
    //Email validation ended
}
*/
function submitValidation() {
    //Username validation started
    let check = userCheck =mfCheck= dobCheck = emailCheck = mobileCheck = countryCheck = false;
    const username = document.getElementById('username').value;
    console.log(username,'//////', userCheck);
    
    if(username.length =="" || username.length <=3){
        document.getElementById("username").style.borderColor = "red";
        document.getElementById("usernameErr").style.display = "block";
        userCheck = false
    }
    if(username.length >= 3){
        document.getElementById("username").style.borderColor = "green";
        document.getElementById("usernameErr").style.display = "none";
        userCheck = true
    }
    //Username validation ended
    //dob validation
      var date = document.getElementById("dateOfBirth").value;
   // let date = /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/

    if(date == null || date== '') 
        {document.getElementById("dateOfBirth").style.borderColor = "red";
        document.getElementById("dateOfBirthrErr").style.display = "block";
        dobCheck = false
    }
    else { document.getElementById("dateOfBirth").style.borderColor = "green";
        document.getElementById("dateOfBirthrErr").style.display = "none";
        dobCheck = true
    }
    //dob validation
    //Email validation started
    const email = document.getElementById('inputEmail').value;
    let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    console.log('sdfsdfsd',email)
    if(emailPattern.test(email)){
        document.getElementById("inputEmail").style.borderColor = "green";
        document.getElementById("emailErr").style.display = "none";
        emailCheck = true
    } else {
        document.getElementById("inputEmail").style.borderColor = "red";
        document.getElementById("emailErr").style.display = "block";
        emailCheck = false
    }
// email validation end
// phone number validation start
   const pnumber = document.getElementById('inputPhonenumber').value;
   let pnumberPattern =/^[6-9]\d{9}$/ 
   console.log('jfbbv',pnumber)
   if(pnumberPattern.test(pnumber)){
    document.getElementById("inputPhonenumber").style.borderColor = "green";
        document.getElementById("phonenumberErr").style.display = "none";
        mobileCheck = true
   }
   else {
        document.getElementById("inputPhonenumber").style.borderColor = "red";
        document.getElementById("phonenumberErr").style.display = "block";
        mobileCheck = false
    }
// end phone
//start country

     const country = document.getElementById('inputCountry').value;

   console.log('jfbbv', country)
   if(country.length  == 1){
    document.getElementById("inputCountry").style.borderColor = "green";
        document.getElementById("countryErr").style.display = "none";
        countryCheck = true
   }
   else {
        document.getElementById("inputCountry").style.borderColor = "red";
        document.getElementById("countryErr").style.display = "block";
        countryCheck = false
    }  

//end country
//gender start   
    const male=document.getElementById("male");  
    const female=document.getElementById("female");  
   if(male.checked == true || female.checked == true )
   {  
       document.getElementById("genderErr").style.display="none";
       mfCheck = true       
   }
  if(male.checked == false && female.checked == false )
   { 
       document.getElementById("genderErr").style.display="block";
        mfCheck = false 
   }
// gender end
//checkbox start
   const checkbox = document.getElementById("checkbox") 
   if(checkbox.checked == false){ 
    console.log('/checkbox////',checkbox.checked)
    document.getElementById("checkbox").style.borderColor = "red";
        document.getElementById("inputAgreeErr").style.display = "block";
        check = false
    }
    if(checkbox.checked == true ){ 
    console.log('///checkbox//',checkbox.checked)
    document.getElementById("checkbox").style.borderColor = "green";
        document.getElementById("inputAgreeErr").style.display = "none";
         check = true
    }
    //checkbox end 
    if(userCheck && mfCheck && emailCheck && dobCheck &&mobileCheck&&countryCheck && check){
        document.getElementById("popupMsg").style.display = "block";
        document.getElementById('username').value = ""
        document.getElementById('dateOfBirth').value = ""
        document.getElementById('inputPhonenumber').value = ""
        document.getElementById('inputEmail').value = ""
        document.getElementById('inputCountry').value = ""
        document.getElementById('inputCountry').value = ""
        document.getElementById("checkbox").checked = false;
        document.getElementById("male").checked = false
        document.getElementById("female").checked = false
    }
    }
