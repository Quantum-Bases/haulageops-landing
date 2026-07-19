# Cloudflare Pages Deployment Guide

This guide will walk you through deploying your new **HaulageOps Landing Page** to **Cloudflare Pages** and connecting it to your custom domain.

Since this landing page is built using high-performance static HTML, CSS, and JavaScript, it requires **no build step** and will load instantly worldwide via Cloudflare's Edge Network.

---

## Step 1: Push Your Code to GitHub

Cloudflare Pages connects directly to GitHub and automatically deploys your site every time you push updates.

1. Open your terminal in the landing page project folder `/Users/algocoder/Documents/haulageops-landing`.
2. Commit your local changes:
   ```bash
   git add .
   git commit -m "feat: initial landing page implementation"
   ```
3. Go to [GitHub](https://github.com/) and create a new repository named `haulageops-landing`. Keep it private or public.
4. Run the commands provided by GitHub to link your local repository and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/haulageops-landing.git
   git push -u origin main
   ```

---

## Step 2: Deploy to Cloudflare Pages

1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. On the left sidebar, click **Workers & Pages**.
3. Click the **Create** button at the top right, then select the **Pages** tab.
4. Click **Connect to Git**.
5. Connect your GitHub account and select your repository: `haulageops-landing`.
6. Click **Begin setup**.
7. In the configuration step, apply the following settings:
   - **Project name**: `haulageops` (this will determine your temporary URL: `haulageops.pages.dev`)
   - **Production branch**: `main`
   - **Framework preset**: **None** (this is a static project, so no build tools are needed)
   - **Build command**: *Leave blank*
   - **Build output directory**: `.` (a single dot, which means deploy files directly from the root folder)
8. Click **Save and Deploy**.

Cloudflare will spend about 30 seconds setting up the environment, deploying your files, and generating a secure `https://haulageops.pages.dev` link.

---

## Step 3: Link Your Custom Domain

Since you purchased your domain through Cloudflare, linking it is completely automated.

1. In the Cloudflare Pages dashboard for your project, click on the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Type in your domain name (e.g., `haulageops.com` or `www.haulageops.com`).
4. Click **Continue**.
5. Because your domain is already hosted in Cloudflare DNS, Cloudflare will display a message: *"We detected your domain is on Cloudflare. We can automatically configure the DNS records for you."*
6. Click **Activate domain** (or **Authorize database update**).

Cloudflare will automatically insert the CNAME record into your DNS settings and provision a free, auto-renewing SSL certificate. Within 1-2 minutes, your website will be live at `https://haulageops.com`!

---

## Step 4: Editing and Updating in the Future

Whenever you want to update the text, add a feature, or change styles:
1. Make the edits locally.
2. Commit and push the changes:
   ```bash
   git add .
   git commit -m "Update landing page"
   git push
   ```
3. Cloudflare Pages will detect the push, build the site in the background, and push it live within 10 seconds.
