backButton = document.getElementById("back-button")

backButton.addEventListener("click", () => {
    window.location.href = "./main_interface.html"
})

const routes = ['twitter_interactions', 'twitter_interactions', 'twitter_comments', 'twitter_audience', 'twitter_audience', 'twitter_revenue']

dataTitles = document.querySelectorAll(".title")
for (let i = 0; i < dataTitles.length; i++) {
    dataTitles[i].addEventListener("click", () => {
        window.location.href = `./${routes[i]}.html`
    })
}

document.querySelector(".line-analysis-header").addEventListener("click", () => {
    window.location.href = "./twitter_interactions.html"
})

window.onload = () => {
    document.querySelectorAll(".pillar").forEach(q => {
        q.classList.add("active")
    })
}