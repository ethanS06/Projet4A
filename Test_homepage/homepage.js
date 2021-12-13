window.onload = function() {
    var back = document.getElementById("back_button");
    var IV = document.getElementById("iv");
    var Trainning = document.getElementById("training");
    var Test = document.getElementById("test");

    back.addEventListener('click' , gotoback);
    IV.addEventListener('click', gotoIV);
    Trainning.addEventListener('click', gotoTraining );
    test.addEventListener('click', gotoTest);

}

function gotoback(){
    window.location = '../Homepage/index.html';
  }
  
  function gotoIV(){
    window.location = "../IV_homepage/homepage.html"
  }
  
  function gotoTraining(){
    window.location = '../Training_homepage/homepage.html';
  }
  
  function gotoTest(){
    window.location = '../Test_Homepage2/homepage.html';
  }
