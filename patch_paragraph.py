import re

with open('src/HomePage.tsx', 'r') as f:
    content = f.read()

old_text = """                  <p>
                    The product is clear inside the company. The founder can explain it across a table. But the idea changes shape as it travels: through the website, sales, launches, hiring, fundraising. More content does not fix that. It multiplies the inconsistency.
                  </p>"""

new_text = """                  <p>
                    The product is clear inside the company. The founder can explain it across a table. But the idea changes shape as it travels: through the website, sales, launches, hiring, fundraising.
                  </p>
                  <p>
                    More content does not fix that. It multiplies the inconsistency.
                  </p>"""

if old_text in content:
    content = content.replace(old_text, new_text)
    with open('src/HomePage.tsx', 'w') as f:
        f.write(content)
    print("Patched paragraph break successfully.")
else:
    print("Could not find the target text.")
