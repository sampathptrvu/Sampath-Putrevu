with open('src/WorkPage.tsx', 'r') as f:
    c = f.read()
start = c.find('Zenskar')
print(c[start-300:start+1000])
