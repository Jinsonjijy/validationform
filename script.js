$(document).ready(function(){
    $("#sign-upform").validate({
        rules :{
            emailaddress :{
                required:true,
                email:true,
                
                

            }
        },
        messages :{
            emailaddress:"enter the email id bro"
       
            
        }
    })
})