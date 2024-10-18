backButton = document.getElementById("back-button")

backButton.addEventListener("click", () => {
    window.location.href = "./main_interface.html"
})

const routes = ['facebook_interactions', 'facebook_interactions', 'facebook_comments', 'facebook_audience', 'facebook_audience', 'facebook_messages']

dataTitles = document.querySelectorAll(".title")
for (let i = 0; i < dataTitles.length; i++) {
    dataTitles[i].addEventListener("click", () => {
        window.location.href = `./${routes[i]}.html`
    })
}

document.querySelector(".line-analysis-header").addEventListener("click", () => {
    window.location.href = "./facebook_interactions.html"
})

window.onload = () => {
    document.querySelectorAll(".pillar").forEach(q => {
        q.classList.add("active")
    })
}

const colorTheme = localStorage.getItem("theme");

if (colorTheme === "dark-mode") {
    document.body.classList.add("dark-mode");
} else if (colorTheme === "light-mode") {
    document.body.classList.remove("dark-mode");
}

document.getElementById("theme-toggle").addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light-mode");
    } else {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-mode");
    }
});