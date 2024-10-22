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
    {bigBar: 0.54, smallBar: 0.1},
    {bigBar: 0.65, smallBar: 0.08},
    {bigBar: 0.43, smallBar: 0.05},
    {bigBar: 0.52, smallBar: 0.06},
    {bigBar: 0.55, smallBar: 0.05},
    {bigBar: 0.60, smallBar: 0.07}
]

const colorTheme = localStorage.getItem("theme")

if (colorTheme === "dark-mode") {
    document.body.classList.add("dark-mode")
} else if (colorTheme === "light-mode") {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode")
    }
}

const containWords = [
    ...document.querySelectorAll(".pillar-analysis-header")
]

const FONT_SIZE =  parseInt(localStorage.getItem("dashboard_fontsize") ? localStorage.getItem("dashboard_fontsize") : "50") / 5 + 10

containWords.forEach((element) => {
    element.style.fontSize = `${FONT_SIZE}px`
})

const circles = document.querySelectorAll(".circle")
const circleInners = document.querySelectorAll(".circle-inner")
const colorDescriptions = document.querySelectorAll(".circle-chart-parameter-fragment")
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

// Set the bar charts
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
    value.style.top = `${67 + index * 50}px`
})
graphTwoTexts.forEach((text, index) => {
    const linePadding = getComputedStyle(root).getPropertyValue("--line-padding")
    const gap = getComputedStyle(root).getPropertyValue("--double-pillar-gap")
    const width = getComputedStyle(root).getPropertyValue("--double-pillar-width")
    text.style.left = `${parseInt(linePadding) + 25 + (parseInt(gap) + parseInt(width)) * index}px`
})

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