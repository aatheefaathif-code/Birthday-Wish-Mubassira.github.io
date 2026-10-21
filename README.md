# 🎂 Happy Birthday, Mubassira! ✨🌸

A personalized, interactive birthday celebration web application crafted with love for **Mubassira** — the coolest cousin and best friend!

Inspired by the concept of digital candle blowing and celebratory surprises, this project elevates the experience with an enchanting pastel pink, purple, and lavender aesthetic, realistic candle physics, real-time microphone breath detection, confetti bursts, floating balloons, upbeat celebratory audio, and heartfelt Tanglish (Tamil-English) birthday wishes.

---

## 🌟 Key Features

1. **Dreamy Pastel Aesthetic**:
   - Palette tailored with soft pastel pink (`#f472b6`), lavender (`#d8b4fe`), and deep violet glassmorphism.
   - Ambient floating glow orbs and smooth backdrop blurs.
   - Elegant typography with Google Fonts (*Dancing Script*, *Playfair Display*, and *Outfit*).

2. **Interactive Gourmet Birthday Cake**:
   - Custom multi-tier frosted cake decorated with strawberries, sprinkles, and golden plate.
   - Custom cake plaque reading **"Mubassira ♡"**.
   - Candle featuring dynamic flame flicker, ambient candlelight halo, and realistic rising smoke wisps upon blowout.

3. **Smart Microphone Breath Detection + Tap Fallback**:
   - Built on the modern **Web Audio API** with automatic 1-second background noise baseline calibration.
   - Live visual **Blow Volume Meter** showing real-time breath detection.
   - **Tap-to-Extinguish Fallback**: Users can tap/click the flame, the cake, or the quick button at any time.

4. **Celebration Moments**:
   - Canvas-based particle explosion with pastel ribbons, circles, and hearts.
   - Smooth rising pastel balloons with realistic string sway physics.
   - Celebratory synthesized birthday melody using Web Audio API (zero external asset dependencies; works seamlessly anywhere!).

5. **Personalized Tanglish (Tamil-English) Cousin Message**:
   - Heartwarming, funny, and caring cousin & best-friend vibes:
     - Teasing about family functions, inside jokes, and biryani treats.
     - Sincere duas and blessings for health, success, and joy.
     - Strictly bestie & cousin love — non-romantic.

6. **Interactive Cousin Perks & Mini Balloon Pop Game**:
   - "Best Cousin Award", "Biryani Debt Voucher", and "Vault of Secrets" cards.
   - Pop-able mini balloons with custom audio effects and hidden birthday greetings.
   - "Make Another Wish" button to easily relight the cake and repeat the experience.

---

## 🚀 Quick Start (Local Setup)

Because this project is built using vanilla **HTML5, CSS3, and JavaScript**, no build tools, npm packages, or compilers are needed!

### Option 1: Direct File Open
Simply double-click `index.html` or right-click and choose **Open with > Chrome / Firefox / Safari / Edge**.

### Option 2: Local HTTP Server (Recommended for Microphone Testing)
Modern browsers require a secure origin (`https://` or `http://localhost`) to grant microphone access.

You can launch a quick local server using Python or Node:

**Using Python:**
```bash
# In the project directory:
python -m http.server 8000
```
Then visit: `http://localhost:8000`

**Using Node / npx:**
```bash
npx serve .
```

---

## 🌐 How to Deploy to GitHub & GitHub Pages

Follow these simple steps to publish this website live for Mubassira under a new repository named `Mubassira-Birthday`:

### Step 1: Initialize Git Repository
In your terminal, navigate inside the `Mubassira-Birthday` folder:

```bash
cd "Mubassira-Birthday"
git init
git add .
git commit -m "Initial commit: Happy Birthday Mubassira website"
```

### Step 2: Create a New GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click **New Repository** (or visit `https://github.com/new`).
3. Set the repository name to: **`Mubassira-Birthday`**.
4. Set visibility to **Public** (required for free GitHub Pages).
5. Leave "Add a README", ".gitignore", and license unchecked (as you already have them locally).
6. Click **Create repository**.

### Step 3: Push to GitHub
Run the following commands in your terminal (replace `<YOUR-GITHUB-USERNAME>` with your GitHub username):

```bash
git branch -M main
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/Mubassira-Birthday.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (tab at the top).
3. In the left sidebar, click **Pages** (under "Code and automation").
4. Under **Build and deployment > Source**, select **Deploy from a branch**.
5. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
6. Wait 1-2 minutes. GitHub will provide a live URL, typically:
   ```
   https://<YOUR-GITHUB-USERNAME>.github.io/Mubassira-Birthday/
   ```

---

## 📂 Project Structure

```text
Mubassira-Birthday/
├── index.html        # Main HTML structure, semantic layout, accessible tags
├── style.css         # Glassmorphism, animations, responsive design system
├── script.js         # Web Audio API, candle blowing, confetti, balloon physics
└── README.md         # Documentation & deployment guide
```

---

## 💖 Made with Love
Created for **Mubassira** — wishing her the happiest birthday! 🌸🎂✨
