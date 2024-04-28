const immediate_btn = document.getElementById("immediate_btn");
const soon_btn = document.getElementById("soon_btn");

const immediate_block = document.querySelector(".immediate");
const soon_block = document.querySelector(".soon");

immediate_btn.addEventListener('click', function(event) {
    this.classList.add("select_active");
    soon_btn.classList.remove("select_active");

    if (immediate_block.classList.contains("d-none")) {
        immediate_block.classList.remove("d-none");
        soon_block.classList.add("d-none");
    }
});

soon_btn.addEventListener('click', function(event) {
    this.classList.add("select_active");
    immediate_btn.classList.remove("select_active");

    if (soon_block.classList.contains("d-none")) {
        soon_block.classList.remove("d-none");
        immediate_block.classList.add("d-none");
    }
});