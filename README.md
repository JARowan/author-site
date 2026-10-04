# J.A. Rowan — Author Website

A static site (plain HTML/CSS/JS, no build step) for promoting and selling books. Hosts free on GitHub Pages.

The repo holds **two separate sites** that never link to each other:

| Site | File | Address (GitHub Pages) | Books |
|---|---|---|---|
| J.A. Rowan (romance) | `index.html` | `https://jarowan.github.io/author-site/` | The Pikake Lei |
| Islamic fiction & family books | `islamic/index.html` | `https://jarowan.github.io/author-site/islamic/` | The Olive Tree, Angel, The Immortal Watcher, Amin, Layla, and the Water Cup, Tell Me a Story of YOU |

Keep it that way: no links between the two, and a separate newsletter list for each. The Islamic site shows a plain title until its author name is confirmed (see the comment at the top of `islamic/index.html`). Long term, give the Islamic site its own domain.

```
index.html        Romance site: featured book, books, newsletter, about, contact
islamic/index.html  Islamic books site
css/rowan.css     Romance site design (night ocean, gold, pikake motif; colors at the top)
css/islamic.css   Islamic site design (green, ivory, gold, geometric pattern; colors at the top)
js/main.js        Shared: mobile menu, newsletter fallback, cover fallback, scroll effects
images/covers/    Put cover image files here (recommended over Imgur links)
```

## 1. Publish it (GitHub Pages, free)

1. Merge this branch into `main`.
2. On GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.
3. Both sites go live within a few minutes at the addresses in the table above.
4. Custom domain (recommended, about $12/yr, e.g. `jarowanbooks.com`): buy it at Cloudflare or Namecheap, then enter it under **Settings → Pages → Custom domain** and follow the DNS instructions. Tick **Enforce HTTPS**.

## 2. Add your buy links

Every buy button in both sites starts as `href="#"`. **Buttons left as `#` are hidden automatically**, so nothing broken shows to readers. Replace `#` with the real URL to make a button appear.

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

Covers currently load from Imgur, which can be slow or blocked. If a cover fails to load, the site shows a designed title card in its place instead of a broken image. Better: save each cover as a JPG (about 600×900 px) into `images/covers/`, then change the `src`, e.g. `src="images/covers/the-pikake-lei.jpg"`.

## 6. Changing the featured book

Edit the block marked `FEATURED BOOK` near the top of `index.html`: cover, title, tagline, blurb, and buy links. Rotate it to whatever you're launching or promoting.
