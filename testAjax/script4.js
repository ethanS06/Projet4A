var id;
window.onload = function(){
    id = 2;

    var next = document.getElementById("next");

    let liste_verbe = window.read_verb((tab) =>{
        console.log(tab);

    })
   
}



function read_verb(onSuccess){
    id=2;
    let req = new XMLHttpRequest();
    let tableau = new Array(3);
    req.onreadystatechange = function(){
        if(req.readyState == 4 && (req.status == 200 || req.status == 0)){
            let donnees = JSON.parse(req.response);


            //element = Object.entries(donnees.verbe);
            
            console.log(req);
            tableau = donnees;

        }
        onSuccess(tableau);
    }
    var verbe = {
        id: id
    }

    req.open("GET", "http://localhost/englishapp/verbe/lire3verbes.php", true);
    req.responseType = "json";
    req.send(JSON.stringify(verbe));
    return tableau;
}





/*
 next.addEventListener('click', () =>{
        id = 2;

        let req = new XMLHttpRequest();
    
        req.onreadystatechange = function(){
            if(req.readyState == 4 && req.status == 200) {
                console.log("hello");
                let donnees = JSON.parse(req.response);
                console.log(req);
         }
            else{
                console.log(req.readyState);
            }
        }
    
        let verbe = {
            id: 2
        }
    
        req.open("GET", "http://localhost/englishapp/verbe/lire3verbes.php", true);
    
    // Envoie la requête
    req.responseType = "json";
    req.send(JSON.stringify(verbe));
    });













*/
/*
function gotonext(){
    id = 2;

    let req = new XMLHttpRequest();

    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 201) {
           let donnees = JSON.parse(req.response);
            console.log(req);
     }
    }

    let verbe = {
        id: 2
    }

    req.open("GET", "http://localhost/englishapp/verbe/lire3verbes.php", true);

// Envoie la requête
    req.send(JSON.stringify(verbe));
}


// Ecouteur d'évènement sur changement de l'état prêt
req.onreadystatechange = function() {
    // Si le statut est 4 ET une réponse OK a été reçue
    if (req.readyState == 4 && (req.status == 200 || req.status == 0)) {
        console.log(req);
    } else if (req.readyState < 4) {
        console.log(req.readyState);
    }
};

let verbes ={
    id: 2
}
// Spécifie la méthode, l'url et le type d'exécution à utiliser (ici en mode asynchrone)
req.open("GET", "http://localhost/englishapp/verbe/lire3verbes.php", true);

// Envoie la requête
req.send(JSON.stringify(verbes));*/