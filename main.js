/* ─────────────────────────────────────────────────────────
   The Handmade Table — main.js
   ───────────────────────────────────────────────────────── */

/* ═══ CAROUSEL STATE ════════════════════════════════════════ */
let detailImages = [];
let detailIndex = 0;

/* ═══ FILTER STATE ══════════════════════════════════════════ */
let activeCategory = 'all';
let activeLength = 'all';

/* ═══ PORTFOLIO MODAL STATE ══════════════════════════════════ */
let pmImages = [];
let pmIndex  = 0;

/* ═══ TABLE DATA ═══════════════════════════════════════════ */

/**
 * Product catalog: 30 tables with varying wood types, sizes, and styles.
 * First 4 tables include placeholder for actual photos.
 * Rest use generic placeholder images.
 */
const tables = [
  {
    id: 17,
    name: "SP 1001",
    category: "sp",
    type: "Special Piece · Pine",
    wood: "pine",
    length: "—",
    width: "—",
    style: "Special Piece",
    price: "Contact for Price",
    desc: "Description coming soon. Contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/SP%201001%20Website/SP.1001.01.JPG",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/SP%201001%20Website/SP.1001.01.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/SP%201001%20Website/SP.1001.02.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/SP%201001%20Website/SP.1001.03.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/SP%201001%20Website/SP.1001.04.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/SP%201001%20Website/SP.1001.05.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/SP%201001%20Website/SP.1001.06.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/SP%201001%20Website/SP.1001.07.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/SP%201001%20Website/SP.1001.08.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/SP%201001%20Website/SP.1001.09.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/SP%201001%20Website/SP.1001.010.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/SP%201001%20Website/SP.1001.011.JPG"
    ],
    inStock: true
  },
  {
    id: 18,
    name: "AT 2006",
    category: "at",
    type: "Art Table · Walnut",
    wood: "walnut",
    length: "78.5",
    width: "44.5",
    style: "Art Table",
    price: "Contact for Price",
    desc: "Walnut top art table, 78.5 x 44.5. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202006%20-%2078.5%20x%2044.5%20x%2030%20-%20Walnut%20Top%20Table%20Website/AT.2006.01.JPG",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202006%20-%2078.5%20x%2044.5%20x%2030%20-%20Walnut%20Top%20Table%20Website/AT.2006.01.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202006%20-%2078.5%20x%2044.5%20x%2030%20-%20Walnut%20Top%20Table%20Website/AT.2006.02.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202006%20-%2078.5%20x%2044.5%20x%2030%20-%20Walnut%20Top%20Table%20Website/AT.2006.03.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202006%20-%2078.5%20x%2044.5%20x%2030%20-%20Walnut%20Top%20Table%20Website/AT.2006.04.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202006%20-%2078.5%20x%2044.5%20x%2030%20-%20Walnut%20Top%20Table%20Website/AT.2006.05.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202006%20-%2078.5%20x%2044.5%20x%2030%20-%20Walnut%20Top%20Table%20Website/AT.2006.06.JPG"
    ],
    inStock: true
  },
  {
    id: 19,
    name: "AT 2009",
    category: "at",
    type: "Art Table · Pine",
    wood: "pine",
    length: "77",
    width: "35",
    style: "Basket Weave",
    price: "Contact for Price",
    desc: "Basket weave art table, 77 x 35. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.03.JPG",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.03.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.04.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.010.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.011.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.014.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.018.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.019.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.020.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.022.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.026.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.030.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.032.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.033.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.040.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.042.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.043.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.044.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.046.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.049.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.051.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.053.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.055.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/AT%202009%20-%2077%20x%2035%20Basket%20Weave%20Website/AT.2009.057.JPG"
    ],
    inStock: true
  },
  {
    id: 20,
    name: "AT 2012",
    category: "at",
    type: "Art Table · White Oak",
    wood: "oak",
    length: "96",
    width: "—",
    style: "Art Table",
    price: "Contact for Price",
    desc: "Bleached white oak art table, 96\" long. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202012%20-%2096%20x%20XX%20x%2030%20-%20Bleached%20White%20Oak/AT.2012.01.JPG",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202012%20-%2096%20x%20XX%20x%2030%20-%20Bleached%20White%20Oak/AT.2012.01.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202012%20-%2096%20x%20XX%20x%2030%20-%20Bleached%20White%20Oak/AT.2012.02.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202012%20-%2096%20x%20XX%20x%2030%20-%20Bleached%20White%20Oak/AT.2012.03.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202012%20-%2096%20x%20XX%20x%2030%20-%20Bleached%20White%20Oak/AT.2012.04.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202012%20-%2096%20x%20XX%20x%2030%20-%20Bleached%20White%20Oak/AT.2012.05.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202012%20-%2096%20x%20XX%20x%2030%20-%20Bleached%20White%20Oak/AT.2012.06.JPG"
    ],
    inStock: true
  },
  {
    id: 22,
    name: "RO 3211",
    category: "ro",
    type: "Round Table · Marble",
    wood: "marble",
    length: "60",
    width: "60",
    style: "Round",
    price: "Contact for Price",
    desc: "60-inch round white marble top table. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RO%203211%20-%2060%20inch%20Round%20White%20Marble%20Top/RO.3211.01.JPG",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RO%203211%20-%2060%20inch%20Round%20White%20Marble%20Top/RO.3211.01.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RO%203211%20-%2060%20inch%20Round%20White%20Marble%20Top/RO.3211.03.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RO%203211%20-%2060%20inch%20Round%20White%20Marble%20Top/RO.3211.04.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RO%203211%20-%2060%20inch%20Round%20White%20Marble%20Top/RO.3211.05.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RO%203211%20-%2060%20inch%20Round%20White%20Marble%20Top/RO.3211.06.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RO%203211%20-%2060%20inch%20Round%20White%20Marble%20Top/RO.3211.07.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RO%203211%20-%2060%20inch%20Round%20White%20Marble%20Top/RO.3211.08.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RO%203211%20-%2060%20inch%20Round%20White%20Marble%20Top/RO.3211.09.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RO%203211%20-%2060%20inch%20Round%20White%20Marble%20Top/RO.3211.010.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RO%203211%20-%2060%20inch%20Round%20White%20Marble%20Top/RO.3211.011.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RO%203211%20-%2060%20inch%20Round%20White%20Marble%20Top/RO.3211.012.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RO%203211%20-%2060%20inch%20Round%20White%20Marble%20Top/RO.3211.013.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RO%203211%20-%2060%20inch%20Round%20White%20Marble%20Top/RO.3211.014.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RO%203211%20-%2060%20inch%20Round%20White%20Marble%20Top/RO.3211.015.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RO%203211%20-%2060%20inch%20Round%20White%20Marble%20Top/RO.3211.016.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RO%203211%20-%2060%20inch%20Round%20White%20Marble%20Top/RO.3211.018.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RO%203211%20-%2060%20inch%20Round%20White%20Marble%20Top/RO.3211.019.JPG"
    ],
    inStock: true
  },
  {
    id: 23,
    name: "RT 3079",
    category: "ro",
    type: "Farm Table · Pine",
    wood: "pine",
    length: "84",
    width: "42",
    style: "Thresher",
    price: "Contact for Price",
    desc: "Deep brown thresher farm table, 84 x 42. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RT%203079%20-%2084x42%20-%20Deep%20Brown%20Threasher/RT.3079.01.jpg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RT%203079%20-%2084x42%20-%20Deep%20Brown%20Threasher/RT.3079.01.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RT%203079%20-%2084x42%20-%20Deep%20Brown%20Threasher/RT.3079.02.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RT%203079%20-%2084x42%20-%20Deep%20Brown%20Threasher/RT.3079.03.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RT%203079%20-%2084x42%20-%20Deep%20Brown%20Threasher/RT.3079.04.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RT%203079%20-%2084x42%20-%20Deep%20Brown%20Threasher/RT.3079.05.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RT%203079%20-%2084x42%20-%20Deep%20Brown%20Threasher/RT.3079.06.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RT%203079%20-%2084x42%20-%20Deep%20Brown%20Threasher/RT.3079.07.jpg"
    ],
    inStock: true
  },
  {
    id: 24,
    name: "CT 5010",
    category: "ct",
    type: "Farm Table · Pine",
    wood: "pine",
    length: "96",
    width: "36",
    style: "Four Board",
    price: "Contact for Price",
    desc: "Four board farm table, 96 x 36. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.01.jpeg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.01.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.02.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.03.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.04.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.05.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.06.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.07.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.08.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.09.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.010.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.011.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.012.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.013.jpeg"
    ],
    inStock: true
  },
  {
    id: 25,
    name: "CT 5015",
    category: "ct",
    type: "Farm Table · Oak",
    wood: "oak",
    length: "78",
    width: "36",
    style: "Oak Pike Base",
    price: "Contact for Price",
    desc: "Oak pike base farm table, 78 x 36. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205015%20-%2078%20x%2036%20-%20Oak%20Pike%20Base/CT.5015.02.jpeg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205015%20-%2078%20x%2036%20-%20Oak%20Pike%20Base/CT.5015.02.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205015%20-%2078%20x%2036%20-%20Oak%20Pike%20Base/CT.5015.01.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205015%20-%2078%20x%2036%20-%20Oak%20Pike%20Base/CT.5015.03.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205015%20-%2078%20x%2036%20-%20Oak%20Pike%20Base/CT.5015.04.jpeg"
    ],
    inStock: true
  },
  {
    id: 26,
    name: "TR 4008",
    category: "tr",
    type: "Farm Table · Pine",
    wood: "pine",
    length: "82",
    width: "38",
    style: "Four Board",
    price: "Contact for Price",
    desc: "Four board farm table, 82 x 38. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204008%20-%2082%20x%2038%20-%20Four%20board/TR.4008.01.jpeg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204008%20-%2082%20x%2038%20-%20Four%20board/TR.4008.01.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204008%20-%2082%20x%2038%20-%20Four%20board/TR.4008.02.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204008%20-%2082%20x%2038%20-%20Four%20board/TR.4008.03.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204008%20-%2082%20x%2038%20-%20Four%20board/TR.4008.04.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204008%20-%2082%20x%2038%20-%20Four%20board/TR.4008.05.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204008%20-%2082%20x%2038%20-%20Four%20board/TR.4008.06.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204008%20-%2082%20x%2038%20-%20Four%20board/TR.4008.07.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204008%20-%2082%20x%2038%20-%20Four%20board/TR.4008.08.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204008%20-%2082%20x%2038%20-%20Four%20board/TR.4008.09.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204008%20-%2082%20x%2038%20-%20Four%20board/TR.4008.010.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204008%20-%2082%20x%2038%20-%20Four%20board/TR.4008.011.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204008%20-%2082%20x%2038%20-%20Four%20board/TR.4008.012.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204008%20-%2082%20x%2038%20-%20Four%20board/TR.4008.013.jpeg"
    ],
    inStock: true
  },
  {
    id: 27,
    name: "TR 4013",
    category: "tr",
    type: "Farm Table · Pine",
    wood: "pine",
    length: "96",
    width: "42",
    style: "Four Board",
    price: "Contact for Price",
    desc: "Four board farm table, 96 x 42. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.01.jpeg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.01.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.02.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.03.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.04.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.05.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.06.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.07.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.08.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.09.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.010.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.011.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.012.jpeg"
    ],
    inStock: true
  },
  {
    id: 28,
    name: "CT 5605",
    category: "ct",
    type: "Farm Table · Cherry",
    wood: "cherry",
    length: "96",
    width: "36",
    style: "Light Cherry",
    price: "Contact for Price",
    desc: "Light cherry farm table, 96 x 36. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CT%205605%20-%2096x36%20-%20Light%20Cherry/CT.5605.01.jpg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CT%205605%20-%2096x36%20-%20Light%20Cherry/CT.5605.01.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CT%205605%20-%2096x36%20-%20Light%20Cherry/CT.5605.02.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CT%205605%20-%2096x36%20-%20Light%20Cherry/CT.5605.03.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CT%205605%20-%2096x36%20-%20Light%20Cherry/CT.5605.04.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CT%205605%20-%2096x36%20-%20Light%20Cherry/CT.5605.05.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CT%205605%20-%2096x36%20-%20Light%20Cherry/CT.5605.06.jpg"
    ],
    inStock: true
  },
  {
    id: 29,
    name: "CT 5606",
    category: "ct",
    type: "Farm Table · Oak",
    wood: "oak",
    length: "78",
    width: "36",
    style: "Dark Stained Oak",
    price: "Contact for Price",
    desc: "Dark stained oak farm table with double leg trestle base, 78 x 36. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CT%205606%20-%2078x36%20-%20Dark%20Stained%20Oak%20-%20double%20leg%20trestle/CT.5606.01.jpg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CT%205606%20-%2078x36%20-%20Dark%20Stained%20Oak%20-%20double%20leg%20trestle/CT.5606.01.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CT%205606%20-%2078x36%20-%20Dark%20Stained%20Oak%20-%20double%20leg%20trestle/CT.5606.02.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CT%205606%20-%2078x36%20-%20Dark%20Stained%20Oak%20-%20double%20leg%20trestle/CT.5606.03.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CT%205606%20-%2078x36%20-%20Dark%20Stained%20Oak%20-%20double%20leg%20trestle/CT.5606.04.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CT%205606%20-%2078x36%20-%20Dark%20Stained%20Oak%20-%20double%20leg%20trestle/CT.5606.05.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CT%205606%20-%2078x36%20-%20Dark%20Stained%20Oak%20-%20double%20leg%20trestle/CT.5606.06.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CT%205606%20-%2078x36%20-%20Dark%20Stained%20Oak%20-%20double%20leg%20trestle/CT.5606.07.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CT%205606%20-%2078x36%20-%20Dark%20Stained%20Oak%20-%20double%20leg%20trestle/CT.5606.08.jpg"
    ],
    inStock: true
  },
  {
    id: 30,
    name: "TR 4101",
    category: "tr",
    type: "Thresher · Pine",
    wood: "pine",
    length: "96",
    width: "42",
    style: "Thresher",
    price: "Contact for Price",
    desc: "Deep rich thresher farm table with turn-down base, 96 x 42. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TR%204101%20-%2096%20x%2042%20-%20Deep%20Rich%20Thresher%20-%20turn%20down/TR.4101.01.jpg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TR%204101%20-%2096%20x%2042%20-%20Deep%20Rich%20Thresher%20-%20turn%20down/TR.4101.01.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TR%204101%20-%2096%20x%2042%20-%20Deep%20Rich%20Thresher%20-%20turn%20down/TR.4101.02.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TR%204101%20-%2096%20x%2042%20-%20Deep%20Rich%20Thresher%20-%20turn%20down/TR.4101.03.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TR%204101%20-%2096%20x%2042%20-%20Deep%20Rich%20Thresher%20-%20turn%20down/TR.4101.04.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TR%204101%20-%2096%20x%2042%20-%20Deep%20Rich%20Thresher%20-%20turn%20down/TR.4101.05.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TR%204101%20-%2096%20x%2042%20-%20Deep%20Rich%20Thresher%20-%20turn%20down/TR.4101.06.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TR%204101%20-%2096%20x%2042%20-%20Deep%20Rich%20Thresher%20-%20turn%20down/TR.4101.07.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TR%204101%20-%2096%20x%2042%20-%20Deep%20Rich%20Thresher%20-%20turn%20down/TR.4101.08.jpg"
    ],
    inStock: true
  },
  {
    id: 31,
    name: "FT 6089",
    category: "ft",
    type: "Farm Table · Pine",
    wood: "pine",
    length: "65",
    width: "27",
    style: "Three Board",
    price: "Contact for Price",
    desc: "Three board farm table, 65 x 27. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206089%20-%2065%20x%2027%20-%20Three%20Boards/FT.6089.01.jpeg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206089%20-%2065%20x%2027%20-%20Three%20Boards/FT.6089.01.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206089%20-%2065%20x%2027%20-%20Three%20Boards/FT.6089.02.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206089%20-%2065%20x%2027%20-%20Three%20Boards/FT.6089.03.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206089%20-%2065%20x%2027%20-%20Three%20Boards/FT.6089.04.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206089%20-%2065%20x%2027%20-%20Three%20Boards/FT.6089.05.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206089%20-%2065%20x%2027%20-%20Three%20Boards/FT.6089.06.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206089%20-%2065%20x%2027%20-%20Three%20Boards/FT.6089.07.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206089%20-%2065%20x%2027%20-%20Three%20Boards/FT.6089.08.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206089%20-%2065%20x%2027%20-%20Three%20Boards/FT.6089.09.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206089%20-%2065%20x%2027%20-%20Three%20Boards/FT.6089.010.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206089%20-%2065%20x%2027%20-%20Three%20Boards/FT.6089.011.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206089%20-%2065%20x%2027%20-%20Three%20Boards/FT.6089.012.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206089%20-%2065%20x%2027%20-%20Three%20Boards/FT.6089.013.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206089%20-%2065%20x%2027%20-%20Three%20Boards/FT.6089.014.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206089%20-%2065%20x%2027%20-%20Three%20Boards/FT.6089.015.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206089%20-%2065%20x%2027%20-%20Three%20Boards/FT.6089.016.jpeg"
    ],
    inStock: true
  },
  {
    id: 32,
    name: "FT 6092",
    category: "ft",
    type: "Farm Table · Pine",
    wood: "pine",
    length: "60",
    width: "42",
    style: "Threshing Floor",
    price: "Contact for Price",
    desc: "Chocolate brown threshing floor farm table, 60 x 42. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206092%20-%2060%20x%2042%20-%20Chocolate%20brown%20theshing%20floor/FT.6092.01.jpeg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206092%20-%2060%20x%2042%20-%20Chocolate%20brown%20theshing%20floor/FT.6092.01.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206092%20-%2060%20x%2042%20-%20Chocolate%20brown%20theshing%20floor/FT.6092.02.jpeg"
    ],
    inStock: true
  },
  {
    id: 33,
    name: "FT 6094",
    category: "ft",
    type: "Farm Table · Pine",
    wood: "pine",
    length: "64",
    width: "40",
    style: "Granary",
    price: "Contact for Price",
    desc: "Honey brown granary 3-board farm table, 64 x 40. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206094%20-%2064%20x%2040%20-%20Honey%20Brown%20Granary%203-board/FT.6094.01.jpeg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206094%20-%2064%20x%2040%20-%20Honey%20Brown%20Granary%203-board/FT.6094.01.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206094%20-%2064%20x%2040%20-%20Honey%20Brown%20Granary%203-board/FT.6094.02.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206094%20-%2064%20x%2040%20-%20Honey%20Brown%20Granary%203-board/FT.6094.03.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206094%20-%2064%20x%2040%20-%20Honey%20Brown%20Granary%203-board/FT.6094.04.jpeg"
    ],
    inStock: true
  },
  {
    id: 34,
    name: "FT 6096",
    category: "ft",
    type: "Farm Table · Pine",
    wood: "pine",
    length: "68.5",
    width: "38",
    style: "Granary",
    price: "Contact for Price",
    desc: "Light granary farm table, 68.5 x 38. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206096%20-%2068.5%20x%2038%20-%20Light%20Granary%20Farm/FT.6096.01.jpeg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206096%20-%2068.5%20x%2038%20-%20Light%20Granary%20Farm/FT.6096.01.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206096%20-%2068.5%20x%2038%20-%20Light%20Granary%20Farm/FT.6096.02.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206096%20-%2068.5%20x%2038%20-%20Light%20Granary%20Farm/FT.6096.03.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206096%20-%2068.5%20x%2038%20-%20Light%20Granary%20Farm/FT.6096.04.jpeg"
    ],
    inStock: true
  },
  {
    id: 35,
    name: "FT 6099",
    category: "ft",
    type: "Farm Table · Pine",
    wood: "pine",
    length: "100",
    width: "38",
    style: "Farm Table",
    price: "Contact for Price",
    desc: "Farm table, 100 x 38. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206099%20-%20100%20x%2038/FT.6099.01.jpeg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206099%20-%20100%20x%2038/FT.6099.01.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206099%20-%20100%20x%2038/FT.6099.02.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206099%20-%20100%20x%2038/FT.6099.03.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206099%20-%20100%20x%2038/FT.6099.04.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206099%20-%20100%20x%2038/FT.6099.05.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206099%20-%20100%20x%2038/FT.6099.06.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206099%20-%20100%20x%2038/FT.6099.07.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206099%20-%20100%20x%2038/FT.6099.08.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206099%20-%20100%20x%2038/FT.6099.09.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206099%20-%20100%20x%2038/FT.6099.010.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206099%20-%20100%20x%2038/FT.6099.011.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206099%20-%20100%20x%2038/FT.6099.012.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206099%20-%20100%20x%2038/FT.6099.013.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206099%20-%20100%20x%2038/FT.6099.014.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206099%20-%20100%20x%2038/FT.6099.015.jpeg"
    ],
    inStock: true
  },
  {
    id: 36,
    name: "FT 6044",
    category: "ft",
    type: "Farm Table · Pine",
    wood: "pine",
    length: "69",
    width: "38",
    style: "Granary",
    price: "Contact for Price",
    desc: "Light granary farm table with stains, 69 x 38. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206044%20-%2069%20x%2038%20-%20Light%20granary%20with%20Stains/FT.6044.01.jpg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206044%20-%2069%20x%2038%20-%20Light%20granary%20with%20Stains/FT.6044.01.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206044%20-%2069%20x%2038%20-%20Light%20granary%20with%20Stains/FT.6044.02.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206044%20-%2069%20x%2038%20-%20Light%20granary%20with%20Stains/FT.6044.03.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206044%20-%2069%20x%2038%20-%20Light%20granary%20with%20Stains/FT.6044.04.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206044%20-%2069%20x%2038%20-%20Light%20granary%20with%20Stains/FT.6044.05.jpg"
    ],
    inStock: true
  },
  {
    id: 37,
    name: "FT 6045",
    category: "ft",
    type: "Farm Table · Pine",
    wood: "pine",
    length: "100",
    width: "28",
    style: "Colonial Pine",
    price: "Contact for Price",
    desc: "Colonial pine farm table, 100 x 28. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.01.jpg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.01.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.02.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.03.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.04.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.05.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.06.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.07.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.08.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.09.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.010.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.011.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.012.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.013.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.014.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.015.jpg"
    ],
    inStock: true
  },
  {
    id: 38,
    name: "CC 8103",
    category: "cc",
    type: "Coffee Table · Live Edge",
    wood: "pine",
    length: "58.5",
    width: "27",
    style: "Live Edge",
    price: "Contact for Price",
    desc: "Live edge coffee table, 58.5 x 27 x 17h. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CC%208103%20-%2058.5%20x%2027%20x%2017%20-%20Live%20edge%20coffee%20table/CC.8103.01.JPG",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CC%208103%20-%2058.5%20x%2027%20x%2017%20-%20Live%20edge%20coffee%20table/CC.8103.01.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CC%208103%20-%2058.5%20x%2027%20x%2017%20-%20Live%20edge%20coffee%20table/CC.8103.02.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CC%208103%20-%2058.5%20x%2027%20x%2017%20-%20Live%20edge%20coffee%20table/CC.8103.03.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CC%208103%20-%2058.5%20x%2027%20x%2017%20-%20Live%20edge%20coffee%20table/CC.8103.04.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CC%208103%20-%2058.5%20x%2027%20x%2017%20-%20Live%20edge%20coffee%20table/CC.8103.05.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20CC%208103%20-%2058.5%20x%2027%20x%2017%20-%20Live%20edge%20coffee%20table/CC.8103.06.JPG"
    ],
    inStock: true
  },
  {
    id: 39,
    name: "TT 7114",
    category: "tt",
    type: "Thick Top · Pine",
    wood: "pine",
    length: "84",
    width: "33",
    style: "Threshing Floor",
    price: "Contact for Price",
    desc: "Honey brown threshing floor 2-board top, 84 x 33. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TT%207114%20-%2084%20x%2033%20-%20Honey%20Brown%20Threshing%20Floor%202-board%20top/TT.7114.01.jpg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TT%207114%20-%2084%20x%2033%20-%20Honey%20Brown%20Threshing%20Floor%202-board%20top/TT.7114.01.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TT%207114%20-%2084%20x%2033%20-%20Honey%20Brown%20Threshing%20Floor%202-board%20top/TT.7114.02.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TT%207114%20-%2084%20x%2033%20-%20Honey%20Brown%20Threshing%20Floor%202-board%20top/TT.7114.03.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TT%207114%20-%2084%20x%2033%20-%20Honey%20Brown%20Threshing%20Floor%202-board%20top/TT.7114.04.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TT%207114%20-%2084%20x%2033%20-%20Honey%20Brown%20Threshing%20Floor%202-board%20top/TT.7114.05.jpg"
    ],
    inStock: true
  },
  {
    id: 40,
    name: "TT 7116",
    category: "tt",
    type: "Thick Top · Pine",
    wood: "pine",
    length: "75",
    width: "36",
    style: "Thresher",
    price: "Contact for Price",
    desc: "Light thresher with round sawn marks, 75 x 36. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TT%207116%20-%2075X36%20-%20Light%20Thresher%20-%20Round%20Sawn%20Marks/TT.7116.01.jpg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TT%207116%20-%2075X36%20-%20Light%20Thresher%20-%20Round%20Sawn%20Marks/TT.7116.01.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TT%207116%20-%2075X36%20-%20Light%20Thresher%20-%20Round%20Sawn%20Marks/TT.7116.02.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TT%207116%20-%2075X36%20-%20Light%20Thresher%20-%20Round%20Sawn%20Marks/TT.7116.03.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TT%207116%20-%2075X36%20-%20Light%20Thresher%20-%20Round%20Sawn%20Marks/TT.7116.04.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TT%207116%20-%2075X36%20-%20Light%20Thresher%20-%20Round%20Sawn%20Marks/TT.7116.05.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TT%207116%20-%2075X36%20-%20Light%20Thresher%20-%20Round%20Sawn%20Marks/TT.7116.06.jpg"
    ],
    inStock: true
  },
  {
    id: 41,
    name: "AT 2020",
    category: "at",
    type: "Art Table · Cypress",
    wood: "cypress",
    length: "75",
    width: "35",
    style: "Art Table",
    price: "Contact for Price",
    desc: "Dark cypress art table, 75 x 35. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202020%20-%2075x35%20-%20Dark%20cypress/AT.2020.01.jpg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202020%20-%2075x35%20-%20Dark%20cypress/AT.2020.01.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202020%20-%2075x35%20-%20Dark%20cypress/AT.2020.02.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202020%20-%2075x35%20-%20Dark%20cypress/AT.2020.03.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202020%20-%2075x35%20-%20Dark%20cypress/AT.2020.04.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202020%20-%2075x35%20-%20Dark%20cypress/AT.2020.05.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202020%20-%2075x35%20-%20Dark%20cypress/AT.2020.06.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202020%20-%2075x35%20-%20Dark%20cypress/AT.2020.07.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202020%20-%2075x35%20-%20Dark%20cypress/AT.2020.08.jpg"
    ],
    inStock: true
  },
  {
    id: 42,
    name: "AT 2093",
    category: "at",
    type: "Art Table · Cypress",
    wood: "cypress",
    length: "75",
    width: "36",
    style: "Art Table",
    price: "Contact for Price",
    desc: "Dark cypress art table, 75 x 36. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202093%20-%2075%20X%2036%20-%20Dark%20Cypress/AT.2093.01.jpeg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202093%20-%2075%20X%2036%20-%20Dark%20Cypress/AT.2093.01.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202093%20-%2075%20X%2036%20-%20Dark%20Cypress/AT.2093.02.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202093%20-%2075%20X%2036%20-%20Dark%20Cypress/AT.2093.03.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202093%20-%2075%20X%2036%20-%20Dark%20Cypress/AT.2093.04.jpeg"
    ],
    inStock: true
  },
  {
    id: 43,
    name: "AT 2014",
    category: "at",
    type: "Art Table · Pine",
    wood: "pine",
    length: "82",
    width: "35",
    style: "Grooved Top",
    price: "Contact for Price",
    desc: "Grooved top farm style art table, 82 x 35. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202014%20-%2082%20x%20%2035%20x%2030%20-%20Grooved%20Top%20Farm%20Style/AT.2014.01.JPG",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202014%20-%2082%20x%20%2035%20x%2030%20-%20Grooved%20Top%20Farm%20Style/AT.2014.01.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202014%20-%2082%20x%20%2035%20x%2030%20-%20Grooved%20Top%20Farm%20Style/AT.2014.05.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202014%20-%2082%20x%20%2035%20x%2030%20-%20Grooved%20Top%20Farm%20Style/AT.2014.06.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202014%20-%2082%20x%20%2035%20x%2030%20-%20Grooved%20Top%20Farm%20Style/AT.2014.07.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202014%20-%2082%20x%20%2035%20x%2030%20-%20Grooved%20Top%20Farm%20Style/AT.2014.08.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202014%20-%2082%20x%20%2035%20x%2030%20-%20Grooved%20Top%20Farm%20Style/AT.2014.09.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202014%20-%2082%20x%20%2035%20x%2030%20-%20Grooved%20Top%20Farm%20Style/AT.2014.010.JPG"
    ],
    inStock: true
  }
];

/* ═══ TEAM DATA ═════════════════════════════════════════════ */
const teamMembers = [
  {
    id: 'david',
    name: 'David Grant Howard',
    role: 'Master Craftsman & Founder',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    bio: [
      'David Grant Howard has spent over three decades perfecting the art of working with reclaimed pre-industrial wood. As founder of The Handmade Table, he built the business on a single principle: every piece of old-growth timber deserves to be transformed into something that will outlast another century.',
      'His technical mastery spans hand-planing, finishing, joinery, and structural design. But it\'s his instinct for reading wood — understanding its history, its grain, its character — that sets every piece apart. David selects each board personally, turning down material that doesn\'t meet his standard.',
      'When he\'s not in the workshop, he\'s sourcing timber from demolished barns, mills, and industrial sites across the Southeast — preserving history one board at a time.'
    ]
  },
  {
    id: 'robert',
    name: 'Robert',
    role: 'Senior Craftsman',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    bio: [
      'Robert has been a cornerstone of The Handmade Table for over fifteen years. His specialty is surface finishing — hand-planing boards to bring out grain patterns that machine finishing can never replicate.',
      'He approaches every tabletop as a canvas, reading the wood\'s natural features and working with them rather than against them. The result is a surface that is both tactile and visually stunning.',
      'Robert oversees final quality checks on every piece that leaves the shop, ensuring each table meets the standard the shop\'s reputation is built on.'
    ]
  },
  {
    id: 'chris',
    name: 'Chris',
    role: 'Master Joinery Specialist',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    bio: [
      'Chris is our master joiner, responsible for the structural integrity of every table and architectural piece. He trained under traditional cabinetmakers and has spent his career refining the techniques that give our pieces their longevity.',
      'Where others might reach for hardware, Chris reaches for hand-cut mortise-and-tenon joints, hand-fitted dovetails, and traditional wedged through-tenons. His work is invisible when everything goes right — and invisible is exactly the point.',
      'He also designs and builds the custom bases for our dining tables, working with clients to balance proportion, weight, and visual presence.'
    ]
  },
  {
    id: 'bill',
    name: 'Bill',
    role: 'Architectural Elements Specialist',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    bio: [
      'Bill leads all of our architectural work — custom staircases, kitchen installations, accent walls, doors, and bespoke woodwork that define entire spaces. He brings a project-management mindset to complex multi-day installations.',
      'His ability to work alongside architects, designers, and homeowners means projects stay on schedule and on vision. He reads blueprints, navigates tight spaces, and solves problems in the field without losing sight of the finished result.',
      'Bill has overseen some of our most ambitious projects, including full kitchen builds, complete staircase renovations, and whole-home paneling installations.'
    ]
  },
  {
    id: 'josh',
    name: 'Josh',
    role: 'Contemporary Design & Fabrication',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    bio: [
      'Josh bridges the gap between the timeless character of reclaimed wood and the clean lines of contemporary design. He works closely with clients who want the authenticity of old-growth timber in a modern, minimal aesthetic.',
      'His approach is subtractive — great design comes from knowing what to leave out. A Josh piece is striking not for how much it shows, but for how confidently it shows what it chooses to.',
      'He handles fabrication from design concept through to final finish, and works particularly well on custom orders where the client has a specific vision they need help realizing.'
    ]
  },
  {
    id: 'daniel',
    name: 'Daniel Butler',
    role: 'Operations & Design',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    bio: [
      'Daniel oversees the operational and design side of The Handmade Table — from client relationships and project coordination to brand direction and the ongoing evolution of the product line.',
      'With a background spanning both business and design, he works to ensure that every interaction a client has with the shop reflects the same level of craft and care that goes into the tables themselves.',
      'Daniel is the first point of contact for custom orders and architectural projects, and takes pride in turning a client\'s rough idea into a precise brief that the shop can execute with confidence.'
    ]
  }
];

/* ═══ PORTFOLIO DATA ════════════════════════════════════════ */
const R2 = 'https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Architectural%20%26%20Cabinetry/';
const portfolioProjects = [
  {
    id: 'watkins-kitchen',
    title: 'Kitchen — Watkins Residence',
    category: 'Kitchen & Cabinetry',
    images: [
      R2 + 'Watkins%20Kitchen%20(13).jpg',
      R2 + 'Kitchen%20(1).jpg',
      R2 + 'Cabinets%20(1).jpg',
    ],
    fullDesc: 'The Watkins kitchen represents one of our most comprehensive residential installations. The client came to us wanting a kitchen that felt lived-in from day one — not new, not shiny, but warm and grounded in history.\n\nEvery cabinet face, drawer front, shelf, and countertop edge was milled from reclaimed pre-industrial wood sourced from a mill operation that closed in the early 1900s. The material carries natural saw marks, color variation, and grain character that no new lumber can provide.\n\nThe design was collaborative — we worked directly with the family over three months of material selection, detailed drawings, and mock-ups before a single board was cut for installation. The result is a kitchen that feels both completely functional and completely one-of-a-kind.'
  },
  {
    id: 'ted-green-stair',
    title: 'Staircase — Ted Green Residence',
    category: 'Stairs & Staircases',
    images: [
      R2 + 'Ted%20Green%20Stair%20(12).jpg',
      R2 + 'Stair%20(1).JPG',
      R2 + 'Stair%20(4).jpg',
      R2 + 'Stair%20(8).jpg',
      R2 + 'Magee%20Stairs%20(2).jpg',
    ],
    fullDesc: 'The Ted Green staircase was a full replacement of an original builder staircase — functional but characterless. The brief was simple: make it the first thing anyone notices when they walk through the front door.\n\nEvery tread was hand-planed from wide-plank reclaimed barn wood, with enough natural variation in tone and grain to give the staircase a sense of depth and age. The risers were finished in a complementary tone that plays against the warm wood without competing.\n\nCustom newel posts and balustrade were designed to work with the existing architectural proportions of the home. The finished staircase reads as if it has always been there — and that\'s exactly the effect we were after.'
  },
  {
    id: 'watkins-cabinets',
    title: 'Specialty Cabinetry — Watkins Residence',
    category: 'Kitchen & Cabinetry',
    images: [
      R2 + 'Watkins%20Specialty%20Cabinets%20(2).jpg',
      R2 + 'Reed.jpg',
      R2 + 'Rich%20Boyd%20Work%20Bench%20Island%20(3).jpg',
    ],
    fullDesc: 'Following the success of the main kitchen installation, the Watkins family commissioned a series of specialty built-ins for adjoining rooms — a bar cabinet, a library unit, and a media console.\n\nAll three were built from the same timber stock as the original kitchen, ensuring visual continuity throughout the home. Each piece was designed around its specific use: the bar cabinet with deep drawers and wine storage, the library unit with adjustable shelving and concealed wiring, the media console with ventilation and cable management built invisibly into the structure.\n\nThis project is a good example of how a whole-home material language, when executed well, transforms individual rooms into a unified space.'
  },
  {
    id: 'temple-interior',
    title: 'Interior Paneling — Temple Renovation',
    category: 'Accent Walls & Paneling',
    images: [
      R2 + 'Temple%20Interior%20(107)c.JPG',
      R2 + 'IMG_1874.JPG',
      R2 + 'IMG_1876.JPG',
    ],
    fullDesc: 'The Temple renovation involved installing reclaimed wood paneling throughout a large interior space — covering walls, ceiling soffits, and architectural accents across multiple rooms.\n\nThe scale of the project required careful planning to ensure material consistency across a large volume of timber. We sourced the wood in stages, selecting boards that shared enough character to read as cohesive while retaining the natural variation that makes reclaimed wood compelling.\n\nInstallation was carried out over two weeks, with Bill leading a crew of three. Each board was hand-fitted to account for slight variations in the original framing. The finished space has a depth and warmth that painted drywall cannot achieve — a complete transformation of how the building feels from the inside.'
  },
  {
    id: 'tuttle-island',
    title: 'Kitchen Island — Tuttle Residence',
    category: 'Kitchen & Cabinetry',
    images: [
      R2 + '23%20-%20Tuttle%20Island%20(1)bb.JPG',
      R2 + 'D%20Amos%20Island%20(7).jpg',
      R2 + 'Elaine%20Alpert%20Counter%20Top%20(49).jpg',
    ],
    fullDesc: 'The Tuttle kitchen island was a statement piece commissioned to replace a standard cabinetry island that felt undersized and generic in a large open kitchen.\n\nThe new island is built from thick-slab reclaimed chestnut, with a top nearly three inches thick and an overhang generous enough to seat four. The base is a blend of reclaimed wood and custom metalwork — powder-coated steel legs that provide visual contrast and structural support for the heavy slab.\n\nThe client uses this island daily — for cooking, for homework, for entertaining. That durability was a core requirement, and the reclaimed chestnut delivers: dense, tight-grained, and harder than most new construction lumber. It will look better in thirty years than it does today.'
  },
  {
    id: 'accent-paneling',
    title: 'Accent Wall — Reclaimed Paneling',
    category: 'Accent Walls & Paneling',
    images: [
      R2 + 'Paneling%20(6).JPG',
      R2 + 'Paneling%20(1).JPG',
      R2 + 'Paneling%20(4)b.JPG',
    ],
    fullDesc: 'Accent wall installations are one of our most requested architectural services — a single wall of reclaimed wood can define an entire room and provide a visual anchor that no paint color or wallpaper can replicate.\n\nThis project involved selecting and installing boards with natural variation in color and grain, arranged to create a rhythm across the wall without feeling uniform. The saw marks, nail holes, and patina were preserved — cleaned but not removed. A light hand-applied oil finish sealed and enriched the wood without changing its character.\n\nThe installation took two days. The effect was immediate: what had been a plain background wall became the focal point of a living room that the owners describe as finally feeling finished.'
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
function showProductDetail(tableId, pushHistory = true) {
  const table = tables.find(t => t.id === tableId);
  if (!table) return;

  detailImages = table.images && table.images.length ? table.images : [table.image];
  detailIndex = 0;

  document.getElementById('detail-title').textContent = table.name;
  document.getElementById('detail-type').textContent = table.type;
  document.getElementById('detail-name').textContent = table.name;
  document.getElementById('detail-price').textContent = table.price;
  document.getElementById('detail-wood').textContent = table.wood.charAt(0).toUpperCase() + table.wood.slice(1);
  const fmtDim = v => /^\d/.test(v) ? v + '"' : v;
  document.getElementById('detail-length').textContent = fmtDim(table.length);
  document.getElementById('detail-width').textContent = fmtDim(table.width);
  document.getElementById('detail-style').textContent = table.style.charAt(0).toUpperCase() + table.style.slice(1);
  document.getElementById('detail-description').textContent = table.desc;

  const hasMultiple = detailImages.length > 1;
  document.getElementById('detail-prev').style.display = hasMultiple ? '' : 'none';
  document.getElementById('detail-next').style.display = hasMultiple ? '' : 'none';
  document.getElementById('detail-counter').textContent = hasMultiple ? '1 / ' + detailImages.length : '';
  document.getElementById('detail-main-image').src = detailImages[0];
  document.getElementById('detail-main-image').alt = table.name;

  window.currentProduct = table;

  if (pushHistory) {
    history.pushState({ page: 'shop' }, '', '#shop');
    history.pushState({ page: 'product', tableId }, '', '#product');
  }
  showPage('product');
}

function detailImageNav(dir) {
  if (!detailImages || detailImages.length < 2) return;
  detailIndex = (detailIndex + dir + detailImages.length) % detailImages.length;
  document.getElementById('detail-main-image').src = detailImages[detailIndex];
  document.getElementById('detail-counter').textContent = (detailIndex + 1) + ' / ' + detailImages.length;
}

function openLightbox() {
  const hasMultiple = detailImages.length > 1;
  document.getElementById('lightbox-img').src = detailImages[detailIndex];
  document.getElementById('lightbox-counter').textContent = hasMultiple ? (detailIndex + 1) + ' / ' + detailImages.length : '';
  document.getElementById('lb-prev').style.display = hasMultiple ? '' : 'none';
  document.getElementById('lb-next').style.display = hasMultiple ? '' : 'none';
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function closeLightboxOutside(e) {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
}

function lightboxNav(dir) {
  if (!detailImages || detailImages.length < 2) return;
  detailIndex = (detailIndex + dir + detailImages.length) % detailImages.length;
  document.getElementById('lightbox-img').src = detailImages[detailIndex];
  document.getElementById('detail-main-image').src = detailImages[detailIndex];
  document.getElementById('detail-counter').textContent = (detailIndex + 1) + ' / ' + detailImages.length;
  document.getElementById('lightbox-counter').textContent = (detailIndex + 1) + ' / ' + detailImages.length;
}

/* ─── TEAM MODAL ────────────────────────────────────────── */

function openTeamModal(memberId) {
  const m = teamMembers.find(t => t.id === memberId);
  if (!m) return;
  document.getElementById('team-modal-img').src  = m.photo;
  document.getElementById('team-modal-img').alt  = m.name;
  document.getElementById('team-modal-role').textContent = m.role;
  document.getElementById('team-modal-name').textContent = m.name;
  document.getElementById('team-modal-bio').innerHTML = m.bio.map(p => `<p>${p}</p>`).join('');
  document.getElementById('team-modal').style.display = 'flex';
}

function closeTeamModal() {
  document.getElementById('team-modal').style.display = 'none';
}

function closeTeamModalOutside(e) {
  if (e.target === document.getElementById('team-modal')) closeTeamModal();
}

/* ─── PORTFOLIO MODAL ───────────────────────────────────── */

function openPortfolioModal(projectId) {
  const proj = portfolioProjects.find(p => p.id === projectId);
  if (!proj) return;
  pmImages = proj.images;
  pmIndex  = 0;
  document.getElementById('pm-img').src = pmImages[0];
  document.getElementById('pm-img').alt = proj.title;
  document.getElementById('pm-category').textContent = proj.category;
  document.getElementById('pm-title').textContent     = proj.title;
  document.getElementById('pm-desc').innerHTML = proj.fullDesc.split('\n\n').map(p => `<p>${p}</p>`).join('');
  const multi = pmImages.length > 1;
  document.getElementById('pm-prev').style.display    = multi ? '' : 'none';
  document.getElementById('pm-next').style.display    = multi ? '' : 'none';
  document.getElementById('pm-counter').textContent   = multi ? '1 / ' + pmImages.length : '';
  document.getElementById('portfolio-modal').style.display = 'flex';
}

function closePortfolioModal() {
  document.getElementById('portfolio-modal').style.display = 'none';
}

function closePortfolioModalOutside(e) {
  if (e.target === document.getElementById('portfolio-modal')) closePortfolioModal();
}

function portfolioModalNav(dir) {
  if (!pmImages || pmImages.length < 2) return;
  pmIndex = (pmIndex + dir + pmImages.length) % pmImages.length;
  document.getElementById('pm-img').src = pmImages[pmIndex];
  document.getElementById('pm-counter').textContent = (pmIndex + 1) + ' / ' + pmImages.length;
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

function filterProducts(category, btn) {
  document.querySelectorAll('#category-filters .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeCategory = category;
  applyFilters();
}

function filterByLength(range, btn) {
  document.querySelectorAll('#length-filters .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeLength = range;
  applyFilters();
}

function applyFilters() {
  const cards = document.querySelectorAll('.product-card');
  let count = 0;

  cards.forEach(card => {
    const catMatch = activeCategory === 'all' || card.dataset.category === activeCategory;

    const len = parseFloat(card.dataset.length) || 0;
    let lenMatch = true;
    if (activeLength === 'small')  lenMatch = len > 0 && len < 70;
    else if (activeLength === 'medium') lenMatch = len >= 70 && len <= 84;
    else if (activeLength === 'large')  lenMatch = len >= 85 && len <= 96;
    else if (activeLength === 'xlarge') lenMatch = len >= 97;

    const match = catMatch && lenMatch;
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

window.addEventListener('popstate', e => {
  if (!e.state) return;
  if (e.state.page === 'product' && e.state.tableId != null) {
    showProductDetail(e.state.tableId, false);
  } else if (e.state.page) {
    showPage(e.state.page);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Generate shop grid
  const shopGrid = document.getElementById('shop-grid');
  if (shopGrid) {
    tables.forEach(table => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.dataset.wood = table.wood;
      card.dataset.category = table.category;
      card.dataset.length = parseFloat(table.length) || 0;
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

  // Arch photo grids: click any photo to open lightbox for that section
  document.querySelectorAll('.arch-photo-grid').forEach(grid => {
    grid.addEventListener('click', e => {
      const img = e.target.closest('img');
      if (!img) return;
      const imgs = Array.from(grid.querySelectorAll('img')).map(i => i.src);
      const idx  = imgs.indexOf(img.src);
      detailImages = imgs;
      detailIndex  = idx >= 0 ? idx : 0;
      openLightbox();
    });
  });

  // Close overlays with Escape key; arrow keys navigate open lightbox / portfolio modal
  document.addEventListener('keydown', e => {
    const lb   = document.getElementById('lightbox');
    const pm   = document.getElementById('portfolio-modal');
    const lbOpen = lb.style.display !== 'none';
    const pmOpen = pm.style.display !== 'none';
    if (e.key === 'Escape') {
      if (lbOpen) { closeLightbox(); return; }
      if (pmOpen) { closePortfolioModal(); return; }
      if (document.getElementById('team-modal').style.display !== 'none') { closeTeamModal(); return; }
      document.getElementById('modal-overlay').classList.remove('open');
    }
    if (lbOpen && e.key === 'ArrowLeft')  lightboxNav(-1);
    if (lbOpen && e.key === 'ArrowRight') lightboxNav(1);
    if (pmOpen && e.key === 'ArrowLeft')  portfolioModalNav(-1);
    if (pmOpen && e.key === 'ArrowRight') portfolioModalNav(1);
  });
});
