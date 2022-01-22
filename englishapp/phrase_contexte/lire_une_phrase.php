<?php
// Headers requis
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// On vérifie que la méthode utilisée est correcte
if($_SERVER['REQUEST_METHOD'] == 'GET'){
    // On inclut les fichiers de configuration et d'accès aux données
    include_once '../config/Database.php';
    include_once '../models/Phrase.php';

    // On instancie la base de données
    $database = new Database();
    $db = $database->getConnection();

    // On instancie les Phrase
    $phrase = new Phrase($db);

    $donnees = json_decode(file_get_contents("php://input"));
    
    if(!empty($donnees->id)){
        $phrase->id = $donnees->id;

        // On récupère le Phrase
        $phrase->lire_une_phrase();

        // On vérifie si le Phrase existe
        if($phrase->phrase1 != null){

            $prod = [
                "idverbe" => $phrase->idverbe,
                "phrase1" => $phrase->phrase1,
                "phrase2" => $phrase->phrase2,
                "phrase3" => $phrase->phrase3
            ];
            // On envoie le code réponse 200 OK
            http_response_code(200);

            // On encode en json et on envoie
            echo json_encode($prod);
        }else{
            // 404 Not found
            http_response_code(404);
         
            echo json_encode(array("message" => "La phrase n'existe pas."));
        }
        
    }
}else{
    // On gère l'erreur
    http_response_code(405);
    echo json_encode(["message" => "La méthode n'est pas autorisée"]);
}
