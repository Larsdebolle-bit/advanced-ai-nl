# Bundelt out/*.json tot één uitvoer.jsonl, zodat de bewijsstukken in git staan
# zonder honderd losse bestanden in de pull request.
import json, glob, os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
rijen = [json.load(open(f)) for f in sorted(glob.glob("out/*.json"))]
with open("uitvoer.jsonl", "w") as f:
    for r in sorted(rijen, key=lambda r: (r["model"], r["prompt"], r["id"], r["run"])):
        f.write(json.dumps(r, ensure_ascii=False) + "\n")
print(len(rijen), "runs gebundeld in uitvoer.jsonl")
