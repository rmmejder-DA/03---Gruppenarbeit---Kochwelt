

//JS Portion berechnen (MAX)
function multiplyValues() {
    // Werte aus Eingaben abrufen (einen Standardwert für die Eingabe bereitstellen und den Text des span-Elements lesen)
    const val1 = document.getElementById("num1").value || '0';
   
    // In Zahl umwandeln
    const num1 = parseFloat(val1) || 0;

    // Multiplizieren und anzeigen unter Verwendung gespeicherter Basiswerte, um kumulative Multiplikation zu vermeiden
    const ids = ["num2","num3","num4","num5","num6","num7","num8","num9","num10","num11","num12","num13"];
    ids.forEach(id => {
        const elem = document.getElementById(id);
        if (!elem) return;

        // Speichere den ursprünglichen Basiswert einmal, damit wiederholte Klicks den bereits aktualisierten Wert nicht multiplizieren
        if (!elem.dataset.base) {
            const raw = (typeof elem.textContent === "string") ? elem.textContent : "";
            elem.dataset.base = raw.trim();
        }

        const base = parseFloat(elem.dataset.base) || 0;
        const product = num1 * base;

        // auf bis zu 3 Dezimalstellen formatieren und nachfolgende Nullen entfernen
        const display = Number.isFinite(product) ? (+product.toFixed(1)).toString() : "0";

        elem.textContent = display;
    });
}
//End