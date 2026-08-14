import re

with open('src/index.css', 'r') as f:
    css = f.read()

import_statement = "@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap');"
import_tailwind = '@import "tailwindcss";'

# Remove existing imports
css = css.replace(import_statement, '')
css = css.replace(import_tailwind, '')

# Add them to the very top
css = f"{import_statement}\n{import_tailwind}\n{css}"

with open('src/index.css', 'w') as f:
    f.write(css)
