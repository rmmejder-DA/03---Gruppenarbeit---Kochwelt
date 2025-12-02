function checkNumber(element) {
    let value;
    value = parseInt(element.value);
    if (isNaN(value)) value = 0;
    element.value = value;
}
function multiplyValues() {
    const val1 = document.getElementById("num1").value || '0';
    const num1 = parseFloat(val1) || 0;
    const ids = ["num2", "num3", "num4", "num5", "num6", "num7", "num8", "num9", "num10", "num11", "num12", "num13"];
    ids.forEach(id => {
        const elem = document.getElementById(id);
        if (!elem) return;

        if (!elem.dataset.base) {
            const raw = (typeof elem.textContent === "string") ? elem.textContent : "";
            elem.dataset.base = raw.trim();
        }

        const base = parseFloat(elem.dataset.base) || 0;
        const product = num1 * base;
        const display = Number.isFinite(product) ? (+product.toFixed(1)).toString() : "0";
        elem.textContent = display;
    });
}