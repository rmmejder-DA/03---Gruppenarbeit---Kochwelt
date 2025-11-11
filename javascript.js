
// JS von der rinderroulad.html (Marcel)

const root = document.querySelector('.mb-portioner');
if (root) {
  const input    = root.querySelector('#portionInput');
  const applyBtn = root.querySelector('#applyPortions');
  const items    = root.querySelectorAll('#ingredients li');

items.forEach(li => {
  const amountEl = li.querySelector('.amount');
  const unitEl   = li.querySelector('.unit');

  const amountEmpty = !amountEl || !amountEl.textContent.trim();
  const unitEmpty   = !unitEl   || !unitEl.textContent.trim();

  if (amountEmpty && unitEmpty) {
    li.classList.add('mb-no-amount');
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
    items.forEach(li => {
      const base = Number(li.dataset.base) || 0;
      const amountEl = li.querySelector('.amount');
      if (!amountEl) return;                   
      const value = base * portions;             
      amountEl.textContent = value.toLocaleString('de-DE');
    });
  }

  applyBtn?.addEventListener('click', () => setPortions(getPortions()));
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); setPortions(getPortions()); }
  });
  input?.addEventListener('input', () => {      
    const v = getPortions();
    if (input.value !== String(v)) input.value = String(v);
  });


  setPortions(getPortions() || 0);
}

//JS Portion berechnen (MAX)
          function calculatePortion(a, b, container) {
            // TODO: Diese Funktion muss (inklusive Funktionsparameter) implementiert werden. 
            // Orientiere dich an der Funktion aus Aufgabe 5.
            let ab = a * b;
           let result = Math.abs(ab);
           document.getElementById(container).innerHTML = result;
        }
//End
  
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