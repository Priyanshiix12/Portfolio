# Priyanshi Taliyan - Portfolio Website

A high-end, professional, animated personal portfolio website built with **vanilla HTML, CSS, and JavaScript** - no frameworks required! Features smooth animations, dark/light mode toggle, and a modern minimalist design.

## 🚀 Features

- **Modern Design**: Dark theme with blue/violet gradient accents
- **Smooth Animations**: Page-load and scroll-triggered reveal animations
- **Dark/Light Mode**: Toggle with localStorage persistence
- **Responsive**: Fully responsive design for all devices
- **Performance Optimized**: Lightweight and fast-loading (no framework overhead)
- **Accessibility**: SEO-friendly and follows accessibility best practices
- **Zero Dependencies**: Pure HTML, CSS, and JavaScript - just open and run!

## 📋 Sections

1. **Hero Section**: Prominent introduction with animated background
2. **About Me**: Personal background and interests
3. **Skills**: Animated skill cards with categories
4. **Projects**: Card-based project showcase
5. **Open Source**: Dedicated section for future contributions
6. **Contact**: Social links and resume download

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, animations, and gradients
- **JavaScript (ES6+)**: Vanilla JavaScript for all interactivity
- **Google Fonts**: Inter font family for clean typography

## 🚀 Quick Start

### Option 1: Open Directly in Browser (Easiest!)

1. **Simply double-click `index.html`** or right-click and select "Open with" your browser
2. That's it! The website will open and work perfectly.

### Option 2: Using a Local Server (Recommended for Development)

If you want to test with a local server (useful for development):

**Using Python (if installed):**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (if installed):**
```bash
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

## 🔧 Configuration

Before deploying, update the following placeholders in `index.html`:

1. **GitHub Username**: Replace `YOUR_GITHUB_USERNAME` (appears in Hero, OpenSource, and Contact sections)

2. **LinkedIn Username**: Replace `YOUR_LINKEDIN_USERNAME` (appears in Hero and Contact sections)

3. **Email Address**: Replace `your.email@example.com` in the Contact section

4. **Resume Link**: Update the resume download link in the Contact section (change `href="#"` to your actual resume URL)

## 🚀 Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select the branch (usually `main` or `master`)
4. Select the folder (usually `/root`)
5. Click Save
6. Your site will be live at `https://YOUR_USERNAME.github.io/REPOSITORY_NAME`

### Netlify

1. Go to [Netlify](https://app.netlify.com)
2. Drag and drop your project folder
3. Your site is live instantly!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### Any Static Hosting

Since this is pure HTML/CSS/JS, you can deploy to:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- AWS S3
- Any web hosting service

Just upload all files (`index.html`, `styles.css`, `script.js`) to your hosting service.

## 📁 Project Structure

```
PortFolio/
├── index.html          # Main HTML file with all sections
├── styles.css          # All CSS styling, animations, and theme
├── script.js           # JavaScript for interactivity
├── README.md           # This file
├── QUICK_START.md      # Quick setup guide
└── SETUP_INSTRUCTIONS.md # Detailed setup instructions
```

## 🎨 Customization

### Colors & Theme

Edit CSS variables in `styles.css` (around line 10):

```css
:root {
    --accent-blue: #38bdf8;
    --accent-violet: #818cf8;
    /* ... other variables */
}
```

### Adding Projects

Edit the HTML in `index.html` within the `#projects` section. Copy a project card and modify:

```html
<div class="project-card animate-on-scroll">
    <div class="project-header">
        <h3 class="project-title">Your Project Name</h3>
        <div class="project-links">
            <a href="YOUR_LINK" target="_blank" class="project-link">
                <!-- SVG icon -->
            </a>
        </div>
    </div>
    <p class="project-description">Your project description</p>
    <div class="project-tech">
        <span class="tech-tag">Tech1</span>
        <span class="tech-tag">Tech2</span>
    </div>
</div>
```

### Adding Skills

Edit the HTML in `index.html` within the `#skills` section. Copy a skill card:

```html
<div class="skill-card animate-on-scroll">
    <div class="skill-icon">
        <!-- SVG icon -->
    </div>
    <h3 class="skill-name">Skill Name</h3>
    <span class="skill-category">Category</span>
</div>
```

### Modifying Content

- **About Section**: Edit the `<p>` tags in the `#about` section
- **Hero Section**: Edit text in the `#hero` section
- **Open Source**: Edit content in the `#opensource` section

## ✨ Features Explained

### Dark/Light Mode
- Toggle button in top-right corner
- Preference saved in browser localStorage
- Smooth theme transition

### Scroll Animations
- Elements fade in as you scroll
- Uses Intersection Observer API for performance
- Staggered animations for cards

### Smooth Scrolling
- All navigation links scroll smoothly
- Active section highlighting in navbar

### Scroll Progress
- Progress bar at top of page
- Shows how far you've scrolled

### Back to Top
- Appears after scrolling 300px
- Smooth scroll to top

## 🐛 Troubleshooting

**Animations not working?**
- Make sure JavaScript is enabled in your browser
- Check browser console for errors (F12)

**Theme not persisting?**
- Check if localStorage is enabled in your browser
- Clear browser cache and try again

**Styles not loading?**
- Ensure `styles.css` is in the same folder as `index.html`
- Check the file path in the `<link>` tag

**JavaScript not working?**
- Ensure `script.js` is in the same folder as `index.html`
- Check the file path in the `<script>` tag
- Open browser console (F12) to check for errors

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Priyanshi Taliyan**
- Freshman CS Major at KIET Group of Institutions
- GitHub: [@YOUR_GITHUB_USERNAME](https://github.com/YOUR_GITHUB_USERNAME)
- LinkedIn: [@YOUR_LINKEDIN_USERNAME](https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME)

---

Built with ❤️ using pure HTML, CSS, and JavaScript - no frameworks, no dependencies, just clean code!
