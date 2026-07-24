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
    type: "Specialty Table · Poplar",
    wood: "poplar",
    length: "22 feet",
    width: "46",
    style: "Special Piece",
    price: "$30,000",
    desc: "This table might just qualify as the largest, or certainly one of the largest tables you will ever see. It is just under twenty-two feet long and forty-six inches wide and made of just two boards! The top is made from poplar boards from the floor of a very large barn. The boards used here are likely more than 200 years old. Although poplar is not usually regarded as a particularly attractive wood, age, wear, and patina have given these boards a rich honey-brown color and exceptional beauty. The base we made for this table creates an interesting contrast and juxtaposition of the very old wood top and the contemporary style of the base. There are numerous other options for the base and we would certainly entertain an alternative if you are interested in making a change.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/SP%201001%20Website/SP.1001.04.JPG",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/SP%201001%20Website/SP.1001.04.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/SP%201001%20Website/SP.1001.01.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/SP%201001%20Website/SP.1001.02.JPG",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/SP%201001%20Website/SP.1001.03.JPG",
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
    price: "SOLD",
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
    inStock: false, sold: true
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
    price: "SOLD",
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
    inStock: false, sold: true
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
    price: "SOLD",
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
    inStock: false, sold: true
  },
  {
    id: 22,
    name: "RO 3211",
    category: "ro",
    type: "Round Table · Marble",
    wood: "marble",
    length: "60\" diameter",
    width: "—",
    style: "Round",
    price: "$6,000",
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
    name: "RO 3280",
    category: "ro",
    type: "Racetrack · Pine",
    wood: "pine",
    length: "84",
    width: "42",
    style: "Racetrack",
    price: "$7,500",
    desc: "There is such a thing as happy mistakes. My customer ordered the wrong size. I got to make another table for her and keep this one. The table you see here is made from floorboards from a barn built in 1842. In my experience, there is nothing more beautiful than boards that have been walked on, and hence, we call them walked-upon floors. So, when you hear that term from me you will understand what I mean. Walked-upon can apply to a floor from a barn, or a house or even an early factory or commercial building. For us, \"early\" means something from about circa 1750 to around circa 1870 or so. Nearly everything we make is from materials from that span of that time. There is so much history and amazing stories related to that time period that it would take a year to just start to tell some of it but for now I will leave you with that comment as a little teaser. This table is a blend of two very different time periods. It is a racetrack table that is American in origin and came to us in the mid-1900's. It is married to a base that is French from the mid 1700's. I will let the pictures of the top tell their own story. I would be happy to have a chat with you about this table if you are so inclined.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RT%203079%20-%2084x42%20-%20Deep%20Brown%20Threasher/RT.3079.02.jpg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RT%203079%20-%2084x42%20-%20Deep%20Brown%20Threasher/RT.3079.02.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20RT%203079%20-%2084x42%20-%20Deep%20Brown%20Threasher/RT.3079.01.jpg",
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
    type: "Contemporary Table · Cherry",
    wood: "cherry",
    length: "96",
    width: "36",
    style: "Four Board",
    price: "$6,000",
    desc: "As you know, most everything we make is made from an antique material of one description or another. This table is a worthy exception. On a visit to a supplier of mine in Upstate New York near the Great Lakes, I was shown some large planks that had been used in the construction of a modern \"plank road\" to a saw mill. In colonial times, big thick planks were used to make solid surfaces to keep wagons from sinking into the mud. I had no idea anything like that still existed but they in fact do, at least in tiny quantities. Plank roads were common in colonial times but almost unheard of since asphalt came around. I do not think the planks were terribly old but they had such an unusual patina and character that I bought the few that were there. I used the planks to make a few tables and this is the last of the bunch. The table is all cherry with a simple tapered leg. There is no stain or color added to this one. What you see is the natural patina.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.010.jpeg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.010.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.01.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.02.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.03.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.04.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.05.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.06.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.07.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.08.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.09.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.011.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.012.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/CT%205010%20-%2096%20x%2036%20-%20Four%20Board/CT.5010.013.jpeg"
    ],
    inStock: true
  },
  {
    id: 26,
    name: "TR 4008",
    category: "tr",
    type: "Trestle Table · Pine",
    wood: "pine",
    length: "82",
    width: "38",
    style: "Four Board",
    price: "SOLD",
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
    inStock: false, sold: true
  },
  {
    id: 27,
    name: "TR 4013",
    category: "tr",
    type: "Trestle Table · Pine",
    wood: "pine",
    length: "96",
    width: "42",
    style: "Four Board",
    price: "$9,500",
    desc: "Pleasant surprises abound at The Handmade Table. When we select material for a table, we usually have a good sense of what it can become, but we never know its full potential until it comes out of finishing. Years of experience gives us a reliable idea of how a piece will turn out, yet the final story is not revealed until the last coat of finish is applied. This table was one of those surprises. I knew it would be good, but I did not fully anticipate just how striking it would become. The top is made from boards salvaged from an old grain bin, likely dating to around 1820–1840. The base is adapted from a design we first made many years ago when a customer brought us a photo of a table she had seen in a vineyard in France. She asked whether we could recreate it, including the base. We did, and that original table became the inspiration for many great tables over the years. The base has the kind of graceful curve and shape that only the French could come up with.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.010.jpeg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.010.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.02.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.01.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.03.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.04.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.05.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.06.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.07.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.08.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.09.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.011.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/TR%204013%20-%2096%20x%2042%20-%20Four%20board/TR.4096.012.jpeg"
    ],
    inStock: true
  },
  {
    id: 28,
    name: "CT 5605",
    category: "ct",
    type: "Contemporary Table · Cherry",
    wood: "cherry",
    length: "96",
    width: "36",
    style: "Light Cherry",
    price: "$7,000",
    desc: "When very old and very special wood selections are available to us where the shape and the scale of the pieces are too odd or too big for a table we will sometimes mill the pieces into something we can use in a more contemporary style piece of furniture. We don't do that very often but in this case the materials were very enticing so we broke our own rule and made this table with quite old timbers that we milled. The boards in the top came from very old barn beams, probably from the mid 1800's. The base was made from the rafters from the same barn. The table style is something of a mid century modern motif and a great match for very old but milled pieces. I hope you like this as much as I do.",
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
    type: "Contemporary Table · Oak",
    wood: "oak",
    length: "78",
    width: "36",
    style: "Dark Stained Oak",
    price: "$5,000",
    desc: "When very old and very special wood selections are available to us where the shape and the scale of the pieces are too odd or too big for a table we will sometimes mill the pieces into something we can use in a more contemporary style piece of furniture. We don't do that very often but in this case the materials were very enticing so we broke our own rule and made this table with quite old timbers that we milled. The boards in the top came from very old barn beams, probably from the mid 1800's. The base was made from the rafters from the same barn. The table style is something of a mid century modern motif and a great match for very old but milled pieces. I hope you like this as much as I do.",
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
    type: "Trestle Table · Pine",
    wood: "pine",
    length: "96",
    width: "42",
    style: "Thresher",
    price: "$11,000",
    desc: "Deep rich thresher farm table with turn-down base, 96 x 42. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TR%204101%20-%2096%20x%2042%20-%20Deep%20Rich%20Thresher%20-%20turn%20down/TR.4101.02.jpg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TR%204101%20-%2096%20x%2042%20-%20Deep%20Rich%20Thresher%20-%20turn%20down/TR.4101.02.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TR%204101%20-%2096%20x%2042%20-%20Deep%20Rich%20Thresher%20-%20turn%20down/TR.4101.01.jpg",
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
    price: "$2,500",
    desc: "Three board farm table, 65 x 27. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206089%20-%2065%20x%2027%20-%20Three%20Boards/FT.6089.015.jpeg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206089%20-%2065%20x%2027%20-%20Three%20Boards/FT.6089.015.jpeg",
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
    price: "$4,000",
    desc: "Chocolate brown threshing floor farm table, 60 x 42. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206092%20-%2060%20x%2042%20-%20Chocolate%20brown%20theshing%20floor/FT.6092.02.jpeg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206092%20-%2060%20x%2042%20-%20Chocolate%20brown%20theshing%20floor/FT.6092.02.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206092%20-%2060%20x%2042%20-%20Chocolate%20brown%20theshing%20floor/FT.6092.01.jpeg"
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
    price: "$5,000",
    desc: "Honey brown granary 3-board farm table, 64 x 40. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206094%20-%2064%20x%2040%20-%20Honey%20Brown%20Granary%203-board/FT.6094.02.jpeg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206094%20-%2064%20x%2040%20-%20Honey%20Brown%20Granary%203-board/FT.6094.02.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206094%20-%2064%20x%2040%20-%20Honey%20Brown%20Granary%203-board/FT.6094.01.jpeg",
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
    price: "$6,500",
    desc: "In the history of this country, there is one thing that EVERY home shared with every other. That singular thing was the farm table. Every house had at least one. It was the place where vegetables were chopped, meat cleaved and dough rolled into biscuits and bread and if there is one thing that represented the heart of everyday life, it was the table that was the one common item shared by all. The wealthy may have dined on expensive China and ate with fine linen napkins but somewhere, in the back of the house, was a farm table, looking much like the one in these photos. It is fitting that the materials for this table came from a very old grain bin. In my experience, its color, patina, and character are truly unique. The photos highlight the striking color contrast, of unknown origin, in the boards used for the top — an unusual feature that gives the table a distinctive look all its own.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206096%20-%2068.5%20x%2038%20-%20Light%20Granary%20Farm/FT.6096.03.jpeg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206096%20-%2068.5%20x%2038%20-%20Light%20Granary%20Farm/FT.6096.03.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206096%20-%2068.5%20x%2038%20-%20Light%20Granary%20Farm/FT.6096.01.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206096%20-%2068.5%20x%2038%20-%20Light%20Granary%20Farm/FT.6096.02.jpeg",
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
    price: "$7,500",
    desc: "Farm table, 100 x 38. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206099%20-%20100%20x%2038/FT.6099.014.jpeg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/FT%206099%20-%20100%20x%2038/FT.6099.014.jpeg",
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
    price: "$6,000",
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
    price: "$12,000",
    desc: "Colonial pine farm table, 100 x 28. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.04.jpg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.04.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.02.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.01.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20FT%206045%20-%20100%20x%2028%20-%20Colonial%20Pine-%20on%20hold%20for%20a%20reshoot/FT.6045.03.jpg",
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
    price: "SOLD",
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
    inStock: false, sold: true
  },
  {
    id: 39,
    name: "TT 7114",
    category: "tt",
    type: "Traditional Table · Pine",
    wood: "pine",
    length: "84",
    width: "33",
    style: "Threshing Floor",
    price: "$8,500",
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
    type: "Traditional Table · Pine",
    wood: "pine",
    length: "75",
    width: "36",
    style: "Thresher",
    price: "$6,000",
    desc: "Light thresher with round sawn marks, 75 x 36. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TT%207116%20-%2075X36%20-%20Light%20Thresher%20-%20Round%20Sawn%20Marks/TT.7116.03.jpg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TT%207116%20-%2075X36%20-%20Light%20Thresher%20-%20Round%20Sawn%20Marks/TT.7116.03.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TT%207116%20-%2075X36%20-%20Light%20Thresher%20-%20Round%20Sawn%20Marks/TT.7116.01.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20TT%207116%20-%2075X36%20-%20Light%20Thresher%20-%20Round%20Sawn%20Marks/TT.7116.02.jpg",
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
    price: "$7,000",
    desc: "This table features striking linear striations and a deep, rich ebony patina. Its dark coloration adds an elegant touch when paired with the right linens and plateware, which is why we classify it as an \"art\" table. We reserve that designation for pieces with distinctive characteristics that set them apart from anything else we have or have made. Capturing the true character of a table like this in a photograph is difficult, but I hope you can see enough to appreciate its underlying beauty. The species of wood we use in our studio spans the landscape of varieties. This table was made from an antique cypress, probably from the late 1800's, which came from the Philadelphia, PA area. As with almost everything we make what you see is the natural patina. There is no stain on this table. At the time this continent was settled by Europeans the cypress ranges stretched from the Mid Atlantic to Texas.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202020%20-%2075x35%20-%20Dark%20cypress/AT.2020.02.jpg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202020%20-%2075x35%20-%20Dark%20cypress/AT.2020.02.jpg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202020%20-%2075x35%20-%20Dark%20cypress/AT.2020.01.jpg",
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
    price: "SOLD",
    desc: "Dark cypress art table, 75 x 36. Description coming soon — contact us for full details on this piece.",
    image: "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202093%20-%2075%20X%2036%20-%20Dark%20Cypress/AT.2093.02.jpeg",
    images: [
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202093%20-%2075%20X%2036%20-%20Dark%20Cypress/AT.2093.02.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202093%20-%2075%20X%2036%20-%20Dark%20Cypress/AT.2093.01.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202093%20-%2075%20X%2036%20-%20Dark%20Cypress/AT.2093.03.jpeg",
      "https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Website%20AT%202093%20-%2075%20X%2036%20-%20Dark%20Cypress/AT.2093.04.jpeg"
    ],
    inStock: false, sold: true
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
    price: "$8,000",
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
    photo: 'https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Team%20Photos/David%20Howard.png',
    bio: [
      'David Grant Howard has spent over three decades perfecting the art of working with reclaimed pre-industrial wood. As founder of The Handmade Table, he built the business on a single principle: every piece of old-growth timber deserves to be transformed into something that will outlast another century.',
      'His technical mastery spans hand-planing, finishing, joinery, and structural design. But it\'s his instinct for reading wood — understanding its history, its grain, its character — that sets every piece apart. David selects each board personally, turning down material that doesn\'t meet his standard.',
      'When he\'s not in the workshop, he\'s sourcing timber from demolished barns, mills, and industrial sites across the Southeast — preserving history one board at a time.',
      'View his personal work at <a href="https://davidgranthoward.art" target="_blank" style="color:var(--oak);text-decoration:underline;">davidgranthoward.art</a>'
    ]
  },
  {
    id: 'robert',
    name: 'Robert',
    role: 'Finance & Customer Relations',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    bio: [
      'Robert manages the financial operations and customer relationships at The Handmade Table. He is often the first voice a client hears and the one who sees a transaction through from initial inquiry to final delivery.',
      'His background in finance gives the business the structure it needs to operate at a high level, while his people-first approach ensures that every client feels looked after throughout the process.',
      'Robert works closely with David and Daniel to keep projects on budget and on schedule, and takes pride in making sure the experience of buying a table is as good as the table itself.'
    ]
  },
  {
    id: 'antoine',
    name: 'Antoine',
    role: 'Joinery & Base Construction',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    bio: [
      'Antoine handles joinery and base construction for our tables and architectural pieces. He brings a steady, practiced hand to the work that holds everything together — the joints, the bases, and the structural connections that determine how a piece performs over time.',
      'His work tends to be the part of a table you never see, but you would notice immediately if it were not done right. Antoine takes that seriously.',
      'He builds the custom bases for our dining tables and works through the joinery on architectural installations, making sure every connection is clean, tight, and built to last.'
    ]
  },
  {
    id: 'bill',
    name: 'Bill',
    role: 'Finish Specialist',
    photo: 'https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Team%20Photos/Bill%20Gibson.png',
    bio: [
      'Bill is our finish specialist, responsible for the final stage of every piece that leaves the shop. His work is what the client sees and touches first — and he treats that responsibility seriously.',
      'He has spent years mastering the art of hand-applied finishes on antique wood, understanding how old-growth material absorbs and responds differently than anything new. Getting a finish right on a 200-year-old board requires patience, experience, and a careful eye.',
      'Bill\'s finishes protect the wood without masking it. The goal is always the same: to let the natural patina and character of the material speak for itself, preserved and enhanced rather than hidden.'
    ]
  },
  {
    id: 'billy',
    name: 'Billy',
    role: 'Flooring & Architectural Elements',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    bio: [
      'Billy leads our flooring and architectural elements work — from hand-planed reclaimed plank floors to custom staircases, accent walls, paneling, and bespoke woodwork installations throughout the home.',
      'His background spans both finish carpentry and large-scale site installation, which means he can take a project from raw material selection all the way through to a finished floor or wall without losing precision at any stage.',
      'Billy has installed reclaimed floors and architectural elements in homes across the region, and brings the same standard of craft to a ten-foot accent wall as to a full-home flooring project. If it involves wood going into a structure, Billy is the one doing it.'
    ]
  },
  {
    id: 'daniel',
    name: 'Daniel Butler',
    role: 'Operations & Design',
    photo: 'https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/Team%20Photos/Daniel%20Butler.jpeg',
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
    title: 'Kitchen',
    category: 'Kitchen & Cabinetry',
    images: [
      R2 + 'Watkins%20Kitchen%20(13).jpg',
      R2 + 'Kitchen%20(1).jpg',
      R2 + 'Cabinets%20(1).jpg',
    ],
    fullDesc: 'This is one of our most comprehensive residential kitchen installations. The client came to us wanting a kitchen that felt lived-in from day one — not new, not shiny, but warm and grounded in history.\n\nEvery cabinet face, drawer front, shelf, and countertop was milled from antique wood originally made between 1760 and 1880 — hand-crafted before factory production existed. What you see in the color and surface character is the natural patina of that wood. We use no stains. The look comes entirely from the material itself.\n\nThe countertops are fully sealed and impervious to water — they won\'t ring or stain, and even the undersides are finished. One of the most practical advantages of a wood top over stone or synthetic is that when it eventually shows wear, it can be refurbished to look exactly as it did the day it arrived. No messy polishing processes, no replacement — a simple, quick process brings it back completely.\n\nThe design was collaborative — we worked directly with the family over three months of material selection and detailed drawings before a single board was cut. The result is a kitchen that feels both completely functional and completely one-of-a-kind.'
  },
  {
    id: 'ted-green-stair',
    title: 'Staircase',
    category: 'Stairs & Staircases',
    images: [
      R2 + 'Ted%20Green%20Stair%20(12).jpg',
      R2 + 'Stair%20(1).JPG',
      R2 + 'Stair%20(4).jpg',
      R2 + 'Stair%20(8).jpg',
      R2 + 'Magee%20Stairs%20(2).jpg',
    ],
    fullDesc: 'This staircase was a full replacement of an original builder staircase — functional but characterless. The brief was simple: make it the first thing anyone notices when they walk through the front door.\n\nEvery tread was hand-planed from wide-plank reclaimed barn wood, with enough natural variation in tone and grain to give the staircase a sense of depth and age. The risers were finished in a complementary tone that plays against the warm wood without competing.\n\nCustom newel posts and balustrade were designed to work with the existing architectural proportions of the home. The finished staircase reads as if it has always been there — and that\'s exactly the effect we were after.'
  },
  {
    id: 'watkins-cabinets',
    title: 'Specialty Cabinetry',
    category: 'Kitchen & Cabinetry',
    images: [
      R2 + 'Watkins%20Specialty%20Cabinets%20(2).jpg',
      R2 + 'Reed.jpg',
      R2 + 'Rich%20Boyd%20Work%20Bench%20Island%20(3).jpg',
    ],
    fullDesc: 'Following the success of the main kitchen installation, we were commissioned to build a series of specialty built-ins for adjoining rooms — a bar cabinet, a library unit, and a media console.\n\nAll three were built from the same antique timber stock as the original kitchen — wood originally made by hand between 1760 and 1880, before the industrial era changed how materials were produced. The surface character, color, and grain you see is entirely natural patina. No stains are used on any of our pieces.\n\nEach piece was designed around its specific use: the bar cabinet with deep drawers and wine storage, the library unit with adjustable shelving and concealed wiring, the media console with ventilation built invisibly into the structure. All surfaces are fully sealed — impervious to water, easy to clean, and refurbishable for generations. This project is a good example of how a consistent antique material language, carried through an entire home, creates spaces that feel both unified and irreplaceable.'
  },
  {
    id: 'temple-interior',
    title: 'Interior Paneling',
    category: 'Accent Walls & Paneling',
    images: [
      R2 + 'Temple%20Interior%20(107)c.JPG',
      R2 + 'IMG_1874.JPG',
      R2 + 'IMG_1876.JPG',
    ],
    fullDesc: 'This project involved installing reclaimed wood paneling throughout a large interior space — covering walls, ceiling soffits, and architectural accents across multiple rooms.\n\nThe scale of the project required careful planning to ensure material consistency across a large volume of timber. We sourced the wood in stages, selecting boards that shared enough character to read as cohesive while retaining the natural variation that makes reclaimed wood compelling.\n\nInstallation was carried out over two weeks, with Bill leading a crew of three. Each board was hand-fitted to account for slight variations in the original framing. The finished space has a depth and warmth that painted drywall cannot achieve — a complete transformation of how the building feels from the inside.'
  },
  {
    id: 'tuttle-island',
    title: 'Kitchen Island',
    category: 'Kitchen & Cabinetry',
    images: [
      R2 + '23%20-%20Tuttle%20Island%20(1)bb.JPG',
      R2 + 'D%20Amos%20Island%20(7).jpg',
      R2 + 'Elaine%20Alpert%20Counter%20Top%20(49).jpg',
    ],
    fullDesc: 'This kitchen island was commissioned to replace a standard cabinetry island that felt undersized and generic in a large open kitchen. The new top is built from antique wood originally harvested and worked by hand between 1760 and 1880 — the color and surface character are entirely natural patina. No stains are used.\n\nThe slab runs nearly three inches thick with an overhang generous enough to seat four. It is completely sealed — impervious to water infiltration, will not ring or stain, and can withstand normal kitchen heat without issue. You clean it with soap and water. When it eventually shows the wear of daily life, it can be refurbished to look exactly as it did on day one — something no stone top or synthetic surface can offer.\n\nFor clients who want the ability to cut directly on the surface, we embed a removable oil-finished cutting board inset into the top. The island\'s base combines reclaimed wood with powder-coated steel legs for structural support and visual contrast. It will look better in thirty years than it does today.'
  },
  {
    id: 'accent-paneling',
    title: 'Accent Wall',
    category: 'Accent Walls & Paneling',
    images: [
      R2 + 'Paneling%20(6).JPG',
      R2 + 'Paneling%20(1).JPG',
      R2 + 'Paneling%20(4)b.JPG',
    ],
    fullDesc: 'Accent wall installations are one of our most requested architectural services — a single wall of reclaimed wood can define an entire room and provide a visual anchor that no paint color or wallpaper can replicate.\n\nThis project involved selecting and installing boards with natural variation in color and grain, arranged to create a rhythm across the wall without feeling uniform. The saw marks, nail holes, and patina were preserved — cleaned but not removed. A light hand-applied oil finish sealed and enriched the wood without changing its character.\n\nThe installation took two days. The effect was immediate: what had been a plain background wall became the focal point of a living room that the owners describe as finally feeling finished.'
  }
];

/* ═══ PORTFOLIO: TABLES — ART TABLE PHOTOS ═══════════════════ */
const ART_TABLE_R2 = 'https://pub-783c0f87e6f341c197ff7ad4188ba57e.r2.dev/PORTFOLIO_Tables_AT/';
const artTableImages = [
  'AT.01.jpg', 'AT.02.jpg', 'AT.03.jpg', 'AT.04.jpg', 'AT.07.jpg',
  'AT.010.JPG', 'AT.011.JPG', 'AT.012.jpg', 'AT.013.jpg', 'AT.014.jpg',
  'AT.015.jpg', 'AT.016.jpg', 'AT.017.jpg', 'AT.018.jpg', 'AT.019.jpg',
  'AT.021.jpg', 'AT.022.jpg', 'AT.023.JPG', 'AT.024.JPG', 'AT.025.JPG',
  'AT.026.JPG'
].map(name => ART_TABLE_R2 + name);

function renderArtTableGrid() {
  const grid = document.getElementById('art-table-grid');
  if (!grid || grid.childElementCount) return;
  grid.innerHTML = artTableImages.map((src, i) =>
    `<div class="portfolio-photo" onclick="openGalleryLightbox(artTableImages, ${i})">
      <img src="${src}" alt="Art Table" loading="lazy">
    </div>`
  ).join('');
}

/* ═══ PAGE NAVIGATION ═══════════════════════════════════════ */

/**
 * Switch between pages.
 * @param {string} page - Page ID: 'home', 'shop', 'arch', 'portfolio', 'team', 'contact', 'product'
 */
function toggleMobileNav() {
  document.getElementById('nav-links').classList.toggle('mobile-open');
  document.getElementById('nav-hamburger').classList.toggle('open');
}

function showShopSub(section, btn) {
  document.querySelectorAll('.shop-sub').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.shop-subnav-btn').forEach(b => b.classList.remove('active'));
  const sub = document.getElementById('shop-sub-' + section);
  if (sub) sub.classList.add('active');
  if (btn) {
    btn.classList.add('active');
  } else {
    const navBtn = document.getElementById('subnav-btn-' + section);
    if (navBtn) navBtn.classList.add('active');
  }
}

function showPage(page, anchorId) {
  document.getElementById('nav-links').classList.remove('mobile-open');
  document.getElementById('nav-hamburger').classList.remove('open');
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');

  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navMap = {
    home: 'nav-home',
    shop: 'nav-shop',
    portfolio: 'nav-portfolio',
    'portfolio-tables': 'nav-portfolio',
    'portfolio-tables-art': 'nav-portfolio',
    'portfolio-tables-contemporary': 'nav-portfolio',
    'portfolio-arch': 'nav-portfolio',
    'portfolio-kitchen': 'nav-portfolio',
    'portfolio-artistic': 'nav-portfolio',
    story: 'nav-story',
    team: 'nav-team',
    contact: 'nav-contact'
  };
  const navId = navMap[page];
  if (navId) document.getElementById(navId).classList.add('active');

  if (page === 'shop') showShopSub('tables');
  if (page === 'portfolio-tables-art') renderArtTableGrid();

  const anchor = anchorId && document.getElementById(anchorId);
  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
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
  const fmtDim = v => /^\d/.test(v) && !/"/.test(v) && !/feet|ft/i.test(v) ? v + '"' : v;
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
  document.getElementById('detail-inquire').style.display = table.sold ? 'none' : '';

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

let lightboxMode = 'detail';
let galleryImages = [];
let galleryIndex = 0;

function openLightbox() {
  lightboxMode = 'detail';
  const hasMultiple = detailImages.length > 1;
  document.getElementById('lightbox-img').src = detailImages[detailIndex];
  document.getElementById('lightbox-counter').textContent = hasMultiple ? (detailIndex + 1) + ' / ' + detailImages.length : '';
  document.getElementById('lb-prev').style.display = hasMultiple ? '' : 'none';
  document.getElementById('lb-next').style.display = hasMultiple ? '' : 'none';
  document.getElementById('lightbox').style.display = 'flex';
}

function openGalleryLightbox(images, index) {
  lightboxMode = 'gallery';
  galleryImages = images;
  galleryIndex = index || 0;
  const hasMultiple = galleryImages.length > 1;
  document.getElementById('lightbox-img').src = galleryImages[galleryIndex];
  document.getElementById('lightbox-counter').textContent = hasMultiple ? (galleryIndex + 1) + ' / ' + galleryImages.length : '';
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
  if (lightboxMode === 'gallery') {
    if (!galleryImages || galleryImages.length < 2) return;
    galleryIndex = (galleryIndex + dir + galleryImages.length) % galleryImages.length;
    document.getElementById('lightbox-img').src = galleryImages[galleryIndex];
    document.getElementById('lightbox-counter').textContent = (galleryIndex + 1) + ' / ' + galleryImages.length;
    return;
  }
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
const WEB3FORMS_KEY = '4d6d7b45-e0c3-47bd-b820-258965e1ffaf';

function openModal(name, price) {
  document.getElementById('modal-name').textContent = name;
  document.getElementById('modal-price').textContent = price;
  document.getElementById('modal-hidden-subject').value = 'Table Inquiry: ' + name + ' — ' + price;
  document.getElementById('modal-success').style.display = 'none';
  const btn = document.getElementById('modal-submit-btn');
  btn.textContent = 'Send Inquiry';
  btn.disabled = false;
  document.getElementById('modal-form').reset();
  document.getElementById('modal-hidden-subject').value = 'Table Inquiry: ' + name + ' — ' + price;
  document.getElementById('modal-overlay').classList.add('open');
}

async function submitInquiry(e) {
  e.preventDefault();
  const btn = document.getElementById('modal-submit-btn');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  try {
    const formData = new FormData(e.target);
    formData.append('access_key', WEB3FORMS_KEY);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    if (response.ok) {
      document.getElementById('modal-success').style.display = 'block';
      e.target.reset();
      document.getElementById('modal-hidden-subject').value = document.getElementById('modal-name').textContent;
    } else {
      btn.textContent = 'Send Inquiry';
      btn.disabled = false;
      alert('Error: ' + (data.message || 'Unknown error'));
    }
  } catch (err) {
    btn.textContent = 'Send Inquiry';
    btn.disabled = false;
    alert('Network error: ' + err.message);
  }
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
async function handleContactSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contact-form');
  const btn = form.querySelector('[type="submit"]');
  const origLabel = btn.textContent;
  btn.textContent = 'Sending…';
  btn.disabled = true;
  try {
    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_KEY);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    if (response.ok) {
      btn.textContent = 'Message Sent!';
      form.reset();
      setTimeout(() => { btn.textContent = origLabel; btn.disabled = false; }, 4000);
    } else {
      btn.textContent = origLabel;
      btn.disabled = false;
      alert('Error: ' + (data.message || 'Unknown error'));
    }
  } catch (err) {
    btn.textContent = origLabel;
    btn.disabled = false;
    alert('Network error: ' + err.message);
  }
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

function buildShortDesc(table) {
  if (table.length === '—') return '';
  if (table.width === '—') return table.length;
  const lStr = /feet|ft/i.test(table.length) ? table.length : `${table.length}"`;
  return `${lStr} × ${table.width}"`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Generate shop grid
  const shopGrid = document.getElementById('shop-grid');
  if (shopGrid) {
    const sortedTables = [...tables].sort((a, b) => (a.sold ? 1 : 0) - (b.sold ? 1 : 0));
    sortedTables.forEach(table => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.dataset.wood = table.wood;
      card.dataset.category = table.category;
      card.dataset.length = parseFloat(table.length) || 0;
      card.style.cursor = 'pointer';
      card.innerHTML = `
        <div class="product-img">
          <img src="${table.image}" alt="${table.name}">
          ${table.sold ? '<span class="product-badge product-badge-sold">Sold</span>' : table.inStock ? '<span class="product-badge">In Stock</span>' : ''}
        </div>
        <div class="product-info">
          <p class="product-type">${table.type}</p>
          <h3 class="product-name">${table.name}</h3>
          <p class="product-desc">${buildShortDesc(table)}</p>
          <div class="product-footer">
            <div class="product-price">${table.price}</div>
            ${table.sold ? '' : `<button class="add-btn" onclick="event.stopPropagation(); openModal('${table.name}','${table.price}','${table.desc} • Wood: ${table.wood.charAt(0).toUpperCase() + table.wood.slice(1)} • Dimensions: ${table.length}&quot; \xd7 ${table.width}&quot; ')">Inquire</button>`}
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
