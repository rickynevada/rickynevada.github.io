# Claude Project Instructions

## Project overview
This repository contains a personal portfolio website for Matt Hicks. It is a static site built with plain HTML, CSS, and JavaScript.

## Key files
- `index.html` — home page
- `education.html` — education page
- `experience.html` — experience page
- `projects.html` — project index page
- `arduino_fc.html` — Arduino-related project page
- `voydophone.html` — project page
- `css/style.css` — site styling and layout
- `js/nav.js` — navigation behavior, including mobile menu logic
- `images/` and `videos/` — static media assets

## Working conventions
- Keep the site static and lightweight; avoid introducing frameworks or build tooling unless explicitly requested.
- Prefer simple, maintainable HTML/CSS/JS changes that match the existing style.
- Preserve the current branding, navigation structure, and page layout unless the task specifically calls for redesign.
- Use relative links and local asset paths so pages continue to work when opened from the repository or served locally.
- If a new page is added, update navigation links in the relevant pages to keep the site consistent.

## Validation
There is no automated build/test pipeline for this project. The normal verification workflow is to serve the site locally and inspect the page output in a browser.

Example:

```bash
cd c:/software_dev/rickynevada.github.io
python -m http.server 8000
```

Then open http://localhost:8000 in a browser to check the website.

## Content and editing guidance
- Update text content in the individual HTML pages rather than generating new app architecture.
- Keep CSS changes scoped to `css/style.css` unless a separate stylesheet is clearly required.
- Keep mobile navigation behavior in `js/nav.js` and avoid unnecessary JS complexity.
- When editing images or media, preserve existing filenames unless a rename is required by the task.

## Goal
Maintain a clean, professional personal portfolio that is easy to browse, easy to edit, and works as a simple static website.
