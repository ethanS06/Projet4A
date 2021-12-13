window.onload = function(){
    var back = document.getElementById("back");
    var sentence1 = document.getElementById("sentence1");
    var sentence2 = document.getElementById("sentence2");
    var sentence3 =document.getElementById("sentence3");
    back.addEventListener('click', gotoback);
    
  
  }
  
  function gotoback(){
    window.location = '../verb.html';
  }

 