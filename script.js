const section = document.getElementById("product-section");
const categoryLinks = document.querySelectorAll(".category-list li");
const bannerSection = document.getElementById("banner-section");

function renderCategory(category) {
  const products = PRODUCTS[category];
  if (!products) return;

  // Hide banners when a category is clicked
  bannerSection.style.display = "none";

  // Clear previous products
  section.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price}</p>
    `;
    section.appendChild(card);
  });

  section.scrollIntoView({ behavior: "smooth" });
}

// Click event for categories
categoryLinks.forEach(link => {
  link.addEventListener("click", () => {
    const category = link.dataset.category;
    renderCategory(category);
  });
});

