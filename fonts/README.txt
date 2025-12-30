Font instructions (Lancelot + Lucy Rose)

This project includes @font-face placeholders for two display fonts: `Lancelot`
and `Lucy Rose`. To enable either font, add the font files to the `fonts/`
directory or use a webfont provider and embed their stylesheet in `index.html`.

Local hosting (recommended for offline testing)

1) Create a `fonts` directory at the project root:
   /Users/renu/Downloads/orchidquill-website/fonts/
2) Drop the font files into that directory. Filenames expected by the CSS are:
   - Lancelot.woff2, Lancelot.woff
   - LucyRose.woff2, LucyRose.woff, LucyRose.otf, LucyRose.ttf
3) Refresh your browser (clear cache) — the hero will pick up the preferred font
   according to the `font-family` in `.hero-box`.

Adobe Fonts / Web provider

- If you use Adobe Fonts, Google Fonts, or another provider, add their embed
  link/script to the `<head>` of `index.html`. Remove or keep local @font-face
  blocks as you prefer.

Licensing

- Many display fonts (including those on dafont.com) have license restrictions.
  Verify you have permission to host or use the font on a public website before
  deploying.

Troubleshooting

- If the font doesn't appear, check the browser Network panel to confirm the
  font file requests succeed and that the correct font-family is applied in
  the Elements Styles inspector.

Note about OTF:

- The project now accepts an OpenType (`.otf`) file for Lucy Rose as well as
   WOFF/WOFF2/TTF. `.woff2` is preferred for performance, but `.otf` will work
   in most modern browsers when served from the same origin.

