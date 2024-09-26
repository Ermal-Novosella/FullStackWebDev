<?php
$numbers = [124,25,35467,568];
$names = ["ermali","diarti","rilindi"];
//array push
array_push($names, "blerta");
var_dump($names);
echo "<br>";
//array pop
array_pop($names);
var_dump($names);
echo "<br>";
//array unshift
array_unshift($names, "PingPong");
var_dump($names);
echo "<br>";
// array shift
array_shift($names);
var_dump($names);
echo "<br>";
// array sum
array_sum($numbers);
var_dump($numbers);
echo "<br>";
// array slice
array_slice($names, 2);
var_dump($names);
//dsh temp vlera mesatare me 7 vlera
?>