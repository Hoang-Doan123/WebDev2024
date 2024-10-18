backButton = document.getElementById("back-button")

backButton.addEventListener("click", () => {
    window.location.href = "./main_interface.html"
})

const routes = ['ig_interactions', 'ig_interactions', 'ig_comments', 'ig_audience', 'ig_audience', 'ig_messages' , 'ig_pagelike']

dataTitles = document.querySelectorAll(".title")
for (let i = 0; i < dataTitles.length; i++) {
    dataTitles[i].addEventListener("click", () => {
        window.location.href = `./${routes[i]}.html`
    })
}

document.querySelector(".line-analysis-header").addEventListener("click", () => {
    window.location.href = "./ig_interactions.html"
})

window.onload = () => {
    document.querySelectorAll(".pillar").forEach(q => {
        q.classList.add("active")
    })
}