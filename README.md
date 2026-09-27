# Zach Park — portfolio (v2, framework-free)

A hand-built static site. No build step, no dependencies. Plain HTML, CSS, and a little vanilla JavaScript. You edit content in small data files; layout and styling live separately.

## Preview it locally

The site uses root-relative paths (`/styles/...`, `/assets/...`), so serve it from the repo root with any static server. Python is already on your Mac:

```bash
cd /path/to/zpark01.github.io
python3 serve.py          # no-cache preview -> http://localhost:8000
```

Then open http://localhost:8000/. Edit a file, save, refresh — you'll always see the latest.

Use `serve.py` (not `python3 -m http.server`), because the plain server lets the browser cache JS/CSS and hides your changes. Opening the `.html` files directly with `file://` won't work — the root-relative paths need a server.

## File map

```text
index.html          Home — hero + highlights + featured work + news
about.html          About — bio + hobbies & travel
projects.html       Experience — filterable research, internships & projects
cv.html             CV summary + résumé PDF link

research.html       Research page
experience.html     Original experience page
teaching.html       Teaching + outreach
outreach.html       Outreach
current-work.html   Current work

projects/           One real page per project (+ _template.html to copy)

styles/theme.css    >>> ALL COLORS, FONTS, SPACING live here <<<
styles/main.css     Layout & component styles (reads tokens from theme.css)

content/            >>> YOUR CONTENT (plain data, no layout) <<<
  site.js             name, nav, socials, news, highlights
  about.js            hobbies & travel gallery
  projects.js         experience/project cards + metadata
  publications.js     papers
  experience.js       research + work timelines
  cv.js               education, awards, skills
  teaching.js         teaching + outreach

scripts/site.js     Shared nav + footer (web components), theme toggle
scripts/render.js   Turns content/*.js into the cards, lists, timelines
```

The shared nav and footer are web components (`<site-header>`, `<site-footer>`), so there is no duplicated navigation markup across pages — edit it once in `content/site.js` (links) / `scripts/site.js` (markup).

## Change the color scheme (one place)

Open `styles/theme.css`. At the top is an ACCENT block:

```css
--accent:       #c2410c;   /* the single signature color */
--accent-hover: #9a3412;
```

Swap those two hex values and reload — the whole site restyles. A few ready-made palettes are listed as comments right there (teal, indigo, amber, berry).

Dark mode has its own accent a few lines down; keep it in the same color family.

Fonts and spacing are tokens in the same file.

## Edit content

Text/links on a page: open the matching file in `content/`. It's plain data with comments — no HTML layout to wade through.

The homepage intro paragraph is written directly in `index.html` (kept as static text so search engines read it).

The About page bio is written directly in `about.html`, while the hobbies & travel gallery is managed in `content/about.js`.

A project's write-up is its own file in `projects/`.

## Add a new project or experience

1. Add an entry to `content/projects.js` (copy an existing one; set a unique slug).
2. Copy `projects/_template.html` to `projects/<your-slug>.html`.
3. Set `data-project="<your-slug>"` on the `<body>`.
4. Write the body.

The title, metadata, tags, and links come from `projects.js`.

## Deploy to GitHub Pages

This site is deployed as a static GitHub Pages site.

In the repo:

**Settings → Pages → Build and deployment → Source → Deploy from a branch**

Choose:

```text
Branch: main
Folder: / (root)
```

The `.nojekyll` file at the root tells Pages to serve these files as-is.

If an old Jekyll/al-folio deployment workflow is still present, keep it disabled so it does not conflict with the static GitHub Pages deployment.

## Site

https://zpark01.github.io

## License

This repository includes code distributed under the MIT License. See [`LICENSE`](LICENSE) for details.
