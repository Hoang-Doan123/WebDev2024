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

const FONT_SIZE = parseInt(localStorage.getItem("dashboard_fontsize") ? localStorage.getItem("dashboard_fontsize") : 50) / 5 + 10

const containWords = [
    document.querySelector(".line-analysis-header"),
    document.querySelector(".circle-chart-header"),
    document.querySelector(".pillar-chart-header")
]

containWords.forEach((element) => {
    element.style.fontSize = `${FONT_SIZE}px`
})

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
    const gap = getComputedStyle(root).getPropertyValue("--double-pillar-gap")
    const width = getComputedStyle(root).getPropertyValue("--double-pillar-width")
    query.style.left = `${parseInt(linePadding) + 25 + (parseInt(gap) + parseInt(width)) * index}px`
})

const circles = document.querySelectorAll(".circle")
const circleInners = document.querySelectorAll(".circle-inner")
const circleChartParameterFragments = document.querySelectorAll(".circle-chart-parameter-fragment")

const containAnimations = [
    ...circles,
    ...circleInners,
    ...circleChartParameterFragments
]

const containTransitions = [
    ...document.querySelectorAll(".pillar")
]

const elementAnimations = [
    ...Array.from({length: circles.length}, () => "rotateAppear 3s ease-out forwards"),
    ...Array.from({length: circleInners.length}, () => "rotateAppear 3s ease-out forwards"),
    ...Array.from({length: circleChartParameterFragments.length}, () => "upAppear 1.1s ease-in-out")
]

const hasAnimation = localStorage.getItem("dashboard_animation")
if (hasAnimation) {
    if (hasAnimation === "false") {
        containAnimations.forEach((element) => {
            // The circle elements contain the opacity and transform method to make animations. Declare those will return the circles back to their original states.
            if (element.classList.contains("circle") || element.classList.contains("circle-inner")) {
                element.style.opacity = 1
                element.style.transform = "rotate(0deg) scale(1)"
            }
            element.style.animation = "none"
        })
        containTransitions.forEach((element) => {
            element.style.transition = "unset"
        })
    }
    else {
        containAnimations.forEach((element, index) => {
            if (element.classList.contains("circle") || element.classList.contains("circle-inner")) {
                element.style.opacity = 0
                element.style.transform = "rotate(0deg) scale(0.5)"
            }
            element.style.animation = elementAnimations[index]
        })
        containTransitions.forEach((element) => {
            element.style.transition = "0.9s"
        })
    }
}