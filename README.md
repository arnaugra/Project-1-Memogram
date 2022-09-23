***

# Planning

1. I've started by creating the home page statically, followed by the Hall of Fame and the game "board".

2. I created the form validation, the preparation of the listed players and the card system.

3. With Pico CSS I changed the default HTML style to a modern and minimalist one.

4. I created the game mechanics.

5. I applied the mechanics of turns, expired moves and lost moves of each player.

6. I applied the timer, take into account the start of the turn, when you score, do not complete moves in the turn, miss or do not participate.

7. I fixed all the problems that point 6 caused me.

8. I created the cookie for the winner with all game stats showing the first 10 players.

9. I had to change my board building system to php, now it does the same. But with php.

***

# Requirements

The program must be run on a web server, supported by php software, it is a memory game, where it asks for data through a form to adapt the game to the player's demand, and once finished the game, pick up the status of the actual player and add it tho the cookie data to be displayed in the hall of fame.

Needs a modern browser to be able to execute PHP8+ and JSES6 (no IE6...).

***

# Functional tests

![Message while trying to validate the form whitout players](noNumberOfPlayers.jpg) Test #1 : Unselected Amount of players.

![Message while trying to validate the form whit some player fields empty](someNameFieldsEmpty.jpg) Test #2 : Some players missing the name.

> `Due to the structure of the form, all the other fields have fixed values, and their modification in the link of the game.php tab can give visible errors and prevent the correct development of the game`
>![Trying to modify the link values](modifyingLink.jpg) Test #3 : Example of trying to modify the boardSize value in the `game.php` link.

![Hall of fame full (10 scores)](fullHallOfFame.jpg) Test #4 : Hall of fame of top ten scores.

![Hall of fame empty](emptyHallOfFame.jpg) Test #4 : Hall of fame of top ten scores.

***




































































































# Parts del projecte
Control de versions 
 - Crear un repositori a GitHub i compartir-lo amb l’equip docent 

 - Crear un repositori local i vincular-lo amb el remot 

Servidor web 
> - Crear una màquina virtual amb un servidor web 

> - Executar l’aplicació en el servidor 

 - Validació de les dades del formulari inicial 

 - Desar la informació quan es finalitza una partida en COOKIES (Nom del jugador, punts). 

 - Generar un llistat (hall-of-fame) amb la informació desada a les COOKIES en entorn de servidor. 

Aplicació 
 - Crear un formulari que demani les dades inicials del joc. 

 - A partir de les dades del formulari, generar la pantalla d’inici des de l’entorn de servidor. 

 - Crear una graella on mostrarem les cartes. Cada element serà interactiu i a partir d’un event, generarà l’acció corresponent. 

 - Mostrarem les següents dades per pantalla: 
   - Número de torn. 
   - Quin és el jugador que li toca jugar. 
   - Puntuació actual de cada jugador. 
   - El temps restant del torn (si està activat).. 

 - Crear una pàgina de classificació amb un llistat dels Jugadors ordenats per punts. 

 - Crear un full d’estils únic per tot el projecte. 

>> - Opcional: Aplicar animacions CSS3 per dotar d’efectes les cartes. 

>> - Opcional 2: Afegir un “Easter Egg” en que un usuari introdueix una combinació especial amb el teclat (paraula, codi Konami…) durant la partida, i llavors el joc li mostra la solució (per consola), li canvia el nom per “CHEATER” i no es desa la puntuació.


Documentació 
 - Planificació 
 - Requisits 
 - Tests de funcionament 
 - Millores 
 - Documentar el codi 
 
# Etapes 
## Etapa 1 

Navegació web http a projecte 

Portada del joc i accés al formulari inicial 

Planificació del projecte 

Anàlisi de requisits 

El Git instal·lat 

El repositori local del projecte 

## Etapa 2 

Validació del formulari i càrrega de la interfície del joc (sense que funcioni) 

Maquetació del prototip en funcionament 

Crear un repositori a Github i vincular el repositori local

## Etapa 3 

Implementació del joc (que es pugui jugar correctament) 

Mostra de la pàgina de classificació a partir de les dades de la cookie. 

Implementar les correccions 

## Etapa 4 

Incorporat el temporitzador dels torns 

Proves de funcionament 

>Generar automàticament la documentació del codi 

Implementar les correccions 
