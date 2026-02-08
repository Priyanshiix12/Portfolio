# Quick Start Guide

## 🚀 Running Your Portfolio (Super Easy!)

### Method 1: Just Open It! (Recommended)

1. **Find `index.html`** in your project folder
2. **Double-click it** or right-click → "Open with" → Choose your browser
3. **Done!** Your portfolio is now running! 🎉

That's it! No installation, no setup, no dependencies needed.

### Method 2: Using a Local Server (Optional)

If you want to use a local server (useful for development):

**Using Python:**
```bash
# If you have Python installed
python -m http.server 8000
```
Then open: `http://localhost:8000`

**Using Node.js:**
```bash
# If you have Node.js installed
npx http-server -p 8000
```
Then open: `http://localhost:8000`

## 📝 Update Your Information

Before sharing your portfolio, update these placeholders in `index.html`:

1. **Search for `YOUR_GITHUB_USERNAME`** and replace with your actual GitHub username:
   - Line ~28 (Hero section)
   - Line ~50 (Open Source section)
   - Line ~30 (Contact section)

2. **Search for `YOUR_LINKEDIN_USERNAME`** and replace with your actual LinkedIn username:
   - Line ~35 (Hero section)
   - Line ~37 (Contact section)

3. **Search for `your.email@example.com`** and replace with your email:
   - Line ~44 (Contact section)

4. **Update Resume Link** (optional):
   - Find the "Download Resume" button in Contact section
   - Change `href="#"` to your actual resume URL

## 🎨 Quick Customization

### Change Colors

Open `styles.css` and find the `:root` section (around line 10). Change these values:

```css
--accent-blue: #38bdf8;    /* Change to your favorite blue */
--accent-violet: #818cf8; /* Change to your favorite purple */
```

### Add a Project

1. Open `index.html`
2. Find the `#projects` section
3. Copy one of the existing project cards
4. Modify the title, description, and tech tags

### Add a Skill

1. Open `index.html`
2. Find the `#skills` section
3. Copy one of the existing skill cards
4. Change the skill name and category

## 🚀 Deploy to GitHub Pages

1. Create a GitHub repository
2. Upload all files (`index.html`, `styles.css`, `script.js`)
3. Go to Settings → Pages
4. Select your branch and folder
5. Your site will be live at `https://YOUR_USERNAME.github.io/REPOSITORY_NAME`

## ✅ That's It!

Your portfolio is ready to go. Just open `index.html` in your browser and start customizing!

---

**Need more help?** Check `README.md` for detailed instructions.
