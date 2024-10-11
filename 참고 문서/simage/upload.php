<?php
$random_number = bin2hex(openssl_random_pseudo_bytes(10));
$target_dir = "uploads/".$random_number."/";
$fileName = $random_number . ".json";
$target_file = $target_dir . $fileName;
$uploadOk = 1;

$POST = json_encode($_POST);

if(isset($POST)) {
    if (!file_exists($target_dir)) {
        mkdir($target_dir, 0755, true);
    }

    $serialized_data = serialize($POST);
    $check = strlen($serialized_data);

    if ($check > 500000000) {
        echo "Sorry, your file is too large.";
        $uploadOk = 0;
    }

    if ($uploadOk == 0) {
        header('HTTP/1.1 500 Internal Server Error');
    } else{
        if(file_put_contents($target_file, $POST)){
            $imgurl = "./uploads/".$random_number."/".$fileName;
            $size = $check;
            
            $conn = mysqli_connect('localhost', 'unihanul', 'seoimg2020', 'unihanul');
            //images 테이블에 이미지정보를 저장하자.
            $sql = "insert into images(filename, imgurl, size) values('$fileName','$imgurl','$size')";
            mysqli_query($conn,$sql);
            echo $random_number;
        } else{
            header('HTTP/1.1 500 Internal Server Error');
        }
    }
} else{
    header('HTTP/1.1 500 Internal Server Error');
}
?>

