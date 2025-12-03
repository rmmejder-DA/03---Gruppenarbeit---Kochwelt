document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("portionInput")
    const button = document.getElementById("portionButton")
    const listItems = document.querySelectorAll("#zutatenListe li[data-base]")

    function calc() {
        let portionen = parseFloat(input.value.replace(",", "."))

        if (isNaN(portionen) || portionen < 0) {
            portionen = 0;
            input.value = 0;
        }
        listItems.forEach((item) => {
            const basiswert = parseFloat(item.getAttribute("data-base"));
            const amountspan = item.querySelector(".amount");

            if (amountspan) {
                let newValue = basiswert * portionen;
                newValue = Math.round(newValue * 100) / 100;
                amountspan.textContent = newValue.toLocaleString("de-DE");
            }
        })
    }
    if (button) {
        button.addEventListener("click", calc);
    }
    if (input) {
        input.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                calc();
            }
        })
    }
});