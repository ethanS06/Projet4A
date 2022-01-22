var idverbe = 0; 

window.onload = function(){
    var quit =document.getElementById("quit_button");
    quit.addEventListener('click' , quittest);

    var i= 0;
    var score =0;
    var reponse = "";
    var question = document.getElementById("question");
    var reponse1 = document.getElementById("reponse1");
    var reponse2 = document.getElementById("reponse2");
    var reponse3 = document.getElementById("reponse3");
    var reponse4 = document.getElementById("reponse4");

    let reponses2 ; 

    
    let liste_question = window.read_question((tab) => {
        
        idverbe = tab[0][2];
        
        
        let liste_verbe = window.read_verb((tab2) =>{
            question.innerHTML = tab[0][0];
            reponse = tab[0][1];
            id_forme = tab[0][3];
            reponses2 = classement_reponse_tab(tab2 , id_forme);
            //console.log(reponses2);
            reponses2.sort(function(a, b){return 0.1 - Math.random()});
            var position = Math.floor(Math.random() * 4);
            reponses2.splice(position , 0 , tab[0][1]);
            reponse1.innerHTML = reponses2[0];
            reponse2.innerHTML = reponses2[1];
            reponse3.innerHTML = reponses2[2];
            reponse4.innerHTML = reponses2[3];
            
        });
        
        
        
    });
    
  
    reponse1.addEventListener('click', ()=>{
        if( i<9){
            let test = reponse1.innerHTML;
            console.log(test);
            if ( test == reponse){
                score+=1 ;
                //console.log(score);
            }
            i+=1;
                idverbe = liste_question[i][2];
                let liste_verbe = window.read_verb((tab2) =>{
                    question.innerHTML = liste_question[i][0];
                    reponse = liste_question[i][1];
                    id_forme = liste_question[i][3];
                    reponses2 = classement_reponse_tab(tab2 , id_forme);
                    reponses2.sort(function(a, b){return 0.1 - Math.random()});
                    var position = Math.floor(Math.random() * 4);
                    reponses2.splice(position , 0 , liste_question[i][1]);
                    reponse1.innerHTML = reponses2[0];
                    reponse2.innerHTML = reponses2[1];
                    reponse3.innerHTML = reponses2[2];
                    reponse4.innerHTML = reponses2[3];
                    
                });

        }
        else if (i==9){
            let test = reponse1.innerHTML;
            console.log(test);
            if ( test == reponse){
                score+=1 ;
                console.log(score); 
            }
            window.alert("Congratulations your score is: \n" + score +"/10");
            window.location.reload;
               
            }
    else{
        window.alert("Congratulations your score is: \n" + score +"/10");
        window.location.reload;
    }
    })

    reponse2.addEventListener('click', ()=>{
        if( i<9){
            let test = reponse2.innerHTML;
            console.log(test);
            if ( test == reponse){
                score+=1 ;
            }
            i+=1;
                idverbe = liste_question[i][2];
                let liste_verbe = window.read_verb((tab2) =>{
                    question.innerHTML = liste_question[i][0];
                    reponse = liste_question[i][1];
                    id_forme = liste_question[i][3];
                    reponses2 = classement_reponse_tab(tab2 , id_forme);
                    reponses2.sort(function(a, b){return 0.1 - Math.random()});
                    var position = Math.floor(Math.random() * 4);
                    reponses2.splice(position , 0 , liste_question[i][1]);
                    reponse1.innerHTML = reponses2[0];
                    reponse2.innerHTML = reponses2[1];
                    reponse3.innerHTML = reponses2[2];
                    reponse4.innerHTML = reponses2[3];
                    
                });

 
        }
        else if (i==9){
            let test = reponse2.innerHTML;
            console.log(test);
            if ( test == reponse){
                score+=1 ;
                console.log(score);
                    
            }
            window.alert("Congratulations your score is: \n" + score +"/10");
            window.location.reload;
            
        }
        else{
            window.alert("Congratulations your score is: \n" + score +"/10");
            window.location.reload;
        }
    })

    reponse3.addEventListener('click', ()=>{
        if( i<9){
            let test = reponse3.innerHTML;
            console.log(test);
            if ( test == reponse){
                score+=1 ;
            }
            i+=1;
                idverbe = liste_question[i][2];
                let liste_verbe = window.read_verb((tab2) =>{
                    question.innerHTML = liste_question[i][0];
                    reponse = liste_question[i][1];
                    id_forme = liste_question[i][3];
                    reponses2 = classement_reponse_tab(tab2 , id_forme);
                    reponses2.sort(function(a, b){return 0.1 - Math.random()});
                    var position = Math.floor(Math.random() * 4);
                    reponses2.splice(position , 0 , liste_question[i][1]);
                    reponse1.innerHTML = reponses2[0];
                    reponse2.innerHTML = reponses2[1];
                    reponse3.innerHTML = reponses2[2];
                    reponse4.innerHTML = reponses2[3];
                    
                });
    }
    else if (i==9){
        let test = reponse3.innerHTML;
        console.log(test);
        if ( test == reponse){
            score+=1 ;
            console.log(score);
                
        }
        window.alert("Congratulations your score is: \n" + score +"/10");
        window.location.reload;
            
    }
    else{
        window.alert("Congratulations your score is: \n" + score +"/10");
        window.location.reload;
    }
    })

    reponse4.addEventListener('click', ()=>{
        if( i<9){
            let test = reponse4.innerHTML;
            console.log(test);
            if ( test == reponse){
                score+=1 ;
            }
            i+=1;
                idverbe = liste_question[i][2];
                let liste_verbe = window.read_verb((tab2) =>{
                    question.innerHTML = liste_question[i][0];
                    reponse = liste_question[i][1];
                    id_forme = liste_question[i][3];
                    reponses2 = classement_reponse_tab(tab2 , id_forme);
                    reponses2.sort(function(a, b){return 0.1 - Math.random()});
                    var position = Math.floor(Math.random() * 4);
                    reponses2.splice(position , 0 , liste_question[i][1]);
                    reponse1.innerHTML = reponses2[0];
                    reponse2.innerHTML = reponses2[1];
                    reponse3.innerHTML = reponses2[2];
                    reponse4.innerHTML = reponses2[3];
                    
                });
    }
    else if (i==9){
        let test = reponse4.innerHTML;
        console.log(test);
        if ( test == reponse){
            score+=1 ;
            console.log(score);
                
        }
        window.alert("Congratulations your score is: \n" + score +"/10");
        window.location.reload;
        
    }
    else{
        window.alert("Congratulations your score is: \n" + score +"/10");
        window.location.reload;
    }
    })




   
}




function read_question(onSuccess){
    
    let req = new XMLHttpRequest();
    let testquestion = "";
    let tableau = new Array(10);
    for (var i = 0; i < tableau.length; i++) {
        tableau[i] = new Array(4);
      }
      
     
       

    
    req.onreadystatechange = function(){
        if(req.readyState == 4 && (req.status == 200 || req.status == 0)){
            let donnees = JSON.parse(req.response);


            element = Object.entries(donnees.questionscarre);

            for (var j = 0; j < tableau.length; j++) {
                tableau[j][0] = element[j][1].question;
                tableau[j][1] = element[j][1].solution;
                tableau[j][2] = element[j][1].id_verbe;
                tableau[j][3] = element[j][1].id_forme;
            }
            
            onSuccess(tableau);
        }

    }

    
    
    req.open("GET" , "http://localhost/englishapp/questionscarre/lire10questionsniv1.php" , true);
    req.send();

 
   return tableau;

}

function read_verb(onSuccess){
    
    let req = new XMLHttpRequest();
    let tableau = new Array(3);
    for (var i = 0; i < tableau.length; i++) {
        tableau[i] = new Array(3);
      }

      
    req.onreadystatechange = function(){
        if(req.readyState == 4 && (req.status == 200 || req.status == 0)){
            let donnees = JSON.parse(req.response);


            element = Object.entries(donnees.verbes);
            
            //console.log(element);
            for (var j = 0; j < tableau.length; j++) {
                tableau[j][0] = element[j][1].infinitif;
                tableau[j][1] = element[j][1].passe_simple;
                tableau[j][2] = element[j][1].participe_passe;
                

            }

        }
        onSuccess(tableau);
    }
    var verbe = {
        id: idverbe
    }

    req.open("POST", "http://localhost/englishapp/verbe/post_lire3verbes.php", true);
    req.send(JSON.stringify(verbe));
    return tableau;
}


function classement_reponse_tab(tab ,id_forme){
    let reponse = [];
    if(id_forme == 1){
        for (var i =0  ; i<tab.length ; i++){
            reponse.push(tab[i][0]);
        }    
    }
    else if(id_forme == 2){
        for (var i =0  ; i<tab.length ; i++){
            reponse.push(tab[i][1]);
        }
    }
    else if(id_forme == 3){
        for (var i =0  ; i<tab.length ; i++){
            reponse.push(tab[i][2]);
        }
    }

    return reponse;
}

function quittest(){
    if( confirm("voulez vous réellement quittez votre progession ne sera pas sauvegarder")){
        window.location = '../../Homepage/index.html' ;
    }
    else {
    }
    
}