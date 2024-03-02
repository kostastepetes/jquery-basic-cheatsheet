document.addEventListener("DOMContentLoaded", function() {
    // Example 1: Selecting Elements
    var paragraphs = document.querySelectorAll("p"); // Selects all <p> elements
    var firstParagraph = document.getElementById("first-paragraph"); // Selects the element with id "first-paragraph"
    var paragraphsWithClass = document.querySelectorAll(".highlight"); // Selects all elements with class "highlight"

    // Example 2: Manipulating CSS
    var h1Elements = document.querySelectorAll("h1");
    h1Elements.forEach(function(element) {
        element.style.color = "blue"; // Sets the color of all <h1> elements to blue
    });
    var secondHeading = document.getElementById("second-heading");
    secondHeading.style.fontSize = "24px"; // Sets font size
    secondHeading.style.fontWeight = "bold"; // Sets font weight

    // Example 3: Manipulating Content
    document.getElementById("add-content").addEventListener("click", function() {
        var newParagraph = document.createElement("p");
        newParagraph.textContent = "New paragraph added!";
        document.getElementById("content").appendChild(newParagraph);
    });
    document.getElementById("replace-content").addEventListener("click", function() {
        document.getElementById("content").innerHTML = "<p>Content replaced!</p>";
    });

    // Additional content manipulation methods
    document.getElementById("remove-content").addEventListener("click", function() {
        document.getElementById("content").innerHTML = "";
    });
    document.getElementById("wrap-content").addEventListener("click", function() {
        var wrapperDiv = document.createElement("div");
        wrapperDiv.className = "wrapper";
        var contentElement = document.getElementById("content");
        contentElement.parentNode.insertBefore(wrapperDiv, contentElement);
        wrapperDiv.appendChild(contentElement);
    });
    document.getElementById("unwrap-content").addEventListener("click", function() {
        var wrapperDiv = document.querySelector("#content.wrapper");
        if (wrapperDiv) {
            var parentElement = wrapperDiv.parentNode;
            while (wrapperDiv.firstChild) {
                parentElement.insertBefore(wrapperDiv.firstChild, wrapperDiv);
            }
            parentElement.removeChild(wrapperDiv);
        }
    });
    document.getElementById("clone-content").addEventListener("click", function() {
        var contentElement = document.getElementById("content");
        var clonedContent = contentElement.cloneNode(true);
        contentElement.appendChild(clonedContent);
    });

    // Example 4: Event Handling
    document.getElementById("btn-click").addEventListener("click", function() {
        alert("Button clicked!");
    });
    document.querySelectorAll("input[type='text']").forEach(function(input) {
        input.addEventListener("keypress", function(event) {
            if (event.which === 13) {
                alert("Enter key pressed!");
            }
        });
    });

    // Additional event handling methods
    document.getElementById("hover-example").addEventListener("mouseover", function() {
        this.textContent = "Hovered!";
    });
    document.getElementById("hover-example").addEventListener("mouseout", function() {
        this.textContent = "Mouse Over Me!";
    });
    document.getElementById("focus-example").addEventListener("focus", function() {
        this.style.backgroundColor = "yellow";
    });
    document.getElementById("blur-example").addEventListener("blur", function() {
        this.style.backgroundColor = "white";
    });
    document.getElementById("change-example").addEventListener("change", function() {
        alert("Value changed!");
    });

    // Example 5: AJAX
    document.getElementById("load-data").addEventListener("click", function() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "data.txt", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById("data-container").textContent = xhr.responseText;
            } else if (xhr.readyState === 4) {
                document.getElementById("data-container").textContent = "Error loading data!";
            }
        };
        xhr.send();
    });

    // Example 7: Form Submission
    document.getElementById("my-form-post").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the default form submission

        var formData = new FormData(this); // Create FormData object from form

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "submit.php", true); // Replace "submit.php" with your actual form submission URL
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert("Form submitted successfully (POST)!");
            } else if (xhr.readyState === 4) {
                alert("Error submitting form (POST)!");
            }
        };
        xhr.send(formData);
    });

    document.getElementById("my-form-get").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the default form submission

        var formData = new FormData(this); // Create FormData object from form

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "submit.php?" + new URLSearchParams(formData).toString(), true); // Replace "submit.php" with your actual form submission URL
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert("Form submitted successfully (GET)!");
            } else if (xhr.readyState === 4) {
                alert("Error submitting form (GET)!");
            }
        };
        xhr.send();
    });
});
