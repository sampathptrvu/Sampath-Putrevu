import re

with open('src/HomePage.tsx', 'r') as f:
    content = f.read()

old = """        <div className="work-page-container">
          <ByTheNumbersSection />
        </div>"""
        
new = """        <section className="home-section scroll-mt-[100px]">
          <div className="w-full max-w-[var(--page-max-width)] mx-auto px-[var(--page-gutter)]">
            <ByTheNumbersSection />
          </div>
        </section>"""

content = content.replace(old, new)

with open('src/HomePage.tsx', 'w') as f:
    f.write(content)

print("Patched HomePage.tsx")
