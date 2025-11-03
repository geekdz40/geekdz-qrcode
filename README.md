# CyberTech — QR Generator (by GeekDZ)

Professional, lightweight static QR code generator branded CyberTech and created by the GeekDZ club.
This project is a small, responsive single-page site built with semantic HTML, modern CSS (mobile-first) and vanilla JavaScript — no frameworks or build tools required.

Primary purpose
- Generate high-quality QR codes for printing and digital use.
- Save demo submissions locally (localStorage) — a placeholder for real server-side handling.

Palette & identity
- Primary: #0D1117 (dark)
- Secondary: #00BFFF (neon blue)
- Support: #9BA1A6 (metallic gray)
- Accent: #00FF88 (neon green)

Files
- `index.html` — main page and QR generator UI
- `main.html` — standalone QR demo (alternate entry)
- `styles.css` — CyberTech styling, CSS variables at the top for quick theme tweaks
- `script.js` — vanilla JS: form validation, QR generation glue, localStorage demo
- `assets/` — SVG logo(s) and favicon (small, optimized)

Deploy to GitHub Pages
1. Create a GitHub repository and push the project root to the repository.
2. In the repository Settings → Pages choose the branch (e.g. `main`) and the root folder (`/`).
3. Wait a minute or two; your site will be available at:

	https://geekdz.tech/geekdz-qrcode/

Optional local steps (example)
```bash
# initialize a repo, add files and push
git init
git add .
git commit -m "Initial CyberTech QR generator"
git branch -M main
git remote add origin https://github.com/geekdz40/geekdz-qrcode
git push -u origin main
```

Notes & customization
- Fonts: the site links to Poppins via Google Fonts. To avoid external requests, you can add the font files to `assets/fonts/` and update the CSS `@font-face` rules.
- QR library: currently loaded from a small CDN copy of `qrcodejs` for simplicity. To keep the site fully self-contained, download `qrcode.min.js` into a `vendor/` folder and update the script tag in `index.html`.
- Colors: change the top CSS variables in `styles.css` (`--primary`, `--secondary`, `--accent`, `--support`) to quickly update the brand palette.
- SEO: `index.html` contains basic `meta` tags (description, theme-color, and Open Graph). Add site-specific `title`, structured data, and a proper `og:image` for better sharing.

Accessibility
- Semantic HTML is used (header, main, section, footer) and interactive elements include ARIA attributes where appropriate.
- Images include `alt` text and forms provide labels. Focus styles are preserved for keyboard navigation.

Credits
- Built by GeekDZ — https://geekdz.tech/
- QR generation uses `qrcodejs` (original project by davidshimjs) when loaded from CDN.

License
- This repository is provided as-is for demonstration and small deployments. Consider adding an explicit license file (e.g., `LICENSE`) if you plan to publish or share widely.

If you want any of the following I can add them next: bundle the QR library locally, include local webfonts, or add an admin preview page that lists stored local submissions.
