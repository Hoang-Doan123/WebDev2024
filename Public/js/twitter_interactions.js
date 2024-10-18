
import DrawLineChart, {
    randomNumberArray,
    START_X,
} from "./index.js";

const lineChart = document.getElementById("line-chart")
const ctx = lineChart.getContext("2d")

const colorTheme = localStorage.getItem("theme")

if (colorTheme === "dark-mode") {
    document.body.classList.add("dark-mode")
} else if (colorTheme === "light-mode") {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode")
    }
}

const FONT_SIZE = parseInt(localStorage.getItem("dashboard_fontsize") ? localStorage.getItem("dashboard_fontsize") : "50") / 5 + 10

const containWords = [
    ...document.querySelectorAll(".circle-chart-header"),
    ...document.querySelectorAll(".pillar-analysis-header")
]

containWords.forEach(element => {
    element.style.fontSize = `${FONT_SIZE}px`
})

const circles = document.querySelectorAll(".circle")
const circleInners = document.querySelectorAll(".circle-inner")
const colorDescriptions = document.querySelectorAll(".color-description")
const pillars = document.querySelectorAll(".pillar")
const doublePillars = document.querySelectorAll(".double-pillar")

const containAnimations = [
    ...circles,
    ...circleInners,
    ...colorDescriptions
]

const containTransitions = [
    ...pillars,
    ...doublePillars
]

const elementAnimations = [
    ...Array.from({length: circles.length}, () => "rotateAppear 3s ease-out forwards"),
    ...Array.from({length: circleInners.length}, () => "rotateAppear 3s ease-out forwards"),
    ...Array.from({length: colorDescriptions.length}, () => "upAppear 1.1s ease-in-out")
]

const elementTransitions = [
    ...Array.from({length: pillars.length}, () => "0.9s"),
    ...Array.from({length: doublePillars.length}, () => "height 0.9s ease")
]

const hasAnimation = localStorage.getItem("dashboard_animation")
if (hasAnimation != null) {
    if (hasAnimation === "false") {
        containAnimations.forEach((element) => {
            // The circle elements contain the opacity and transform method to make animations. Declare those will return the circles back to their original states.
            if (element.classList.contains("circle") || element.classList.contains("circle-inner")) {
                element.style.opacity = 1
                element.style.transform = "rotate(0deg) scale(1)"
            }
            element.style.animation = "none"
        })
        containTransitions.forEach((element, index) => {
            element.style.transition = "unset"
        })
    } else {
        containAnimations.forEach((element, index) => {
            if (element.classList.contains("circle") || element.classList.contains("circle-inner")) {
                element.style.opacity = 0
                element.style.transform = "rotate(0deg) scale(0.5)"
            }
            element.style.animation = elementAnimations[index]
        })
        containTransitions.forEach((element, index) => {
            element.style.transition = elementTransitions[index]
        })
    }
}

const dlc = new DrawLineChart(
    ctx,
    ["likes"],
    [100],
    [START_X - 30],
    ['rgb(33, 102, 51)'],
    ["May", "Jun", "Jul", "Aug", "Sep"],
    "K",
    localStorage.getItem("theme") === "dark-mode" ? "dark-mode" : "light-mode",
    [...randomNumberArray(32, 40, 170), 168]
)

dlc.draw();

const lineChart2 = document.getElementById("line-chart-2")
const ctx2 = lineChart2.getContext("2d")

const dlc2 = new DrawLineChart(
    ctx2,
    ["reposts"],
    [40],
    [START_X - 30],
    ["rgb(35, 35, 176)"],
    ["May", "Jun", "Jul", "Aug", "Sep"],
    "K",
    localStorage.getItem("theme") === "dark-mode" ? "dark-mode" : "light-mode",
    [...randomNumberArray(39, 30, 180), 102]
)

dlc2.draw()

const root = document.documentElement

const charOne = document.querySelector(".char-1")
const graphOneSeparationLines = charOne.querySelectorAll(".line-separation")
const graphOneLineValues = charOne.querySelectorAll(".line-value")
const graphOneTexts = charOne.querySelectorAll(".text")
graphOneSeparationLines.forEach((line, index) => {
    line.style.top = `${25 + index * 50}px`
})
graphOneLineValues.forEach((value, index) => {
    value.style.top = `${67 + index * 50}px`
})
graphOneTexts.forEach((text, index) => {
    const linePadding = getComputedStyle(root).getPropertyValue("--line-padding")
    const gap = getComputedStyle(root).getPropertyValue("--single-pillar-gap")
    const width = getComputedStyle(root).getPropertyValue("--single-pillar-width")
    text.style.left = `${parseInt(linePadding) + 20 + (parseInt(gap) + parseInt(width)) * index}px`
})

const charTwo = document.querySelector(".char-2")
const graphTwoSeparationLines = charTwo.querySelectorAll(".line-separation")
const graphTwoLineValues = charTwo.querySelectorAll(".line-value")
const graphTwoTexts = charTwo.querySelectorAll(".text")
graphTwoSeparationLines.forEach((line, index) => {
    line.style.top = `${25 + index * 50}px`
})
graphTwoLineValues.forEach((value, index) => {
    value.style.top = `${17 + index * 50}px`
})
graphTwoTexts.forEach((text, index) => {
    const linePadding = getComputedStyle(root).getPropertyValue("--line-padding")
    const gap = getComputedStyle(root).getPropertyValue("--double-pillar-gap")
    const width = getComputedStyle(root).getPropertyValue("--double-pillar-width")
    text.style.left = `${parseInt(linePadding) + 25 + (parseInt(gap) + parseInt(width)) * index}px`
})
