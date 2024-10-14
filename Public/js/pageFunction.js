// Function to add click event for a button
function addBackButtonEvent(buttonId, redirectUrl) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener("click", () => {
            window.location.href = redirectUrl;
        });
    }
}

// Adding events for each button
addBackButtonEvent("facebook-back-button", "./facebook.html");
addBackButtonEvent("ig-back-button", "./ig.html");
addBackButtonEvent("youtube-back-button", "./youtube.html");
addBackButtonEvent("twitter-back-button", "./twitter.html");