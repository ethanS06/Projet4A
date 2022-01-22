<?php
class Phrase{
    // Connexion
    private $connexion;
    private $table = "phr_contexte";

    // object properties
    public $id;
    public $idverbe;
    public $phrase1;
    public $phrase2;
    public $phrase3;
    public $winrate;
    public $created_at;
    public $updated_at;

    /**
     * Constructeur avec $db pour la connexion à la base de données
     *
     * @param $db
     */
    public function __construct($db){
        $this->connexion = $db;
    }

    /**
     * Lecture des produits
     *
     * @return void
     */
    public function lire_phrase(){
        // On écrit la requête
        $sql = "SELECT idverbe, phrase1 , phrase2, phrase3 FROM " . $this->table . " ";
        
        // On prépare la requête
        $query = $this->connexion->prepare($sql);
        
        // On exécute la requête
        
        $query->execute();
        

        // On retourne le résultat
        return $query;
    }


     /**
     * Lire un produit
     *
     * @return void
     */
    public function lire_une_phrase(){
        // On écrit la requête
        $sql = "SELECT idverbe , phrase1, phrase2, phrase3 FROM " . $this->table . "  WHERE id = ? LIMIT 0,1" ;

        // On prépare la requête
        $query = $this->connexion->prepare( $sql );

        // On attache l'id
        $query->bindParam(1, $this->id);

        // On exécute la requête
        $query->execute();

        // on récupère la ligne
        $row = $query->fetch(PDO::FETCH_ASSOC);

        // On hydrate l'objet
        $this->idverbe = $row['idverbe'];
        $this->phrase1 = $row['phrase1'];
        $this->phrase2 = $row['phrase2'];
        $this->phrase3 = $row['phrase3'];
    }


    /**
     * Lire un produit
     *
     * @return void
     */
    public function lire_une_phrase_id(){
        // On écrit la requête
        $sql = "SELECT  phrase1, phrase2, phrase3 FROM " . $this->table . " p INNER JOIN verbe v ON p.idverbe = v.id  WHERE idverbe = ? LIMIT 0,1" ;

        // On prépare la requête
        $query = $this->connexion->prepare( $sql );

        // On attache l'id
        $query->bindParam(1, $this->idverbe);

        // On exécute la requête
        $query->execute();

        // on récupère la ligne
        $row = $query->fetch(PDO::FETCH_ASSOC);

        // On hydrate l'objet
        $this->phrase1 = $row['phrase1'];
        $this->phrase2 = $row['phrase2'];
        $this->phrase3 = $row['phrase3'];
    }
    /**
     * Mettre à jour une phrase
     *
     * @return void
     */
    public function modifier(){
        // On écrit la requête
        $sql =  "UPDATE " . $this->table . " SET phrase1 = :phrase1, phrase2 = :phrase2 , phrase3 = :phrase3  WHERE id = :id";
        
        // On prépare la requête    
        $query = $this->connexion->prepare($sql);
        
        // On sécurise les données
        $this->phrase1=htmlspecialchars(strip_tags($this->phrase1));
        $this->phrase2=htmlspecialchars(strip_tags($this->phrase2));
        $this->phrase3=htmlspecialchars(strip_tags($this->phrase3));
        $this->id=htmlspecialchars(strip_tags($this->id));
        
        // On attache les variables
        $query->bindParam(':phrase1', $this->phrase1);
        $query->bindParam(':phrase2', $this->phrase2);
        $query->bindParam(':phrase3', $this->phrase3);
        $query->bindParam(':id', $this->id);
        
        // On exécute
        if($query->execute()){
            return true;
        }
        
        return false;
    }

}
?>

   