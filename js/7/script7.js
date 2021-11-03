// step1
// document.getElementById("button").addEventListener("click",function(){
//     document.getElementById("empty").innerText += "hello";
// })

const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const cPassword = document.getElementById("cPassword");
const userError = document.getElementById("userError");
const passwordError = document.getElementById("passwordError");
const cPasswordError = document.getElementById("cPasswordError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let count = 0;
  //username
  if (username.value.length === 0) {
    userError.innerText = "الزامی";
    username.style.borderColor='red';

    errorStyle(userError);
    
  
  }else{
    count++;
    userError.innerText = "";
    username.style.borderColor='green';
  }
  // password
  if (password.value.length === 0) {
    passwordError.innerText =  "الزامی";
    password.style.borderColor = 'red';
    errorStyle(passwordError);
  } else if (password.value.length < 8) {
    passwordError.innerText = "رمز عبور باید شامل حداقل 8 کارکتر و حداقل یک حرف و یک عدد باشد";
    password.style.borderColor = 'red';
    errorStyle2(passwordError);
  }else if ((!checkAlpha(password.value)) || (!checkNumeric(password.value))) {
    passwordError.innerText = "رمز عبور باید شامل حداقل 8 کارکتر و حداقل یک حرف و یک عدد باشد";
    password.style.borderColor = 'red';
    errorStyle2(passwordError);
  }else{
    count++;
    passwordError.innerText="";
    username.style.borderColor='green';
  }
  //password confirmation
  if (cPassword.value.length === 0) {
    cPasswordError.innerText = "الزامی";
    cPassword.style.borderColor = 'red';
    errorStyle(cPasswordError);
  }else if( password.value.length > 0 && !(cPassword.value === password.value)){
    cPasswordError.innerText = "رمز های وارد شده یکسان نیستند";
    cPassword.style.borderColor = 'red';
    errorStyle3(cPasswordError);

  }else{
    count++;
    cPasswordError.innerText="";
    username.style.borderColor='green';
  }

  if(count === 3){
    alert("sign up successful");
  }
  


  function checkNumeric(str) {
    for (let i = 0; i < str.length; i++) {
      
      let count = 0;
      if (48 <= str.charCodeAt(i) && str.charCodeAt(i) <= 57) {
        return true;
      }
    }
  }
  
  function checkAlpha(str) {
    for (let i = 0; i < str.length; i++) {
      if (
        (65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90) ||
        (97 <= str.charCodeAt(i) && str.charCodeAt(i) <= 122)
      ) {
        return true;
      }
    }
  }
  function errorStyle(el){
    el.style.color= "red";
    el.style.paddingLeft = "280px";
    el.paddingTop = "0px";
    el.style.fontSize="8px";
  }
  function errorStyle2(el){
    el.style.color= "red";
    el.style.paddingLeft = "110px";
    el.paddingTop = "0px";
    el.style.fontSize="8px";

  }
  function errorStyle3(el){
    el.style.color= "red";
    el.style.paddingLeft = "210px";
    el.paddingTop = "0px";
    el.style.fontSize="8px";

  }
});
