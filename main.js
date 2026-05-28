/* ─────────────────────────────────────────────────────────
   The Handmade Table — main.js
   ───────────────────────────────────────────────────────── */

/* ═══ CAROUSEL STATE ════════════════════════════════════════ */
let detailImages = [];
let detailIndex = 0;

/* ═══ TABLE DATA ═══════════════════════════════════════════ */

/**
 * Product catalog: 30 tables with varying wood types, sizes, and styles.
 * First 4 tables include placeholder for actual photos.
 * Rest use generic placeholder images.
 */
const tables = [
  {
    id: 1,
    name: "AT 2020",
    type: "Art Table · Cypress",
    wood: "cypress",
    length: "75",
    width: "35",
    style: "Art Table",
    price: "Contact for Price",
    desc: "Antique cypress from late 1800s Philadelphia with striking linear striations and a deep, rich ebony patina. No stain — every color is entirely natural. Classified as art for its extraordinary, one-of-a-kind character.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Table%209/IMG_0366.jpeg",
    inStock: true
  },
  {
    id: 2,
    name: "CT 5056a",
    type: "Farm Table · Cherry",
    wood: "cherry",
    length: "96",
    width: "36",
    style: "Farm Table",
    price: "Contact for Price",
    desc: "Made from boards cut from lake-edge mat material near Lake Erie — massive timber planks once used as roadway for windmill construction equipment. Very old wood, newly cut, with exceptional light cherry character.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Table%209/IMG_0367.jpeg",
    inStock: true
  },
  {
    id: 3,
    name: "AT 2001",
    type: "Art Table · Pine",
    wood: "pine",
    length: "89",
    width: "38",
    style: "Art Table",
    price: "Contact for Price",
    desc: "A single granary pine board with an uneven, non-square end — left exactly as found. The rebel character of this piece defines it. Base is shown as traditional 4-leg but could be anything, including metal.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Table%209/IMG_0368.jpeg",
    inStock: true
  },
  {
    id: 4,
    name: "AT 2002",
    type: "Art Table · Pine — Pub Height",
    wood: "pine",
    length: "56",
    width: "37.75",
    style: "Art Table",
    price: "Contact for Price",
    desc: "Pub-height mosaic table assembled from saved pieces in a random angle-linear pattern that gives it a very contemporary appeal. We once made 9 of them for a restaurant. No two are alike.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Table%209/IMG_0369.jpeg",
    inStock: true
  },
  {
    id: 5,
    name: "AT 2003",
    type: "Art Table · Pine",
    wood: "pine",
    length: "48",
    width: "28",
    style: "Art Table",
    price: "Contact for Price",
    desc: "Base from an 1880s cabin in the Finger Lakes region of New York with just the right rust, corrosion, and old paint. Top boards circa 1820 — two very different histories that work beautifully together.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Table%209/IMG_0370.jpeg",
    inStock: true
  },
  {
    id: 6,
    name: "AT 2004",
    type: "Art Table · Pine",
    wood: "pine",
    length: "96",
    width: "36",
    style: "Art Table",
    price: "Contact for Price",
    desc: "Wavy pine thresher boards that undulate along the full length of the table with a deep ebony patina. Extraordinary and completely unique — nothing quite like it has passed through the shop.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Table%209/IMG_0371.jpeg",
    inStock: true
  },
  {
    id: 7,
    name: "FT 1012",
    type: "Farm Table · Cypress",
    wood: "cypress",
    length: "97",
    width: "38",
    style: "Farm Table",
    price: "Contact for Price",
    desc: "Dark cypress with exceptional grain revealed by careful sanding — extraordinary enough that we decided to leave all the grain alone. One of four very similar tables available. Can be purchased with the shown distinctive base or a traditional 4-legged base.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Table%209/IMG_0372.jpeg",
    inStock: true
  },
  {
    id: 8,
    name: "FT 1023",
    type: "Farm Table · Pine",
    wood: "pine",
    length: "69.5",
    width: "31",
    style: "Farm Table",
    price: "Contact for Price",
    desc: "Two boards circa 1820 with exceptional color, character, and patina. A large knot came off the board — we left it in. It simply made the table. There was not much discussion about whether to leave it or not.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Table%209/IMG_0373.jpeg",
    inStock: true
  },
  {
    id: 9,
    name: "FT 1026",
    type: "Farm Table · Pine",
    wood: "pine",
    length: "87",
    width: "31.5",
    style: "Farm Table",
    price: "Contact for Price",
    desc: "Boards from an early grain bin, used exactly as found — nothing done except cut to length. The crazy natural edges are untouched and original. There is more to the story behind these materials if you are interested.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Table%209/IMG_0374.jpeg",
    inStock: true
  },
  {
    id: 10,
    name: "FT 1032",
    type: "Farm Table · Pine",
    wood: "pine",
    length: "76",
    width: "32",
    style: "Farm Table",
    price: "Contact for Price",
    desc: "A complete surprise when it came out of finishing. No stain, yet the colors that emerged are impossible to replicate any other way. The photos do not do it justice — this one must be seen in person.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Table%209/IMG_0375.jpeg",
    inStock: true
  },
  {
    id: 11,
    name: "FT 1033",
    type: "Farm Table · Pine",
    wood: "pine",
    length: "84",
    width: "31.5",
    style: "Farm Table",
    price: "Contact for Price",
    desc: "Boards set aside as parts became a top by accident. When it came out of finishing it was highly unusual, unpredictably cool, and entirely its own thing. The happy accidents here often turn out best.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Table%209/IMG_0376.jpeg",
    inStock: true
  },
  {
    id: 12,
    name: "FT 1035",
    type: "Farm Table · Pine",
    wood: "pine",
    length: "75.5",
    width: "38.5",
    style: "Farm Table",
    price: "Contact for Price",
    desc: "Two perfectly matched boards over 19 inches wide — rare by any measure. From a circa 1820 to 1840 grain bin with the wear and patina of how they were originally used. A second matching set is available for different dimensions.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Table%209/IMG_0377.jpeg",
    inStock: true
  },
  {
    id: 13,
    name: "FT 1036",
    type: "Farm Table · Pine",
    wood: "pine",
    length: "90",
    width: "33",
    style: "Farm Table",
    price: "Contact for Price",
    desc: "The gold standard of farm tables — classic long and narrow proportions from an era when rooms were small. Designed to be moved after meals and used as a work surface. Built to travel lightly and built to last. Great character and all-natural patina.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Table%209/IMG_0378.jpeg",
    inStock: true
  },
  {
    id: 14,
    name: "TT 3006",
    type: "Thick Top · Pine",
    wood: "pine",
    length: "84.5",
    width: "39.5",
    style: "Thick Top",
    price: "Contact for Price",
    desc: "Two boards nearly 2 inches thick and almost 20 inches wide — one half of one tenth of one percent rare. Originally used as barn threshing floor, pre-1850. Extraordinary character from centuries of hard use.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Table%209/IMG_0379.jpeg",
    inStock: true
  },
  {
    id: 15,
    name: "TT 3008a",
    type: "Thick Top · Poplar",
    wood: "poplar",
    length: "68",
    width: "35",
    style: "Thick Top",
    price: "Contact for Price",
    desc: "Poplar planks from the floor system of a very early barn. One of those tables that comes along every 15 to 20 pieces and simply stands apart from the rest. Shown with glass base.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Table%209/IMG_0380.jpeg",
    inStock: true
  },
  {
    id: 16,
    name: "Betty",
    type: "Farm Table · Pine",
    wood: "pine",
    length: "84",
    width: "33",
    style: "Threshing Floor",
    price: "Contact for Price",
    desc: "Two-board honey brown threshing floor top, 84 x 33. Pre-industrial pine boards with a warm, rich natural patina developed over centuries of hard use. No stain — every color you see is entirely the wood.",
    about: "This particular table has very interesting linear striations in its character and a deep, rich ebony patina. That is why we classify it as a \"art\" table. A table gets classified as an art piece if it has characteristics that will widely set it apart from anything else we have or have made. Let me add that catching and showing the real character of a table like this in a photograph is difficult so I am hoping you can see enough of it to understand the underlying beauty of it.\n\nThe species of wood we use in our studio spans the landscape of varieties. This table was made from an antique cypress, probably from the late 1800's, which came from the Philadelphia, PA area. As with almost everything we make what you see is the natural patina. There is no stain on this table. At the time this continent was settled by Europeans the cypress ranges stretched from the Mid Atlantic to Texas.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Table%201%20-%2084%20x%2033%20-%20Honey%20Brown%20Threshing%20Floor%20%202-board%20top/Table%201%20-%2084%20x%2033%20-%20Honey%20Brown%20Threshing%20Floor%20%202-board%20top%20(1).jpeg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Table%201%20-%2084%20x%2033%20-%20Honey%20Brown%20Threshing%20Floor%20%202-board%20top/Table%201%20-%2084%20x%2033%20-%20Honey%20Brown%20Threshing%20Floor%20%202-board%20top%20(1).jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Table%201%20-%2084%20x%2033%20-%20Honey%20Brown%20Threshing%20Floor%20%202-board%20top/Table%201%20-%2084%20x%2033%20-%20Honey%20Brown%20Threshing%20Floor%20%202-board%20top%20(2).jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Table%201%20-%2084%20x%2033%20-%20Honey%20Brown%20Threshing%20Floor%20%202-board%20top/Table%201%20-%2084%20x%2033%20-%20Honey%20Brown%20Threshing%20Floor%20%202-board%20top%20(3).jpeg"
    ],
    inStock: true
  }
];

/* ═══ PAGE NAVIGATION ═══════════════════════════════════════ */

/**
 * Switch between pages.
 * @param {string} page - Page ID: 'home', 'shop', 'arch', 'portfolio', 'team', 'contact', 'product'
 */
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');

  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navMap = {
    home: 'nav-home',
    shop: 'nav-shop',
    arch: 'nav-arch',
    portfolio: 'nav-portfolio',
    team: 'nav-team',
    contact: 'nav-contact'
  };
  const navId = navMap[page];
  if (navId) document.getElementById(navId).classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}

/**
 * Show product detail page for a specific table.
 * @param {number} tableId - Table ID
 */
function showProductDetail(tableId) {
  const table = tables.find(t => t.id === tableId);
  if (!table) return;

  detailImages = table.images && table.images.length ? table.images : [table.image];
  detailIndex = 0;

  document.getElementById('detail-title').textContent = table.name;
  document.getElementById('detail-type').textContent = table.type;
  document.getElementById('detail-name').textContent = table.name;
  document.getElementById('detail-price').textContent = table.price;
  document.getElementById('detail-wood').textContent = table.wood.charAt(0).toUpperCase() + table.wood.slice(1);
  document.getElementById('detail-length').textContent = table.length + '"';
  document.getElementById('detail-width').textContent = table.width + '"';
  document.getElementById('detail-style').textContent = table.style.charAt(0).toUpperCase() + table.style.slice(1);
  document.getElementById('detail-description').textContent = table.desc;

  const hasMultiple = detailImages.length > 1;
  document.getElementById('detail-prev').style.display = hasMultiple ? '' : 'none';
  document.getElementById('detail-next').style.display = hasMultiple ? '' : 'none';
  document.getElementById('detail-counter').textContent = hasMultiple ? '1 / ' + detailImages.length : '';
  document.getElementById('detail-main-image').src = detailImages[0];
  document.getElementById('detail-main-image').alt = table.name;

  const defaultAbout = "Every piece of pre-industrial wood carries centuries of history. The patina, grain patterns, and unique characteristics you see are features, not flaws -- they’re what makes each piece one-of-a-kind and irreplaceable.";
  const aboutEl = document.getElementById(‘detail-about’);
  const aboutText = (table.about || defaultAbout).split(‘\n\n’);
  aboutEl.innerHTML = ‘<strong>About this table:</strong> ‘ + aboutText.map((p, i) => i === 0 ? p : ‘<br><br>’ + p).join(‘’);

  window.currentProduct = table;

  showPage('product');
}

function detailImageNav(dir) {
  if (!detailImages || detailImages.length < 2) return;
  detailIndex = (detailIndex + dir + detailImages.length) % detailImages.length;
  document.getElementById('detail-main-image').src = detailImages[detailIndex];
  document.getElementById('detail-counter').textContent = (detailIndex + 1) + ' / ' + detailImages.length;
}

/**
 * Open inquiry modal from product detail page.
 */
function openModalFromDetail() {
  if (!window.currentProduct) return;
  openModal(
    window.currentProduct.name,
    window.currentProduct.price,
    window.currentProduct.desc + ' • Wood: ' + (window.currentProduct.wood.charAt(0).toUpperCase() + window.currentProduct.wood.slice(1)) + ' • Dimensions: ' + window.currentProduct.length + '" × ' + window.currentProduct.width + '"'
  );
}

/* ═══ SHOP FUNCTIONALITY ═════════════════════════════════════ */

/**
 * Filter products by wood type.
 * @param {string} wood - Wood type: 'all', 'walnut', 'oak', 'chestnut', 'maple'
 * @param {HTMLElement} btn - The clicked filter button
 */
function filterProducts(wood, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const cards = document.querySelectorAll('.product-card');
  let count = 0;

  cards.forEach(card => {
    const match = wood === 'all' || card.dataset.wood === wood;
    card.style.display = match ? '' : 'none';
    if (match) count++;
  });

  document.getElementById('product-count').textContent =
    `Showing ${count} table${count !== 1 ? 's' : ''}`;
}

/**
 * Open inquiry modal for a specific product.
 * @param {string} name - Product name
 * @param {string} price - Price display
 * @param {string} desc - Product description
 */
function openModal(name, price, desc) {
  document.getElementById('modal-name').textContent = name;
  document.getElementById('modal-price').textContent = price;
  document.getElementById('modal-desc').textContent = desc;

  const subject = encodeURIComponent('Inquiry: ' + name);
  const body = encodeURIComponent(
    `Hello,\n\nI'm interested in the "${name}" listed at ${price}.\n\n${desc}\n\nPlease let me know availability and next steps.\n\nThank you.`
  );

  document.getElementById('modal-email').href =
    `mailto:customer@thehandmadetable.art?subject=${subject}&body=${body}`;

  document.getElementById('modal-overlay').classList.add('open');
}

/**
 * Close modal when clicking backdrop.
 * @param {MouseEvent} e
 */
function closeModal(e) {
  if (e.target === document.getElementById('modal-overlay')) {
    document.getElementById('modal-overlay').classList.remove('open');
  }
}

/**
 * Close modal via X button.
 */
function closeModalBtn() {
  document.getElementById('modal-overlay').classList.remove('open');
}

/* ═══ CONTACT FORM ═════════════════════════════════════════ */

/**
 * Handle contact form submission.
 * @param {Event} e
 */
function handleContactSubmit(e) {
  e.preventDefault();
  
  const form = document.getElementById('contact-form');
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Create mailto link with form data
  const mailtoSubject = encodeURIComponent(`Contact Form: ${subject}`);
  const mailtoBody = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\nMessage:\n${message}`
  );
  
  window.location.href = `mailto:customer@thehandmadetable.art?subject=${mailtoSubject}&body=${mailtoBody}`;
  
  // Reset form
  form.reset();
}

/* ═══ INITIALIZATION ═════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  // Generate shop grid
  const shopGrid = document.getElementById('shop-grid');
  if (shopGrid) {
    tables.forEach(table => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.dataset.wood = table.wood;
      card.style.cursor = 'pointer';
      card.innerHTML = `
        <div class="product-img">
          <img src="${table.image}" alt="${table.name}">
          ${table.inStock ? '<span class="product-badge">In Stock</span>' : ''}
        </div>
        <div class="product-info">
          <p class="product-type">${table.type}</p>
          <h3 class="product-name">${table.name}</h3>
          <p class="product-desc">${table.desc}</p>
          <div class="product-footer">
            <div class="product-price">${table.price}</div>
            <button class="add-btn" onclick="event.stopPropagation(); openModal('${table.name}','${table.price}','${table.desc} • Wood: ${table.wood.charAt(0).toUpperCase() + table.wood.slice(1)} • Dimensions: ${table.length}" × ${table.width}" ')">Inquire</button>
          </div>
        </div>
      `;
      
      // Make card clickable to show detail page
      card.addEventListener('click', () => showProductDetail(table.id));
      
      shopGrid.appendChild(card);
    });

    document.getElementById('product-count').textContent =
      `Showing ${tables.length} table${tables.length !== 1 ? 's' : ''}`;
  }

  // Close modal with Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.getElementById('modal-overlay').classList.remove('open');
    }
  });
});
