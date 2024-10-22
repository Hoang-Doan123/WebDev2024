const dataSets = [
    {bigBar: 0.5043, mediumBar: 0.4716},
    {bigBar: 0.3925, mediumBar: 0.4404},
    {bigBar: 0.6224, mediumBar: 0.4301},
    {bigBar: 0.7433, mediumBar: 0.5035},
    {bigBar: 0.6541, mediumBar: 0.4338},
    {bigBar: 0.7672, mediumBar: 0.4474},
    {bigBar: 0.7424, mediumBar: 0.4321}
]

window.onload = () => {
    document.querySelectorAll(".pillar-group").forEach((query, index) => {
        query.querySelector(".up-data").style.transform = `translateY(${-270 + dataSets[index].mediumBar * 250}px)`
        query.querySelector(".down-data").style.transform = `translateY(${-270 + dataSets[index].mediumBar * 250}px)`
    })

    document.querySelectorAll(".pillar-group").forEach((query, index) => {
        query.classList.add("active")
    })

    document.querySelectorAll(".pillar-group.active").forEach((query, index) => {
        upData = query.querySelector(".up-data")
        upData.style.height = `${dataSets[index].bigBar * 250}px`
        upData.textContent = `${Math.round(dataSets[index].bigBar * 1500)}`
        downData = query.querySelector(".down-data")
        downData.style.height = `${dataSets[index].mediumBar * 250}px`
        downData.textContent = `${Math.round(dataSets[index].mediumBar * 1500)}`
    })
}