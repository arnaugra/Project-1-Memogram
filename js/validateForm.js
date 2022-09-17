/**
 * create or delete the "name" fields according to the amount indicated in the select
 */
function players() {
    // place to put the fields and number of players value
    const fieldsDiv = document.querySelector(".nameFields");
    const players = document.querySelector("#nPlayers");
    const nPlayers = players.options[players.selectedIndex].value;

    // create element to insert and assign attributes
    const p = document.createElement("input");
    p.setAttribute("type", "text");
    p.setAttribute("name", "player");
    p.setAttribute("id", "player");
    p.setAttribute("placeholder", "Nom jugador");

    // create element to each posible player
    const p1 = p.cloneNode();
    p1.id = "player1";
    p1.name = "player1";
    p1.placeholder = "Nom jugador 1";
    const p2 = p.cloneNode();
    p2.id = "player2";
    p2.name = "player2";
    p2.placeholder = "Nom jugador 2";
    const p3 = p.cloneNode();
    p3.id = "player3";
    p3.name = "player3";
    p3.placeholder = "Nom jugador 3";
    const p4 = p.cloneNode();
    p4.id = "player4";
    p4.name = "player4";
    p4.placeholder = "Nom jugador 4";

    fieldsDiv.innerHTML = "";

    // create the fields for the number of players assigned
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

/**
 * validate the correct situation of the form before sending the data
 */
function validate() {
    // variable to refer the form data
    const form = document.forms["configForm"];

    // check if no number of players is selected
    if (form["nPlayers"].value == "") {
        
        // and alert us of it if we didn't select anything
        alert("ERROR D'ENTRADA: \n\n - Has de seleccionar com a minim 1 jugador");
    } else {
        
        // or proceed to verify the input information
        const names = document.querySelector(".nameFields").childNodes;
        const data = {
            "name": [form["player1"].value],
            "category": form["category"].value,
            "board": form["boardSize"].value
        }

        var correct = true;
        var change = "ERROR D'ENTRADA: \n\n";

        if (form['player1'].value == "") {
            change += " - El jugador 1 no pot estar en blanc\n";
            correct = false;
        }

        var num = 2;
        if (names.length > 1) {
            names.forEach(element => {
                if (names[0] !== element) {
                    data.name.push(element.value);
                    if (element.value == "") {
                        change += " - El jugador " + num + " no pot estar en blanc\n";
                        correct = false;
                        num++;
                    }
                }
            });
        }

        // check if the input data is valid
        if (correct) {
            // and submit the form
            form.submit();

        } else {
            // or alert the error message
            alert(change)
        }
    }

}
