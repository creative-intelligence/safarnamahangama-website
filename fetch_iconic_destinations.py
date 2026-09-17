import urllib.request
import os

dest_dir = os.path.join(os.getcwd(), 'public', 'images', 'destinations')
os.makedirs(dest_dir, exist_ok=True)

iconic_places = {
    'hunza_passu.jpg': 'https://images.unsplash.com/photo-1586351012965-861624544334?auto=format&fit=crop&w=1200&q=90',
    'hunza_attabad.jpg': 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=90',
    'skardu_shangrila.jpg': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=90',
    'skardu_deosai.jpg': 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=90',
    'swat_malamjabba.jpg': 'https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=1200&q=90',
    'swat_kalam.jpg': 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=90',
    'kashmir_arangkel.jpg': 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=90',
    'fairy_meadows.jpg': 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=90',
    'naran_saifulmalook.jpg': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=90',
    'kumrat_katora.jpg': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=90',
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for filename, url in iconic_places.items():
    filepath = os.path.join(dest_dir, filename)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response, open(filepath, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Downloaded iconic destination photo: {filename}")
    except Exception as e:
        print(f"Error downloading {filename}: {e}")
