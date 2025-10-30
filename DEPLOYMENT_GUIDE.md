# Deployment Guide

This guide explains how to deploy the Next.js portfolio website to different hosting platforms.

## Table of Contents
1. [Vercel Deployment](#vercel-deployment)
2. [GitHub Pages Deployment](#github-pages-deployment)
3. [Google Firebase Deployment](#google-firebase-deployment)

## Vercel Deployment

Vercel is the recommended platform for deploying Next.js applications as it provides seamless integration and optimal performance.

### Steps:
1. Visit [Vercel](https://vercel.com/) and sign up or log in to your account
2. Click "New Project"
3. Import your GitHub repository `khatb2/khattab_profile`
4. Configure the project settings:
   - Framework Preset: Next.js
   - Root Directory: Leave empty
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click "Deploy"
6. Your site will be live at a vercel.app subdomain, which you can customize

### Environment Variables (if needed):
No environment variables are required for this portfolio site.

## GitHub Pages Deployment

GitHub Pages is a free hosting service for static websites directly from your GitHub repository.

### Steps:
1. Go to your repository settings at https://github.com/khatb2/khattab_profile/settings
2. Scroll down to the "Pages" section
3. Under "Source", select:
   - Branch: `master`
   - Folder: `/ (root)`
4. Click "Save"
5. Wait for GitHub to build and deploy your site (this may take a few minutes)
6. Your site will be available at: https://khatb2.github.io/khattab_profile

### Important Notes for GitHub Pages:
- The site will be served as a static website
- Custom domains can be configured in the repository settings
- HTTPS is automatically enabled

## Google Firebase Deployment

The project includes an `apphosting.yaml` file for Firebase App Hosting.

### Prerequisites:
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Log in to Firebase: `firebase login`

### Steps:
1. Initialize Firebase in your project:
   ```bash
   firebase init hosting
   ```
2. Select your Firebase project or create a new one
3. Configure hosting settings:
   - Public directory: `out`
   - Single-page app: No
   - Set up automatic builds and deploys with GitHub: Yes
4. Build the static site:
   ```bash
   npm run build
   ```
5. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

## Troubleshooting

### Common Issues:
1. **Missing Assets**: Ensure all images and files in the `public` directory are committed to the repository
2. **Build Failures**: Check that all dependencies are properly listed in `package.json`
3. **Routing Issues**: Verify that all Next.js routes are correctly configured

### Checking Deployment Status:
- Vercel: Check the deployment logs in your Vercel dashboard
- GitHub Pages: Check the "Pages" section in your repository settings
- Firebase: Check the Firebase console for deployment status

## Updating Your Deployed Site

To update your deployed site:
1. Make changes to your code
2. Commit and push to the `master` branch:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin master
   ```
3. For Vercel and Firebase, deployments will trigger automatically
4. For GitHub Pages, wait for the automatic rebuild or trigger one manually in the repository settings

## Support

For any deployment issues, contact:
- Email: Khtabaldwry927@gmail.com
- WhatsApp: [Chat with me](https://wa.me/9647758866988)