window.onload = function(){
  var back = document.getElementById("back");
  var bv = document.getElementById("bv");
  var ps = document.getElementById("ps");
  var pp = document.getElementById("pp");
  var trad = document.getElementById("trad");
  var nexx = document.getElementById("next")

  back.addEventListener('click', gotoback);
  

  let req = new XMLHttpRequest();

    req.onreadystatechange = function(){
        if(req.readyState == 4 && (req.status == 200 || req.status == 0)){
            let donnees = JSON.parse(req.response);
            

        //ES8
        element = Object.entries(donnees.verbes);
        let id = Math.floor(Math.random() * element.length);
        console.log(id);
        bv.innerHTML = element[id][1].infinitif;
        ps.innerHTML = element[id][1].passe_simple;
        pp.innerHTML = element[id][1].participe_passe;
        trad.innerHTML = element[id][1].traduction;
    }
    
}       

  req.open("GET" , "http://localhost/englishapp/verbe/lire_verbe_niv1.php" , true);
  req.send();

  nexx.addEventListener('click' , () =>{
        window.location.reload();
    })
}

function gotoback(){
  window.location = '../homepage.html';
}

