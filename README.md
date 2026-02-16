# Angel IC Portfolio (Jekyll + GitHub Pages)

Classical editorial-style portfolio for an Electrical Engineering student focused on Integrated Circuit Design.

## Local run

1. Install Ruby and Bundler.
2. Install dependencies:
   ```bash
   bundle install
   ```
3. Serve locally:
   ```bash
   bundle exec jekyll serve
   ```
4. Open `http://127.0.0.1:4000`.

## Structure

- `index.html`: Single-page site with the 4 required sections (`Main`, `Projects`, `Resume`, `Posts`)
- `_data/projects.yml`: Project card data source
- `_posts/`: Blog posts (reverse chronological in `Posts` section)
- `_layouts/default.html`: Global layout
- `_layouts/post.html`: Individual post layout
- `_includes/`: `head`, `header`, `navbar`, `footer`
- `assets/css/style.scss`: Design system and component styling
- `assets/js/main.js`: Mobile nav toggle + active section highlighting
- `assets/img/logo-placeholder.svg`: Replace with your own logo asset
- `assets/resume/resume.pdf`: Replace with your real resume PDF

## Add or edit projects

Edit `_data/projects.yml`.

Each item supports:
- `title`
- `purpose`
- `year`
- `status`
- `tags` (list)
- `links.repo`, `links.report`, `links.demo`

## Add posts

Create a Markdown file in `_posts/` using:
- filename format: `YYYY-MM-DD-title.md`
- front matter:
  ```yaml
  ---
  title: "Post Title"
  date: YYYY-MM-DD
  tags:
    - Tag1
    - Tag2
  ---
  ```

## Swap logo and resume

1. Replace `assets/img/logo-placeholder.svg` with your logo file.
2. Update `logo` in `_config.yml` if the filename/path changes.
3. Replace `assets/resume/resume.pdf` with your resume PDF.
4. Update `resume_path` in `_config.yml` if needed.

## GitHub Pages compatibility

- No custom unsupported plugins are used.
- Site is configured for standard GitHub Pages Jekyll builds.
