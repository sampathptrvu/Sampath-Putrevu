import re

with open('src/HomePage.tsx', 'r') as f:
    content = f.read()

# Replace introductory paragraphs
intro_old = r'<p>\s*Before I worked inside startups, I spent four years reporting on how technical companies were built\.\s*</p>\s*<p>\s*These five pieces, selected from 406 stories published under my YourStory byline and more than 350 interviews with founders, technologists, operators and investors, are closest to the work I do now: finding the idea beneath the product and giving it a form other people can understand\.\s*</p>'
intro_new = r'''<p>
                  Before I worked inside startups, I spent four years reporting on how technical companies were built. That work taught me to find the idea beneath the product and give it a form other people can understand.
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[15px] font-medium text-panel-muted mt-2 mb-2">
                  <span>4 years at YourStory</span>
                  <span className="w-1 h-1 rounded-full bg-divider-dark opacity-40"></span>
                  <span>406 published stories</span>
                  <span className="w-1 h-1 rounded-full bg-divider-dark opacity-40"></span>
                  <span>350+ interviews</span>
                </div>'''
content = re.sub(intro_old, intro_new, content)

# Remove 'min-[900px]:grid min-[900px]:grid-cols-3' and use xl:grid xl:grid-cols-3
# Wait, let's just replace the whole section.
