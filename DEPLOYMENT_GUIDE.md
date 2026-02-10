# How to Deploy and Share Your Portfolio Website

## 🚀 Quick Answer

After deploying, your website will be accessible at a public URL like:
- `https://Priyanshiix12.github.io/portfolio` (GitHub Pages)
- `https://your-site.netlify.app` (Netlify)
- `https://your-site.vercel.app` (Vercel)

## 📋 Step-by-Step: GitHub Pages (Recommended)

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in:
   - **Repository name**: `portfolio` (or `priyanshi-portfolio`)
   - **Description**: "My personal portfolio website"
   - **Visibility**: Select **Public** (required for free GitHub Pages)
   - **DO NOT** check "Add a README file"
4. Click **"Create repository"**

### Step 2: Upload Your Files

**Method A: Using GitHub Web Interface**

1. In your new repository, click **"uploading an existing file"**
2. Drag and drop these 3 files:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Scroll down and click **"Commit changes"**

**Method B: Using Git (if you have Git installed)**

```bash
# In your project folder
git init
git add index.html styles.css script.js
git commit -m "Initial commit - Portfolio website"
git branch -M main
git remote add origin https://github.com/Priyanshiix12/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, go to **Settings** (top menu)
2. Scroll down to **Pages** (left sidebar)
3. Under **"Source"**:
   - Select **"Deploy from a branch"**
   - Branch: **`main`** (or `master`)
   - Folder: **`/ (root)`**
4. Click **"Save"**

### Step 4: Access Your Website

- Wait 1-2 minutes for GitHub to build your site
- Your website will be live at:
  ```
  https://Priyanshiix12.github.io/YOUR_REPO_NAME
  ```
- Replace `YOUR_REPO_NAME` with your actual repository name

**Example:** If your repo is named `portfolio`, your URL will be:
```
https://Priyanshiix12.github.io/portfolio
```

## 🌐 Alternative: Netlify (Easiest)

### Steps:

1. Go to [Netlify.com](https://app.netlify.com)
2. Sign up/Login (use GitHub account for easy setup)
3. Click **"Add new site"** → **"Deploy manually"**
4. Drag and drop your project folder (or the 3 files)
5. Your site is live immediately!
6. You'll get a URL like: `https://random-name-123.netlify.app`
7. You can customize the domain name in **Site settings** → **Change site name**

## 🔗 Custom Domain (Optional)

### GitHub Pages:
1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Follow DNS configuration instructions

### Netlify:
1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Follow the setup instructions

## 📝 What to Share

Once deployed, share your website URL:

**GitHub Pages:**
```
https://Priyanshiix12.github.io/portfolio
```

**Netlify:**
```
https://your-site.netlify.app
```

**Vercel:**
```
https://your-site.vercel.app
```

## ✅ Checklist Before Sharing

- [ ] All links work (GitHub, LinkedIn, Email)
- [ ] Website looks good on mobile (test on phone)
- [ ] All sections display correctly
- [ ] Dark/Light mode toggle works
- [ ] Animations work smoothly
- [ ] No placeholder text remaining

## 🔄 Updating Your Website

### GitHub Pages:
1. Edit files locally
2. Upload/commit changes to GitHub
3. Changes go live automatically (may take 1-2 minutes)

### Netlify:
1. Edit files locally
2. Drag and drop again, OR
3. Connect to GitHub for automatic deployments

## 🆘 Troubleshooting

**Website not loading?**
- Check repository is set to **Public**
- Wait 2-3 minutes after enabling Pages
- Check Settings → Pages for any errors

**Changes not showing?**
- Clear browser cache (Ctrl+F5)
- Wait a few minutes for GitHub to rebuild
- Check if files are in the correct branch

**404 Error?**
- Make sure `index.html` is in the root folder
- Check repository name matches URL
- Verify Pages is enabled in Settings

## 🎯 Recommended: GitHub Pages

**Why GitHub Pages?**
- ✅ Free forever
- ✅ Easy to set up
- ✅ Professional URL
- ✅ Automatic HTTPS
- ✅ Easy updates via Git
- ✅ Great for portfolios

---

**Your website URL will be:**
```
https://Priyanshiix12.github.io/YOUR_REPO_NAME
```

Share this link with anyone to show your portfolio! 🚀

