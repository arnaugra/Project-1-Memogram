<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Arnau Granados</title>

    <link rel="stylesheet" href="css/pico.css">
    <link rel="stylesheet" href="css/mine.css">
    
    <script>
        const nPlayers = "<?php echo $_GET['nPlayers'] ?>";
        const cat = "<?php echo $_GET['category'] ?>";
        const boardSize = "<?php echo $_GET['boardSize'] ?>";
        const name1 = "<?php echo $_GET['player1'] ?>";
        const name2 = "";
        const name3 = "";
        const name4 = "";
        const names = [name1];
        for (let i = 2; i <= (parseInt(nPlayers)); i++) {
            if (i == 2) {
                names.push("<?php echo @$_GET['player2']?>")
            }
            if (i == 3) {
                names.push("<?php echo @$_GET['player3']?>")
            }
            if (i == 4) {
                names.push("<?php echo @$_GET['player4']?>")
            }
        }
    </script>

    <script src="js/game.js"></script>

</head>

<body>
    <div class="container">
        <div class="section">
            <h1><a href="index.html">Memory:</a> <code>Joc</code></h1>
        </div>
        <div class="section">
            <h2><span id="player">Jugador: </span><span id="time">Temps</span></h2>
            <p>Torn: <span id="turn">Torn</span> - Puntuació: <span id="score">punts</span></p>
        </div>
        <div class="section">


            <div class="sectionArticle board">
                <div class="row">
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
                </div>
            </div>


        </div>

        <div class="section">
            Arnau Granados - DAW Cendrassos 2022/2023
        </div>

    </div>

</body>

</html>