document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("user-input-form");
    const fields = form.querySelectorAll("input, textarea");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const commentBox = document.getElementById("comments");
    const characterCount = document.getElementById("character-count");
    const submitButton = document.getElementById("submit");
    const tooltip = document.getElementById("tooltip");

    commentBox.addEventListener("input", function () {
        const count = commentBox.value.length;
        if (count === 1) {
            characterCount.textContent = `${count} character`;
        }
        else {characterCount.textContent = `${count} characters`};
    });

    form.addEventListener("mouseover", function (e) {
        const target = e.target;
        if (!target.matches("input, textarea")) return;

        const tip = target.getAttribute("data-tooltip");
        if (tip) {
            tooltip.textContent = tip;
            tooltip.style.display = "block";
        }
  });

    form.addEventListener("mouseout", function (e) {
        if (e.target.matches("input, textarea")) {
            tooltip.style.display = "none";
        }
  });

    form.addEventListener("mousemove", function (e) {
        if (e.target.matches("input, textarea")) {
            tooltip.style.top = `${e.pageY + 10}px`;
            tooltip.style.left = `${e.pageX + 10}px`;
        }
    });
});

