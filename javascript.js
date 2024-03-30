function validateform(){
    var name=document.myform.name.value;
    var password=document.myform.password.value;
    var confirm=document.myform.confirm.value;
   
   if (name==null || name=="")
     alert("Username can't be blank!");
   else if(password.length<8)
     alert("Password must be at least 8 characters long!"); 
   if(password.length>8)
   {
      if(password.search(/[A-Z]/) ==-1)
         alert("Password must contain at least one Upper case character!");
      else if(password.search(/\d/)==-1)
        alert("Password must contain at least one number!");
      else if(password.search(/@/)==-1)
        alert("Password must contain at least one special character!");
      else if(password!=confirm)
        alert("Confirm password should match password!");
      else
        alert("Login Successful!!");
   }
}