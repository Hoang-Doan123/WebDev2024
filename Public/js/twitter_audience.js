import DrawLineChart, {
    randomNumberArray,
    START_X,
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
    ...document.querySelectorAll(".line-analysis-header"),
    document.querySelector(".circle-chart-header")
]

containWords.forEach((element) => {
    element.style.fontSize = `${FONT_SIZE}px`
})

const overallBox = document.querySelectorAll(".overall-box")
const circles = document.querySelectorAll(".circle")
const circleInners = document.querySelectorAll(".circle-inner")

const containAnimations = [
    ...overallBox,
    ...circles,
    ...circleInners
]

// The elements' original animations. This will declare the animation back to its element when the animation is set to be true.
const elementAnimations = [
    ...Array.from({length: overallBox.length}, () => "upAppear 0.75s ease-in-out"),
    ...Array.from({length: circles.length}, () => "rotateAppear 3s ease-out forwards"),
    ...Array.from({length: circleInners.length}, () => "rotateAppear 3s ease-out forwards")
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
    } else {
        containAnimations.forEach((element, index) => {
            if (element.classList.contains("circle") || element.classList.contains("circle-inner")) {
                element.style.opacity = 0
                element.style.transform = "rotate(0deg) scale(0.5)"
            }
            element.style.animation = elementAnimations[index]
        })
    }
}

const canvas = document.getElementById("line-chart")

const ctx = canvas.getContext('2d');

const dlc = new DrawLineChart(
    ctx,
    ["Followers"],
    [2000],
    [START_X - 30],
    ['rgb(75, 192, 192)'],
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
    "",
    colorTheme === "dark-mode" ? "dark-mode" : "light-mode",
    [...randomNumberArray(32, 60, 160), 158]
)

dlc.draw()

const canvas2 = document.getElementById("line-chart-2")
const ctx2 = canvas2.getContext("2d")

const dlc2 = new DrawLineChart(
    ctx2,
    ["Audiences"],
    [50],
    [START_X - 30],
    ["rgb(75, 192, 192)"],
    ["May", "Jun", "Jul", "Aug", "Sep"],
    "M",
    colorTheme === "dark-mode" ? 'dark-mode' : 'light-mode', 
    [...randomNumberArray(16, 50, 150), 117]
)

dlc2.draw()