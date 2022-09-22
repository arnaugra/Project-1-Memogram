<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Memory Arnau Granados</title>

    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
    <link rel="stylesheet" href="css/mine.css">

</head>

<body>

    <div class="container">
        <div class="section">
            <h1><a href="index.html">Memory:</a> <code>Saló de la Fama</code></h1>
        </div>
        <div class="section">

            <div class="sectionArticle rankList">
                <table role="grid">
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Punts</th>
                        <th>Temps</th>
                        <th>Torns</th>
                        <th>Temps de joc</th>
                    </tr>

                    <?php

                    if (!isset($_COOKIE["memoryPlayers"])) {
                        echo "</table>";
                        echo "<kbd> Encara no s'ha jugat res</kbd>";
                    } else {
                    $cookie = json_decode($_COOKIE["memoryPlayers"]);
                    $index = 1;

                    for ($i = 0; $i < count($cookie) + 4; $i++) {
                        if ($i > 9 || $cookie[$i] == "") {
                            break;
                        }
                        echo "<tr>";
                        echo "<td>$index</td>";
                        $index++;
                        for ($j = 0; $j < count($cookie[$i]); $j++) {
                            echo "<td>" . $cookie[$i][$j] . "</td>";
                        }
                    }
                    echo "</table>";
                    }
                    

                    
                    ?>


            </div>

        </div>

        <div class="section">
            Arnau Granados - 2.DAW Cendrassos 2022/2023
        </div>

    </div>
</body>

</html>