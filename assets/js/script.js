const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".global-nav");

if (toggle) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

document.querySelectorAll(".global-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});


// Open selected related basketball association website in a new tab.
const externalSiteSelect = document.querySelector("#external-site-select");
const externalSiteOpen = document.querySelector("#external-site-open");
if (externalSiteSelect && externalSiteOpen) {
  externalSiteOpen.addEventListener("click", () => {
    const url = externalSiteSelect.value;
    if (!url) {
      alert("アクセス先のホームページを選択してください。");
      externalSiteSelect.focus();
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  });
}
