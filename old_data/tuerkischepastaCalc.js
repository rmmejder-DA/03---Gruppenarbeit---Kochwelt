//      Türkische Pasta Rechner
// ================================================
//		Datei: tuerkischepastaCalc.js
//		Projekt: Kochwelt
//		Erstellt am: 02-12-2025 um 16:21 Uhr
//		Autor: Ensar
// ================================================

    const input = document.getElementById("portionInput")
    const button = document.getElementById("portionButton")
    const listItems = document.querySelectorAll("#zutatenListe li[data-base]")

    function calc() {
        let portionen = parseFloat(input.value.replace(",", "."))

        if (isNaN(portionen) || portionen < 1) {
            portionen = 1;
            input.value = 1;
        }

        else if (portionen > 10) {
            portionen = 10;
            input.value = 10;
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
<<<<<<< HEAD:old_data/tuerkischepastaCalc.js
});
=======


>>>>>>> 96819e91108a90fd30094c5331796ac58cceee0c:tuerkischepastaCalc.js
