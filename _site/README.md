# Angel B. IC Portfolio (Jekyll + GitHub Pages)

Retrowave + Brutalist portfolio for an Electrical Engineering student focused on Integrated Circuit Design.

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

- `index.html`: Main terminal page (`/`)
- `projects.html`: Dynamic project matrix (`/projects/`)
- `resume.html`: Resume delivery page (`/resume/`)
- `posts.html`: Reverse-chronological technical log (`/posts/`)
- `_projects/`: Collection files powering `site.projects` cards
- `_posts/`: Markdown posts rendered in the posts log
- `_layouts/default.html`: Global shell (animated layers + 4-tab nav)
- `_layouts/post.html`: Individual post layout
- `assets/css/main.scss`: Motion-heavy visual system
- `assets/js/main.js`: Scramble hover text, rotating projects, random ASCII field
- `assets/fonts/JetBrainsMonoNLNerdFont-Regular.ttf`: Nerd font used across UI
- `assets/img/logo.png`: Replace with your own logo asset
- `assets/resume/resume.pdf`: Replace with your real resume PDF

## Add or edit projects

Add files in `_projects/` using front matter:
- `title`
- `tech_stack` (list)
- `image`
- `priority`

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

1. Replace `assets/img/logo.png` with your logo file.
2. Update `logo` in `_config.yml` if the filename/path changes.
3. Replace `assets/resume/resume.pdf` with your resume PDF.
4. Update `resume_path` in `_config.yml` if needed.

## GitHub Pages compatibility

- No custom unsupported plugins are used.
- Site is configured for standard GitHub Pages Jekyll builds.
- CI validates Jekyll builds on pull requests and pushes to `main` via `.github/workflows/jekyll-build-guard.yml`.
