const backButton = document.getElementById("back-button")

// Return to the main page
backButton.addEventListener("click", () => {
    window.location.href = "./main_interface.html"
})

const nav = document.querySelector(".sidenav")

const settingButton = document.getElementById("setting-button")
settingButton.addEventListener("click", () => {
    nav.classList.add("active")
})



// The font size is declared to match the setting attribute
const FONT_SIZE = parseInt(localStorage.getItem("dashboard_fontsize")) / 5 + 10

// Routes to different pages
const routes = ['twitter_interactions', 'twitter_interactions', 'twitter_comments', 'twitter_audience', 'twitter_audience', 'twitter_revenue']

dataTitles = document.querySelectorAll(".title")
for (let i = 0; i < dataTitles.length; i++) {
    dataTitles[i].addEventListener("click", () => {
        window.location.href = `./${routes[i]}.html`
    })
}


// Get the theme to be dark or bright
const colorTheme = localStorage.getItem("theme")

if (colorTheme === "dark-mode") {
    document.body.classList.add("dark-mode")
} else if (colorTheme === "light-mode") {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode")
    }
}

const root = document.documentElement

const chart = document.querySelector(".pillar-chart-container")
const separationLines = chart.querySelectorAll(".line-separation")
const lineValues = chart.querySelectorAll(".line-value")
const texts = chart.querySelectorAll(".text")
separationLines.forEach((line, index) => {
    line.style.top = `${25 + index * 50}px`
})
lineValues.forEach((value, index) => {
    value.style.top = `${67 + index * 50}px`
})
texts.forEach((text, index) => {
    const linePadding = getComputedStyle(root).getPropertyValue("--line-padding")
    const gap = getComputedStyle(root).getPropertyValue("--pillar-gap")
    const width = getComputedStyle(root).getPropertyValue("--pillar-width")
    text.style.left = `${parseInt(linePadding) + 20 + (parseInt(gap) + parseInt(width)) * index}px`
})

// These are the titles where the font will be changed based on the settings
const interactionAnalyticHeader = document.querySelector(".interaction-analytics-header")
const titles = document.querySelectorAll(".title")
const circleAnalysisHeader = document.querySelector(".circle-analysis-header")
const lineAnalysisHeader = document.querySelector(".line-analysis-header")
const pillarAnalysisHeader = document.querySelector(".pillar-analysis-header")

const containWords = [
    interactionAnalyticHeader,
    ...titles,
    circleAnalysisHeader,
    lineAnalysisHeader,
    pillarAnalysisHeader
]

containWords.forEach(element => {
    element.style.fontSize = `${FONT_SIZE}px`
})

// Those elements have animation applied, so when the animations are disabled, there will be no animations.
const circleChartParameterFragment = document.querySelectorAll(".circle-chart-parameter-fragment")
const lineChartParameterFragment = document.querySelectorAll(".line-chart-parameter-fragment")
const circles = document.querySelectorAll(".circle")
const circleInners = document.querySelectorAll(".circle-inner")

const containAnimations = [
    document.querySelector(".likes-container"),
    document.querySelector(".reposts-container"),
    document.querySelector(".comments-container"),
    document.querySelector(".audience-container"),
    document.querySelector(".new-followers-container"),
    document.querySelector(".revenue-container"),
    ...circles,
    ...circleInners,
    ...circleChartParameterFragment,
    ...lineChartParameterFragment
]

// The elements' original animations. This will declare the animation back to its element when the animation is set to be true.
const elementAnimations = [
    "upAppear 1.1s ease-in-out",
    "upAppear 1.3s ease-in-out",
    "upAppear 1.5s ease-in-out",
    "upAppear 1.7s ease-in-out",
    "upAppear 1.9s ease-in-out",
    "upAppear 2.1s ease-in-out",
    ...Array.from({length: circles.length}, () => "rotateAppear 3s ease-out forwards"),
    ...Array.from({length: circleInners.length}, () => "rotateAppear 3s ease-out forwards"),
    ...Array.from({length: circleChartParameterFragment.length}, () => "upAppear 1.1s ease-in-out"),
    ...Array.from({length: lineChartParameterFragment.length}, () => "upAppear 1.5s ease-in-out")
]

// Transitions is also considered to be animations.
const elementTransitions = [
    ...document.querySelectorAll(".pillar")
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
        elementTransitions.forEach((element) => {
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
        elementTransitions.forEach((element) => {
            element.style.transition = "0.9s"
        })
    }
}

lineAnalysisHeader.addEventListener("click", () => {
    window.location.href = "./twitter_interactions.html"
})

pillarAnalysisHeader.addEventListener("click", () => {
    window.location.href = "./twitter_revenue.html"
})

window.onload = () => {
    document.querySelectorAll(".pillar").forEach(q => {
        q.classList.add("active")
    })
}