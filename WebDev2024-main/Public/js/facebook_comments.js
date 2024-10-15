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
    {bigBar: 0.5443, smallBar: 0.0841},
    {bigBar: 0.6525, smallBar: 0.0871},
    {bigBar: 0.4324, smallBar: 0.0575},
    {bigBar: 0.5253, smallBar: 0.0632},
    {bigBar: 0.5561, smallBar: 0.0521},
    {bigBar: 0.6072, smallBar: 0.0754}
]

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
        bigData = query.querySelector(".pillar-big-data")
        bigData.style.height = `${dataSets[index].bigBar * 250}px`
        bigData.textContent = `${Math.round(dataSets[index].bigBar * 1000) / 10}K`
        smallData = query.querySelector(".pillar-small-data")
        smallData.style.height = `${dataSets[index].smallBar * 250}px`
        smallData.textContent = `${Math.round(dataSets[index].smallBar * 1000) / 10}K`
    })
}