<html>
    <p> hello </p>
<?php  
    
  try 
    {
        $bdd = new PDO("mysql:host=localhost;dbname=CHANGER_DB_NAME;charset=utf8", "root", "");
    }
    catch(PDOException $e)
    {
        die('Erreur : '.$e->getMessage());
    }

$grille = 
$sql = "SELECT * FROM 'grille'";
$res = $conn->query($sql);
foreach($res as $row) {
    echo $row['grille'] . "<br />";
}
    
    
    
 $insert = $bdd->prepare('INSERT INTO grille(grille) VALUES(:grille)');
                            $insert->execute(array(
                                'grille' => grille,
                            ));
?>
    
    
    
    
    
</html>


/*ici variable php en js 
<?php
$votre_variable = 'Message';
?>
<script>
   data: [("<?php echo $votre_variable ?>")],
</script>


*/

/*     var user_name = "Rohit";
    document.cookie = "name = " + user_name;
</script>

<?php
    $name= $_COOKIE['name'];
    echo $name;
?>
*/