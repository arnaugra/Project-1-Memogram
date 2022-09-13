window.onload = function() {
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

    for (let i = 0; i < y; i++) {

        const newRow = document.createElement("div")
        newRow.setAttribute("class", "row");

        for (let j = 0; j < x; j++) {

            const image = document.createElement("img")
            image.setAttribute("src", "img/test.jpg");
            image.classList.add("card");

            newRow.appendChild(image);
        }
        myBoard.appendChild(newRow)
    }

    cards();

}