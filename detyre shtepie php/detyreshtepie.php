<?php

$temp = [37,35,34,32,30,29,21];

function mesatare(){
    global $temp;
    $the_number =(array_sum($temp))/7;
    $the_number_rounded= round($the_number);
    echo "Temperatura mesatare e 7 njerezve eshte : $the_number_rounded";
}
mesatare();

?>