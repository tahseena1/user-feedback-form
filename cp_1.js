document.addEventListener("DOMContentLoaded", function () {
    // Establishing the HTML elements in JavaScript file 
    const form = document.getElementById("user-input-form");
    const fields = form.querySelectorAll("input, textarea");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const commentBox = document.getElementById("comments");
    const characterCount = document.getElementById("character-count");
    const submitButton = document.getElementById("submit");
    const tooltip = document.getElementById("tooltip");
    const errorMessage = document.getElementById("error");
    const feedbackDisplay = document.getElementById("feedback-display");

    // Will count characters in the textbox as the user types; 
    // It will be displayed outside of the textbox
    form.addEventListener("input", function () {
        const count = commentBox.value.length;
        if (count === 1) {
            characterCount.textContent = `${count} character`;
        }
        else {characterCount.textContent = `${count} characters`};
    });

    // Displays tooltip text when mouse hovers over each field
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

    
    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        errorMessage.textContent = "";

        // If any of the necessary fields are empty, the error message will display 
        if (
            username.value.trim() === "" ||
            email.value.trim() === "" ||
            commentBox.value.trim() === ""
        ) {
            errorMessage.textContent = "One or more fields is missing. Please fill out all fields before submitting.";
            return;
        }

        // If all fields are filled out correctly, a message will return indicating successful submission 
        const submission = document.createElement("p");
        submission.textContent = `${username.value} (${email.value}) said: "${commentBox.value}"`

        feedbackDisplay.appendChild(submission);

        form.reset();
        characterCount.textContent = "0 characters";
    
    });

    // Stops any interactions from affecting factors outside of those mentioned in the code above
    form.addEventListener("click", function(e) {
        e.stopPropagation();
    })

})