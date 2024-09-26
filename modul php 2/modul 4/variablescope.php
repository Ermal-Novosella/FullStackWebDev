<?php

$x=5; //global variable

function localVar(){
    $y=10; // local variable
    
    
    echo $y;
}
localVar();
echo "\n, $x";



?>