window.onload = function(){
    var i= 0;
    var question = document.getElementById("question");
    var solution = document.getElementById("solution");
    var nexx = document.getElementById("next");
    
    
    let liste_question = window.read_question((tab) => {
        console.log(tab);
        question.innerHTML = tab[0][0];
        solution.innerHTML = tab[0][1];
    });

    nexx.addEventListener('click', ()=>{
        i+=1;
        window.read_question((tab) => {
            question.innerHTML = tab[i][0];
            solution.innerHTML = tab[i][1];
            console.log(tab[i][2]);

    })
    })
    
   
}

function read_question(onSuccess){
    
    let req = new XMLHttpRequest();
    let testquestion = "";
    let tableau = new Array(5);
    for (var i = 0; i < tableau.length; i++) {
        tableau[i] = new Array(3);
      }
      
     
       

    
    req.onreadystatechange = function(){
        if(req.readyState == 4 && (req.status == 200 || req.status == 0)){
            let donnees = JSON.parse(req.response);


            element = Object.entries(donnees.questionscarre);

            for (var j = 0; j < tableau.length; j++) {
                tableau[j][0] = element[j][1].question;
                tableau[j][1] = element[j][1].solution;
                tableau[j][2] = element[j][1].id_verbe;

            }
            
            onSuccess(tableau);
        }

    }

    
    
    req.open("GET" , "http://localhost/englishapp/questionscarre/lire10questionsniv1.php" , true);
    req.send();

 
   return tableau;

}

function read_verbe(onSuccess){
    
    let req = new XMLHttpRequest();
    let tableau = new Array(5);
    for (var i = 0; i < tableau.length; i++) {
        tableau[i] = new Array(3);
      }
      
     
       

    
    req.onreadystatechange = function(){
        if(req.readyState == 4 && (req.status == 200 || req.status == 0)){
            let donnees = JSON.parse(req.response);


            element = Object.entries(donnees.verbes);

            for (var j = 0; j < tableau.length; j++) {
                tableau[j][0] = element[j][1].question;
                tableau[j][1] = element[j][1].solution;
                tableau[j][2] = element[j][1].id_verbe;

            }
            
            onSuccess(tableau);
        }

    }

    
    
    req.open("GET" , "http://localhost/englishapp/verbe/lire3verbes.php" , true);
    req.send();

 
   return tableau;

}




    
