<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Arnau Granados</title>

    <link rel="stylesheet" href="css/pico.css">
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
                    </tr>
                    <tr>
                        <td>yo</td>
                        <td>yo</td>
                        <td>yo</td>
                        <td>yo</td>
                        <td>yo</td>
                    </tr>
                    <tr>
                        <td>yo</td>
                        <td>yo</td>
                        <td>yo</td>
                        <td>yo</td>
                        <td>yo</td>
                    </tr>
                    <tr>
                        <td>yo</td>
                        <td>yo</td>
                        <td>yo</td>
                        <td>yo</td>
                        <td>yo</td>
                    </tr>
                    <tr>
                        <td>yo</td>
                        <td>yo</td>
                        <td>yo</td>
                        <td>yo</td>
                        <td>yo</td>
                    </tr>
                    <tr>
                        <td>yo</td>
                        <td>yo</td>
                        <td>yo</td>
                        <td>yo</td>
                        <td>yo</td>
                    </tr>
                </table>

                <?php

                foreach ($_COOKIE as $i => $value) {
                ?>
                    <p>
                        <?php echo $i . "= " . $value; ?>
                    </p>
                <?php
                };

                ?>

            </div>

        </div>

        <div class="section">
            Arnau Granados - 2.DAW Cendrassos 2022/2023
        </div>

    </div>
</body>

</html>