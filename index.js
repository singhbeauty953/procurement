const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".feature-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

function showFeature(index) {
  document.querySelectorAll(".tab").forEach((t, i) => {
    t.classList.toggle("active", i === index);
  });
  document.querySelectorAll(".feature-content").forEach((c, i) => {
    c.classList.toggle("active", i === index);
  });
}
showFeature(0); // Show first feature by default

document.querySelectorAll('.open-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contactForm').style.display = 'block';
  });
});
