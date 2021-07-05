var display1 = document.getElementById('i1');
var display2 = document.getElementById('i2');
var display3 = document.getElementById('i3');
var display4 = document.getElementById('i4');



        function checkFname()   {
            var in1 = document.getElementById('in1');
            var Fname = document.getElementById('in1').value;
            var regex = /^[A-Za-z\s*]+(\s[A-Z]+[a-z]+)*$/;
            var regex2= /[^\x20-\x7E]+/;

                    if( regex.test(Fname) || Fname.length === 0 || regex2.test(Fname) ){
                        display1.style.display = 'none';
                        in1.style.borderColor = 'silver';
                    } 
                    else{
                        display1.style.display = 'block';
                        in1.style.borderColor = 'rgb(221, 52, 52)';
                    }
        }


        function checkSname()   {
            var in2 = document.getElementById('in2');
            var Sname = document.getElementById('in2').value;
            var regex = /^[A-Za-z\s*]+(\s[A-Z]+[a-z]+)*$/;
            var regex2= /[^\x20-\x7E]+/;


                   if( regex.test(Sname) || Sname.length === 0 || regex2.test(Sname) ){
                      display2.style.display = 'none';
                      in2.style.borderColor = 'silver';
                   } 
                  else{
                      display2.style.display = 'block';
                      in2.style.borderColor = 'rgb(221, 52, 52)';
                }
        }


        function checkEmailmb() {
            var in3 = document.getElementById('in3');
            var email = document.getElementById('in3').value;
            var regex1 = /^(086|096|097|098|032|033|034|035|036|037|038|039|089|090|093|070|079|077|076|078|088|091|094|083|084|085|081|082|092|056|058|099|059)([0-9]{7}|[0-9]{8})$/;
            var regex2 = /^[a-z+0-9+]+(@gmail.com|@email.com)$/;
                if ( regex1.test(email) || email.length === 0 || regex2.test(email) )   {
                    display3.style.display = 'none';
                    in3.style.borderColor = 'silver';
                }
                else{
                    display3.style.display = 'block';
                    in3.style.borderColor = 'rgb(221, 52, 52)';
                }
        }


        function checkPass()    {
            var in4 = document.getElementById('in4');
            var pass = document.getElementById('in4').value;
            if ( pass.length < 6 && pass.length != 0 )   {
                display4.style.display = 'block';
                in4.style.borderColor = 'rgb(221, 52, 52)';
            }
            else if ( pass.length > 16 )   {
                display4.style.display = 'block';
                in4.style.borderColor = 'rgb(221, 52, 52)';
            }
            else{
                display4.style.display = 'none';
                in4.style.borderColor = 'silver';
            }
        }




        var code = document.getElementById("in4");
        
        code.addEventListener("keyup", function(){checkpassword(code.value)
        
            })

            function checkpassword(password) {
            var display = document.getElementById('display-pass');
            var strength = 0;
            if (password.match(/[a-z]+/) && password.length > 5 && password.length < 17){
                strength+=1;
            }
            if (password.match(/[A-Z]+/) && password.length > 5 && password.length < 17){
                strength+=1;
            }
            if (password.match(/[0-9]+/) && password.length > 5 && password.length < 17){
                strength+=1;
            }
            if (password.match(/[$@#&!]+/) && password.length > 5 && password.length < 17){
                strength+=1;
        
                }

            switch(strength){
            case 0:
                display.innerHTML = "";
                break;
        
            case 1:
                display.innerHTML = 'Weak';
                display.style.color = 'rgb(216, 51, 51)';
                in4.style.borderColor = 'silver';
                display4.style.display = 'none';
                break;
        
            case 2:
                display.innerHTML = 'Medium';
                display.style.color = 'rgb(255, 182, 46)';
                in4.style.borderColor = 'silver';
                display4.style.display = 'none';
                break;
        
            case 3:
                display.innerHTML = 'Strong'
                display.style.color = 'rgb(0, 209, 0)';
                in4.style.borderColor = 'silver';
                display4.style.display = 'none';
                break;
        
            case 4:
                display.innerHTML = 'Very Strong';
                display.style.color = 'rgb(0, 149, 0)';
                in4.style.borderColor = 'silver';
                display4.style.display = 'none';
                break; }
        }


        function checkDate()    {
            var i = document.getElementById('i5');
            var border = document.getElementById('date');
            var datevalue = document.getElementById('date').value;  
            var p = document.getElementById('date-display');
            var d = new Date(datevalue);
            var b = new Date();

                if ( !!d.valueOf() ){

                   var year = d.getFullYear();
                   var month = d.getMonth();
                   var date = d.getDate();

                   var Yearpresent = b.getFullYear();

                   if ( year < 1990 || year > Yearpresent ){
                    p.innerHTML = 'You entered incorrectly year. Please enter again!'; 
                    p.style.color = 'rgb(221, 52, 52)';
                    border.style.borderColor = 'rgb(221, 52, 52)';
                    i.style.display = 'block';
                    }

                    if ( month < 1 || month > 12 ){
                        p.innerHTML = 'You entered incorrectly month. Please enter again!'; 
                        p.style.color = 'rgb(221, 52, 52)';
                        border.style.borderColor = 'rgb(221, 52, 52)';
                        i.style.display = 'block';
                    }

                    if ( date < 1 || date > 31 ){
                        p.innerHTML = 'You entered incorrectly date. Please enter again!'; 
                        p.style.color = 'rgb(221, 52, 52)';
                        border.style.borderColor = 'rgb(221, 52, 52)';
                        i.style.display = 'block';
                    }

                    //true

                    if ( year > 1990 && year <= Yearpresent ){
                        p.innerHTML = ''; 
                        p.style.color = 'silver';
                        i.style.display = 'none';
                        border.style.borderColor = 'silver';
                    }
    
                        if ( month >= 1 && month <= 12 && year > 1990 && year <= Yearpresent){
                            p.innerHTML = ''; 
                            p.style.color = 'silver';
                            i.style.display = 'none';
                            border.style.borderColor = 'silver';
                        }
    
                        if ( date >= 1 && date <= 31 && year > 1990 && year <= Yearpresent){
                            p.innerHTML = ''; 
                            p.style.color = 'silver';
                            i.style.display = 'none';
                            border.style.borderColor = 'silver';
                        }   

                    
    
                }
                else    {
                    // p.innerHTML = 'You entered incorrectly. Please enter again!';
                    p.innerHTML = '';
                    p.style.color = 'rgb(221, 52, 52)';
                    border.style.borderColor = 'rgb(221, 52, 52)';
                    i.style.display = 'block';
                }
                        
        }


        function Signup()   {
            //First Name
            var in1 = document.getElementById('in1');
            var Fname = document.getElementById('in1').value;
            var regex = /^[A-Za-z\s*]+(\s[A-Z]+[a-z]+)*$/;


            var regex2= /[^\x20-\x7E]+/;

                    if( regex.test(Fname) || Fname.length === 0 || regex2.test(Fname) ){
                        display1.style.display = 'none';
                        in1.style.borderColor = 'silver';
                    } 
                    else{
                        display1.style.display = 'block';
                        in1.style.borderColor = 'rgb(221, 52, 52)';
                    }
                    

                    if ( Fname.length === 0 ){
                        in1.style.borderColor = 'rgb(221, 52, 52)';
                         display1.style.display = 'block';
                    }

                //Last Name

                    var in2 = document.getElementById('in2');
                    var Sname = document.getElementById('in2').value;
                    var regex2= /[^\x20-\x7E]+/;


                    if( regex.test(Sname) || Sname.length === 0 || regex2.test(Sname) ){
                       display2.style.display = 'none';
                       in2.style.borderColor = 'silver';
                    } 
                          else{
                              display2.style.display = 'block';
                              in2.style.borderColor = 'rgb(221, 52, 52)';
                        }

                        if (Sname.length === 0 ){
                            display2.style.display = 'block';
                            in2.style.borderColor = 'rgb(221, 52, 52)';
                        }

                //Email Mobile

                var in3 = document.getElementById('in3');
                var email = document.getElementById('in3').value;
                var regex1 = /^(086|096|097|098|032|033|034|035|036|037|038|039|089|090|093|070|079|077|076|078|088|091|094|083|084|085|081|082|092|056|058|099|059)([0-9]{7}|[0-9]{8})$/;
                var regex2 = /^[a-z+0-9+]+(@gmail.com|@email.com)$/;
                    if ( regex1.test(email) || email.length === 0 || regex2.test(email) )   {
                        display3.style.display = 'none';
                        in3.style.borderColor = 'silver';
                    }
                    else{
                        display3.style.display = 'block';
                        in3.style.borderColor = 'rgb(221, 52, 52)';
                    }

                    if ( email.length === 0 ){
                        display3.style.display = 'block';
                        in3.style.borderColor = 'rgb(221, 52, 52)'; 
                    }


            //password

            var pass = document.getElementById("in4").value;

            if ( pass.length === 0 ){
                display4.style.display = 'block';
                in4.style.borderColor = 'rgb(221, 52, 52)'; 
            }

            var display = document.getElementById('display-pass');
            if ( pass.length < 6 && pass.length != 0 ){
                display.innerHTML = 'Minimum password length is 6';
                display.style.color = 'rgb(221, 52, 52)';
                in4.style.borderColor = 'rgb(221, 52, 52)'; 
                display4.style.display = 'block';
            }

            if ( pass.length > 16 ){
                display.innerHTML = 'Maximum password length is 16';
                display.style.color = 'rgb(221, 52, 52)';
                in4.style.borderColor = 'rgb(221, 52, 52)'; 
                display4.style.display = 'block';
            }

            //date

            var i = document.getElementById('i5');
            var border = document.getElementById('date');
            var datevalue = document.getElementById('date').value;  
            var p = document.getElementById('date-display');
            var d = new Date(datevalue);
            var b = new Date();

                if ( !!d.valueOf() ){

                   var year = d.getFullYear();
                   var month = d.getMonth();
                   var date = d.getDate();

                   var Yearpresent = b.getFullYear();

                   if ( year < 1990 || year > Yearpresent ){
                    p.innerHTML = 'You entered incorrectly year. Please enter again!'; 
                    p.style.color = 'rgb(221, 52, 52)';
                    border.style.borderColor = 'rgb(221, 52, 52)';
                    i.style.display = 'block';
                    }

                    if ( month < 1 || month > 12 ){
                        p.innerHTML = 'You entered incorrectly month. Please enter again!'; 
                        p.style.color = 'rgb(221, 52, 52)';
                        border.style.borderColor = 'rgb(221, 52, 52)';
                        i.style.display = 'block';
                    }

                    if ( date < 1 || date > 31 ){
                        p.innerHTML = 'You entered incorrectly date. Please enter again!'; 
                        p.style.color = 'rgb(221, 52, 52)';
                        border.style.borderColor = 'rgb(221, 52, 52)';
                        i.style.display = 'block';
                    }

                    //true

                    if ( year > 1990 && year <= Yearpresent ){
                        p.innerHTML = ''; 
                        p.style.color = 'silver';
                        i.style.display = 'none';
                        border.style.borderColor = 'silver';
                    }
    
                        if ( month >= 1 && month <= 12 && year > 1990 && year <= Yearpresent){
                            p.innerHTML = ''; 
                            p.style.color = 'silver';
                            i.style.display = 'none';
                            border.style.borderColor = 'silver';
                        }
    
                        if ( date >= 1 && date <= 31 && year > 1990 && year <= Yearpresent){
                            p.innerHTML = ''; 
                            p.style.color = 'silver';
                            i.style.display = 'none';
                            border.style.borderColor = 'silver';
                        }   

                    
    
                }
                else    {
                    // p.innerHTML = 'You entered incorrectly. Please enter again!';
                    p.innerHTML = '';
                    p.style.color = 'rgb(221, 52, 52)';
                    border.style.borderColor = 'rgb(221, 52, 52)';
                    i.style.display = 'block';
                }
        }