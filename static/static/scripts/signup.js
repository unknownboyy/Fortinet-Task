$(document).ready(function(){
    $('#signup').click(function(){
        var email = $('#email').val();
        var password = $('#password').val(); 
        var phone = $('#phone').val();
        var name = $('#name').val();
        console.log(email,password); 
        $.post("signup",{email:email,password:password,phone:phone,name:name},function(data,status){
            console.log("yaha aya");
            console.log(data); 
            if(data.status == '1'){
                alert("Successfully Signed Up !!\nRedirecting You to Login Page...");
                setTimeout(function(){
                    window.location.href = '/app/home';
                },1500);
            }
            else{
                alert("Error While Signup");
            }
        });
    });
});