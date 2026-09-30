# Message-action classifier

## Purpose

This tool classifies an Outlook message into exactly one category:

- `doen`: I need to take a concrete follow-up action.
- `lezen`: useful information that I should read, but that needs no action.
- `negeren`: a message that needs neither action nor attention.
- `herhaling`: an unnecessary second copy of the same email, received twice without a meaningful difference.

## Status

- v0: task and four labels defined on 2026-09-24.
- v1: a fixed classifier prompt; ready for its first test run.

## How to use it

Open `classifier-prompt.md` in Codex. Paste one test email into the `EMAIL` section. For a possible duplicate, paste the original email into `EARLIER EMAIL`. The response must be one JSON object containing one label.

## Duplicate rule

The first copy of an email receives its normal label (`doen`, `lezen`, or `negeren`). A later copy is `herhaling` only when it has the same sender, subject, and substantially the same content, without useful new information.

## Version history

| Version | Date | Change | Reason |
| --- | --- | --- | --- |
| v0 | 2026-09-24 | Defined the task and its four labels. | The output must be limited and checkable before testing. |
| v1 | 2026-09-24 | Added a fixed classification prompt with JSON output. | The tool needs a repeatable, checkable first version before measuring it. |

## v1 first measurement

- Test inputs: 5; each input was run twice in separate fresh Codex conversations.
- Correct outputs: 10 out of 10 runs (100%).
- Variation: none observed across the two runs per input.
- Limitation: the sample is very small and comes only from anonymised school email. `herhaling` was tested on one exact duplicate pair only. This result is not enough to trust the tool with automatic Outlook actions yet.
