<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Memory Arnau Granados</title>

    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
    <link rel="stylesheet" href="css/mine.css">

    <script>
        const nPlayers = "<?php echo $_GET['nPlayers'] ?>";
        const cat = "<?php echo $_GET['category'] ?>";
        const boardSize = "<?php echo $_GET['boardSize'] ?>";
        const turnTime = <?php echo $_GET['turnTime'] ?>;
        const name1 = "<?php echo $_GET['player1'] ?>";
        const name2 = "";
        const name3 = "";
        const name4 = "";
        const names = [name1];
        for (let i = 2; i <= (parseInt(nPlayers)); i++) {
            if (i == 2) {
                names.push("<?php echo @$_GET['player2'] ?>")
            }
            if (i == 3) {
                names.push("<?php echo @$_GET['player3'] ?>")
            }
            if (i == 4) {
                names.push("<?php echo @$_GET['player4'] ?>")
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
        <div class="section hud grid">
            <div class="principalPlayer grid">
                <div class="headings">
                    <h3><span id="player"></span>: <span id="time"><?php echo $_GET['turnTime'] ?></span> s</h3>
                    <h4>Torn: <span id="turn"></span> - Puntuació: <span id="score"></span></h4>
                </div>
                <div class="headings">
                    <h3>Temps total:</h3>
                    <h3><span id="totalTime">0</span> s</h3>
                </div>
            </div>
            <div class="section allPlayers">

            </div>
        </div>
        <div class="section">

            <div class="sectionArticle board">

                <?php
                /* #region card assign */

                $x;
                $y;
                $totalCards = 0;
                switch ($_GET['boardSize']) {
                    case '1':
                        $x = 3;
                        $y = 2;
                        $totalCards = 6;
                        break;
                    case '2':
                        $x = 4;
                        $y = 3;
                        $totalCards = 12;
                        break;
                    case '3':
                        $x = 5;
                        $y = 4;
                        $totalCards = 20;
                        break;

                    default:
                        echo "Aixó ha petat - switch/default";
                        break;
                }

                $imageCards = array();
                $idCards = array();
                for ($i = 0; $i < $totalCards / 2; $i++) {
                    while (true) {
                        $image = rand(1, 10);
                        if (in_array($image, $imageCards)) {
                            continue;
                        } else {
                            array_push($imageCards, $image);
                            array_push($imageCards, $image);
                            break;
                        }
                    }
                }
                shuffle($imageCards);

                for ($i = 0; $i < $totalCards; $i++) {
                    array_push($idCards, $i);
                }

                shuffle($idCards);

                $index = 0;
                for ($i = 0; $i < $y; $i++) {
                    echo "<div class='row'>";
                    for ($j = 0; $j < $x; $j++) {
                        echo "<div id='$index' class='card'>";

                        echo "<img src=\"img/" . $_GET['category'] . "/" . $_GET['category'] . $imageCards[$index] . ".jpg\" onclick=\"cardClick(this)\" class=\"card" . $imageCards[$index] . "\" id=\"c" . $idCards[$index] . "\">";

                        echo "</div>";
                        $index++;
                    }
                    echo "</div>";
                }
                /* #endregion */




                ?>
            </div>

        </div>

        <div class="section">
            Arnau Granados - 2.DAW Cendrassos 2022/2023
        </div>

    </div>

    <div class="hidden">
        <form action="stupidForm.php" method="get" id="scoreBoardForm">
            <input type="text" name="name">
            <input type="text" name="points">
            <input type="text" name="time">
            <input type="text" name="turns">
            <input type="text" name="gameTime">
        </form>
    </div>

    </div>

</body>

</html>