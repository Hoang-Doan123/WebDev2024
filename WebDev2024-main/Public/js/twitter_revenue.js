import DrawLineChart, {
    START_X,
    randomNumberArray
} from "./index.js"

const colorTheme = localStorage.getItem("theme")

if (colorTheme === "dark-mode") {
    document.body.classList.add("dark-mode")
} else if (colorTheme === "light-mode") {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode")
    }
}

const lineChart = document.getElementById("line-chart")
const ctx = lineChart.getContext("2d")

const dlc = new DrawLineChart(
    ctx,
    ["$"],
    [15],
    [START_X - 25],
    ['rgb(33, 102, 51)'],
    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    "K",
    localStorage.getItem("theme") === "dark-mode" ? "dark-mode" : "light-mode",
    [...randomNumberArray(32, 40, 170), 153]
)

dlc.draw();

document.querySelectorAll(".line-separation").forEach((query, index)=>{
    query.style.top = `${60 + index * 50}px`
})

document.querySelectorAll(".line-value").forEach((query, index)=>{
    const elementText = query.textContent;
    if (elementText.length === 4) {
        query.style.left = `18px`;
    } else if (elementText.length === 3) {
        query.style.left = '28px';
    } else {
        query.style.left = '46px';
    }
    query.style.top = `${52 + index * 50}px`
})

const root = document.documentElement

document.querySelectorAll(".text").forEach((query, index) => {
    const linePadding = getComputedStyle(root).getPropertyValue("--line-padding")
    console.log(linePadding)
    const gap = getComputedStyle(root).getPropertyValue("--double-pillar-gap")
    const width = getComputedStyle(root).getPropertyValue("--double-pillar-width")
    query.style.left = `${parseInt(linePadding) + 25 + (parseInt(gap) + parseInt(width)) * index}px`
})