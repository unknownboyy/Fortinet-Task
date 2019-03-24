// $(document).ready(function(){
//     $('#login').click(function(){
//         var email = $('#inputEmail').val();
//         var password = $('#inputPassword').val();
//         console.log(email,password);
//         $.post("login",{email:email,password:password},function(data,status){
//             console.log(data.status);
//             if(data.status == '1'){
//                 alert("login Sucessfully..");
//                 window.location.href='/app/home';
//             }
//             else{
//                 alert("Wrong E-mail or Password");
//             }
//         });
//     });
// });