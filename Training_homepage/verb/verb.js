var base_form;
var simple_past;
var past_participle;


window.onload = function(){
    var back = document.getElementById("back");
    var next = document.getElementById("next");
    var context = document.getElementById("context");
  
    back.addEventListener('click', gotoback);
    context.addEventListener('click' , gotocontext);
    next.addEventListener('click', gotonext);
    //document.getElementById("confirmer").addEventListener('click' , confirmer);
  
  
  }
  
  function gotoback(){
    window.location = '../homepage.html';
  }

  function gotocontext(){
    window.location = 'context/context.html';
  }
  function confirmer(){
    base_form = document.getElementById("base_form").value;
    simple_past = document.getElementById("simple_past").value;
    past_participle= document.getElementById("past_participle").value;
    console.log(base_form);
    console.log(simple_past);
    console.log(past_participle);
  }
  function gotonext(){
    base_form = document.getElementById("base_form").value;
    simple_past = document.getElementById("simple_past").value;
    past_participle= document.getElementById("past_participle").value;
    if ((base_form=="hello") && (simple_past="hello") && (past_participle ="hello")){
      console.log("é");
    }
    console.log(base_form);
    console.log(simple_past);
    console.log(past_participle);
    window.location = 'verb.html';
  }