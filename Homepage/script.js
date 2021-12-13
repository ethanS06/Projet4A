window.onload = function() {
    var IV = document.getElementById('IV');
    var Test = document.getElementById('Test');
    IV.addEventListener('click' , gotoIV);
    Test.addEventListener('click' , gotoTest);
    IV.addEventListener('mouseenter' , function () {changebackground(IV)});
    IV.addEventListener('mouseleave' ,  function () {changebackground1(IV)});
    Test.addEventListener('mouseenter' , function () {changebackground(Test)});
    Test.addEventListener('mouseleave' , function () {changebackground1(Test)});

}


function gotoIV(){
    window.location = '../IV_homepage/homepage.html';
}

function gotoTest(){
    window.location = '../Test_homepage/homepage.html';
}

function changebackground(div_test){
    div_test.style.backgroundColor="#8C9191";
    div_test.style.borderColor="black";
}
function changebackground1(div_test){
    div_test.style.removeProperty("background");
}