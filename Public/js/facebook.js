/**
 * A dataset to build up bar chart. 
*/
const dataSet = [
    0.5490,
    0.6276,
    0.4238,
    0.7414,
    0.8462,
    0.7348,
    0.6
];

/**
 * Declared to return to the main page.
*/
backButton = document.getElementById("back-button")

backButton.addEventListener("click", () => {
    window.location.href = "./main_interface.html"
})

/**
 * The font size is declared to match the setting attribute
 */
const FONT_SIZE = parseInt(localStorage.getItem("dashboard_fontsize")) / 5 + 10

/**
 * Routes to different pages
 */
const routes = [
    'facebook_interactions', 
    'facebook_interactions', 
    'facebook_comments', 
    'facebook_audience', 
    'facebook_audience', 
    'facebook_messages'
]

/**
 * Set the route direction to each title.
*/
const dataTitles = document.querySelectorAll(".title")
for (let i = 0; i < dataTitles.length; i++) {
    dataTitles[i].addEventListener("click", () => {
        window.location.href = `./${routes[i]}.html`
    })
}

/**
 * Return the inital theme value (dark mode or light mode)
*/
const colorTheme = localStorage.getItem("theme")

// Depending on how the initial value, the body will be set with the theme.
if (colorTheme === "dark-mode") {
    document.body.classList.add("dark-mode")
} else if (colorTheme === "light-mode") {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode")
    }
}

/**
 * Declaring root element to get the custom properties value.
*/
const root = document.documentElement

// Now call each part of the chart to design in correctly.
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

// Declare the elements that has animations
const interactionAnalyticHeader = document.querySelector(".interaction-analytics-header")
const titles = document.querySelectorAll(".title")
const circleAnalysisHeader = document.querySelector(".circle-analysis-header")
const lineAnalysisHeader = document.querySelector(".line-analysis-header")
const pillarAnalysisHeader = document.querySelector(".pillar-analysis-header")

/**
 * The elements are grouped into an array so we can use the loop function instead of declaring
 * each elemet.
*/
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

/**
 * The elements which apply animations will be grouped into an array. This makes 
 * is easier to manage animations to those elements when the animation is set again.
*/
const containAnimations = [
    document.querySelector(".reacts-container"),
    document.querySelector(".shares-container"),
    document.querySelector(".comments-container"),
    document.querySelector(".audience-container"),
    document.querySelector(".followers-container"),
    document.querySelector(".messages-container"),
    ...circles,
    ...circleInners,
    ...circleChartParameterFragment,
    ...lineChartParameterFragment
]/**
 *The animations of the original elements. This will declare the animation
  back to its element if the animation is set again..
 */ 
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

/**
 * Transitions is considered as animation. However, they use different properties compared to
 * those which apply animations directly, so another array has to be created to store those
 *  elements that contains transition animation.
*/
const elementTransitions = [
    ...document.querySelectorAll(".pillar")
]

const hasAnimation = localStorage.getItem("dashboard_animation")
if (hasAnimation != null) {
    if (hasAnimation === "false") {
        containAnimations.forEach((element) => {
            // The circle elements contain the opacity and transform properties to make animations.
            // Declare those will return the circles back to their original states.
            if (element.classList.contains("circle") || element.classList.contains("circle-inner")) {
                element.style.opacity = 1
                element.style.transform = "rotate(0deg) scale(1)"
            }
            element.style.animation = "none"
        })
        // The elements which have a transform property won't have a transform property
        // when the animation is not set.
        elementTransitions.forEach((element) => {
            element.style.transition = "unset"
        })
    } else {
        containAnimations.forEach((element, index) => {
            // Declare their old properties values back when the animation is set again.
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
    window.location.href = "./facebook_interactions.html"
})

pillarAnalysisHeader.addEventListener("click", () => {
    window.location.href = "./facebook_messages.html"
})

window.onload = () => {
    document.querySelectorAll(".pillar").forEach(q => {
        q.classList.add("active")
    })

    document.querySelectorAll(".pillar.active").forEach((q, i) => {
        q.style.height = `${250 * dataSet[i]}px`
        q.textContent = `${Math.round(50 * dataSet[i])}`
    })
}