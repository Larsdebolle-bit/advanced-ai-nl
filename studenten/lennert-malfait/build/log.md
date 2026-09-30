# Build log

| Date | Version | What I did | Result | Errors or observations | Next step |
| --- | --- | --- | --- | --- | 
| 2026-09-24 | v1 | Created a fixed prompt for classifying Outlook emails. | Ready to run on T01–T05. | Not tested yet. | Run every input twice and record the labels. |
| 2026-09-24 | v1 | Ran T01 once in a fresh Codex conversation. | `lezen`, matching the expected label. | No error observed. | Run T01 a second time in a new conversation. |
| 2026-09-24 | v1 | Ran T01 a second time in a fresh Codex conversation. | `lezen`, matching the expected label again. | No variation between the two runs. | Run T02 with T01 as the earlier email. |
| 2026-09-24 | v1 | Ran T02 once in a fresh Codex conversation, with T01 supplied as the earlier email. | `herhaling`, matching the expected label. | No error observed. | Run T02 a second time in a new conversation. |
| 2026-09-24 | v1 | Ran T02 a second time in a fresh Codex conversation. | `herhaling`, matching the expected label again. | No variation between the two runs. | Run T03 twice. |
| 2026-09-24 | v1 | Ran T03 once in a fresh Codex conversation. | `doen`, matching the expected label. | No error observed. | Run T03 a second time in a new conversation. |
| 2026-09-24 | v1 | Ran T03 a second time in a fresh Codex conversation. | `doen`, matching the expected label again. | No variation between the two runs. | Run T04 twice. |
| 2026-09-24 | v1 | Ran T04 once in a fresh Codex conversation. | `negeren`, matching the expected label. | No error observed. | Run T04 a second time in a new conversation. |
| 2026-09-24 | v1 | Ran T04 a second time in a fresh Codex conversation. | `negeren`, matching the expected label again. | No variation between the two runs. | Run T05 twice. |
| 2026-09-24 | v1 | Ran T05 once in a fresh Codex conversation. | `lezen`, matching the expected label. | No error observed. | Run T05 a second time in a new conversation. |
| 2026-09-24 | v1 | Ran T05 a second time in a fresh Codex conversation. | `lezen`, matching the expected label again. | No variation between the two runs. | Summarise the first measurement. |
| 2026-09-24 | v1 | Completed the first measurement on T01–T05. | 10/10 correct runs; no variation observed. | Only five school-email inputs and one duplicate pair: too small to generalise. | Add five more varied inputs and test v2 in week 3. |
