document.addEventListener('DOMContentLoaded', () => {

    const inputField = document.querySelector('#input');

    inputField.addEventListener('keydown', (event) => {

        // Si on appuie sur la touche entrée
        if (event.code === "Enter") {

            // Récupère la valeur de l'input
            let input = inputField.value;
            inputField.value = "";
            output(input);
        };
    });

    function output(input) {

        let product;

        //Regex supprime caractères spéciaux
        // Tous les espaces
        // Les digitaux
        // Les espaces vides en début et fin (trim)
        let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "").trim();

        text = text
            .replace(/ a /g, " ")
            .replace(/i feel /g, "")
            .replace(/whats/g, "what is")
            .replace(/please /g, "")
            .replace(/ please/g, "")
            .replace(/r u/g, "are you");

        if (compare(triggers, replies, text)) {
            // recherche pour une correspondance dans trigger
            product = compare(triggers, replies, text);

        } else if (text.match(/thank/gi)) {
            product = "You're welcome !"

        } else {
            product = alternatives[Math.floor(Math.random() * alternatives.length)];
        }

        addChat(input, product);
    }
    
    function compare(triggersArray, repliesArray, text) {
        let reply;
        let replyFound = false;

        for (let x = 0; x < triggersArray.length; x++) {
            for (let y = 0; y < triggersArray.length; y++) {
                if(triggersArray[x][y] === text) {
                    let replies = repliesArray[x];
                    reply = replies[Math.floor(Math.random()* replies.length)];
                    replyFound = true;

                    break;
                }
            }
        }
        return reply;
    }

    function addChat(input, product) {
        const messageContainer = document.getElementById("messages");

        let userContainer = document.createElement("div");
        userContainer.id = "user";
        userContainer.className = "user p-2 w-full bg-[#071952] text-[#F2F7A1] rounded-md mt-2";
        userContainer.innerHTML = `
            <i class="fa-solid fa-user"></i>
            <span class = "font-semibold ml-2 text-lg">${input}</span>`;
        messageContainer.appendChild(userContainer);

        let botContainer = document.createElement("div");
        let botAvatar = document.createElement("i");
        let botText = document.createElement("span");
        botContainer.id = "bot";
        botContainer.className = "bot p-2 w-full bg-[#35A29F] text-[#F2F7A1] rounded-md font-semibold text-lg mt-2 ";
        botAvatar.className = "fa-solid fa-robot mr-2"
        botText.innerText = 'En train de taper...';
        botContainer.appendChild(botAvatar);
        botContainer.appendChild(botText);
        messageContainer.appendChild(botContainer);

        messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;

        setTimeout(() => {
            botText.innerText = `${product}`;

        }, 2000
        )
    }

});