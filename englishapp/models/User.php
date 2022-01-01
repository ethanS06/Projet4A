<?php
class User{
    // Connexion
    private $connexion;
    private $table = "user";

    // object properties
    public $id;
    public $login;
    public $email;
    public $password;
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
     * Lecture des user
     *
     * @return void
     */
    public function lire_user(){
        // On écrit la requête
        $sql = "SELECT login , email, password FROM user ";
        
        // On prépare la requête
        $query = $this->connexion->prepare($sql);
        
        // On exécute la requête
        
        $query->execute();
        

        // On retourne le résultat
        return $query;
    }


     /**
     * Lire un user
     *
     * @return void
     */
    public function lire_un_user(){
        // On écrit la requête
        $sql = "SELECT login , email, password FROM " . $this->table . "  WHERE id = ? LIMIT 0,1" ;

        // On prépare la requête
        $query = $this->connexion->prepare( $sql );

        // On attache l'id
        $query->bindParam(1, $this->id);

        // On exécute la requête
        $query->execute();

        // on récupère la ligne
        $row = $query->fetch(PDO::FETCH_ASSOC);

        // On hydrate l'objet
        $this->login = $row['login'];
        $this->email = $row['email'];
        $this->password = $row['password'];
        
    }

    /**
     * Mettre à jour un user
     *
     * @return void
     */
    public function modifier(){
        // On écrit la requête
        $sql = "UPDATE " . $this->table . " SET login = :login, email = :email , password = :password  WHERE id = :id";
        
        // On prépare la requête
        $query = $this->connexion->prepare($sql);
        
        // On sécurise les données
        $this->login=htmlspecialchars(strip_tags($this->login));
        $this->email=htmlspecialchars(strip_tags($this->email));
        $this->password=htmlspecialchars(strip_tags($this->password));
        $this->id=htmlspecialchars(strip_tags($this->id));
        
        // On attache les variables
        $query->bindParam(':login', $this->login);
        $query->bindParam(':email', $this->email);
        $query->bindParam(':password', $this->password);
        $query->bindParam(':id', $this->id);
        
        // On exécute
        if($query->execute()){
            return true;
        }
        
        return false;
    }


     /**
     * Créer un user
     *
     * @return void
     */
    public function creer(){

        // Ecriture de la requête SQL en y insérant le nom de la table
        $sql = "INSERT INTO " . $this->table . " SET login=:login, email=:email, password=:password ";

        // Préparation de la requête
        $query = $this->connexion->prepare($sql);

        // Protection contre les injections
        $this->login=htmlspecialchars(strip_tags($this->login));
        $this->email=htmlspecialchars(strip_tags($this->email));
        $this->password=htmlspecialchars(strip_tags($this->password));
        
  

        // Ajout des données protégées
        $query->bindParam(":login", $this->login);
        $query->bindParam(":email", $this->email);
        $query->bindParam(":password", $this->password);
       

        // Exécution de la requête
        if($query->execute()){
            return true;
        }
        return false;
    }

     /**
     * Supprimer un user
     *
     * @return void
     */
    public function supprimer(){
        // On écrit la requête
        $sql = "DELETE FROM " . $this->table . " WHERE id = ?";

        // On prépare la requête
        $query = $this->connexion->prepare( $sql );

        // On sécurise les données
        $this->id=htmlspecialchars(strip_tags($this->id));

        // On attache l'id
        $query->bindParam(1, $this->id);

        // On exécute la requête
        if($query->execute()){
            return true;
        }
        
        return false;
    }

}
?>

   