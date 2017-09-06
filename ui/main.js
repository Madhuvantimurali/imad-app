//registration for user
var register = document.getElementById('reg_page');
register.onclick=function()
{
  var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
               console.log('at registration');
               alert('Welcome to Registration');
            }
            else if(request.status === 500){
                alert('Something went wrong with the server');
        }    
     }
    }; 

    var username= document.getElementById('username').value;
    var password= document.getElementById('password').value;
    request.open('POST','http://madhuvantimuralik.imad.hasura-app.io/create-user',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username,password: password}));
};
// submit username and password
var submit= document.getElementById('submit_btn');
submit.onclick = function()
{
  
  var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
               console.log('user logged in successfully');
               alert('Login Successful');
               /*var logged= document.getElementById('submit_btn');
               logged.innerHTML=" Please choose articles from list below";*/
            }
            else if(request.status === 403){
                alert('Username/password is incorrect');
            }
            else if(request.status === 500){
                alert('Something went wrong with the server');
        }    
     }
    };
    var username= document.getElementById('username').value;
    var password= document.getElementById('password').value;
    request.open('POST','http://madhuvantimuralik.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username,password: password}));
};        
  
 //logout
 var logout= document.getElementById('logout');
logout.onclick = function()
{
  
  var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
               alert('Are you sure?');
               console.log('User logged out');
            }
            else if(request.status === 403){
                alert('Username/password is incorrect');
            }
            else if(request.status === 500){
                alert('Something went wrong with the server');
        }    
     }
    };
    /*var username= document.getElementById('username').value;
    var password= document.getElementById('password').value;*/
    request.open('GET','http://madhuvantimuralik.imad.hasura-app.io/logout',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username,password: password}));
};        