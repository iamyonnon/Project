

        function checkUser()    {
            var user = document.getElementById('user').value;
            var display = document.getElementById('user');
            var i = document.getElementById('i-user');
            var regex = /^([A-Z]*[a-z]*[0-9]*[!@#%&*()_+-]*){6,18}$/;
            
            if ( regex.test(user) ){
                display.style.borderBottomColor = 'rgb(7, 199, 7)';
                i.style.color = 'rgb(7, 199, 7)';
            }

            else {
                display.style.borderBottomColor = 'rgb(231, 33, 33)';
                i.style.color = 'rgb(231, 33, 33)';
            }

            if ( user.length < 6 && user.length != 0 ){
                display.style.borderBottomColor = 'rgb(231, 33, 33)';
                i.style.color = 'rgb(231, 33, 33)';
            }

            if ( user.length === 0 ){
                display.style.borderBottomColor = 'silver';
                i.style.color = '#111';
            }
            
            if ( user.length > 16 ){
                display.style.borderBottomColor = 'rgb(231, 33, 33)';
                i.style.color = 'rgb(231, 33, 33)';
            }
        }

        var pass = document.getElementById('pass');

        pass.addEventListener('keyup', function(){
            checkpassword(pass.value);
        })
        

            function checkpassword(data) {
                var i = document.getElementById('i-pass');
                var display = document.getElementById('pass');
                var strength = 0;
                if ( data.match(/[A-Z]+/) )  {
                    strength+=1;
                }

                if ( data.match(/[a-z]+/) ) {
                    strength+=1;
                }

                if ( data.match(/[0-9]+/)) {
                    strength+=1;
                }

                if ( data.match(/[!@#%&]+/)){
                    strength+=1;
                }

                if (data.length === 0 ){
                    display.style.borderBottomColor = 'silver';
                    i.style.color = '#111';
                }

                if ( data.length < 6 && data.length != 0 ){
                    display.style.borderBottomColor = 'rgb(231, 33, 33)';
                    i.style.color = 'rgb(231, 33, 33)';
                }

                if ( data.length > 16 ){
                    display.style.borderBottomColor = 'rgb(231, 33, 33)';
                    i.style.color = 'rgb(231, 33, 33)';
                }


        switch(strength){
            case 0: 
            display.style.borderBottomColor = 'silver';
            // i.style.color = 'white';
            break;

            case 1:
            display.style.borderBottomColor = 'rgb(231, 33, 33)';
            i.style.color = 'rgb(231, 33, 33)';
            break;

            case 2:
            display.style.borderBottomColor = 'orange';
            i.style.color = 'orange';
            break;
            
            case 3:
            display.style.borderBottomColor = 'rgba(255, 115, 0, 0.911)';
            i.style.color = 'rgba(255, 115, 0, 0.911)';
            break;   

            case 4:
            display.style.borderBottomColor = 'rgb(7, 199, 7)';
            i.style.color = 'rgb(7, 199, 7)';
            break;    
        }
                
            }
            


            function Login()    {
                var user = document.getElementById('user').value;
                var display1 = document.getElementById('user');
                var i1 = document.getElementById('i-user');
                var regex = /^([A-Z]*[a-z]*[0-9]*[!@#%&*()_+-]*){6,18}$/;
                
                if ( regex.test(user) ){
                    display1.style.borderBottomColor = 'rgb(7, 199, 7)';
                    i1.style.color = 'rgb(7, 199, 7)';
                }
    
                else {
                    display1.style.borderBottomColor = 'rgb(231, 33, 33)';
                    i1.style.color = 'rgb(231, 33, 33)';
                }
    
                if ( user.length < 6 && user.length != 0 ){
                    display1.style.borderBottomColor = 'rgb(231, 33, 33)';
                    i1.style.color = 'rgb(231, 33, 33)';
                }
    
                if ( user.length === 0 ){
                    display1.style.borderBottomColor = 'rgb(231, 33, 33)';
                    i1.style.color = 'rgb(231, 33, 33)';
                }
                
                if ( user.length > 16 ){
                    display1.style.borderBottomColor = 'rgb(231, 33, 33)';
                    i1.style.color = 'rgb(231, 33, 33)';
                }




                var data = document.getElementById('pass').value;
                var i2 = document.getElementById('i-pass');
                var display2 = document.getElementById('pass');
                if (data.length === 0 ){
                    display2.style.borderBottomColor = 'rgb(231, 33, 33)';
                    i2.style.color = 'rgb(231, 33, 33)';
                }

                if ( data.length < 6 && data.length != 0 ){
                    display2.style.borderBottomColor = 'rgb(231, 33, 33)';
                    i2.style.color = 'rgb(231, 33, 33)';
                }

                if ( data.length > 16 ){
                    display2.style.borderBottomColor = 'rgb(231, 33, 33)';
                    i2.style.color = 'rgb(231, 33, 33)';
                }

                
            }