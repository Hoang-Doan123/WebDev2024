backButton = document.getElementById("back-button")

backButton.addEventListener("click", () => {
    window.location.href = "/twitter"
})

window.onload = () => {
    document.querySelectorAll(".pillar").forEach(q => {
        q.classList.add("active")
    })
}