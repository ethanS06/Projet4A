<?php
class Verbe{
    // Connexion
    private $connexion;
    private $table = "verbe";

    // object properties
    public $id;
    public $infinitif;
    public $passe_simple;
    public $participe_passe;
    public $tradction;
    public $winrate;
    public $difficulte;
    public $id_phrase;
    public $created_at;

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
    public function lire_verbe(){
        // On écrit la requête
        $sql = "SELECT infinitif , passe_simple, participe_passe, traduction FROM verbe ";
        
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
    public function lire_un_verbe(){
        // On écrit la requête
        $sql = "SELECT infinitif , passe_simple, participe_passe, traduction FROM " . $this->table . "  WHERE id = ? LIMIT 0,1" ;

        // On prépare la requête
        $query = $this->connexion->prepare( $sql );

        // On attache l'id
        $query->bindParam(1, $this->id);

        // On exécute la requête
        $query->execute();

        // on récupère la ligne
        $row = $query->fetch(PDO::FETCH_ASSOC);

        // On hydrate l'objet
        $this->infinitif = $row['infinitif'];
        $this->passe_simple = $row['passe_simple'];
        $this->participe_passe = $row['participe_passe'];
        $this->traduction = $row['traduction'];
    }

    /**
     * Mettre à jour un produit
     *
     * @return void
     */
    public function modifier(){
        // On écrit la requête
        $sql = "UPDATE " . $this->table . " SET winrate = :winrate, difficulte = :difficulte WHERE id = :id";
        
        // On prépare la requête
        $query = $this->connexion->prepare($sql);
        
        // On sécurise les données
        $this->winrate=htmlspecialchars(strip_tags($this->winrate));
        $this->difficulte=htmlspecialchars(strip_tags($this->difficulte));
        $this->id=htmlspecialchars(strip_tags($this->id));
        
        // On attache les variables
        $query->bindParam(':winrate', $this->winrate);
        $query->bindParam(':difficulte', $this->difficulte);
        $query->bindParam(':id', $this->id);
        
        // On exécute
        if($query->execute()){
            return true;
        }
        
        return false;
    }

}
?>

   