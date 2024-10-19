// const increaseBtn = document.getElementById("increase-btn")
// const decreaseBtn = document.getElementById("decrease-btn")
// const fontSizeValue = document.getElementById("font-size-value")
const animationToggle = document.getElementById("backgroundToggle")

const lightBackground = "../videos/dark_tech.mp4"
const darkBackground = "../videos/white_tech.mp4"
const backgroundVideo = document.getElementById("backgroundVideo")

document.querySelector('.home_btn').addEventListener('click', function() {
    window.location.href = 'main_interface.html';
});

const theme = localStorage.getItem("theme")
if (theme) {
    if (theme === "dark-mode") {
        if (!document.body.classList.contains("dark-mode")) {
            document.body.classList.add("dark-mode")
        }
        backgroundVideo.src = darkBackground

    } else if (theme === "light-mode") {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode")
        }
        backgroundVideo.src = lightBackground
    }
}

// const generalFont = localStorage.getItem("dashboard_fontsize")
// if (generalFont != null) {
//     fontSizeValue.textContent = generalFont
// }

const hasAnimation = localStorage.getItem("dashboard_animation")
if (hasAnimation != null) {
    if (hasAnimation === "true") {
        animationToggle.checked = true
    } else {
        if (animationToggle.checked) {
            animationToggle.checked = false
        }
    }
}

// increaseBtn.addEventListener("click", () => {
//     let fontValue = parseInt(fontSizeValue.textContent)
//     if (fontValue < 70) fontValue += 10
//     fontSizeValue.textContent = fontValue
//     localStorage.setItem("dashboard_fontsize", fontValue.toString())
// })

// decreaseBtn.addEventListener("click", () => {
//     let fontValue = parseInt(fontSizeValue.textContent)
//     if (fontValue > 30) fontValue -= 10
//     fontSizeValue.textContent = fontValue
//     localStorage.setItem("dashboard_fontsize", fontValue.toString())
// })

animationToggle.addEventListener("change", () => {
    if (animationToggle.checked) {
        localStorage.setItem("dashboard_animation", "true")
    } else {
        localStorage.setItem("dashboard_animation", "false")
    }
    console.log(localStorage.getItem("dashboard_animation"))
})

function showYourChoice() {
    document.querySelector('.your-choice-section').style.display = 'block';
}