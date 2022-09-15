
var x;
var y;
var totalCards;


window.onload = function () {
    console.warn("No vulguis fer trampes 😡");

    const myBoard = document.querySelector(".board");
    myBoard.innerHTML = "";

    x = 0;
    y = 0;

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

function cards() {
    var cards = document.querySelectorAll(".card");
    const imageCards = new Array()
    const idCards = new Array()

    for (let i = 0; i < totalCards / 2; i++) {
        while (true) {
            var image = rand(undefined, undefined);
            if (imageCards.includes(image)) {
                continue;
            } else {
                imageCards.push(image);
                break;
            }
        }
    }
    for (let i = 0; i < totalCards; i++) {
        idCards.push(i);
    }

    shuffleArray(idCards)

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

    /* console.log(imageCards);
    console.log(idCards);
    console.log(final)
    console.log(final[0][1][0])
    console.log(final[0][1][1]) */

    var ids = 0;

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

var classClicked = [];
var idClicked = [];
var totalMatch = 0;

function cardClick(card) {
    if (classClicked.length != 2) {
        classClicked.push(card.getAttribute("class"));
        idClicked.push(card.getAttribute("id"));
        card.style.opacity = "1";
        card.removeAttribute("onclick");

        if (classClicked.length == 2) {

            if (classClicked[0] == classClicked[1]) {
                classClicked = [];
                idClicked = [];
                totalMatch += 2;

            } else {
                setTimeout(() => {
                    var firstCard = document.getElementById(idClicked[0])
                    firstCard.setAttribute("onclick", "cardClick(this)");
                    firstCard.style.opacity = "0";
                    card.setAttribute("onclick", "cardClick(this)");
                    card.style.opacity = "0";
                    classClicked = [];
                    idClicked = [];
                }, 1000);
            }
        }

        if (totalMatch == totalCards) {
            var clapping = new Audio("/audio/clapping.wav").play();
            setTimeout(() => {
                endGame()
            }, 5000);
        }
    }
}

function endGame() {
    alert('fin')
}

function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
}

function rand(x = 10, y = 1) {
    return Math.ceil(Math.random() * (x / y));
}
