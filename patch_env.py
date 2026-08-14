with open('.env.example', 'r') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if 'GEMINI_API_KEY' in line or 'APP_URL' in line or 'AI Studio' in line or 'Required for' in line or 'Users configure this' in line:
        continue
    new_lines.append(line)

with open('.env.example', 'w') as f:
    f.writelines(new_lines)
