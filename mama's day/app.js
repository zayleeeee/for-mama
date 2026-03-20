// floating hearts
(function spawnHearts() {
  const layer = document.querySelector(".hearts");
  if (!layer) return;

  function makeHeart() {
    const h = document.createElement("div");
    h.className = "heart";

    const left = Math.random() * 100;
    const size = 10 + Math.random() * 18;
    const dur = 7 + Math.random() * 8;
    const delay = Math.random() * 2.5;
    const alpha = 0.18 + Math.random() * 0.22;

    h.style.left = left + "vw";
    h.style.bottom = (-10 - Math.random() * 20) + "vh";
    h.style.width = size + "px";
    h.style.height = size + "px";
    h.style.animationDuration = dur + "s";
    h.style.animationDelay = delay + "s";
    h.style.background = `rgba(255, 0, 140, ${alpha})`;
    h.style.filter = `drop-shadow(0 10px 16px rgba(255, 66, 164, 0.15))`;

    layer.appendChild(h);
    setTimeout(() => h.remove(), (dur + delay + 1) * 1000);
  }

  for (let i = 0; i < 18; i++) makeHeart();

  setInterval(() => {
    const count = 1 + Math.floor(Math.random() * 2);
    for (let i = 0; i < count; i++) makeHeart();
  }, 650);
})();

// active nav
(function activeNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".pill").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
})();

// reasons generator
const reasons = [
  "Because you always put everyone before yourself.",
  "Because your heart is so big and pure.",
  "Because your smile can fix an entire bad day.",
  "Because you always find a way to get back up.",
  "Because your love feels like home.",
  "Because you make people feel safe.",
  "Because your kindness is unforgettable.",
  "Because you are strong in ways people don’t even understand.",
  "Because your happiness matters to me more than you know.",
  "Because you are not just a mother, but also a best friend.",
  "Because whenever someone says I’m like you, I feel proud.",
  "Because you inspire me every single day.",
  "Because your hugs fix things words can’t.",
  "Because you deserve every beautiful thing in this world.",
  "Because your love made me who I am.",
  "Because you are actually the best mom ever.",
  "Because your smile belongs on your face always.",
  "Because Allah gave me a mother, a sister, and a best friend all in one.",
  "Because the world feels softer with you in it.",
  "Because Samar Soboh is one of the most extraordinary people alive.",
  "Because even in your weakest moments, you still thought about us.",
  "Because you are my comfort person.",
  "Because no sadness ever suits you.",
  "Because your soul is genuinely beautiful.",
  "Because loving you is the easiest thing in the world.",
  "Because your tenderness is one of your greatest powers.",
  "Because you deserve the same love you give to everyone else.",
  "Because your existence is a blessing.",
  "Because I am the luckiest girl on earth to have you.",
  "Because no one will ever have a perfect mother like mine."
];

const reasonBtn = document.getElementById("reasonBtn");
const reasonOutput = document.getElementById("reasonOutput");

if (reasonBtn && reasonOutput) {
  reasonBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    reasonOutput.textContent = reasons[randomIndex];
  });
}

// open when buttons
function toggleMessage(id) {
  const message = document.getElementById(id);
  if (!message) return;

  if (message.style.display === "block") {
    message.style.display = "none";
  } else {
    message.style.display = "block";
  }
}