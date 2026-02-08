# How to Run the Portfolio Website in Your Browser

## 🎉 Super Simple - No Installation Needed!

This portfolio is built with **pure HTML, CSS, and JavaScript** - no frameworks, no dependencies, no installation required!

## Method 1: Just Open It! (Easiest Way)

1. **Navigate to your project folder:**
   - `C:\Users\Priyanshi\OneDrive\PortFolio`

2. **Find the file `index.html`**

3. **Double-click `index.html`** or right-click → "Open with" → Choose your browser (Chrome, Firefox, Edge, etc.)

4. **That's it!** Your portfolio website will open in your browser! 🚀

The website will work perfectly - all animations, dark/light mode, and features will work immediately.

## Method 2: Using a Local Server (Optional)

If you want to use a local server (useful for development and testing):

### Option A: Python (if you have Python installed)

1. **Open PowerShell or Command Prompt** in your project folder
2. **Run this command:**
   ```bash
   python -m http.server 8000
   ```
   (For Python 2, use: `python -m SimpleHTTPServer 8000`)

3. **Open your browser** and go to: `http://localhost:8000`

### Option B: Node.js (if you have Node.js installed)

1. **Open PowerShell or Command Prompt** in your project folder
2. **Run this command:**
   ```bash
   npx http-server -p 8000
   ```

3. **Open your browser** and go to: `http://localhost:8000`

### Option C: VS Code Live Server Extension

1. **Install the "Live Server" extension** in VS Code
2. **Right-click on `index.html`**
3. **Select "Open with Live Server"**

## 📝 Before Sharing: Update Your Information

Before you share your portfolio, update these placeholders in `index.html`:

### 1. GitHub Username

Search for `YOUR_GITHUB_USERNAME` and replace it in these locations:
- Hero section (around line 28)
- Open Source section (around line 50)
- Contact section (around line 30)

### 2. LinkedIn Username

Search for `YOUR_LINKEDIN_USERNAME` and replace it in:
- Hero section (around line 35)
- Contact section (around line 37)

### 3. Email Address

Search for `your.email@example.com` and replace with your actual email (around line 44)

### 4. Resume Link (Optional)

Find the "Download Resume" button and change `href="#"` to your actual resume URL

## 🎨 Quick Customization Tips

### Change Colors

1. Open `styles.css`
2. Find the `:root` section (around line 10)
3. Change the color values:
   ```css
   --accent-blue: #38bdf8;    /* Your favorite blue */
   --accent-violet: #818cf8; /* Your favorite purple */
   ```

### Add Projects

1. Open `index.html`
2. Find the `#projects` section
3. Copy an existing project card
4. Modify the title, description, and tech tags

### Add Skills

1. Open `index.html`
2. Find the `#skills` section
3. Copy an existing skill card
4. Change the skill name and category

## 🚀 Deploy to GitHub Pages

1. **Create a GitHub repository** (if you haven't already)
2. **Upload all files** to the repository:
   - `index.html`
   - `styles.css`
   - `script.js`
3. **Go to repository Settings** → **Pages**
4. **Select your branch** (usually `main` or `master`)
5. **Select the folder** (usually `/root`)
6. **Click Save**
7. Your site will be live at: `https://YOUR_USERNAME.github.io/REPOSITORY_NAME`

## ✅ Features That Work Out of the Box

- ✅ Dark/Light mode toggle (saves your preference)
- ✅ Smooth scroll animations
- ✅ Scroll progress bar
- ✅ Back to top button
- ✅ Active navigation highlighting
- ✅ Responsive design (works on mobile, tablet, desktop)
- ✅ All animations and interactions

## 🐛 Troubleshooting

### Website not loading?
- Make sure `index.html`, `styles.css`, and `script.js` are all in the same folder
- Check that file names match exactly (case-sensitive on some systems)

### Styles not showing?
- Open browser console (F12) and check for errors
- Verify `styles.css` is in the same folder as `index.html`
- Check the `<link>` tag in `index.html` points to `styles.css`

### JavaScript not working?
- Open browser console (F12) and check for errors
- Verify `script.js` is in the same folder as `index.html`
- Check the `<script>` tag in `index.html` points to `script.js`
- Make sure JavaScript is enabled in your browser

### Animations not working?
- Make sure JavaScript is enabled
- Check browser console for errors
- Try refreshing the page (Ctrl+F5 or Cmd+Shift+R)

## 📚 File Structure

Your project should look like this:

```
PortFolio/
├── index.html          ← Main HTML file
├── styles.css          ← All styling
├── script.js           ← All JavaScript
├── README.md           ← Documentation
├── QUICK_START.md      ← Quick guide
└── SETUP_INSTRUCTIONS.md ← This file
```

## 🎓 Learning Resources

Since this is pure HTML/CSS/JS, it's perfect for learning:
- **HTML**: Semantic structure in `index.html`
- **CSS**: Modern styling, animations, and variables in `styles.css`
- **JavaScript**: DOM manipulation, events, and APIs in `script.js`

## 💡 Next Steps

1. ✅ Open `index.html` in your browser
2. ✅ Update your personal information
3. ✅ Customize colors and content
4. ✅ Add your projects and skills
5. ✅ Deploy to GitHub Pages or Netlify
6. ✅ Share your portfolio!

---

**That's it!** No complex setup, no dependencies, just open and go! 🚀
