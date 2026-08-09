import re

def update_file(filename):
    with open(filename, 'r') as f:
        content = f.read()

    # Web3Auth update in ByTheNumbersSection.tsx (doesn't have Sequoia mentioned? Let's check)
    # Zenskar metrics $1.5M in closed-won deals
    
    # In WorkPage
    content = content.replace('>Sequoia</a>-backed', '>Peak XV</a>-backed')
    content = content.replace('href="https://www.sequoiacap.com/"', 'href="https://www.peakxv.com/"')
    
    with open(filename, 'w') as f:
        f.write(content)

update_file('src/WorkPage.tsx')

# Now for ByTheNumbersSection.tsx
with open('src/ByTheNumbersSection.tsx', 'r') as f:
    content = f.read()
content = content.replace('$2.5M in closed-won revenue', '$2.5M in closed-won revenue') # Unchanged
print("Patched PeakXV")
