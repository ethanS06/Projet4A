<?php
class QuestionCarre{
    // Connexion
    private $connexion;
    private $table = "question_carre";

    // object properties
    public $id;
    public $question;
    public $solution;
    public $id_verbe;
    public $id_niveau;
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
    public function lire_question(){
        // On écrit la requête
        $sql = "SELECT question , solution FROM question_carre ";
        
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
    public function lire_une_question(){
        // On écrit la requête
        $sql = "SELECT question , solution FROM " . $this->table . "  WHERE id_niveau = ? LIMIT 0,1" ;

        // On prépare la requête
        $query = $this->connexion->prepare( $sql );

        // On attache l'id_niveau
        $query->bindParam(1, $this->id_niveau);

        // On exécute la requête
        $query->execute();

        // on récupère la ligne
        $row = $query->fetch(PDO::FETCH_ASSOC);

        // On hydrate l'objet
        $this->question = $row['question'];
        $this->solution = $row['solution'];
    }

     /**
     * Lecture des produits
     *
     * @return void
     */
    public function lire10questions(){
        // On écrit la requête
        $sql = "SELECT question , solution  FROM " . $this->table . " WHERE id_niveau = ?  LIMIT 10";
        
      // On prépare la requête
      $query = $this->connexion->prepare( $sql );

      // On attache l'id
      $query->bindParam(1, $this->id_niveau);

      // On exécute la requête
      $query->execute();

    // On retourne le résultat
    return $query;
    }

    /**
     * lecture de 10question de niveau 1
     *  @return void
     */
    public function lire10questionsniv1(){
        // On écrit la requête
        $sql = "SELECT question , solution , id_verbe , id_forme FROM " . $this->table . " WHERE id_niveau = 1  ORDER BY RAND() LIMIT 10 ";
        
        // On prépare la requête
        $query = $this->connexion->prepare($sql);
        
        // On exécute la requête
        
        $query->execute();
        

        // On retourne le résultat
        return $query;
    }

   
}
?>

   