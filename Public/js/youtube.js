backButton = document.getElementById("back-button")

backButton.addEventListener("click", () => {
    window.location.href = "./main_interface.html"
})

const routes = ['youtube_interactions', 'youtube_interactions', 'youtube_comments', 'youtube_audience', 'youtube_audience', 'youtube_video']

dataTitles = document.querySelectorAll(".title")
for (let i = 0; i < dataTitles.length; i++) {
    dataTitles[i].addEventListener("click", () => {
        window.location.href = `./${routes[i]}.html`
    })
}

document.querySelector(".line-analysis-header").addEventListener("click", () => {
    window.location.href = "./youtube_interactions.html"
})

window.onload = () => {
    document.querySelectorAll(".pillar").forEach(q => {
        q.classList.add("active")
    })
}