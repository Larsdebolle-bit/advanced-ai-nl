# Zet alle uitvoer in out/ op één regel per run, zodat scoren met het oog kan.
import json, glob, re, sys
def laad(t):
    t = t.strip()
    m = re.search(r"```(?:json)?\s*(.*?)```", t, re.S)
    return json.loads(m.group(1).strip() if m else t)
for f in sorted(glob.glob("out/*.json"), key=lambda x: (x.split("__")[2], x)):
    d = json.load(open(f))
    try:
        j = laad(d["tekst"])
        p = ["%s|%s|%s|%s|%s" % (x.get("omschrijving", "?")[:24], x.get("eenheid"),
             x.get("aantal"), x.get("eenheidsprijs"), x.get("bron")) for x in j.get("posten", [])]
        print("%s %-10s %-9s r%d | %dp %sC %dv | %s" % (d["id"], d["model"], d["prompt"],
              d["run"], len(p), "+" if j.get("correcties") else "-",
              len(j.get("vragen", [])), " ;; ".join(p)))
    except Exception:
        print("%s %-10s %-9s r%d | PARSE FOUT: %r" % (d["id"], d["model"], d["prompt"], d["run"], d["tekst"][:80]))
