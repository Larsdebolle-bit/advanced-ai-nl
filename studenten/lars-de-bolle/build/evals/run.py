# Draait een promptversie tegen de 12 inputs van test-set.md, n keer, op één model.
#   OPENAI_API_KEY=... python3 run.py <model> <promptbestand> <runs> [T01 T02 ...]
# Schrijft out/<model>__<prompt>__<id>_r<n>.json: ruwe uitvoer plus tokens.
# Bestaat een bestand al, dan wordt het overgeslagen: afbreken en hervatten mag.
import json, os, sys, time, urllib.request

KEY    = os.environ["OPENAI_API_KEY"]
MODEL  = sys.argv[1]
PFILE  = sys.argv[2]
RUNS   = int(sys.argv[3]) if len(sys.argv) > 3 else 2
ONLY   = sys.argv[4:] or None
TAG    = os.path.basename(PFILE).replace(".txt", "")

prompt = open(PFILE).read()
inputs = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "inputs.json")))

def call(text):
    body = {"model": MODEL,
            "messages": [{"role": "user",
                          "content": prompt.replace("[plak hier het transcript]", text)}]}
    # gpt-4o krijgt de instellingen uit de productiefunctie van OpMaat.
    # GPT-6 weigert max_tokens en temperature, dus die gaan daar niet mee.
    if MODEL.startswith("gpt-4"):
        body["max_tokens"], body["temperature"] = 1600, 0.1
    req = urllib.request.Request(
        "https://api.openai.com/v1/chat/completions",
        data=json.dumps(body).encode(),
        headers={"Authorization": f"Bearer {KEY}", "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=180) as r:
        return json.load(r)

for run in range(1, RUNS + 1):
    for tid, text in inputs.items():
        if ONLY and tid not in ONLY: continue
        path = f"out/{MODEL}__{TAG}__{tid}_r{run}.json"
        if os.path.exists(path): continue
        try:
            res = call(text)
        except Exception as e:
            detail = e.read().decode()[:400] if hasattr(e, "read") else ""
            print(f"FOUT {MODEL} {TAG} {tid} r{run}: {e} {detail}", flush=True)
            sys.exit(1)
        json.dump({"id": tid, "model": MODEL, "prompt": TAG, "run": run,
                   "tekst": res["choices"][0]["message"]["content"],
                   "usage": res["usage"]},
                  open(path, "w"), ensure_ascii=False, indent=1)
        u = res["usage"]
        print(f"{MODEL} {TAG} {tid} r{run}: in {u['prompt_tokens']} uit {u['completion_tokens']}", flush=True)
        time.sleep(0.4)
