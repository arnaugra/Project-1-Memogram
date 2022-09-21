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

//#region load screen with form data

/**
 * when loads the page create different "hud" elements
 */
window.onload = function () {
    totalCards = document.querySelectorAll(".card");
    console.warn("No vulguis fer trampes 😡");

    // JSDoc (1)
    playerList();
    currentPlayer();
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
            console.log("goal");
            classClicked = [];
            idClicked = [];
            players[actualPlayer].points++;
            totalMatch += 2;
            document.querySelector("#time").innerHTML = turnTime;
        } else {
            console.log("fail");
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
    if (totalMatch == totalCards.length) {
        stopCountDown();
        console.log("yay");
        orderObjects();
        var clapping = new Audio("/audio/clapping.wav")
        clapping.volume = 0.1;
        clapping.play();
        setTimeout(() => {
            fillFormWinner(players[actualPlayer]);
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
    for (let i = 0; i < nPlayers; i++) {
        var playerDiv = document.createElement("div");
        var playerCode = document.createElement("code");
        playerCode.setAttribute("class", "container-fluid")
        playerCode.innerHTML = players[i].name + " : " + players[i].turns + " torns | " + players[i].points + " punts | " + players[i].time + "s";
        playerDiv.appendChild(playerCode);
        playerNames.appendChild(playerDiv);
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
 * form to send the winner info and create the cookies
 */
function fillFormWinner(winner) {
    var date = new Date();
    const form = document.forms['scoreBoardForm'];
    form[0].value = winner.name;
    form[1].value = winner.points;
    form[2].value = winner.time;
    form[3].value = winner.turns;
    form.submit();
}

/**
 * sort the players in score descending in order to send the winner to the hall of fame
 */
function orderObjects() {
    const results = new Map();
    for (let i = 0; i < players.length; i++) {
        results.set(i, players[i].points);
    }
    let max;

    for (let [key, value] of results.entries()) {
        if (value === Math.max(...results.values())) {
            max = key;
        }
    }
    actualPlayer = max;
}