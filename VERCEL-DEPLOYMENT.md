# 🚀 Deploy to Vercel - Step by Step Guide

## **Method 1: Deploy via Vercel Dashboard (Recommended for Beginners)**

### **Step 1: Create a Vercel Account**
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (easiest option)
4. Authorize Vercel to access your GitHub account

### **Step 2: Import Your Repository**
1. After logging in, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find **"codebreakers-sample-web"**
4. Click **"Import"** next to it

### **Step 3: Configure Project Settings**
Vercel will auto-detect your settings. Verify these:

- **Framework Preset:** `Vite`
- **Root Directory:** `./` (leave as default)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `dist` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

**Don't change anything unless needed!**

### **Step 4: Deploy!**
1. Click **"Deploy"** button
2. Wait 1-2 minutes while Vercel:
   - Installs dependencies
   - Builds your React app
   - Deploys to their CDN
3. Once complete, you'll see: 🎉 **"Congratulations!"**

### **Step 5: Get Your Live URL**
You'll receive a URL like:
```
https://codebreakers-sample-web.vercel.app
```

Or with your username:
```
https://codebreakers-sample-web-atharvathakre.vercel.app
```

---

## **Method 2: Deploy via Vercel CLI (For Advanced Users)**

### **Step 1: Install Vercel CLI**
```cmd
npm install -g vercel
```

### **Step 2: Login to Vercel**
```cmd
vercel login
```

### **Step 3: Deploy**
Navigate to your project folder and run:
```cmd
cd "c:\Users\ROG STRIX\OneDrive\ドキュメント\GitHub\codebreakers-sample-web"
vercel
```

Follow the prompts:
- **Set up and deploy?** → `Y`
- **Which scope?** → Select your account
- **Link to existing project?** → `N`
- **What's your project's name?** → `codebreakers-sample-web`
- **In which directory is your code located?** → `./`
- **Want to override the settings?** → `N`

### **Step 4: Deploy to Production**
```cmd
vercel --prod
```

---

## **Important: Vercel Configuration (Optional)**

If you need custom settings, create `vercel.json` in your project root:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ]
}
```

**Note:** This is optional - Vercel auto-detects Vite projects!

---

## **Post-Deployment: Custom Domain (Optional)**

### **Add Your Own Domain:**
1. Go to your project dashboard on Vercel
2. Click **"Settings"** → **"Domains"**
3. Enter your domain name (e.g., `www.yoursite.com`)
4. Follow DNS configuration instructions
5. Vercel will automatically set up HTTPS!

---

## **Automatic Deployments**

Once connected, Vercel will automatically:
- ✅ Deploy every push to `main` branch
- ✅ Create preview deployments for pull requests
- ✅ Show deployment status in GitHub
- ✅ Roll back to previous versions if needed

### **To Deploy New Changes:**
Just push to GitHub:
```cmd
git add .
git commit -m "Update footer design"
git push origin main
```

Vercel will auto-deploy in 1-2 minutes! 🚀

---

## **Environment Variables (If Needed)**

If your app uses API keys or secrets:
1. Go to **Project Settings** → **Environment Variables**
2. Add variables like:
   - `VITE_API_KEY=your_key_here`
   - `VITE_API_URL=https://api.example.com`
3. Redeploy for changes to take effect

**Note:** In Vite, env variables must start with `VITE_` to be exposed!

---

## **Troubleshooting Common Issues**

### **Issue 1: Build Fails**
**Solution:** Check your `package.json` has correct scripts:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

### **Issue 2: Images Not Loading**
**Solution:** Make sure image paths start with `/`:
```jsx
// ✅ Correct
<img src="/assets/images/logo.png" />

// ❌ Wrong
<img src="assets/images/logo.png" />
```

### **Issue 3: 404 on Routes**
**Solution:** Vite handles routing automatically. If using React Router, no extra config needed!

### **Issue 4: Blank Page**
**Solution:** Check browser console (F12) for errors. Usually it's a missing import or incorrect path.

---

## **Check Deployment Status**

Visit your Vercel dashboard to see:
- 📊 Build logs
- 🌍 Live URL
- 📈 Analytics (visitors, page views)
- ⚡ Performance metrics
- 🔄 Deployment history

---

## **Your Project URLs**

After deployment, you'll have:

1. **Production URL:** `https://codebreakers-sample-web.vercel.app`
2. **Preview URLs:** Generated for each push (e.g., `https://codebreakers-sample-web-git-feature-username.vercel.app`)
3. **Custom Domain:** (Optional) `https://www.yoursite.com`

---

## **Quick Commands Reference**

```cmd
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# Open project in browser
vercel open

# View logs
vercel logs
```

---

## **Benefits of Vercel**

✅ **Free for personal projects**
✅ **Automatic HTTPS**
✅ **Global CDN (fast worldwide)**
✅ **Automatic deployments from GitHub**
✅ **Preview deployments for branches**
✅ **Zero configuration needed**
✅ **Built-in analytics**
✅ **Instant rollbacks**

---

## **Next Steps After Deployment**

1. ✅ Share your live URL with friends/clients
2. ✅ Add the URL to your GitHub repo description
3. ✅ Update your README.md with the live link
4. ✅ Set up a custom domain (optional)
5. ✅ Enable Vercel Analytics (optional, free)

---

## **Need Help?**

- 📚 Vercel Docs: https://vercel.com/docs
- 💬 Vercel Discord: https://vercel.com/discord
- 🐛 GitHub Issues: Report problems in your repo

---

**Happy Deploying! 🚀**
