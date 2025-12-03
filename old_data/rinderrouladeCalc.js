    const input = document.getElementById("portionInput");
    const button = document.getElementById("applyPortions"); 
    const listItems = document.querySelectorAll("#ingredients li[data-base]"); 

    function calc() {
        let portionen = parseFloat(input.value.replace(",", "."));

        if (isNaN(portionen) || portionen < 1) {
            portionen = 1;
            input.value = 1;
        } else if (portionen > 10) {
            portionen = 10;
            input.value = 10;
       }

        listItems.forEach((item) => {
            if (item.classList.contains("mb-no-amount")) return;

            const basiswert = parseFloat(item.getAttribute("data-base"));
            const amountspan = item.querySelector(".amount");

            if (amountspan) {
                let newValue = basiswert * portionen;
                
                newValue = Math.round(newValue * 100) / 100;
                
                amountspan.textContent = newValue.toLocaleString("de-DE");
            }
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
