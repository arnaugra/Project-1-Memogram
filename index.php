<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Arnau Granados58542698426</title>

    <link rel="stylesheet" href="css/style.css">

</head>

<body>
    <div class="container">
        <div class="section">
            <h1>Memory</h1>
            <p>Arnau Granados - 2n DAW Cendrassos</p>
            <h2><code>Configuració</code></h2>
        </div>
        <div class="section config">

            <form action="php/main.php" method="get" onsubmit="">

                <div class="sectionArticle players">
                    <!-- nPlayers -->
                    <div class="nPlayer">
                        Jugadors:
                        <select name="nPlayers" id="nPlayers">
                            <option value="one">1</option>
                            <option value="two">2</option>
                            <option value="three">3</option>
                            <option value="four">4</option>
                        </select>
                    </div>
                </div>

                <div class="sectionArticle category">
                    <!-- category -->
                    <div class="category">
                        Categoría:
                        <select name="category" id="category">
                            <option value="one">Gossos</option>
                            <option value="two">Ànecs</option>
                        </select>
                    </div>
                </div>

                <div class="sectionArticle">
                    <!-- boardSice -->
                    <p>Cartes:</br> <code>Ha de ser un valor parell</code></p>
                    <span>Eix X:</span>
                    <input type="number" name="xAxis" id="X" class="infoAxis" min="2" max="5">
                    <span> x </span>
                    <span>Eix Y:</span>
                    <input type="number" name="yAxis" id="Y" class="infoAxis" min="2" max="5">
                </div>

                <div class="sectionArticle">
                    <!-- button -->
                    <input type="button" value="Començar" class="button" />
                </div>

            </form>

            <div class="sectionArticle">
                <!-- button -->
                <a href="hallOfFame.php">
                    <input type="button" value="Saló de la Fama" class="button" />
                </a>
            </div>

        </div>
    </div>
</body>

</html>