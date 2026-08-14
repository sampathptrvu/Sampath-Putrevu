import os
import re

routes = [
    'dist/index.html',
    'dist/work/index.html',
    'dist/journalism/index.html',
    'dist/journalism/postman/index.html',
    'dist/journalism/hubspot/index.html',
    'dist/journalism/observe-ai/index.html',
    'dist/journalism/google-maps-india/index.html',
    'dist/journalism/razorpay/index.html'
]

tags_to_check = [
    ('title', r'<title>(.*?)</title>', 'text'),
    ('description', r'<meta\s+name="description"\s+content="([^"]*)"', 'content'),
    ('canonical', r'<link\s+rel="canonical"\s+href="([^"]*)"', 'href'),
    ('robots', r'<meta\s+name="robots"\s+content="([^"]*)"', 'content'),
    ('og:type', r'<meta\s+property="og:type"\s+content="([^"]*)"', 'content'),
    ('og:site_name', r'<meta\s+property="og:site_name"\s+content="([^"]*)"', 'content'),
    ('og:title', r'<meta\s+property="og:title"\s+content="([^"]*)"', 'content'),
    ('og:description', r'<meta\s+property="og:description"\s+content="([^"]*)"', 'content'),
    ('og:url', r'<meta\s+property="og:url"\s+content="([^"]*)"', 'content'),
    ('og:image', r'<meta\s+property="og:image"\s+content="([^"]*)"', 'content'),
    ('og:image:secure_url', r'<meta\s+property="og:image:secure_url"\s+content="([^"]*)"', 'content'),
    ('og:image:type', r'<meta\s+property="og:image:type"\s+content="([^"]*)"', 'content'),
    ('og:image:width', r'<meta\s+property="og:image:width"\s+content="([^"]*)"', 'content'),
    ('og:image:height', r'<meta\s+property="og:image:height"\s+content="([^"]*)"', 'content'),
    ('og:image:alt', r'<meta\s+property="og:image:alt"\s+content="([^"]*)"', 'content'),
    ('twitter:card', r'<meta\s+name="twitter:card"\s+content="([^"]*)"', 'content'),
    ('twitter:title', r'<meta\s+name="twitter:title"\s+content="([^"]*)"', 'content'),
    ('twitter:description', r'<meta\s+name="twitter:description"\s+content="([^"]*)"', 'content'),
    ('twitter:image', r'<meta\s+name="twitter:image"\s+content="([^"]*)"', 'content'),
    ('twitter:image:alt', r'<meta\s+name="twitter:image:alt"\s+content="([^"]*)"', 'content'),
    ('theme-color', r'<meta\s+name="theme-color"\s+content="([^"]*)"', 'content')
]

for route in routes:
    print(f"--- {route} ---")
    with open(route, 'r') as f:
        content = f.read()
        
    for name, pattern, attr in tags_to_check:
        matches = re.findall(pattern, content)
        val = matches[0] if matches else "MISSING"
        count = len(matches)
        print(f"{name}: {val} (Count: {count})")
    print("\n")
