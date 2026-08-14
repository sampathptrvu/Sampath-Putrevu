import re

with open('vite.config.ts', 'r') as f:
    content = f.read()

content = content.replace(", loadEnv", "")
content = content.replace("({mode})", "()")
content = content.replace("const env = loadEnv(mode, '.', '');", "")

define_block_old = r"""    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },"""

content = re.sub(r'\s*define:\s*{\s*\'process\.env\.GEMINI_API_KEY\': JSON\.stringify\(env\.GEMINI_API_KEY\),\s*},', '', content)

with open('vite.config.ts', 'w') as f:
    f.write(content)
