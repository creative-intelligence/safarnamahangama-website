from PIL import Image, ImageDraw
import os

logo_path = os.path.join('public', 'logo.png')
favicon_path = os.path.join('public', 'favicon.png')

if os.path.exists(logo_path):
    img = Image.open(logo_path).convert("RGBA")
    width, height = img.size
    
    # Create circular mask
    mask = Image.new('L', (width, height), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, width, height), fill=255)
    
    # Apply circular mask
    result = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    result.paste(img, (0, 0), mask)
    
    result.save(favicon_path, "PNG")
    print("Favicon created cleanly with circular mask and no white edges!")
else:
    print("logo.png not found")
