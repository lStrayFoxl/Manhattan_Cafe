const immediate_btn = document.getElementById("immediate_btn");
const soon_btn = document.getElementById("soon_btn");

immediate_btn.addEventListener('click', function(event) {
    this.classList.add("select_active");
    soon_btn.classList.remove("select_active");
});

soon_btn.addEventListener('click', function(event) {
    this.classList.add("select_active");
    immediate_btn.classList.remove("select_active");
});