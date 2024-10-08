const percentageCommentsDataSet = [
    0.5490,
    0.6276,
    0.4238,
    0.7414,
    0.8462,
    0.7348,
    0.6932
]

const dataSets = [
    {bigBar: 0.7843, smallBar: 0.1241},
    {bigBar: 0.6425, smallBar: 0.0871},
    {bigBar: 0.7424, smallBar: 0.1975},
    {bigBar: 0.6253, smallBar: 0.1632},
    {bigBar: 0.7561, smallBar: 0.1321},
    {bigBar: 0.6472, smallBar: 0.1540}
]

backButton = document.getElementById("back-button")

backButton.addEventListener("click", () => {
    window.location.href = "/twitter"
})

window.onload = () => {
    document.querySelectorAll(".pillar").forEach(q => {
        q.classList.add("active")
    })

    document.querySelectorAll(".pillar-group").forEach(q => {
        q.classList.add("active")
    })

    document.querySelectorAll(".pillar.active").forEach((query, index) => {
        query.style.height = `${percentageCommentsDataSet[index] * 250}px`
        query.textContent = `${Math.round(percentageCommentsDataSet[index] * 2500)}`
    })

    document.querySelectorAll(".pillar-group.active").forEach((query, index) => {
        console.log(query)
        query.querySelector(".pillar-big-data").style.height = `${dataSets[index].bigBar * 250}px`
        query.querySelector(".pillar-small-data").style.height = `${dataSets[index].smallBar * 250}px`
    })
}