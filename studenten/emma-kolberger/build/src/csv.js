(function (root) {
  'use strict';
  function parse(text) {
    text = text.replace(/^\uFEFF/, '');
    const delimiter = text.split(/\r?\n/)[0].includes(';') ? ';' : ',';
    const rows = []; let row = [], cell = '', quoted = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (c === '"') {
        if (quoted && text[i + 1] === '"') { cell += '"'; i++; }
        else quoted = !quoted;
      } else if (!quoted && (c === delimiter || c === '\n')) {
        row.push(cell.trim()); cell = '';
        if (c === '\n') { if (row.some(Boolean)) rows.push(row); row = []; }
      } else if (c !== '\r' || quoted) cell += c;
    }
    if (quoted) throw new Error('Een aanhalingsteken in het CSV-bestand is niet afgesloten.');
    row.push(cell.trim()); if (row.some(Boolean)) rows.push(row);
    const headers = rows.shift() || [];
    const required = ['product', 'aantal_verkocht', 'nettoverkoopprijs_per_stuk', 'directe_kost_per_stuk'];
    if (required.some(h => !headers.includes(h)) || new Set(headers).size !== headers.length) throw new Error('Gebruik de unieke kolomnamen uit voorbeeld.csv.');
    if (!rows.length) throw new Error('Het bestand bevat geen productregels.');
    return rows.map((r, i) => {
      if (r.length !== headers.length) throw new Error(`Rij ${i + 2} heeft een verkeerd aantal kolommen.`);
      return Object.fromEntries(headers.map((h, j) => [h, r[j]]));
    });
  }
  root.MarginCSV = { parse };
  if (typeof module !== 'undefined') module.exports = { parse };
})(globalThis);
