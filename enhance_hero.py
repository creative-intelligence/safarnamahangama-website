from PIL import Image, ImageEnhance, ImageFilter
import os

hero_path = os.path.join('public', 'hero-bg.jpg')

if os.path.exists(hero_path):
    img = Image.open(hero_path).convert("RGB")
    
    # 1. Enhance Color Saturation (Vibrancy)
    enhancer = ImageEnhance.Color(img)
    img_colored = enhancer.enhance(1.25)
    
    # 2. Enhance Contrast (Deep pine greens & crisp snow caps)
    enhancer = ImageEnhance.Contrast(img_colored)
    img_contrasted = enhancer.enhance(1.15)
    
    # 3. Enhance Sharpness
    enhancer = ImageEnhance.Sharpness(img_contrasted)
    img_sharp = enhancer.enhance(1.3)

    # 4. Slightly Adjust Brightness for Dark Theme Elegance
    enhancer = ImageEnhance.Brightness(img_sharp)
    img_final = enhancer.enhance(1.05)

    img_final.save(hero_path, "JPEG", quality=95)
    print("Hero image enhanced successfully with vibrant color grading, contrast, and sharpness!")
else:
    print("hero-bg.jpg not found")
