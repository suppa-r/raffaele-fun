const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const div = document.querySelector(".col-2");
const tree = document.querySelector(".tree");


navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");

    if (visibility === "false") {
        tree.style.display= "none";
        div.style.display = "none"; // Turn col-2 on
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
         div.style.display = "block";
        tree.style.display= "block"; // Turn col-2 off
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});