var allowsubmit = false;

        $(function(){
            //on keypress 
            $('#passkey, #passkey2').on("keyup", function(){
                //get values 
                var pass = $('#passkey').val();
                var confpass = $('#passkey2').val();
               
                //check the strings
                if (pass== "" || confpass==""){
                $(".success").show();
                $('.success').text('Enter password');
                }
                else if(pass == confpass){
                    //if both are same remove the error and allow to submit
                    $(".success").show();
                    $('.success').text('Password matching');
                    $(".error").hide();
                    allowsubmit = true;
                }else{
                    //if not matching show error and not allow to submit
                    $(".error").show();
                    $('.error').text('Password not matching');
                    $(".success").hide();
                    allowsubmit = false;
                }
            });
            
            //jquery form submit
            $('#form').submit(function(){
            
                var pass = $('#passkey').val();
                var confpass = $('#passkey2').val();
 
                //just to make sure once again during submit
                //if both are true then only allow submit
                if(pass == confpass){
                    allowsubmit = true;
                }
                if(allowsubmit){
                    return true;
                }else{
                    return false;
                }
            });
        });