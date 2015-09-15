<?php
require 'BMIService.class.php';

$weight = $_GET['weight'];
$height = $_GET['height'];
$indice = $_GET['indice'];
$bmiIndex = 0.0;
$string = "";

if(is_numeric($weight) && is_numeric($height)){
    $bmiIndex = BMIService::getIndex($weight, $height);
}

echo $bmiIndex;
?>