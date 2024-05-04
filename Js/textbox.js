document.addEventListener("DOMContentLoaded", function() {
    var now = new Date();
    var hour = now.getHours();

    var greeting = "";

    if (hour >= 5 && hour < 12) {
        greeting = "Good morning ! May you have a good day?";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good afternoon! ";
    } else {
        greeting = "Good evening! How was your day?";
    }

    // Display the greeting message
    var messageContainer = document.getElementById("greeting-message");
    if (messageContainer) {
        messageContainer.textContent = greeting;
    }
});
