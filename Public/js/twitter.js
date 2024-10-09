backButton = document.getElementById("back-button")

backButton.addEventListener("click", () => {
    window.location.href = "/"
})

const routes = ['interactions', 'interactions', 'comments', 'audience', 'audience', 'revenue']

dataTitles = document.querySelectorAll(".title")
for (let i = 0; i < dataTitles.length; i++) {
    dataTitles[i].addEventListener("click", () => {
        window.location.href = `./${routes[i]}.html`
    })
}

document.querySelector(".line-analysis-header").addEventListener("click", () => {
    window.location.href = "./interactions.html"
})

window.onload = () => {
    document.querySelectorAll(".pillar").forEach(q => {
        q.classList.add("active")
    })
}