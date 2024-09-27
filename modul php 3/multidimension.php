<?php
//two dimensional arrays
$dogs = [
    array("I sharrit", "Kolovices", 20),
    array ("Huski" , "Novoselles", 30),
    array ("Bulldog" , "Jashareve", 30),
];
echo $dogs[0][0]. " origin: " . $dogs[0][1] . " Lifespan: ". $dogs[0][2]. "<br>";
echo $dogs[1][0]. " origin: " . $dogs[1][1] . " Lifespan: ". $dogs[1][2]. "<br>";
echo $dogs[2][0]. " origin: " . $dogs[2][1] . " Lifespan: ". $dogs[2][2]. "<br>";

for ($row = 0; $row < 3; $row++){
    echo "<p><b>Row Number $row </b></p>";
    echo "<ul>";
    for($col = 0; $col < 3; $col++){
        echo "<li>".$dogs[$row][$col]."</li>";
    }
    echo "</ul>";
}




?>