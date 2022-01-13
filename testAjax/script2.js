var login;
var email;
var password;


window.onload = function(){
    
    next.addEventListener('click', gotonext);
    //document.getElementById("confirmer").addEventListener('click' , confirmer);
  

  }
  

  function gotonext(){
    login = document.getElementById("login").value;
    email = document.getElementById("email").value;
    password= document.getElementById("password").value;
    

    let req = new XMLHttpRequest();


    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 201) {
           let donnees = JSON.parse(req.response);
         
     }
    }

    let user = { 
        login: login,
        email: email,
        password: password
    }

    req.open("POST" , "http://localhost/englishapp/user/creer.php" , true);
    req.send(JSON.stringify(user));


    console.log(login);
    console.log(email);
    console.log(password);


    
  }