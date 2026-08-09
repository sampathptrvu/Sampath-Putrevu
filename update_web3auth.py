import re

with open('src/WorkPage.tsx', 'r') as f:
    content = f.read()

old_str = '<p className="type-card-heading-3 mt-4"><a href="https://web3auth.io/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Web3Auth</a> &middot; Communications and Content Lead &middot; <a href="https://www.peakxv.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Peak XV</a>-backed wallet infrastructure, acquired by Consensys in 2025</p>'
new_str = '<p className="type-card-heading-3 mt-4"><a href="https://web3auth.io/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Web3Auth</a> &middot; Head of Content and Brand Marketing &middot; <a href="https://www.sequoiacap.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Sequoia</a>-backed wallet infrastructure</p>'

if old_str in content:
    content = content.replace(old_str, new_str)
    with open('src/WorkPage.tsx', 'w') as f:
        f.write(content)
    print("Success: Updated Web3Auth entry in WorkPage.tsx")
else:
    print("Error: Could not find old string in WorkPage.tsx")
