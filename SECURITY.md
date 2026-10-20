# Security Policy

If you find a security issue with the KSU Vex Robotics website, please let us know. Only the `main` branch (the live site) gets security fixes.

------------------------------------------------------
## Reporting an Issue

**Please do not open a public issue or pull request for security problems.**

Instead, report it privately by either
- Using the **Report a vulnerability** button under this repository's **Security** tab
- Messaging HacKSU staff on the [HacKSU Discord](https://discord.gg/r8vVvsE)

Please include what the issue is, where it is, and how to reproduce it.

This project is run by volunteers, so response times may vary.

------------------------------------------------------
## What Counts
- Passwords, keys, or other secrets committed to the repository
- Vulnerable or malicious dependencies
- Injected scripts or content on the site
- Data that can be accessed when it should not be, like form submissions
- Links or downloads that point somewhere they should not

Issues with other sites we link to (KSU, VEX, Discord, etc.) do not count.

------------------------------------------------------
## For Contributors
- Never commit passwords, API keys, or `.env` files
- Secrets should only be used in server code, since anything sent to the browser is public
- If you accidentally commit a secret, tell HacKSU staff right away so it can be changed. Deleting it in a new commit is not enough.
- Run `npm audit` when adding or updating dependencies
