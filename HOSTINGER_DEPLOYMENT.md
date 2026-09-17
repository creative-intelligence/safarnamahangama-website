# How to Deploy Your YouTube Automation Website to Hostinger

This guide provides step-by-step instructions for deploying your website to Hostinger Web Hosting or Cloud Hosting.

---

## Method 1: Uploading Static Production Build (Easiest & Fastest — Works on All Hostinger Plans)

### Step 1: Generate the Production Build Files
Open your terminal in the project directory `d:\Development\Website` and run:

```bash
npm run build
```

This will create a `dist` folder inside `d:\Development\Website\dist` containing:
- `index.html`
- `assets/` (bundled CSS, JavaScript, and fonts)

---

### Step 2: Upload to Hostinger hPanel

1. Log in to your **Hostinger hPanel** ([hostinger.com](https://hostinger.com)).
2. Go to **Websites** → Select your domain (e.g., `yourdomain.com`).
3. Click on **File Manager** under the **Files** section.
4. Open the `public_html` directory.
5. Delete any default files (like `default.php` or `hostingstart.html`) if present.
6. Upload all contents from your local `d:\Development\Website\dist` folder directly into `public_html`.
   *(Make sure `index.html` is directly inside `public_html`, not inside a subfolder).*

---

### Step 3: Configure `.htaccess` for Clean Routing (Optional but Recommended)

Create a file named `.htaccess` inside your Hostinger `public_html` folder with the following content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures single-page navigation and smooth reloads on your domain.

---

## Method 2: Automatic Git Deployment via Hostinger hPanel

If your project is pushed to a GitHub repository:

1. In Hostinger hPanel, go to **Advanced** → **Git**.
2. Paste your repository URL and branch (`main`).
3. Set the installation directory to `/public_html`.
4. Add a build command in Hostinger if supported or deploy pre-built assets.

---

## ⚡ Project File Structure Overview

```
Website/
├── dist/                    <-- Upload contents of this folder to Hostinger public_html
│   ├── index.html
│   └── assets/
├── src/
│   ├── config/
│   │   └── siteConfig.ts    <-- Change Agency Name, Phone, Email & Pricing here
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── AboutFounder.tsx
│   │   ├── GuaranteeBanner.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── RoiCalculator.tsx
│   │   ├── PortfolioProof.tsx
│   │   ├── PricingSection.tsx
│   │   ├── FaqSection.tsx
│   │   ├── ContactModal.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```
