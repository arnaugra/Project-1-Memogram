<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Arnau Granados</title>

    <link rel="stylesheet" href="css/pico.css">
    <link rel="stylesheet" href="css/mine.css">
    
    <script type="text/javascript">
        const boardSize = "<?php echo$_GET['boardSize'] ?>";
        const cat = "<?php echo$_GET['category'] ?>";
    </script>

    <script src="js/game.js"></script>

</head>

<?php
echo "nombre jugadors:" . $_GET["nPlayers"] . " || ";
echo "nom1:" . $_GET["player1"] . " || ";
echo "nom2:" . $_GET["player2"] . " || ";
echo "nom3:" . $_GET["player3"] . " || ";
echo "nom4:" . $_GET["player4"] . " || ";
echo "categoría:" . $_GET["category"] . " || ";
echo "id taulell:" . $_GET["boardSize"] . " ";
?>

<?php
$players = array();
if ($_GET["player1"] != null) {
    $players[] = $_GET['player1'];
}
if ($_GET["player2"] != null) {
    $players[] = $_GET['player2'];
}
if ($_GET["player3"] != null) {
    $players[] = $_GET['player3'];
}
if ($_GET["player4"] != null) {
    $players[] = $_GET['player4'];
}
?>

<body>
    <div class="container">
        <div class="section">
            <h1>Memory: <code>Joc</code></h1>
        </div>
        <div class="section">
            <h2>Jugador
                <!-- <?php echo $_GET["player"]; ?> -->: <span id="time">Temps</span>
            </h2>
            <p>torn: <span id="turn">temps</span> - Puntuació: <span id="score">punts</span></p>
        </div>
        <div class="section">


            <div class="sectionArticle board">
                <!-- <div class="row">
                    <img src="img/dog/dog1.jpg" alt="test" class="card">
                    <img src="img/test.jpg" alt="test" class="card">
                    <img src="img/test.jpg" alt="test" class="card">
                    <img src="img/test.jpg" alt="test" class="card">
                    <img src="img/test.jpg" alt="test" class="card">
                </div>
                <div class="row">
                    <img src="img/test.jpg" alt="test" class="card">
                    <img src="img/duck/duck1.jpg" alt="test" class="card">
                    <img src="img/test.jpg" alt="test" class="card">
                    <img src="img/test.jpg" alt="test" class="card">
                    <img src="img/test.jpg" alt="test" class="card">
                </div> -->
            </div>


        </div>

        <div class="section">
            <a href="index.html">
                <input type="button" value="Inici" class="home" />
            </a>
        </div>
    </div>

</body>

</html>