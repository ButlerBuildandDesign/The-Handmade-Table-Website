/* ─────────────────────────────────────────────────────────
   The Handmade Table — main.js
   ───────────────────────────────────────────────────────── */

/* ═══ TABLE DATA ═══════════════════════════════════════════ */

/**
 * Product catalog: 30 tables with varying wood types, sizes, and styles.
 * First 4 tables include placeholder for actual photos.
 * Rest use generic placeholder images.
 */
const tables = [
  {
    id: 1,
    name: "Handmade Table No. 1",
    type: "Farm Table — View 1",
    wood: "walnut",
    length: "84",
    width: "42",
    style: "farmhouse",
    price: "Contact for Price",
    desc: "Reclaimed walnut with hand-planed finish. Perfect for traditional farmhouse dining.",
    image: "https://via.placeholder.com/400x300?text=Table+1+Photo",
    inStock: true
  },
  {
    id: 2,
    name: "Handmade Table No. 2",
    type: "Trestle Table — View 1",
    wood: "chestnut",
    length: "72",
    width: "36",
    style: "traditional",
    price: "Contact for Price",
    desc: "Pre-industrial chestnut with traditional trestle base. Authentic period craftsmanship.",
    image: "https://via.placeholder.com/400x300?text=Table+2+Photo",
    inStock: true
  },
  {
    id: 3,
    name: "Handmade Table No. 3",
    type: "Modern Dining Table — View 1",
    wood: "oak",
    length: "96",
    width: "48",
    style: "contemporary",
    price: "Contact for Price",
    desc: "Live-edge oak with clean contemporary legs. Statement piece for modern homes.",
    image: "https://via.placeholder.com/400x300?text=Table+3+Photo",
    inStock: true
  },
  {
    id: 4,
    name: "Handmade Table No. 4",
    type: "Coffee Table — View 1",
    wood: "maple",
    length: "48",
    width: "28",
    style: "contemporary",
    price: "Contact for Price",
    desc: "Thick maple slab with minimalist base. Sculptural and functional.",
    image: "https://via.placeholder.com/400x300?text=Table+4+Photo",
    inStock: true
  },
  // Tables 5-30: Generic placeholder images
  {
    id: 5,
    name: "Handmade Table No. 5",
    type: "Console Table",
    wood: "walnut",
    length: "54",
    width: "18",
    style: "traditional",
    price: "Contact for Price",
    desc: "Narrow reclaimed walnut console. Hand-finished with period hardware.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 6,
    name: "Handmade Table No. 6",
    type: "Desk",
    wood: "oak",
    length: "66",
    width: "30",
    style: "contemporary",
    price: "Contact for Price",
    desc: "Open-leg desk with thick oak top. Perfect for home offices.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 7,
    name: "Handmade Table No. 7",
    type: "Sofa Table",
    wood: "chestnut",
    length: "60",
    width: "14",
    style: "farmhouse",
    price: "Contact for Price",
    desc: "Thin, elegant sofa table in pre-industrial chestnut.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 8,
    name: "Handmade Table No. 8",
    type: "Dining Table",
    wood: "maple",
    length: "78",
    width: "42",
    style: "traditional",
    price: "Contact for Price",
    desc: "Thick maple top with hand-mortised base.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 9,
    name: "Handmade Table No. 9",
    type: "Coffee Table",
    wood: "walnut",
    length: "52",
    width: "32",
    style: "contemporary",
    price: "Contact for Price",
    desc: "Live-edge walnut slab with steel frame.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 10,
    name: "Handmade Table No. 10",
    type: "Farm Table",
    wood: "oak",
    length: "90",
    width: "40",
    style: "farmhouse",
    price: "Contact for Price",
    desc: "Large, sturdy oak farmhouse table. Hand-planed surface.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 11,
    name: "Handmade Table No. 11",
    type: "Side Table",
    wood: "chestnut",
    length: "36",
    width: "24",
    style: "contemporary",
    price: "Contact for Price",
    desc: "Compact reclaimed chestnut side table.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 12,
    name: "Handmade Table No. 12",
    type: "Library Table",
    wood: "maple",
    length: "72",
    width: "36",
    style: "traditional",
    price: "Contact for Price",
    desc: "Period-accurate library table with hand-turned details.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 13,
    name: "Handmade Table No. 13",
    type: "Breakfast Nook",
    wood: "walnut",
    length: "60",
    width: "36",
    style: "farmhouse",
    price: "Contact for Price",
    desc: "Corner-fit dining table for kitchen breakfast areas.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 14,
    name: "Handmade Table No. 14",
    type: "Trestle Dining",
    wood: "oak",
    length: "84",
    width: "44",
    style: "traditional",
    price: "Contact for Price",
    desc: "Classic trestle base with thick oak slab.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 15,
    name: "Handmade Table No. 15",
    type: "Workspace Desk",
    wood: "chestnut",
    length: "60",
    width: "28",
    style: "contemporary",
    price: "Contact for Price",
    desc: "Modern workspace with minimal hardware.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 16,
    name: "Handmade Table No. 16",
    type: "Entry Console",
    wood: "maple",
    length: "48",
    width: "16",
    style: "traditional",
    price: "Contact for Price",
    desc: "Elegant entry console with period details.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 17,
    name: "Handmade Table No. 17",
    type: "Formal Dining",
    wood: "walnut",
    length: "102",
    width: "48",
    style: "traditional",
    price: "Contact for Price",
    desc: "Grand formal dining table for large gatherings.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 18,
    name: "Handmade Table No. 18",
    type: "Coffee Table",
    wood: "oak",
    length: "56",
    width: "34",
    style: "farmhouse",
    price: "Contact for Price",
    desc: "Sturdy oak coffee table with hand-forged base.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 19,
    name: "Handmade Table No. 19",
    type: "Floating Desk",
    wood: "chestnut",
    length: "54",
    width: "24",
    style: "contemporary",
    price: "Contact for Price",
    desc: "Wall-mounted desk with hidden brackets.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 20,
    name: "Handmade Table No. 20",
    type: "Pedestal Table",
    wood: "maple",
    length: "48",
    width: "48",
    style: "traditional",
    price: "Contact for Price",
    desc: "Round pedestal dining table, perfect for intimate spaces.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 21,
    name: "Handmade Table No. 21",
    type: "Kitchen Island",
    wood: "walnut",
    length: "72",
    width: "42",
    style: "farmhouse",
    price: "Contact for Price",
    desc: "Island-height table perfect for kitchen workspaces.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 22,
    name: "Handmade Table No. 22",
    type: "Display Console",
    wood: "oak",
    length: "66",
    width: "20",
    style: "contemporary",
    price: "Contact for Price",
    desc: "Gallery-style console for art and collections.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 23,
    name: "Handmade Table No. 23",
    type: "Trestle Desk",
    wood: "chestnut",
    length: "60",
    width: "30",
    style: "traditional",
    price: "Contact for Price",
    desc: "Workspace-scale trestle table.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 24,
    name: "Handmade Table No. 24",
    type: "Side Table",
    wood: "maple",
    length: "40",
    width: "28",
    style: "contemporary",
    price: "Contact for Price",
    desc: "Sculptural side table with minimal base.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 25,
    name: "Handmade Table No. 25",
    type: "Bench",
    wood: "walnut",
    length: "72",
    width: "16",
    style: "farmhouse",
    price: "Contact for Price",
    desc: "Long bench seating for dining areas.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 26,
    name: "Handmade Table No. 26",
    type: "Standing Desk",
    wood: "oak",
    length: "60",
    width: "32",
    style: "contemporary",
    price: "Contact for Price",
    desc: "Height-adjustable workspace table.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 27,
    name: "Handmade Table No. 27",
    type: "Harvest Table",
    wood: "chestnut",
    length: "96",
    width: "40",
    style: "traditional",
    price: "Contact for Price",
    desc: "Large harvest-style dining table.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 28,
    name: "Handmade Table No. 28",
    type: "Nesting Tables",
    wood: "maple",
    length: "36",
    width: "24",
    style: "contemporary",
    price: "Contact for Price",
    desc: "Set of two nesting tables with tapered legs.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 29,
    name: "Handmade Table No. 29",
    type: "Conference Table",
    wood: "walnut",
    length: "120",
    width: "48",
    style: "traditional",
    price: "Contact for Price",
    desc: "Large conference/board table for professional spaces.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
  },
  {
    id: 30,
    name: "Handmade Table No. 30",
    type: "Sofa Table",
    wood: "oak",
    length: "54",
    width: "18",
    style: "farmhouse",
    price: "Contact for Price",
    desc: "Elegant behind-the-sofa accent table.",
    image: "https://via.placeholder.com/400x300?text=Handmade+Table"
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

  // Populate detail page with product data
  document.getElementById('detail-title').textContent = table.name;
  document.getElementById('detail-type').textContent = table.type;
  document.getElementById('detail-name').textContent = table.name;
  document.getElementById('detail-price').textContent = table.price;
  document.getElementById('detail-wood').textContent = table.wood.charAt(0).toUpperCase() + table.wood.slice(1);
  document.getElementById('detail-length').textContent = table.length + '"';
  document.getElementById('detail-width').textContent = table.width + '"';
  document.getElementById('detail-style').textContent = table.style.charAt(0).toUpperCase() + table.style.slice(1);
  document.getElementById('detail-description').textContent = table.desc;
  document.getElementById('detail-main-image').src = table.image;
  document.getElementById('detail-main-image').alt = table.name;

  // Store current product for inquiry modal
  window.currentProduct = table;

  showPage('product');
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
  }

  // Close modal with Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.getElementById('modal-overlay').classList.remove('open');
    }
  });
});
