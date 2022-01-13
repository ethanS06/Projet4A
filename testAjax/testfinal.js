window.onload = function(){
    var i= 0;
    var score =0;
    var reponse = "";
    var question = document.getElementById("question");
    var reponse1 = document.getElementById("reponse1");
    var reponse2 = document.getElementById("reponse2");
    var reponse3 = document.getElementById("reponse3");
    var reponse4 = document.getElementById("reponse4");
    var nexx = document.getElementById("next");


    let emplacement = ["reponse1" , "reponse2" , "reponse3" , "reponse4"];
    let reponses = ["reponse A" , "reponse B" , "reponse C"];

    
    
    
    let liste_question = window.read_question((tab) => {
        //console.log(tab);
        question.innerHTML = tab[0][0];
        reponse = tab[0][1];
        //console.log(reponse);
        reponses.sort(function(a, b){return 0.1 - Math.random()});
        var position = Math.floor(Math.random() * 4);
        reponses.splice(position , 0 , tab[0][1]);
        reponse1.innerHTML = reponses[0];
        reponse2.innerHTML = reponses[1];
        reponse3.innerHTML = reponses[2];
        reponse4.innerHTML = reponses[3];
        //console.log(tab[0][1]);
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
            window.read_question((tab) => {
                let reponses = ["reponse A" , "reponse B" , "reponse C"];
                reponses.sort(function(a, b){return 0.1 - Math.random()});
                question.innerHTML = tab[i][0];
                reponse = tab[i][1];
                //console.log(reponse);
                var position = Math.floor(Math.random() * 4);
                reponses.splice(position , 0 , tab[i][1]);
                reponse1.innerHTML = reponses[0];
                reponse2.innerHTML = reponses[1];
                reponse3.innerHTML = reponses[2];
                reponse4.innerHTML = reponses[3];
            //console.log(tab[i][1]);
            //console.log(tab[i][2]);

    })
        }
        else if (i==9){
            let test = reponse1.innerHTML;
                console.log(test);
                //console.log(i);
                if ( test == reponse){
                    score+=1 ;
                    console.log(score);
                    window.alert("Congratulations your score is: \n" + score +"/10");
                    window.location.reload; 
                }
               
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
                //console.log(score);
            }
            i+=1;
            window.read_question((tab) => {
                let reponses = ["reponse A" , "reponse B" , "reponse C"];
                reponses.sort(function(a, b){return 0.1 - Math.random()});
                question.innerHTML = tab[i][0];
                reponse = tab[i][1];
                var position = Math.floor(Math.random() * 4);
                reponses.splice(position , 0 , tab[i][1]);
                reponse1.innerHTML = reponses[0];
                reponse2.innerHTML = reponses[1];
                reponse3.innerHTML = reponses[2];
                reponse4.innerHTML = reponses[3];
                //console.log(tab[i][1]);
                //console.log(tab[i][2]);

        })
        }
        else if (i==9){
            let test = reponse2.innerHTML;
                console.log(test);
                //console.log(i);
                if ( test == reponse){
                    score+=1 ;
                    console.log(score);
                    window.alert("Congratulations your score is: \n" + score +"/10");
                    window.location.reload;
                }
            
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
                //console.log(score);
            }
            i+=1;
            window.read_question((tab) => {
                let reponses = ["reponse A" , "reponse B" , "reponse C"];
                reponses.sort(function(a, b){return 0.1 - Math.random()});
                question.innerHTML = tab[i][0];
                reponse = tab[i][1];
                var position = Math.floor(Math.random() * 4);
                reponses.splice(position , 0 , tab[i][1]);
                reponse1.innerHTML = reponses[0];
                reponse2.innerHTML = reponses[1];
                reponse3.innerHTML = reponses[2];
                reponse4.innerHTML = reponses[3];
                //console.log(tab[i][1]);
                //console.log(tab[i][2]);

        })
    }
    else if (i==9){
        let test = reponse3.innerHTML;
            console.log(test);
            //console.log(i);
            if ( test == reponse){
                score+=1 ;
                console.log(score);
                window.alert("Congratulations your score is: \n" + score+"/10" );
                window.location.reload;
            }
            
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
            //console.log(i);
            if ( test == reponse){
                score+=1 ;
                //console.log(score);
            }
            i+=1;
            window.read_question((tab) => {
                let reponses = ["reponse A" , "reponse B" , "reponse C"];
                reponses.sort(function(a, b){return 0.1 - Math.random()});
                question.innerHTML = tab[i][0];
                reponse = tab[i][1];
                var position = Math.floor(Math.random() * 4);
                reponses.splice(position , 0 , tab[i][1]);
                reponse1.innerHTML = reponses[0];
                reponse2.innerHTML = reponses[1];
                reponse3.innerHTML = reponses[2];
                reponse4.innerHTML = reponses[3];
                //console.log(tab[i][1]);
                //console.log(tab[i][2]);

        })
    }
    else if (i==9){
        let test = reponse4.innerHTML;
            console.log(test);
            if ( test == reponse){
                score+=1 ;
                console.log(score);
                window.alert("Congratulations your score is: \n" + score +"/10" );
                window.location.reload; 
            }
        
    }
    else{
        window.alert("Congratulations your score is: \n" + score +"/10");
        window.location.reload;
    }
    })




    nexx.addEventListener('click', ()=>{
        i+=1;
        window.read_question((tab) => {
            let reponses = ["reponse A" , "reponse B" , "reponse C"];
            question.innerHTML = tab[i][0];
            var position = Math.floor(Math.random() * 4);
            reponses.splice(position , 0 , tab[i][1]);
            reponse1.innerHTML = reponses[0];
            reponse2.innerHTML = reponses[1];
            reponse3.innerHTML = reponses[2];
            reponse4.innerHTML = reponses[3];
            //console.log(tab[i][1]);
            //console.log(tab[i][2]);

    })
    })
    
   
}




function read_question(onSuccess){
    
    let req = new XMLHttpRequest();
    let testquestion = "";
    let tableau = new Array(10);
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