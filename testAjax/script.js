//Methode Get

window.onload = function(){
    var bv = document.getElementById("bv");
    var ps = document.getElementById("ps");
    var pp = document.getElementById("pp");
    var trad = document.getElementById("trad");
    let req = new XMLHttpRequest();

    req.onreadystatechange = function(){
        if(req.readyState == 4 && (req.status == 200 || req.status == 0)){
            let donnees = JSON.parse(req.response);
            console.log(req);

        /*//ES8
        element = Object.entries(donnees.verbes);
        console.log(element[1][1].infinitif);
        bv.innerHTML = element[1][1].infinitif;
        ps.innerHTML = element[1][1].passe_simple;
        pp.innerHTML = element[1][1].participe_passe;
        trad.innerHTML = element[1][1].traduction;*/
    }
    
}


req.open("GET" , "http://localhost/englishapp/verbe/lire_verbe.php" , true);

req.send();

}
/*c'est la 

window.onload = function(){
    var bv = document.getElementById("bv");
    var ps = document.getElementById("ps");
    var pp = document.getElementById("pp");
    var trad = document.getElementById("trad");

    window.test();
   

}


function test(){

    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(req.readyState == 4 && (req.status == 200 || req.status == 0)){
            let donnees = JSON.parse(req.response);
        //ES8
        element = Object.entries(donnees.verbes);
        console.log(element);
        }
    }


    let verbe = { 
        id: 2
        }
        
        req.open("GET" , "http://localhost/englishapp/verbe/lire3verbes.php" , true);
        req.send(JSON.stringify(verbe)); a la
}*/
/*
 

    //ES8
    element = Object.entries(donnees.verbes);
    console.log(element)[1][1].infinitif)
    bv.innerHTML = element[1][1].infinitif;
    ps.innerHTML = element[1][1].passe_simple;
    pp.innerHTML = element[1][1].participe_passe;
    trad.innerHTML = element[1][1].traduction;
}

}

let verbe = { 
id: 2

}

req.open("GET" , "http://localhost/englishapp/verbe/lire3verbes.php" , true);


req.send(JSON.stringify(verbe));*/

/*


let req = new XMLHttpRequest();

req.onreadystatechange = function(){
    if(req.readyState == 4 && (req.status == 200 || req.status == 0)){
        //console.log(req);
        let donnees = JSON.parse(req.response);
        console.log(donnees);
        

        //ES8
       /Object.entries(donnees.verbes).forEach(element => {
            console.log(element[1].infinitif);
        })
    }
    else if(req.readyState <4 ){
        console.log(req.readyState);

    }
}


req.open("GET" , "http://localhost/englishapp/verbe/lire_verbe.php" , true);

req.send();



console.log("Bonjour");
*/


//Methode POST
/*let req = new XMLHttpRequest();


req.onreadystatechange = function(){
    if(req.readyState == 4 && req.status == 201) {
        let reponse = JSON.parse(req.response);
        console.log(reponse.message);
    }
}

let user = { 
    login: "TestAjax",
    email: "emailajax",
    password: "passwordAJAX"
}

req.open("POST" , "http://localhost/englishapp/user/creer.php" , true);
req.send(JSON.stringify(user));

*/



//Methode Put
///////////////////////////
//A DEMANDER A MEUNIER/////
///////////////////////////
/*
let req = new XMLHttpRequest();
req.onreadystatechange = function(){
    if(req.readyState == 4 && req.status == 200) {
        let reponse = JSON.parse(req.response);
        console.log(reponse);
    }
}

let user = { 
    id: "16",
    login: "TestAjax2",
    email: "emailajax2",
    password: "passwordAJAX2"
}

req.open("PUT" , "http://localhost/englishapp/user/modifier.php" , true);
req.send(JSON.stringify(user));
*/

//Methode DELETE
/*
let req = new XMLHttpRequest();
req.onreadystatechange = function(){
    if(req.readyState == 4 && req.status == 200) {
        let reponse = JSON.parse(req.response);
        console.log(reponse);
    }
}

let user = { 
    id: "16",
}

req.open("DELETE" , "http://localhost/englishapp/user/supprimer.php" );
req.send(JSON.stringify(user));
*/