window.onload = function(){
    var quit =document.getElementById("quit_button");
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    
    quit.addEventListener('click' , quittest);
}

function quittest(){
    if( confirm("voulez vous réellement quittez votre progession ne sera pas sauvegarder")){
        window.location = '../../Homepage/index.html' ;
    }
    else {
    }
    
}