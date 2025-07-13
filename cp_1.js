document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("user-input-form");
const fields = form.querySelectorAll("input, textarea");
const username = document.getElementById("username");
const email = document.getElementById("email");
const commentBox = document.getElementById("comments");
const characterCount = document.getElementById("character-count");
const submitButton = document.getElementById("submit");

commentBox.addEventListener("input", function () {
    const count = commentBox.value.length;
    if (count === 1) {
        characterCount.textContent = `${count} character`;
    }
    else {characterCount.textContent = `${count} characters`};
});
});