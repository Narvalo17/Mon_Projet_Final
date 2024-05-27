document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
    
    boxes.forEach(box => {
        box.addEventListener("click", () => {
            boxes.forEach(b => {
                b.classList.remove("active");
            });
            box.classList.add("active");
        });
    });
});
