const percentageCommentsDataSet = [
    0.6392,
    0.6274,
    0.5246,
    0.7478,
    0.8064,
    0.7346,
    0.7132
]

const dataSets = [
    {bigBar: 0.4743, mediumBar: 0.4716, smallBar: 0.0541},
    {bigBar: 0.4925, mediumBar: 0.4404, smallBar: 0.0671},
    {bigBar: 0.4924, mediumBar: 0.4301, smallBar: 0.0775},
    {bigBar: 0.4633, mediumBar: 0.5035, smallBar: 0.0332},
    {bigBar: 0.5041, mediumBar: 0.4338, smallBar: 0.0621},
    {bigBar: 0.4972, mediumBar: 0.4474, smallBar: 0.0554}
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
        query.textContent = `${Math.round(percentageCommentsDataSet[index] * 25000)}`
    })

    document.querySelectorAll(".pillar-group.active").forEach((query, index) => {
        bigData = query.querySelector(".pillar-big-data")
        bigData.style.height = `${dataSets[index].bigBar * 250}px`
        bigData.textContent = `${Math.round(dataSets[index].bigBar * 1000) / 10}%`
        mediumData = query.querySelector(".pillar-middle-data")
        mediumData.style.height = `${dataSets[index].mediumBar * 250}px`
        mediumData.textContent = `${Math.round(dataSets[index].mediumBar * 1000) / 10}%`
        smallData = query.querySelector(".pillar-small-data")
        smallData.style.height = `${dataSets[index].smallBar * 250}px`
        smallData.textContent = `${Math.round(dataSets[index].smallBar * 1000) / 10}%`
    })
}