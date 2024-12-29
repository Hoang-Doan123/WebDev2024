const facebookCard = document.querySelector('.facebook_card')

facebookCard.addEventListener('click', () => {
    window.location.href = "./facebook.html"
})

const dashboardTitle = document.querySelector('.dashboard_title')

dashboardTitle.addEventListener('click', () => {
    window.location.href = "./main_interface_2.html"
})

const igCard = document.querySelector('.instagram_card')

igCard.addEventListener('click', () => {
    window.location.href = "./ig.html"
})

const youtubeCard = document.querySelector('.youtube_card')

youtubeCard.addEventListener('click', () => {
    window.location.href = "./youtube.html"
})

const twitterCard = document.querySelector('.twitter_card')

twitterCard.addEventListener('click', () => {
    window.location.href = "./twitter.html"
})

document.getElementById('settingButton').addEventListener('click', function() {
    window.location.href = 'mainsetting.html';
});

const toggleSwitch = document.getElementById('backgroundToggle');
const backgroundVideo = document.getElementById('backgroundVideo');
const body = document.body;
const heading_container = document.querySelector('.heading_container');

// Store the original and new video sources
const originalVideoSrc = 'videos/dark.mp4';
const newVideoSrc = 'videos/white.mp4'; // Change this to your new video

const getTheme = localStorage.getItem("theme");
if (getTheme) {
    if (getTheme === "dark-mode") {
        body.classList.add("dark-mode")
        toggleSwitch.checked = true;
        backgroundVideo.src = newVideoSrc;
    } else if (getTheme === "light-mode") {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode")
        }
        toggleSwitch.checked = false;
        backgroundVideo.src = originalVideoSrc;
    }
}

toggleSwitch.addEventListener('change', function() {
    // Change the video source based on the toggle state
    if (this.checked) {
        backgroundVideo.src = newVideoSrc;
        body.classList.add('dark-mode'); // Add class for dark mode
        heading_container.classList.add('dark-mode'); // Change heading_container to dark mode
        heading_container.classList.remove('light-mode'); // Ensure light mode class is removed
        localStorage.setItem("theme", "dark-mode")
    } else {
        backgroundVideo.src = originalVideoSrc;
        body.classList.remove('dark-mode'); // Remove class for dark mode
        heading_container.classList.remove('dark-mode'); // Ensure dark mode class is removed
        heading_container.classList.add('light-mode'); // Change heading_container back to light mode
        localStorage.setItem("theme", "light-mode")
    }
    // Load the new video
    backgroundVideo.load();
    // Restart the video
    backgroundVideo.play();
});