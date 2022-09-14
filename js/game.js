window.onload = function () {
    console.warn("No vulguis fer trampes 😡");

    const myBoard = document.querySelector(".board");

    var x = 0;
    var y = 0;

    switch (boardSize) {
        case "1":
            x = 3;
            y = 2;
            break;
        case "2":
            x = 4;
            y = 3;
            break;
        case "3":
            x = 5;
            y = 4;
            break;
        default:
            alert("Aixó ha petat :\n - game.js/board/switch/default")
            break;
    }

    var indexId = 0;
    myBoard.innerHTML = "";

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
    console.log(cards);



    cards.forEach(element => {
        element.attribute
    });
}

