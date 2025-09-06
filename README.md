# Image Integrity Notes (GitHub Pages)

A minimal, PubPeer-like static site you can host **free** on GitHub Pages. It lets you:
- show figure images from publications,
- present analysis notes and links,
- and enable **comment threads** per post using **giscus** (GitHub Discussions).

## Quick Start

1. **Create a repo** (public) named `your-username.github.io` or any name.
2. **Upload these files** to the repo root.
3. Go to **Settings → Pages** and select the `main` branch. Save.
4. Visit `https://your-username.github.io` (or `https://your-username.github.io/repo-name` for project sites).

## Configure Comments (giscus)

1. Go to https://giscus.app and sign in with GitHub.
2. Choose the repo that will store the comments.
3. Enable **Discussions** for that repo (Settings → General → Features → Discussions).
4. Copy the provided `data-*` values and **replace** placeholders in:
   - `posts/post.html` and `posts/example-figure-duplication.html`
     - `data-repo="YOUR_GITHUB_USERNAME/YOUR_REPO_NAME"`
     - `data-repo-id="YOUR_REPO_ID"`
     - `data-category="General"` (or another category you create)
     - `data-category-id="YOUR_CATEGORY_ID"`

## Add a New Post

1. Put the figure image in `images/` (e.g., `images/your_figure.jpg`).
2. Add a new entry in `posts/posts.json`:
   ```json
   {
     "slug": "your-slug",
     "title": "Concise title",
     "journal": "Journal Name",
     "year": 2025,
     "doi": "10.xxxx/xxxxx",
     "doi_url": "https://doi.org/10.xxxx/xxxxx",
     "image": "images/your_figure.jpg",
     "teaser": "One-line summary",
     "analysis_html": "<h3>Analysis</h3><p>Your detailed notes (supports HTML).</p>",
     "links": [
       {"label": "Publisher", "url": "https://doi.org/10.xxxx/xxxxx"},
       {"label": "PubMed", "url": "https://pubmed.ncbi.nlm.nih.gov/ID/"}
     ]
   }
   ```
3. (Optional but recommended) Duplicate `posts/example-figure-duplication.html`, rename to `posts/your-slug.html`, and adjust the static HTML so the page is indexable even without JS.
4. Commit and push. The homepage will auto-render the new card.

## Legal & Ethics Notes

- Only upload images you are legally permitted to share (publisher licenses vary). When in doubt, link out instead of copying the image.
- Avoid defamatory statements; present verifiable analyses and cite sources.
- Consider a `CONTRIBUTING.md` and a moderation policy.

## Local Preview

Open `index.html` in a local server (e.g., `python3 -m http.server`) to avoid CORS issues with `fetch` calls for `posts.json`.

---

MIT License
