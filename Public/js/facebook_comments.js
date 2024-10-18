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
    {bigBar: 0.54, smallBar: 0.08},
    {bigBar: 0.65, smallBar: 0.08},
    {bigBar: 0.43, smallBar: 0.05},
    {bigBar: 0.52, smallBar: 0.06},
    {bigBar: 0.55, smallBar: 0.05},
    {bigBar: 0.60, smallBar: 0.07}
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
        query.textContent = `${Math.round(percentageCommentsDataSet[index] * 25)}`
    })

    document.querySelectorAll(".pillar-group.active").forEach((query, index) => {
        bigData = query.querySelector(".pillar-big-data")
        bigData.style.height = `${dataSets[index].bigBar * 250}px`
        bigData.textContent = `${Math.round(dataSets[index].bigBar * 1000) / 10}`
        smallData = query.querySelector(".pillar-small-data")
        smallData.style.height = `${dataSets[index].smallBar * 250}px`
        smallData.textContent = `${Math.round(dataSets[index].smallBar * 1000) / 10}`
    })
}