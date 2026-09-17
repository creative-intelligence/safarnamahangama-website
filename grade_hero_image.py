from PIL import Image, ImageEnhance
import os

# Re-copy raw image from upload if exists, or re-grade cleanly
upload_path = r'C:\Users\Usama\.gemini\antigravity\brain\198cc7da-7375-42d8-8cb4-a9066ba72dab\.user_uploaded\media_1789683966470.jpg'
hero_path = os.path.join('public', 'hero-bg.jpg')

if os.path.exists(upload_path):
    img = Image.open(upload_path).convert("RGB")
    
    # Warm Golden Amber Tint matching #E5983A (subtle 5% warmth, 10% dark depth for clarity)
    gold_overlay = Image.new("RGB", img.size, (229, 152, 58)) # #E5983A
    dark_overlay = Image.new("RGB", img.size, (4, 7, 13))     # #04070D
    
    warmed = Image.blend(img, gold_overlay, 0.05)
    graded = Image.blend(warmed, dark_overlay, 0.12) # lighter dark blend for a slightly clearer look
    
    # Boost Sharpness & Vibrancy slightly
    enhancer = ImageEnhance.Sharpness(graded)
    sharp = enhancer.enhance(1.25)
    
    enhancer = ImageEnhance.Color(sharp)
    final_img = enhancer.enhance(1.15)
    
    final_img.save(hero_path, "JPEG", quality=98)
    print("Hero image re-graded for extra clarity and crispness!")
else:
    print("Upload path not found")
