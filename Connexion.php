<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>connection</title>
  </head>
  <body>
    <form class="connection" action="Connexion.php" method="post">
      <label>Votre pseudo :
        <input type="text" name="pseudo" placeholder="Votre Pseudo">
      </label>
      <br/>
      <label>Votre Mot de passe :
        <input type="password" name="password" placeholder="Votre Mot de passe">
      </label>
      <br/>
      <input type="submit" name="Send" value="LOGIN">
    </form>

  </body>
</html>

<?php
// check connection
  class Login
  {
    public $login;

    function __construct() {
      try {
        $this->pdo = new PDO('mysql:host=localhost;dbname=Toothies', 'root', 'user');
        // echo "connexion réussi!";

      }
      catch (Exception $e)
      {
        echo "Connexion échoué";
        exit();
      }
    }
    public function Ok()
    {
      return $this->pdo;
      echo "connexion test";
    }
  }
  function Connexion()
  {
    $pseudo=$_POST['pseudo'];
    $password=$_POST['password'];

    $Connect= new Login();
    $machin= $Connect->Ok();
    $request = $machin->prepare('SELECT * FROM users WHERE pseudo= :pseudo AND password= :password');
    $request->execute(array(
      'pseudo' => $pseudo,
      'password' => $password));
    $resulat = $request->fetch();
    $passwordFromData = $resulat['password'];
    // $PseudoCorrect = pseudo_verify($_POST['pseudo'], $resulat['pseudo']);

    if ($password === $passwordFromData && $pseudo === $resulat['pseudo'])
    {
      session_start();
      $_SESSION['ID'] = $resulat['ID'];
      $_SESSION['pseudo'] = $resulat['pseudo'];
      $_SESSION['password'] = $resulat['password'];

      echo "vous etes connecté";
      // header('Location: /content');
    }
    else
    {
      echo "Non pas connecté";

    }
  }
  Connexion();

?>
