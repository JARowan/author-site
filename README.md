# J.A. Rowan — Author Website

A static site (plain HTML/CSS/JS, no build step) for promoting and selling books. Hosts free on GitHub Pages.

```
index.html        All page content: featured book, books, newsletter, about, contact
css/styles.css    Colors, fonts, layout (theme colors are at the top)
js/main.js        Mobile menu, book filters, newsletter fallback
images/covers/    Put cover image files here (recommended over Imgur links)
```

## 1. Publish it (GitHub Pages, free)

1. Merge this branch into `main`.
2. On GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.
3. The site goes live at `https://jarowan.github.io/author-site/` within a few minutes.
4. Custom domain (recommended, about $12/yr, e.g. `jarowanbooks.com`): buy it at Cloudflare or Namecheap, then enter it under **Settings → Pages → Custom domain** and follow the DNS instructions. Tick **Enforce HTTPS**.

## 2. Add your buy links

Every buy button in `index.html` starts as `href="#"`. **Buttons left as `#` are hidden automatically**, so nothing broken shows to readers. Replace `#` with the real URL to make a button appear.

| Button (`data-store`) | What to paste |
|---|---|
| `amazon` | Your Amazon product page link. Use the short form `https://www.amazon.com/dp/ASIN`. |
| `direct` | A direct-sale checkout link (see section 4). |
| `kindle-unlimited` | Same Amazon link, if the book is in KU. Delete the button otherwise. |

To add other retailers (Barnes & Noble, Apple Books, Kobo), copy a button line and change the text and link.

## 3. Connect the newsletter

The email list is the most valuable part of the site: it's the one audience you own that Amazon and social platforms can't take away.

1. Create a free account at **MailerLite** (free to 1,000 subscribers) or **Kit** (formerly ConvertKit).
2. Create an embedded form and copy its form **action URL**.
3. Paste it into `action=""` on the `<form class="signup">` in `index.html`. Check the provider's field names (MailerLite uses `fields[email]`; Kit uses `email_address`) and update the `name=` attributes to match.
4. Set up the automatic welcome email that delivers the free first chapter (a PDF or BookFunnel link).

Until step 3 is done, the form opens the visitor's email app addressed to TheImmortalQuill@gmail.com, so signups aren't lost.

## 4. Selling direct (optional, higher margin)

Selling ebooks directly keeps roughly 90–95% of the price vs. 35–70% on retailers, and you get the buyer's email.

- **Payhip** — easiest. Upload the EPUB/PDF, get a product link, paste it into the `direct` button. Handles delivery and EU VAT. Free plan takes 5%.
- **BookFunnel + Stripe/Shopify** — the standard for indie authors once volume grows.

Note: books enrolled in **KDP Select / Kindle Unlimited** must be exclusive to Amazon in ebook form. Do not sell those ebooks direct. Paperbacks can still be sold anywhere.

## 5. Covers

Covers currently load from Imgur, which can be slow or blocked. Better: save each cover as a JPG (about 600×900 px) into `images/covers/`, then change the `src`, e.g. `src="images/covers/the-pikake-lei.jpg"`.

## 6. Changing the featured book

Edit the block marked `FEATURED BOOK` near the top of `index.html`: cover, title, tagline, blurb, and buy links. Rotate it to whatever you're launching or promoting.
