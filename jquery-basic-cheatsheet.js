$(document).ready(function() {
    // Example 1: Selecting Elements
    var paragraphs = $("p"); // Selects all <p> elements
    var firstParagraph = $("#first-paragraph"); // Selects the element with id "first-paragraph"
    var paragraphsWithClass = $(".highlight"); // Selects all elements with class "highlight"

    // Example 2: Manipulating CSS
    $("h1").css("color", "blue"); // Sets the color of all <h1> elements to blue
    $("#second-heading").css({ // Sets the CSS properties of the element with id "second-heading"
        "font-size": "24px",
        "font-weight": "bold"
    });

    // Example 3: Manipulating Content
    // Appends a new paragraph to the element with id "content"
    $("#add-content").click(function() {
        $("#content").append("<p>New paragraph added!</p>");
    });
    // Replaces the content of the element with id "content"
    $("#replace-content").click(function() {
        $("#content").html("<p>Content replaced!</p>");
    });

    // Getting text content
    $("#demo").click(function() {
        $(this).text();
    });
    
    // Getting field value
    $("#demo").click(function() {
        $(this).val();
    });
    
    // Setting HTML content
    $("#demo").click(function() {
        $(this).html('Hey <em>yo</em>');
    });
    
    // Getting an attribute
    $("#link").click(function() {
        $(this).attr("href");
    });
    
    // Setting an attribute
    $("#link").click(function() {
        $(this).attr("href", 'https://html6.com');
    });
    
    // Setting multiple attributes
    $("#link").click(function() {
        $(this).attr({
            "href": "https://html6.com",
            "title": "HTML Editor"
        });
    });
    
    // Using a callback function to get and change the attribute
    $("#link").click(function() {
        $(this).attr("href", function(i, origValue) {
            return origValue + "/help";
        });
    });
    
    // Adding content at the beginning in the selected elements
    $(".demo").click(function() {
        $(this).prepend("Yo!");
    });
    
    // Adding content at the end in the selected elements
    $(".demo").click(function() {
        $(this).append("<em>Hey!</em>");
    });
    
    // Adding content before the selected elements
    $(".demo").click(function() {
        $(this).before("Cheers");
    });
    
    // Adding content after the selected elements
    $(".demo").click(function() {
        $(this).after("<em>Peace</em>");
    });
    
    // Removing the selected element
    $("#demo").click(function() {
        $(this).remove();
    });
    
    // Removing children
    $("#demo").click(function() {
        $(this).empty();
    });
    
    // Removing divs with the listed classes
    $("div").click(function() {
        $(this).remove(".cl1, .cl2");
    });
    
    // Adding a class
    $("#demo").click(function() {
        $(this).addClass("big red");
    });
    
    // Removing a class
    $("h1, p").click(function() {
        $(this).removeClass("red");
    });
    
    // Toggling between adding and removing a class
    $("#demo").click(function() {
        $(this).toggleClass("big");
    });


    // Additional content manipulation methods
    $("#remove-content").click(function() { // Empties the content of the element with id "content"
        $("#content").empty();
    });
    $("#wrap-content").click(function() { // Wraps the content of the element with id "content" with a <div> element
        $("#content").wrap("<div class='wrapper'></div>");
    });
    $("#unwrap-content").click(function() { // Unwraps the content of the element with id "content"
        $("#content").unwrap();
    });
    $("#clone-content").click(function() { // Clones the content of the element with id "content" and appends it to itself
        $("#content").clone().appendTo("#content");
    });

    // Example 4: Event Handling
    $("#btn-click").click(function() { // Alerts when the button with id "btn-click" is clicked
        alert("Button clicked!");
    });
    $("input[type='text']").keypress(function(event) { // Alerts when Enter key is pressed in any text input field
        if (event.which === 13) {
            alert("Enter key pressed!");
        }
    });

    // Additional event handling methods
    $("#hover-example").hover( // Changes text on hover over the element with id "hover-example"
        function() {
            $(this).text("Hovered!");
        },
        function() {
            $(this).text("Mouse Over Me!");
        }
    );
    $("#focus-example").focus(function() { // Changes background color when the element with id "focus-example" is focused
        $(this).css("background-color", "yellow");
    });
    $("#blur-example").blur(function() { // Changes background color when the element with id "blur-example" loses focus
        $(this).css("background-color", "white");
    });
    $("#change-example").change(function() { // Alerts when the value of the element with id "change-example" changes
        alert("Value changed!");
    });

    // Example 5: AJAX
    $("#load-data").click(function() { // Loads data from "data.txt" file and displays it in #data-container
        $.ajax({
            url: "data.txt",
            success: function(data) {
                $("#data-container").text(data);
            },
            error: function() {
                $("#data-container").text("Error loading data!");
            }
        });
    });

    // Example 6: Effects
    $("#hide-text").click(function() { // Hides the element with id "text-to-hide"
        $("#text-to-hide").hide();
    });
    $("#show-text").click(function() { // Shows the element with id "text-to-hide"
        $("#text-to-hide").show();
    });

    // Additional effect methods
    $("#fade-in").click(function() { // Fades in the element with id "text-to-fade"
        $("#text-to-fade").fadeIn();
    });
    $("#fade-out").click(function() { // Fades out the element with id "text-to-fade"
        $("#text-to-fade").fadeOut();
    });
    $("#slide-up").click(function() { // Slides up the element with id "text-to-slide"
        $("#text-to-slide").slideUp();
    });
    $("#slide-down").click(function() { // Slides down the element with id "text-to-slide"
        $("#text-to-slide").slideDown();
    });
    $("#toggle-effect").click(function() { // Toggles the visibility of the element with id "text-to-toggle"
        $("#text-to-toggle").toggle();
    });
    $("#fade-to").click(function() { // Fades the element with id "text-to-fade" to a specified opacity
        $("#text-to-fade").fadeTo("slow", 0.5);
    });

    // Example 7: Form Submission - POST
    $("#my-form-post").submit(function(event) { // Submits form data using POST method
        event.preventDefault(); // Prevents the default form submission

        var formData = $(this).serialize(); // Serializes form data

        $.ajax({
            type: "POST",
            url: "submit.php", // Replace "submit.php" with your actual form submission URL
            data: formData,
            success: function(response) {
                // Handles successful form submission
                alert("Form submitted successfully (POST)!");
            },
            error: function() {
                // Handles errors during form submission
                alert("Error submitting form (POST)!");
            }
        });
    });

    // Example 7: Form Submission - GET
    $("#my-form-get").submit(function(event) { // Submits form data using GET method
        event.preventDefault(); // Prevents the default form submission

        var formData = $(this).serialize(); // Serializes form data

        $.ajax({
            type: "GET",
            url: "submit.php", // Replace "submit.php" with your actual form submission URL
            data: formData,
            success: function(response) {
                // Handles successful form submission
                alert("Form submitted successfully (GET)!");
            },
            error: function() {
                // Handles errors during form submission
                alert("Error submitting form (GET)!");
            }
        });
    });
});
