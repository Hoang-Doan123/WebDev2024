const percentageCommentsDataSet = [
    0.9490,
    0.6276,
    0.4238,
    0.7414,
    0.1462,
    0.7348,
    0.5032
]

const dataSets = [
    {bigBar: 0.6443, smallBar: 0.3441},
    {bigBar: 0.4525, smallBar: 0.1971},
    {bigBar: 0.2324, smallBar: 0.0575},
    {bigBar: 0.6253, smallBar: 0.2932},
    {bigBar: 0.5561, smallBar: 0.0521},
    {bigBar: 0.1072, smallBar: 0.0754}
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

const colorTheme = localStorage.getItem("theme");

if (colorTheme === "dark-mode") {
    document.body.classList.add("dark-mode");
} else if (colorTheme === "light-mode") {
    document.body.classList.remove("dark-mode");
}

document.getElementById("theme-toggle").addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light-mode");
    } else {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-mode");
    }
});