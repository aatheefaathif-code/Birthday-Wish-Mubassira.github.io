# 🎂 Happy Birthday, Mubassira! ✨🌸

A personalized, interactive birthday celebration web application crafted with warm wishes for **Mubassira** — cousin by relation, friends by heart!

Inspired by the concept of digital candle blowing and celebratory surprises, this project elevates the experience with an enchanting pastel pink, purple, and lavender aesthetic, realistic candle physics, real-time microphone breath detection, glittering star & ribbon confetti bursts, floating balloons, celebratory audio, and heartwarming wishes tailored for a cousin who vibes and hangs out like a close friend.

---

## 🌟 Key Features

1. **Dreamy Pastel Aesthetic**:
   - Palette tailored with soft pastel pink (`#f472b6`), lavender (`#d8b4fe`), and deep violet glassmorphism.
   - Ambient floating glow orbs, subtle stars, and smooth backdrop blurs.
   - Elegant typography with Google Fonts (*Dancing Script*, *Playfair Display*, and *Outfit*).

2. **Interactive Gourmet Birthday Cake**:
   - Custom multi-tier frosted cake decorated with strawberries, sprinkles, and golden plate.
   - Custom cake plaque reading **"Mubassira ✨"**.
   - Candle featuring dynamic flame flicker, ambient candlelight halo, and realistic rising smoke wisps upon blowout.

3. **Smart Microphone Breath Detection + Tap Fallback**:
   - Built on the modern **Web Audio API** with automatic 1-second background noise baseline calibration.
   - Live visual **Blow Volume Meter** showing real-time breath detection.
   - **Tap-to-Extinguish Fallback**: Users can tap/click the flame, the cake, or the quick button at any time.

4. **Celebration Moments**:
   - Canvas-based particle explosion with pastel ribbons, circles, and glittering stars.
   - Smooth rising pastel balloons with realistic string sway physics.
   - Celebratory synthesized birthday melody using Web Audio API (zero external asset dependencies; works seamlessly anywhere!).

5. **Personalized "Cousin & Friend" Vibe**:
   - Tailored specifically for a cousin who hangs out, chats, and vibes like a close friend:
     - *"Enakku nee cousin dhaan, aana namma pazhagurathu ennamo oru nalla friend mathiri thaan!"*
     - Genuine, friendly, cheerful appreciation without any awkward or romantic content.
     - Warm wishes for health, happiness, peace of mind, and personal success.

6. **Interactive Cards & Mini Balloon Pop Game**:
   - "Cousin & Friend Bond", "Smiles & Good Vibes", and "Success & Health" cards.
   - Pop-able mini balloons with custom audio effects and hidden birthday wishes.
   - "Make Another Wish" button to easily relight the cake and repeat the experience.

---

## 🚀 Quick Start (Local Setup)

Because this project is built using vanilla **HTML5, CSS3, and JavaScript**, no build tools, npm packages, or compilers are needed!

### Option 1: Direct File Open
Simply double-click `index.html` or right-click and choose **Open with > Chrome / Firefox / Safari / Edge**.

### Option 2: Local HTTP Server (Recommended for Microphone Testing)
Modern browsers require a secure origin (`https://` or `http://localhost`) to grant microphone access.

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
git commit -m "Happy Birthday Mubassira website - Cousin & Friend"
```

### Step 2: Create a New GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click **New Repository** (or visit `https://github.com/new`).
3. Set the repository name to: **`Mubassira-Birthday`**.
4. Set visibility to **Public** (required for free GitHub Pages).
5. Leave "Add a README", ".gitignore", and license unchecked.
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
├── style.css         # Glassmorphism, pastel aesthetics, responsive design system
├── script.js         # Web Audio API, candle blowing, star confetti, balloon physics
└── README.md         # Documentation & deployment guide
```

---

## 🌸 Warm Wishes
Crafted with warm wishes for **Mubassira** — Happy Birthday! ✨🎂🌸
