<?php
$info = [];
foreach ($_GET as $key => $value) {
    $info += array($key => $value);
}

if (!isset($_COOKIE["memoryPlayers"])) {
    $playerCookies = [];
    array_push($playerCookies, $info);
} else {
    $playerCookies = json_decode($_COOKIE["memoryPlayers"]);
    array_push($playerCookies, $info);
}

$JSONData = json_encode($playerCookies);
setcookie("memoryPlayers", $JSONData, time() + 31556926 /* 1 year in seconds */);
echo "<script>window.location.href = \"/hallOfFame.php\"</script>"
?>