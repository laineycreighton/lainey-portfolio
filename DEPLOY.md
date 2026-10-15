# Deploy guide

Goal: the site live on Netlify, on your own domain, with HTTPS, updating itself every time you push a change.

Time: about 30 to 45 minutes, plus up to a few hours waiting for a new domain to connect.

---

## 1. Put the project in a permanent folder

Move this project into a folder you control, for example `Documents/portfolio`. Everything below runs from that folder.

## 2. Check your tools

You need Node.js 20 or newer and Git. In a terminal, from the project folder:

```bash
node -v
git --version
```

Then make sure the site builds:

```bash
npm install
npm run build
```

The last line should say `Wrote 12 pages with link preview tags`.

## 3. Put the code on GitHub

1. Sign in at github.com and create a new repository named `portfolio`. Keep it **Private** if you like; Netlify works either way. Don't add a README or .gitignore; the project already has them.
2. In the project folder:

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

## 4. Deploy on Netlify

1. Go to app.netlify.com and sign up with your GitHub account.
2. Choose **Add new project** (sometimes labeled Add new site), then **Import an existing project**, then **GitHub**.
3. Pick the `portfolio` repository.
4. Netlify reads the settings from `netlify.toml`. You should see build command `npm run build` and publish directory `dist`. Leave them as they are.
5. Click **Deploy**. The first build takes a minute or two.
6. When it finishes, you get an address like `random-name-123.netlify.app`. Open it and click through every page.
7. Optional: in **Project configuration**, change the project name so the address reads `laineyportfolio.netlify.app`.

From now on, every `git push` to `main` redeploys the site automatically.

## 5. Buy a domain

Check availability for something like `laineyportfolio.com`. A .com usually runs about $10 to $20 a year.

Two good paths:

- **Simplest:** buy it inside Netlify (**Domain management**, then **Add a domain**, then purchase). DNS and HTTPS are set up for you. Skip to step 7.
- **Separate registrar:** Cloudflare, Porkbun, or Namecheap. Often cheaper to renew. Continue to step 6.

## 6. Connect a domain bought elsewhere

1. In Netlify, open your project, then **Domain management**, then **Add a domain**. Enter your domain and confirm.
2. Netlify offers two ways to connect. Pick one:

   **Option A, recommended: Netlify DNS.** Netlify shows four nameservers (they look like `dns1.p01.nsone.net`). At your registrar, find the domain's nameserver setting, switch to custom nameservers, and paste in all four. Save.

   **Option B: keep DNS at your registrar.** Add the records Netlify shows on screen. Typically:
   - an `A` record for `@` pointing to Netlify's load balancer IP
   - a `CNAME` record for `www` pointing to your `.netlify.app` address

   Use the exact values Netlify displays for your project.

3. Wait. Changes usually take effect within an hour, and occasionally up to 24 to 48 hours.
4. Set your preferred version (with or without `www`) as the **primary domain**. The other one redirects to it.

## 7. Turn on HTTPS

In **Domain management**, under **HTTPS**, Netlify issues a free certificate automatically once DNS is connected. If it says it's waiting, give DNS more time, then click **Verify DNS configuration**.

## 8. Point the site at its real address

Open `src/data/site.js` and set `url` to your final address:

```js
url: 'https://laineyportfolio.com',
```

Then:

```bash
git add .
git commit -m "Set live domain"
git push
```

Netlify also uses your primary domain automatically during its builds, so link previews use the right address either way. This keeps local builds matching.

## 9. Check your link preview

1. Go to linkedin.com/post-inspector and paste your site address. You should see your headline and photo card.
2. Paste a case study link too, like `/work/table-power-stations`. It shows that page's own title and summary.
3. If LinkedIn shows an old preview, run the inspector again. It refreshes LinkedIn's copy.

## 10. Add it everywhere

- LinkedIn: add the address to the **Website** field in your contact info, and to **Featured** as a link.
- Your resume header and email signature.

---

## Updating the site later

Edit the files in `src/data`, then:

```bash
git add .
git commit -m "Describe the change"
git push
```

Netlify redeploys within a couple of minutes. See `README.md` for which file holds what.
