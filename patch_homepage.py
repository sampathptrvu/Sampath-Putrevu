import re

with open('src/HomePage.tsx', 'r') as f:
    content = f.read()

# Add import
content = content.replace("import Header from './Header';", "import Header from './Header';\nimport ByTheNumbersSection from './ByTheNumbersSection';")

# Add component after Credibility Section
insertion_point = """        </section>


        {/* How I help */}"""
        
replacement = """        </section>

        <section className="home-section scroll-mt-[100px]">
          <div className="section-row">
            <ByTheNumbersSection />
          </div>
        </section>

        {/* How I help */}"""

content = content.replace(insertion_point, replacement)

with open('src/HomePage.tsx', 'w') as f:
    f.write(content)

print("Patched HomePage.tsx")
