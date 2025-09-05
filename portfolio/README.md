# Portfolio Jekyll
Source code for generating portfolio website

## Update resume and contact information

-> add pdf file in `/assets/documents/` and update contact information and links in `/_config.yml`

## Update About section

-> check `/_about_details/about.md`

## Update / add project | experience | education

-> add or edit a markdown file in `/_projects/` | `/_jobs/` | `/_courses/`

Best to copy from an existing project file to keep the same structure.

Files are named `{end-year}-{end-month}-{start-year}-{start-month}-{project|job|course-name}.md` so they can be sorted from the most recent to the oldest.

## Star / unstar projects

-> copy a file from `/_projects/` to `/_starred_projects/` to star it (will appear in the project highlights)

-> delete file in `/_starred_projects/` to unstar it

## Update / add images

Images are in `/assets/images/`:
- profile picture for the header -> `/assets/images/profile.jpg`
- site favicon -> `/assets/images/favicon/favicon.ico`
- company and institue logo for Experience and Education sections -> `/assets/images/logo/`
- project thumbnails for the Project Highlights and Project Gallery sections -> `/assets/images/thumbnails/`

## Update style (css)

-> edit `/_sass/main.scss`, `/assets/css/styles.scss` and/or `/_layout/default.html`
