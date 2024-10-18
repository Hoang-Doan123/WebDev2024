const backButton = document.getElementById("ig-back-button")

backButton.addEventListener("click", () => {
    window.location.href = "./main_interface.html"
})

const routes = ['facebook_interactions', 'facebook_interactions', 'facebook_comments', 'facebook_audience', 'facebook_audience', 'facebook_messages']

const dataTitles = document.querySelectorAll(".title")
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