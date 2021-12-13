window.onload = function() {
    var back = document.getElementById("back_button");
    var partie1 = document.getElementById("level1");
    var partie2 = document.getElementById("level2");
    var partie3 = document.getElementById("level3");
    var partie4 = document.getElementById("level4");
    var partie5 = document.getElementById("level5");
    var partie6 = document.getElementById("level6");
    var partie7 = document.getElementById("level7");
    var partie8 = document.getElementById("level8");
    var partie9 = document.getElementById("level9");
    var partie10 = document.getElementById("level10");

  back.addEventListener('click' , gotoback);
  partie1.addEventListener('click', gotoverb);
  partie2.addEventListener('click', gotoverb);
  partie3.addEventListener('click', gotoverb);
  partie4.addEventListener('click', gotoverb);
  partie5.addEventListener('click', gotoverb);
  partie6.addEventListener('click', gotoverb2);
  partie7.addEventListener('click', gotoverb2);
  partie8.addEventListener('click', gotoverb2);
  partie9.addEventListener('click', gotoverb2);
  partie10.addEventListener('click', gotoverb2);
}

function gotoback(){
    window.location = '../Test_homepage/homepage.html';
  }
  
  function gotoverb(){
    window.location = "square_question/question.html"
  }
  function gotoverb2(){
    window.location = "triangle_question/question.html"
  }