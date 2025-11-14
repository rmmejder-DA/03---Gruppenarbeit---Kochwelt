

//JS Portion berechnen (MAX)
const root = document.querySelector(".mm-portioner");
if (root) {
  const input = root.querySelector("#portionInput");
  const applyBtn = root.querySelector("#applyPortions");
  const items = root.querySelectorAll("#ingredients li");

  items.forEach((li) => {
    const amountEl = li.querySelector(".amount");
    const unitEl = li.querySelector(".unit");

    const amountEmpty = !amountEl || !amountEl.textContent.trim();
    const unitEmpty = !unitEl || !unitEl.textContent.trim();

    if (amountEmpty && unitEmpty) {
      li.classList.add("mm-no-amount");
    }
  });

  function getPortions() {
    let n = Math.round(Number(input.value) || 0);
    if (n < 0) n = 0;
    return n;
  }

  function setPortions(n) {
    const val = Math.max(0, Math.round(n));
    input.value = String(val);
    update(val);
  }
  function update(portions) {
    items.forEach((li) => {
      const base = Number(li.dataset.base) || 0;
      const amountEl = li.querySelector(".amount");
      if (!amountEl) return;
      const value = base * portions;
      amountEl.textContent = value.toLocaleString("de-DE");
    });
  }

  applyBtn?.addEventListener("click", () => setPortions(getPortions()));
  input?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setPortions(getPortions());
    }
  });
//   input.addEventListener("input", () => setPortions(getPortions()));
//   input.addEventListener("change", () => setPortions(getPortions()));

  setPortions(getPortions() || 0);
}
//End
    document.getElementById('cook').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('show');
    });
//Kontaktseite//
function sendMail(event){
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/movyqvay", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}
//Kontaktseite//