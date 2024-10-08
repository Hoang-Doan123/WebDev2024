backButton = document.getElementById("back-button")

backButton.addEventListener("click", () => {
    window.location.href = "/"
})

const routes = ['likes', 'reposts', 'comments', 'audience', 'audience', 'revenue']

dataTitles = document.querySelectorAll(".title")
for (let i = 0; i < dataTitles.length; i++) {
    dataTitles[i].addEventListener("click", () => {
        window.location.href = `/twitter/${routes[i]}`
    })
}

window.onload = () => {
    document.querySelectorAll(".pillar").forEach(q => {
        q.classList.add("active")
    })
}