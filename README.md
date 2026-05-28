# The Handmade Table — Website Template
## Developer Setup & Customization Guide

---

## Overview

This is a complete, responsive HTML/CSS/JavaScript template for The Handmade Table website. It includes:

- **6 main pages**: Home, Shop (30 tables), Architectural Features, Portfolio, Our Team, Contact
- **Shop functionality**: 30 table catalog with wood-type filtering and lightbox inquiries
- **Fully responsive design**: Mobile, tablet, and desktop layouts
- **Production-ready styling**: Custom color palette, typography, and animations

---

## File Structure

```
handmade-table-template/
├── index.html          # Main HTML file (all pages included)
├── styles.css          # Complete styling for all pages
├── main.js             # JavaScript for interactivity & data
├── README.md           # This file
└── photos/             # Placeholder for actual product photos
    ├── table-1.jpg
    ├── table-2.jpg
    ├── table-3.jpg
    └── table-4.jpg
```

---

## Setup Instructions

### 1. Basic Deployment
Simply upload these three files to your hosting:
- `index.html`
- `styles.css`
- `main.js`

No build process, no dependencies — it's vanilla HTML/CSS/JS.

### 2. Domain & DNS
Update the domain in navigation/footer as needed. No hardcoded domain references exist.

### 3. Contact Form Integration
The contact form uses `mailto:` which opens the user's default email client. For a more robust solution, connect to a backend service:
- **Netlify Forms** (if hosting on Netlify)
- **Formspree** (free form submission service)
- **Custom backend** (Node/PHP endpoint)

To integrate with Formspree:
1. Sign up at formspree.io
2. In `index.html`, find the contact form section
3. Change `onsubmit="handleContactSubmit(event)"` to `action="https://formspree.io/f/YOUR_ID"`
4. Remove the `handleContactSubmit` JavaScript function

---

## Customization Guide

### Colors & Branding

All colors are CSS variables in `styles.css`. Modify the `:root` section to change the entire site's palette:

```css
:root {
  --cream: #F7F3EE;           /* Background */
  --warm-white: #FDFAF7;      /* Secondary background */
  --oak: #8B6343;             /* Primary accent */
  --oak-dark: #5C3D1E;        /* Dark accent */
  --oak-light: #C49A6C;       /* Light accent */
  --charcoal: #2A2420;        /* Text/dark elements */
  --mid: #6B5B4E;             /* Secondary text */
  --soft: #A89080;            /* Subtle text */
}
```

### Typography

Fonts are loaded via Google Fonts:
- **Playfair Display** – Headlines, elegant serif
- **Cormorant Garamond** – Body text, serif
- **Jost** – UI labels, sans-serif

All in the `<head>` of `index.html`. Swap the Google Fonts URL to change the entire site.

### Photo Management

**For the first 4 tables (with stock photos):**

In `main.js`, each table object has an `image` property. For tables 1–4, replace:
```javascript
image: "https://via.placeholder.com/400x300?text=Table+1+Photo"
```

With your actual photo URL:
```javascript
image: "https://your-cdn.com/photos/table-1.jpg"
```

**For tables 5–30 (placeholder images):**

Leave as generic placeholder, or upload photos to your CDN and update the image URLs. The cards will automatically display them.

**Photo hosting options:**
- Google Drive (public link)
- Cloudinary (free tier, easy image optimization)
- AWS S3
- Local `/photos/` directory (if self-hosting)

### Product Data (Tables 1–30)

In `main.js`, the `tables` array defines all 30 products. Each table object has:

```javascript
{
  id: 1,
  name: "Handmade Table No. 1",        // Display name
  type: "Farm Table — View 1",         // Product type
  wood: "walnut",                      // Filter key: walnut, oak, chestnut, maple
  length: "84",                        // Table length (inches)
  width: "42",                         // Table width (inches)
  style: "farmhouse",                  // Style category
  price: "Contact for Price",          // Display price
  desc: "...",                         // Short description
  image: "https://...",                // Photo URL
  inStock: true                        // Show "In Stock" badge
}
```

To modify a table, update its properties. To add/remove tables, add/remove objects from the `tables` array and update the loop in the HTML template.

### Contact Information

Phone, email, and address appear in multiple places:

**Footer** (appears on all pages):
- Lines ~621–626 in `index.html`

**Contact Page**:
- Lines ~789–809 in `index.html`

**Inquiry Modal**:
- Line ~681–682 in `index.html`

Update all three locations with the correct contact details.

### Navigation Links

The main navigation is in the `<nav>` element at the top of `index.html` (lines 12–25). All links use `showPage()` JavaScript function and don't require URL changes.

Footer links (lines 621–659) can point to external pages or use the same `showPage()` system.

---

## Responsive Design

The template is fully responsive with breakpoints at:
- **1024px and below** – 2-column layouts
- **768px and below** – Single-column layouts, mobile navigation

Test on mobile, tablet, and desktop. All layouts are optimized in `styles.css`.

---

## SEO & Meta Tags

Update `<title>` and `<meta>` tags in the `<head>`:

```html
<title>The Handmade Table — Fine Handcrafted Furniture</title>
<meta name="description" content="Handcrafted tables from reclaimed pre-industrial wood...">
```

Add Open Graph tags for social sharing:

```html
<meta property="og:title" content="The Handmade Table">
<meta property="og:description" content="...">
<meta property="og:image" content="https://...">
<meta property="og:url" content="https://www.thehandmadetable.art">
```

---

## Browser Compatibility

- **Modern browsers**: Chrome, Firefox, Safari, Edge (all current versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Fallbacks**: CSS Grid and Flexbox are widely supported; no IE11 support

---

## Performance Optimization

1. **Images**: Compress photos before uploading
   - Use services like TinyPNG or ImageOptim
   - Target ~100KB per product image

2. **Lazy Loading**: Add `loading="lazy"` to large images if not already present

3. **CSS**: Minify `styles.css` for production (optional, already fairly minimal)

4. **JavaScript**: No external dependencies — zero npm packages required

---

## Analytics & Tracking

Add Google Analytics in the `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` with your Google Analytics property.

---

## Troubleshooting

**Modal not appearing when clicking "Inquire":**
- Check browser console for errors (F12 → Console tab)
- Ensure `main.js` is loaded and no syntax errors exist

**Images not loading:**
- Verify image URLs are correct and publicly accessible
- Check CORS policy if using external CDN

**Mobile layout broken:**
- Clear browser cache (Ctrl+Shift+Delete)
- Check viewport meta tag is present in `<head>`

**Contact form not working:**
- If using `mailto:`, ensure user has email client configured
- For production, integrate with Formspree or similar service

---

## Updating & Maintenance

### Monthly tasks:
- Update product photos as inventory changes
- Add/remove tables from the catalog in `main.js`
- Monitor contact form submissions

### Quarterly tasks:
- Test all links and forms
- Check mobile responsiveness
- Review analytics for popular products

### Annually:
- Audit for broken images/links
- Update copyright year in footer
- Consider design refresh

---

## Support & Notes

- **No database required** – All data is in `main.js`
- **No build step** – Use as-is or bundle with your toolchain
- **Modular CSS** – Organized by section, easy to modify
- **Accessible** – Semantic HTML, ARIA labels where needed

---

## File Delivery Checklist

- [ ] `index.html` – All 6 pages, 30-table shop catalog
- [ ] `styles.css` – Complete responsive styling
- [ ] `main.js` – Product data, filtering, modals, forms
- [ ] `photos/` directory – Actual product photos for first 4 tables
- [ ] This README for setup & customization
- [ ] Domain configuration
- [ ] Contact form backend integration (optional)

---

## Questions?

Refer to inline comments in the code, or review the original design specifications. All JavaScript functions are documented with JSDoc comments.

Good luck with the launch! 🌳
