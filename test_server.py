import subprocess
import time
import urllib.request

subprocess.Popen(["python3", "-m", "http.server", "8099"], cwd="dist")
time.sleep(2)

paths = [
    "/",
    "/work/",
    "/journalism/",
    "/journalism/postman/",
    "/journalism/hubspot/",
    "/journalism/observe-ai/",
    "/journalism/google-maps-india/",
    "/journalism/razorpay/",
]

for p in paths:
    url = f"http://localhost:8099{p}"
    try:
        req = urllib.request.urlopen(url)
        html = req.read().decode('utf-8')
        status = req.status
        content_type = req.headers.get('Content-Type')
    except Exception as e:
        print(f"[{p}] Error: {e}")
        continue
        
    print(f"[{p}] Status: {status}")
    print(f"[{p}] Content-Type: {content_type}")
    # Simple extraction
    title = html.split('<title>')[1].split('</title>')[0] if '<title>' in html else 'MISSING'
    canonical = html.split('rel="canonical" href="')[1].split('"')[0] if 'rel="canonical"' in html else 'MISSING'
    og_url = html.split('property="og:url" content="')[1].split('"')[0] if 'property="og:url"' in html else 'MISSING'
    print(f"[{p}] Title: {title}")
    print(f"[{p}] Canonical: {canonical}")
    print(f"[{p}] OG URL: {og_url}")
    print("-" * 20)

assets = [
    "/og-image-v2.jpg",
    "/favicon-16x16.png",
    "/favicon-32x32.png",
    "/apple-touch-icon.png",
]

for a in assets:
    url = f"http://localhost:8099{a}"
    try:
        req = urllib.request.urlopen(url)
        status = req.status
        content_type = req.headers.get('Content-Type')
    except Exception as e:
        status = str(e)
        content_type = "N/A"
    print(f"[{a}] Status: {status}, Content-Type: {content_type}")

subprocess.run(["pkill", "-f", "http.server 8099"])
