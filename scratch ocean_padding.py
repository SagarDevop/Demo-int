import os
import re

base_dir = r"c:\Users\Admin\OneDrive\Desktop\interior design"

files = [
    "residential-interior.html",
    "home-interior.html",
    "bungalow-interior.html",
    "flat-interior.html",
    "apartment-interior.html",
    "penthouse-interior.html",
    "villa-interior.html",
    "farmhouse-interior.html"
]

for f_name in files:
    f_path = os.path.join(base_dir, f_name)
    with open(f_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    new_content = content.replace('<div class="pt-16">', '<div class="pt-[72px] sm:pt-[80px]">')
    
    if new_content != content:
        with open(f_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Fixed top padding wrapper in: {f_name}")
    else:
        print(f"Top padding wrapper already correct in: {f_name}")

print("\nPadding verification complete!")
