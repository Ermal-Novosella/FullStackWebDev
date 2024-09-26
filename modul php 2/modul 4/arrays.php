<?php
$sport1 = "Football";
$sport2 = "Basketball";
$sport3 = "Handball";
$sport4 = "Tenis";

$sports = array("Football","Basketball","Handball","Tennis");
//the one ontop and in the bottom are the same
$sportss= ["Football","Basketball","Handball","Tennis"];
echo end($sportss);

echo count($sportss);

$len = count($sportss);
for($i=0;$i < $len; $i++){
    echo $sportss[$i], "\n";
}
echo $sportss[1];
?>