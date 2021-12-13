window.onload = function(){
  var back = document.getElementById("back");
  var next = document.getElementById("next");

  back.addEventListener('click', gotoback);
  next.addEventListener('click', gotonext);


}

function gotoback(){
  window.location = '../homepage.html';
}

function gotonext(){
  window.location = 'verb.html';
}