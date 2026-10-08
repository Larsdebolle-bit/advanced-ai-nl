(function (root) {
  'use strict';
  const fields = ['aantal_verkocht', 'nettoverkoopprijs_per_stuk', 'directe_kost_per_stuk'];
  function number(value) {
    if (value === undefined || String(value).trim() === '') return null;
    const n = Number(String(value).trim().replace(',', '.'));
    return Number.isFinite(n) && n >= 0 ? n : null;
  }
  function analyze(rows, target) {
    if (!Number.isFinite(target) || target < 0 || target >= 100) throw new Error('De doelmarge moet tussen 0 en minder dan 100% liggen.');
    return rows.map((row, index) => {
      const values = fields.map(field => number(row[field]));
      const [quantity, price, cost] = values;
      const issues = fields.filter((field, i) => values[i] === null);
      if (!row.product?.trim()) issues.push('productnaam');
      const revenue = quantity !== null && price !== null ? quantity * price : null;
      const result = { product: row.product?.trim() || `Rij ${index + 2}`, revenue, costs: null, profit: null, margin: null, gap: null, action: '' };
      if (issues.length || !revenue || !Number.isFinite(revenue)) {
        return { ...result, status: 'Onvoldoende data', action: issues.length ? `Vul ontbrekende of ongeldige gegevens aan: ${issues.join(', ')}.` : 'Een positieve, eindige omzet is nodig om de marge te beoordelen.' };
      }
      const costs = quantity * cost;
      if (!Number.isFinite(costs)) return { ...result, status: 'Onvoldoende data', action: 'De berekende kosten zijn te groot. Controleer de invoer.' };
      const profit = revenue - costs;
      const margin = profit / revenue * 100;
      const gap = Math.max(0, target / 100 * revenue - profit);
      const below = margin < target - 1e-9;
      const targetCost = price * (1 - target / 100);
      return { ...result, costs, profit, margin, gap, status: below ? 'Onder doel' : 'Voldoet aan doel', targetCost,
        action: below ? `Onderzoek of de directe kost naar ${targetCost.toFixed(2)} per stuk kan dalen. Bij dezelfde verkoopprijs en hetzelfde volume levert dit ${gap.toFixed(2)} extra brutowinst op. Dit is een scenario; haalbaarheid en oorzaak zijn onbekend.` : 'Geen margetekort tegenover het gekozen doel. Dit zegt niets over nettowinst.' };
    });
  }
  root.ProductMargins = { analyze };
  if (typeof module !== 'undefined') module.exports = { analyze };
})(globalThis);
