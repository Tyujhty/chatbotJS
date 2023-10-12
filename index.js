
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('#input');
    inputField.addEventListener('keydown', function (e) {
        if (e.code === "Enter") {
            console.log("Vous avez cliqué sur le formulaire et pressé Entrer")
        };
    });
});