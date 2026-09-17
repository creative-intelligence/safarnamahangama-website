from PIL import Image, ImageEnhance
import os

hero_path = os.path.join('public', 'hero-bg.jpg')

if os.path.exists(hero_path):
    img = Image.open(hero_path).convert("RGB")
    
    # 1. Warm Golden Amber Tint matching #E5983A
    gold_overlay = Image.new("RGB", img.size, (229, 152, 58)) # #E5983A
    dark_overlay = Image.new("RGB", img.size, (4, 7, 13))     # #04070D
    
    # Blend image with golden warmth (8%) and dark vignette depth (22%)
    warmed = Image.blend(img, gold_overlay, 0.08)
    graded = Image.blend(warmed, dark_overlay, 0.22)
    
    # 2. Boost Contrast & Vibrancy
    enhancer = ImageEnhance.Contrast(graded)
    contrasted = enhancer.enhance(1.15)
    
    enhancer = ImageEnhance.Color(contrasted)
    final_img = enhancer.enhance(1.12)
    
    final_img.save(hero_path, "JPEG", quality=95)
    print("Hero image color graded successfully!")
else:
    print("hero-bg.jpg not found")
