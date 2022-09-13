function validate() {
    const form = document.forms["configForm"];
    const names = document.querySelector(".nameFields").childNodes;
    const data = {
        "name" : [form["player1"].value],
        "category" : form["category"].value,
        "board" : form["boardSize"].value
    }
    console.log(typeof(data.board));

    var correct = true;
    var change = "ERROR D'ENTRADA: \n\n";

    console.log(names);
    var num = 1;
    names.forEach(element => {

        data.name.push(element.value);
        if (element.value == "") {
            change += " - El jugador " + num + " no pot estar en blanc\n";
            correct = false;
            num++;
        }
    });

    if (correct) {

    console.table(data)
        alert("!")
        form.submit();

    } else {
        var a = document.createElement("hr")
        alert(change)
    }

}

function players() {
    const fieldsDiv = document.querySelector(".nameFields");
    const players = document.querySelector("#nPlayers");
    const nPlayers = players.options[players.selectedIndex].value;

    const p1 = document.querySelector("#player1");
    p1.value = "";

    const p2 = p1.cloneNode();
    p2.id = "player2";
    p2.name = "player2";
    p2.placeholder = "Nom jugador 2";

    const p3 = p1.cloneNode();
    p3.id = "player3";
    p3.name = "player3";
    p3.placeholder = "Nom jugador 3";

    const p4 = p1.cloneNode();
    p4.id = "player4";
    p4.name = "player4";
    p4.placeholder = "Nom jugador 4";

    fieldsDiv.innerHTML = '';

    switch (nPlayers) {
        case "1":
            fieldsDiv.appendChild(p1);
            break;
        case "2":
            fieldsDiv.appendChild(p1);
            fieldsDiv.appendChild(p2);
            break;
        case "3":
            fieldsDiv.appendChild(p1);
            fieldsDiv.appendChild(p2);
            fieldsDiv.appendChild(p3);
            break;
        case "4":
            fieldsDiv.appendChild(p1);
            fieldsDiv.appendChild(p2);
            fieldsDiv.appendChild(p3);
            fieldsDiv.appendChild(p4);
            break;

        default:
            break;
    }
}

