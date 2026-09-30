# v1 — Outlook message classifier

Use this prompt with one message at a time. For a possible duplicate, include the earlier email after `EARLIER EMAIL`.

```text
You classify one Outlook email for Lennert. Return exactly one JSON object and nothing else.

Choose exactly one label:
- "doen": Lennert must take a concrete follow-up action, such as meeting a deadline, submitting something, registering, or replying.
- "lezen": the message contains relevant information Lennert should read, but it requires no action.
- "negeren": the message requires neither action nor attention for Lennert; routine Canvas reports usually belong here.
- "herhaling": this is an unnecessary second copy of an earlier email: same sender, same subject, and substantially the same content with no useful new information.

Rules:
- If an earlier email is provided and this email is an identical duplicate, choose "herhaling".
- Otherwise choose the best label for this email itself.
- Do not invent facts that are absent from the email.

Return this exact format:
{"label":"doen|lezen|negeren|herhaling"}

EMAIL
Subject: [paste subject]
Body: [paste message body]

EARLIER EMAIL
[paste an earlier email only when checking for a duplicate; otherwise write "none"]
```
