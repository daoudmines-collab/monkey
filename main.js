// main.js — Beautifully balanced jungle animation 🌴🐒💚

// --- Configuration ---
const HEART_COUNT = 40;
const LEAF_COUNT = 26;
const MONKEY_COUNT = 20;
const MONKEY_IMAGES = ["banana_monkey.png", "thug_monkey.png", "cute_monkey.png"];
const LEAVES = ["🍃", "🌿", "🍀", "🌱"];

// --- Utility functions ---
const rand = (min, max) => Math.random() * (max - min) + min;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// --- Floating hearts ---
for (let i = 0; i < HEART_COUNT; i++) {
  const h = document.createElement("div");
  h.className = "heart" + (Math.random() < 0.35 ? " sparkle" : "");
  const size = rand(16, 42);
  h.style.left = rand(-5, 100) + "vw";
  h.style.fontSize = size + "px";
  h.style.animationDuration = rand(6, 14) + "s";
  h.style.animationDelay = rand(-8, 8) + "s";
  document.body.appendChild(h);
}

// --- Drifting leaves ---
for (let i = 0; i < LEAF_COUNT; i++) {
  const l = document.createElement("div");
  l.className = "leaf";
  l.textContent = pick(LEAVES);
  l.style.left = rand(-5, 105) + "vw";
  l.style.animationDuration = rand(10, 28) + "s";
  l.style.animationDelay = rand(-15, 10) + "s";
  document.body.appendChild(l);
}

// --- Evenly spread monkeys floating in the background ---
const columns = Math.ceil(Math.sqrt(MONKEY_COUNT));
const rows = Math.ceil(MONKEY_COUNT / columns);

for (let i = 0; i < MONKEY_COUNT; i++) {
  const m = document.createElement("img");
  m.src = pick(MONKEY_IMAGES);
  m.alt = "monkey";
  m.className = "monkey" + (Math.random() < 0.5 ? " flip" : "");

  // Calculate evenly distributed grid position
  const col = i % columns;
  const row = Math.floor(i / columns);
  const cellWidth = 100 / columns;
  const cellHeight = 100 / rows;

  const left = col * cellWidth + rand(5, cellWidth - 15);
  const top = row * cellHeight + rand(5, cellHeight - 15);

  m.style.left = left + "vw";
  m.style.top = top + "vh";
  m.style.animationDelay = rand(0, 6) + "s";
  m.style.zIndex = "1"; // behind text

  // Slight scale and rotation for variety
  m.style.transform +=
    " rotate(" + rand(-8, 8) + "deg) scale(" + rand(0.8, 1.3).toFixed(2) + ")";
  document.body.appendChild(m);
}

// --- Click to spawn hearts ---
document.addEventListener("click", (e) => {
  for (let j = 0; j < 5; j++) {
    const h = document.createElement("div");
    h.className = "heart sparkle";
    h.style.left = (e.clientX / window.innerWidth) * 100 + "vw";
    h.style.fontSize = rand(18, 36) + "px";
    h.style.animationDuration = rand(5, 9) + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 10000);
  }
});
