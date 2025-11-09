const minusBtn = document.getElementById('minus');
const plusBtn  = document.getElementById('plus');
const portionOut = document.getElementById('portionCount');
const wrap = document.getElementById('ingredientsWrap');
const items = document.querySelectorAll('#ingredients li');

const STEP = 1;
let portions = 1;

const pluralRules = {
  'Stk': ['Stk', 'Stk'],
  'Scheibe': ['Scheibe', 'Scheiben'],
  'EL': ['EL', 'EL'],
  'TL': ['TL', 'TL'],
  'ml': ['ml', 'ml'],
  'g': ['g', 'g'],
  'Stange': ['Stange', 'Stangen']
};

function pluralize(unit, value) {
  const forms = pluralRules[unit];
  if (!forms) return unit || '';
  return (Math.abs(value - 1) < 1e-9) ? forms[0] : forms[1];
}

function formatAmount(amount, unit) {
  let value = amount;
  let outUnit = unit || '';

  if ((unit === 'ml' || unit === 'g') && amount >= 1000) {
    value = amount / 1000;
    outUnit = (unit === 'ml') ? 'l' : 'kg';
  }

  const abs = Math.abs(value);
  const decimals = abs < 1 ? 2 : (abs < 10 ? 1 : 0);
  const rounded = Number(value.toFixed(decimals));
  return { value: rounded, unit: outUnit };
}

console.log(formatAmount); true


function updateUI() {
  portionOut.textContent = String(portions);
  wrap.hidden = portions === 0;

  items.forEach(li => {
    const base = parseFloat(li.dataset.base || '0');
    const unit = li.dataset.unit || '';

    const amountEl = li.querySelector('.amount, [data-role="amount"]');
    const unitEl   = li.querySelector('.unit, [data-role="unit"]');
    if (!amountEl || !unitEl || !isFinite(base)) return;

    const amount = base * portions;
    const { value, unit: outUnit } = formatAmount(amount, unit);

    // Ausgabe mit deutscher Formatierung (Komma)
    amountEl.textContent = value.toLocaleString('de-DE');

    const label = pluralize(outUnit, value);
    unitEl.textContent = label;
  });
}

minusBtn.addEventListener('click', () => {
  portions = Math.max(0, portions - STEP);
  updateUI();
});

plusBtn.addEventListener('click', () => {
  portions += STEP;
  updateUI();
});

updateUI();


