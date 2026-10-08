'use strict';
// Voeg toekomstige analyses toe aan dit register; houd berekeningen in eigen modules.
const analyses = { productmarges: ProductMargins.analyze };
const $ = id => document.getElementById(id);
const money = value => value === null ? 'Onbekend' : new Intl.NumberFormat('nl-BE', { style: 'currency', currency: 'EUR' }).format(value);
const example = 'product,aantal_verkocht,nettoverkoopprijs_per_stuk,directe_kost_per_stuk\nProduct A,100,50,40\nProduct B,50,80,48\nProduct C,20,30,';
$('example').onclick = () => { $('csv').value = example; };
$('file').onchange = async event => {
  try { if (event.target.files[0]) $('csv').value = await event.target.files[0].text(); }
  catch { $('error').textContent = 'Het bestand kon niet worden gelezen.'; }
};
$('analyze').onclick = () => {
  $('error').textContent = ''; $('results').replaceChildren();
  try {
    if (!$('target').value.trim()) throw new Error('Vul een doelmarge in.');
    const results = analyses.productmarges(MarginCSV.parse($('csv').value), Number($('target').value));
    const heading = document.createElement('h2'); heading.textContent = 'Margerapport'; $('results').append(heading);
    const note = document.createElement('p'); note.textContent = 'Het verschil met doel is de ontbrekende brutowinst bij de huidige omzet. Onvoldoende data wordt per product aangegeven.'; $('results').append(note);
    const wrap = document.createElement('div'); wrap.className = 'scroll';
    const table = document.createElement('table');
    const headers = ['Product', 'Omzet', 'Directe kosten', 'Brutowinst', 'Marge', 'Oordeel', 'Verschil met doel'];
    const head = table.createTHead().insertRow(); headers.forEach(h => { const th = document.createElement('th'); th.textContent = h; head.append(th); });
    const body = table.createTBody();
    results.forEach(r => {
      const row = body.insertRow();
      [r.product, money(r.revenue), money(r.costs), money(r.profit), r.margin === null ? 'Onbekend' : r.margin.toFixed(2) + '%', r.status, money(r.gap)].forEach(v => { row.insertCell().textContent = v; });
    });
    wrap.append(table); $('results').append(wrap);
    results.forEach(r => { const h = document.createElement('h3'); h.textContent = r.product; const p = document.createElement('p'); p.textContent = r.action; $('results').append(h, p); });
  } catch (error) { $('error').textContent = error.message; }
};
