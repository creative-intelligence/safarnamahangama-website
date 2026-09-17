import os
import shutil
from PIL import Image

src_dir = r"F:\Safarnama"
dest_safarnama_dir = os.path.join(os.getcwd(), 'public', 'images', 'safarnama')
dest_destinations_dir = os.path.join(os.getcwd(), 'public', 'images', 'destinations')

os.makedirs(dest_safarnama_dir, exist_ok=True)
os.makedirs(dest_destinations_dir, exist_ok=True)

# Select high quality files (> 200KB)
all_files = [f for f in os.listdir(src_dir) if f.endswith('.jpg') or f.endswith('.png')]
high_quality_files = [f for f in all_files if os.path.getsize(os.path.join(src_dir, f)) > 200000]

print(f"Total files in F:\\Safarnama: {len(all_files)}")
print(f"High quality files (>200KB): {len(high_quality_files)}")

# Copy top 30 photos for Safarnama group/family/friends usage
copied_safarnama = []
for i, f in enumerate(high_quality_files[:35]):
    src_file = os.path.join(src_dir, f)
    target_name = f"safarnama_{i+1}.jpg"
    target_file = os.path.join(dest_safarnama_dir, target_name)
    shutil.copy(src_file, target_file)
    copied_safarnama.append(target_name)

print(f"Copied {len(copied_safarnama)} photos to public/images/safarnama/")
