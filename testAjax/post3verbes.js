var id;
window.onload = function(){
    id = 1;

    var next = document.getElementById("next");

    let liste_verbe = window.read_verb((tab) =>{
        console.log(tab);
    })
   
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
        id: id
    }

    req.open("POST", "http://localhost/englishapp/verbe/post_lire3verbes.php", true);
    req.send(JSON.stringify(verbe));
    return tableau;
}





