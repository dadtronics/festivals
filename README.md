# Festivals

Live at **[festivals.rb303.net](https://festivals.rb303.net)**

Lineup planners for festivals I'm going to — pick your must-sees, and once
official set times drop, it builds you a schedule that avoids conflicts.

## What it does

- Browse the full lineup, filter by day or stage, search by artist
- Mark artists **Interested ★** or **Must-see ★★** — saved on your device, no account needed
- Add artists you already know you like who aren't on the official lineup yet
- Once set times are released:
  - Every conflict between your picks gets flagged
  - An auto-built recommended schedule maximizes your must-sees, with an
    adjustable overlap tolerance if you're willing to duck out early or show
    up late for a set you don't want to miss
- A festival grounds map, right in the app
- Installable to your home screen and works offline once added

## Festivals covered (2026)

| Festival | Dates | Venue |
|---|---|---|
| [Elements](https://festivals.rb303.net/elements-2026/) | Aug 7–9, 2026 | Pocono Raceway, Long Pond PA |
| [Lost Lands](https://festivals.rb303.net/lost-lands-2026/) | Sept 18–20, 2026 | Legend Valley, Thornville OH |
| [Oceans Calling](https://festivals.rb303.net/oceans-calling-2026/) | Sept 25–27, 2026 | Ocean City Boardwalk, Ocean City MD |

## How it works

Plain HTML/CSS/JS — no framework, no build step, no backend. Hosted for free
on GitHub Pages. Everything you pick lives in your browser's local storage;
nothing is sent to a server, and there's no account to make.

## Running it locally

No install, no build. Just open a site's `index.html` in a browser, or serve
the whole `sites/` folder with any static file server:

```
cd sites && python3 -m http.server
```

## Contributing

Found a bug, or want to add your own festival? PRs welcome. See
[AGENTS.md](AGENTS.md) for how the repo is laid out and the conventions each
site follows.
