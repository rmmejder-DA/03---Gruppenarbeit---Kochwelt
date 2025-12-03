
    const input = document.getElementById("num1");
    const button = document.querySelector(".portion"); 
    const ingredients = document.querySelectorAll("span[data-base]");

    function calc() {
        let portionen = parseFloat(input.value);

        if (isNaN(portionen) || portionen < 3) {
            portionen = 3;
            input.value = 3;
        } else if (portionen > 10) {
            portionen = 10; 
            input.value = 10;
        }

        ingredients.forEach((span) => {
            const basiswert = parseFloat(span.getAttribute("data-base"));
            
            let newValue = basiswert * portionen;

            newValue = Math.round(newValue * 100) / 100;

            span.textContent = newValue.toLocaleString("de-DE");
        });
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
        });

        calc();
    }
