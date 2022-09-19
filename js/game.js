var x;
var y;
var totalCards;
var classClicked = [];
var idClicked = [];
var totalMatch = 0;
var actualPlayer = 0;
var controlStart = false;

//#region player system

/**
 * player object
 * @constructor
 * @param {string} name - Name of the player
 */
class playerObj {
    constructor(name) {
        this.name = name;
        this.time = 0;
        this.turns = 0;
        this.points = 0;
    }
}

// define and declare every posible player
var player1;
var player2;
var player3;
var player4;
var players = [];

var playerIndex = 0;
names.forEach(element => {
    if (element != null) {
        players.push(new playerObj(element))
    }
});

shuffleArray(players);

//#endregion

//#region actual player management

/**
 * change to the next player when the actual one fails the game taking into account the number of players indicated 
 */
function changePlayer() {
    if (nPlayers > 1) {

        if (actualPlayer == 0) {
            actualPlayer = 1;

        } else if (actualPlayer == 1) {
            actualPlayer = 2;

            if (nPlayers == 2) {
                actualPlayer = 0;
            }

        } else if (actualPlayer == 2) {
            actualPlayer = 3;

            if (nPlayers == 3) {
                actualPlayer = 0;

            }

        } else if (actualPlayer == 3) {
            actualPlayer = 0;

            if (nPlayers == 3) {
                actualPlayer = 0;

            }

        }

    }
    playerList();
}

//#endregion

//#region load screen/board with form data

/**
 * when loads the page:
 *  - 1 create different "hud" elements
 *  - 2 set the number of cards of the board
 *  - 3 create the board following the size indicated
 */
window.onload = function () {
    console.warn("No vulguis fer trampes 😡");

    // JSDoc (1)
    playerList();
    currentPlayer();

    const myBoard = document.querySelector(".board");
    myBoard.innerHTML = "";

    x = 0;
    y = 0;

    // JSDoc (2)
    switch (boardSize) {
        case "1":
            x = 3;
            y = 2;
            totalCards = 6;
            break;
        case "2":
            x = 4;
            y = 3;
            totalCards = 12;
            break;
        case "3":
            x = 5;
            y = 4;
            totalCards = 20;
            break;
        default:
            alert("Aixó ha petat :\n - game.js/board/switch/default")
            break;
    }

    var indexId = 0;

    //JSDoc (3)
    for (let i = 0; i < y; i++) {
        const newRow = document.createElement("div")
        newRow.setAttribute("class", "row");
        for (let j = 0; j < x; j++) {
            const image = document.createElement("div");
            image.setAttribute("id", indexId);
            image.classList.add("card");
            indexId++;
            newRow.appendChild(image);
        }
        myBoard.appendChild(newRow)
    }

    cards();
}
//#endregion

//#region assign images

/**
 * fills the board with images
 *  - 1 generates an array of the number of the image to insert
 *  - 2 generate an array of ids from the places in the board to fill
 *  - 3 mix the ids
 *  - 4 in a new array, match the ids with the images
 *  - 5 puts the images in each assigned position (opaciti 0 with css)
 */
function cards() {
    var cards = document.querySelectorAll(".card");
    const imageCards = new Array()
    const idCards = new Array()

    // JSDoc (1)
    for (let i = 0; i < totalCards / 2; i++) {
        while (true) {
            var image = rand(10, 1);
            if (imageCards.includes(image)) {
                continue;
            } else {
                imageCards.push(image);
                break;
            }
        }
    }

    // JSDoc (2)
    for (let i = 0; i < totalCards; i++) {
        idCards.push(i);
    }

    // JSDoc (3)
    shuffleArray(idCards)

    // JSDoc (4)
    var final = [];
    var extra = 0;
    for (let i = 0; i < imageCards.length; i++) {
        final[i] = [];
        final[i].push(imageCards[i]);
        final[i][1] = [];
        final[i][1].push(idCards[extra]);
        extra++;
        final[i][1].push(idCards[extra]);
        extra++;
    }

    var ids = 0;

    // JSDoc (5)
    for (let i = 0; i < final.length; i++) {
        const place = document.getElementById(final[i][1][0]);
        const image = document.createElement("img");
        image.setAttribute("src", "img/" + cat + "/" + cat + final[i][0] + ".jpg");
        image.setAttribute("onclick", "cardClick(this)");
        image.classList.add("card" + i);
        image.id = "c" + ids;
        place.appendChild(image);
        ids++;

        const place2 = document.getElementById(final[i][1][1]);
        const image2 = document.createElement("img");
        image2.setAttribute("src", "img/" + cat + "/" + cat + final[i][0] + ".jpg");
        image2.setAttribute("onclick", "cardClick(this)");
        image2.classList.add("card" + i);
        image2.id = "c" + ids;
        place2.appendChild(image2);
        ids++;
    }
}
//#endregion

//#region click control
console.warn("COMENTA ESTO");
/**
 * 
 * @param {HTMLElement} card - Image clicked
 */
function cardClick(card) {
    if (!controlStart) {
        countDown();
        controlStart = true;
    }
    if (classClicked.length != 2) {
        classClicked.push(card.getAttribute("class"));
        idClicked.push(card.getAttribute("id"));
        card.style.opacity = "1";
        card.removeAttribute("onclick");
    }

    if (classClicked.length == 2) {

        if (classClicked[0] == classClicked[1]) {
            classClicked = [];
            idClicked = [];
            players[actualPlayer].points++;
            totalMatch += 2;
            document.querySelector("#time").innerHTML = turnTime;
        } else {
            players[actualPlayer].turns++;
            document.querySelector("#time").innerHTML = turnTime;
            setTimeout(() => {
                cardFail();
                card.setAttribute("onclick", "cardClick(this)");
                card.style.opacity = "0";
            }, 500);
            changePlayer();
        }
    }
    playerList();
    currentPlayer();

    // wining
    if (totalMatch == totalCards) {
        stopCountDown();
        console.log("The end.");
        var clapping = new Audio("/audio/clapping.wav")
        clapping.volume = 0.1;
        clapping.play();
        createCookies(players[actualPlayer].name, players[actualPlayer].time, players[actualPlayer].turns, players[actualPlayer].points);
        setTimeout(() => {
            window.location.pathname = ("/hallOfFame.php")
        }, 9000);
    }
}
//#endregion

var timer;
/**
 * counter for each turn of each player
 */
function countDown() {
    if (turnTime > 0) {
        timer = setInterval(myTimer, 1000);

        function myTimer() {
            var actualTime = parseInt(document.querySelector("#time").textContent);
            document.querySelector("#time").innerHTML = parseInt(actualTime) - 1;
            players[actualPlayer].time++;
            playerList();

            if (actualTime < 1) {
                document.querySelector("#time").innerHTML = turnTime;
                players[actualPlayer].turns++;
                changePlayer();
                currentPlayer();
            }
        }

    }
}

/**
 * stops the counter for each turn of each player
 */
function stopCountDown() {
    clearInterval(timer);
}

/**
 * set the current player's stats to large to make them more noticeable
 */
function currentPlayer() {
    const name = document.querySelector("#player");
    const turn = document.querySelector("#turn");
    const score = document.querySelector("#score");

    name.innerHTML = players[actualPlayer].name;
    turn.innerHTML = players[actualPlayer].turns;
    score.innerHTML = players[actualPlayer].points;
}

/**
 * update the player status list (all of them)
 */
function playerList() {
    const playerNames = document.querySelector(".allPlayers");
    playerNames.innerHTML = "";
    if (nPlayers > 1) {
        for (let i = 0; i < nPlayers; i++) {
            var playerDiv = document.createElement("div");
            var playerCode = document.createElement("code");
            playerCode.setAttribute("class", "container-fluid")
            playerCode.innerHTML = players[i].name + " : " + players[i].turns + " torns | " + players[i].points + " punts | " + players[i].time + "s";
            playerDiv.appendChild(playerCode);
            playerNames.appendChild(playerDiv);
        }
    }
}

/**
 * mix the desired array
 * @param {Array} array - array to mix
 */
function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
}

/**
 * generates a random number
 * @param {Number} dividend 
 * @param {Number} divider 
 * @returns number result of dividend/divider
 */
function rand(dividend, divider) {
    return Math.ceil(Math.random() * (dividend / divider));
}

/**
 * return the selected card to the origin when a player doesn't click another in their turn
 */
function cardFail() {
    var firstCard = document.getElementById(idClicked[0])
    firstCard.setAttribute("onclick", "cardClick(this)");
    firstCard.style.opacity = "0";
    classClicked = [];
    idClicked = [];
}

/**
 * COOKIES
 */
function createCookies(name, time, turns, points) {
    var date = new Date();
    document.cookie = "name=" + name; "time=" + time; "turns=" + turns; "points=" + points; "jugadors=" + nPlayers; "expires=" + date.setFullYear(date.getFullYear() + 10);
}
 