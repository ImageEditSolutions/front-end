<?php
$id = file_get_contents("php://input");

if(isset($id)) {
    $conn = mysqli_connect('localhost', 'unihanul', 'seoimg2020', 'unihanul');
    $sql = "select * from images where filename = '$id.json'";
    $result = mysqli_query($conn, $sql);
    if($result == NULL){
        header('HTTP/1.1 500 Internal Server Error');
    }
    else{
        $row = mysqli_fetch_array($result);
        $fileURL = $row['imgurl'];
        $file = file_get_contents($fileURL);
        echo $file;
    }
} else{
    header('HTTP/1.1 500 Internal Server Error');
}
?>

