import urllib.request
import os

images_dir = os.path.join(os.getcwd(), 'public', 'images')
os.makedirs(images_dir, exist_ok=True)

url = 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=85'
filepath = os.path.join(images_dir, 'family.jpg')

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req) as response, open(filepath, 'wb') as out_file:
    out_file.write(response.read())

print("Family image downloaded successfully")
