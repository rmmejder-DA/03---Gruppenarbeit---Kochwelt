document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("portionInput");
  const btn = document.getElementById("applyBtn");
  const listItems = document.querySelectorAll("#zutaten-liste li[data-base]");

  function rechnen() {
    let portionen = parseFloat(input.value.replace(",", "."));

    if (isNaN(portionen) || portionen < 0) {
      portionen = 0;
      input.value = 0;
    }

    listItems.forEach((item) => {
      const basisWert = parseFloat(item.getAttribute("data-base"));

      const amountSpan = item.querySelector(".amount");

      if (amountSpan) {
        let neuerWert = basisWert * portionen;

        neuerWert = Math.round(neuerWert * 100) / 100;

        amountSpan.textContent = neuerWert.toLocaleString("de-DE");
      }
    });
  }

  if (btn) {
    btn.addEventListener("click", rechnen);
  }

  if (input) {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        rechnen();
      }
    });
  }
});
