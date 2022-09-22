<?php
$info = [$_GET["name"],$_GET["points"],$_GET["time"],$_GET["turns"], $_GET["gameTime"]];

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