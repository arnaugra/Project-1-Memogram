<?php
$info = [$_POST["name"],$_POST["points"],$_POST["time"],$_POST["turns"], $_POST["gameTime"]];

if (!isset($_COOKIE["memoryPlayers"])) {
    $playerCookies = [];
    array_push($playerCookies, $info);
} else {
    $playerCookies = json_decode($_COOKIE["memoryPlayers"]);
    array_push($playerCookies, $info);
}

usort($playerCookies, function($a, $b) {
    return $b[1] <=> $a[1];
});

$JSONData = json_encode($playerCookies);
setcookie("memoryPlayers", $JSONData, time() + 31556926 /* 1 year in seconds */);

echo "<script>window.location.href = \"/hallOfFame.php\"</script>"
?>