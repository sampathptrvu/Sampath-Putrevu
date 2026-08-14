import re

with open('src/WorkPage.tsx', 'r') as f:
    content = f.read()

old_sentence = "Owned the $8.5M seed announcement from first draft to distribution, including coverage in Business Standard, built the founder’s voice across LinkedIn and X, and ran the webinar engine as the primary demand channel."
new_sentence = "Helped launch the company out of stealth, including Business Standard coverage, with its $8.5M seed fundraise backed by Redpoint, Defy VC, SV Angel and Instacart founder Max Mullen."

if old_sentence in content:
    content = content.replace(old_sentence, new_sentence)
    with open('src/WorkPage.tsx', 'w') as f:
        f.write(content)
    print("Replaced in src/WorkPage.tsx")
else:
    print("Sentence not found in src/WorkPage.tsx")
