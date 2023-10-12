import { triggers, replies, alternatives } from "./constantes.js";

document.addEventListener('DOMContentLoaded', () => {

    const inputField = document.querySelector('#input');

    inputField.addEventListener('keydown', (event) => {

        // Si on appuie sur la touche entrée
        if (event.code === "Enter") {

            // Récupère la valeur de l'input
            let input = inputField.value;
            document.getElementById("user").innerHTML = input;
            output(input);
        };
    });

    function output(input) {
        let product;
        let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
        document.getElementById('chatbot').innerHTML = product;
        speak(product);

        document.getElementById("input").value = "";
        text = text
            .replace(/ a /g, " ")
            .replace(/i feel /g, "")
            .replace(/whats/g, "what is")
            .replace(/please /g, "")
            .replace(/ please/g, "")

        if (compare(trigger, reply, text)) {
            // recherche pour une correspondance dans trigger
            product = compare(trigger, reply, text);

        } else if (text.match(/robot/gi)) {
            product = robot[Math.floor(Math.random() * robot.length)];
        } else {
            product = alternative[Math.floor(Math.random() * alternative.length)];
        }

        addChat(input, product);
    }
    
    const robot = ["How do you do Human ?"]

   

    function compare(triggerArray, replyArray, text) {
        let item;
        for (let x = 0; x < triggerArray.length; x++) {
            for (let y = 0; y < replyArray.length; y++) {
                if(triggerArray[x][y] === text) {
                    items = replyArray[x];
                    item = items[Math.floor(Math.random()* items.length)];
                }
            }
        }
        return item;
    }
});