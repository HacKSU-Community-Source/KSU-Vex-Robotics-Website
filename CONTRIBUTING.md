# Contributing

Before contributing please ensure you are in the [HacKSU Discord](https://discord.gg/r8vVvsE) and look at the community source channel, where updates and announcements on the project will be made.

A list of actionable development items can be found in the issues tab of this repository. Creating new issues is also welcome, just pick the template that fits (bug report, development item, or content update). Questions should go in the Discord.

------------------------------------------------------
## Setup

Fork the repository, then clone your fork with

```bash
git clone https://github.com/YOUR-USERNAME/KSU-Vex-Robotics-Website
cd KSU-Vex-Robotics-Website
git remote add upstream https://github.com/HacKSU-Community-Source/KSU-Vex-Robotics-Website
```

Install dependencies via [npm](https://nodejs.org/en/download)

```bash
npm install
```

Before starting new work, pull the latest changes from the main repository

```bash
git switch main
git pull upstream main
git switch -c feat/your-change
```

### Scripts
```bash
npm run dev      # start the dev server
npm run build    # build the site
npm run lint     # check for lint errors
npm run preview  # preview the build
```

Please ensure `npm run lint` and `npm run build` both pass before opening a pull request.

------------------------------------------------------
## Tech Stack
- React (JavaScript)
- Vite
- TailwindCSS
- oxlint

A backend and database are planned but not decided yet. Please check with the maintainers before adding one, or before adding any new major library.

------------------------------------------------------
## Guidelines

### Styling
- Use Tailwind classes instead of separate CSS files or inline styles
- Use the KSU colors in `src/index.css` (`ksu-blue`, `ksu-gold`, etc.) instead of hex values
- Pages should work on mobile

### Code
- Use function components
- One component per file, in `src/components/`, named like `HeroSection.jsx`
- Images should have `alt` text

### Content
Use these exactly as written:
- Contact email: **ksuroboticsteam@gmail.com**
- KSU club page: https://www.kent.edu/csi/kent-state-vex-robotics-team
- Advisors: Carl Harrison and Emily Baumgartner

Please do not make up club info like names, awards, or sponsors. Use a placeholder and mention it in your PR instead.

The design inspiration sites in the README should not be copied, only used for ideas.

### Security
- Never commit passwords, API keys, or `.env` files
- Anything sent to the browser is public, so secrets should only be used in server code
- Check user input on the server, not just in the browser

To report a security issue, see [SECURITY.md](SECURITY.md).

### License
The license is still TBD. Please do not change the `LICENSE` file.

------------------------------------------------------
## Pull Requests
Pull requests are encouraged. Please keep each PR focused on one change, and fill out the PR template when you open it.

Do not push to `main`. Push your branch to your fork and open a pull request into `main` on this repository.

Please ensure branch names are related to the relevant ticket or provide a concise high-level view of what your code does (for example `feat/hero-section`). Also please ensure commit messages describe what changes were made in an accurate and descriptive way. While not enforced, a common method of writing commits is the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) standard.

### Examples
#### Good Commits
These commit messages allow readers to easily tell what changed about the code base.
```
feat: Created new main page Hero section.
```

```
fix: Centered contact info box, removing awkward pixel gap previously present.
```

#### Bad Commits
These commits are non-explanatory or hard to read.
```
Fixed some stuff
```

```
iourwenfuiydf
```

### AI Tools
AI tools are fine to use, but you are responsible for the code you submit. If AI helped with your PR, mark `AI assistance: yes` in the PR template.

AI tools get their instructions from `AGENTS.md`. You do not need to read it, everything important is in this file. If you change a rule in one file, please update the other.

PR's not following these rules may be denied and asked to correct them, discretion is up to the maintainers of this project (HacKSU leadership).
