# Kost per run uit het echte tokenverbruik. Prijs per miljoen tokens, 21-10-2026.
import json, glob
from collections import defaultdict
PRIJS = {"gpt-4o": (2.50, 10.00, 1.25), "gpt-6-luna": (0.10, 0.50, 0.01)}  # in, uit, cache lezen
agg = defaultdict(lambda: [0, 0, 0, 0, 0])
for f in glob.glob("out/*.json"):
    d = json.load(open(f)); u = d["usage"]; a = agg[(d["model"], d["prompt"])]
    cached = u.get("prompt_tokens_details", {}).get("cached_tokens", 0)
    a[0] += u["prompt_tokens"] - cached
    a[1] += cached
    a[2] += u["completion_tokens"]
    a[3] += u.get("completion_tokens_details", {}).get("reasoning_tokens", 0)
    a[4] += 1
for (m, p), (vers, cached, uit, reas, n) in sorted(agg.items()):
    pi, po, pc = PRIJS[m]
    tot = vers * pi / 1e6 + cached * pc / 1e6 + uit * po / 1e6
    print(f"{m:11} {p:9} n={n:3}  in {vers:>6} (+{cached} cache)  uit {uit:>5} ({reas} denkwerk)"
          f"  ${tot/n:.5f}/run  EUR {tot/n*0.9:.5f}/run")
