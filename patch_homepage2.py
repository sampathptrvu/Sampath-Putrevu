import re

with open('src/HomePage.tsx', 'r') as f:
    content = f.read()

# Replace the incorrect insertion
old = """        <section className="home-section scroll-mt-[100px]">
          <div className="section-row">
            <ByTheNumbersSection />
          </div>
        </section>"""
        
new = """        <div className="work-page-container">
          <ByTheNumbersSection />
        </div>"""

content = content.replace(old, new)

with open('src/HomePage.tsx', 'w') as f:
    f.write(content)

print("Patched HomePage.tsx")
