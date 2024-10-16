const increaseBtn = document.getElementById("increase-btn")
const decreaseBtn = document.getElementById("decrease-btn")
const fontSizeValue = document.getElementById("font-size-value")

const generalFont = localStorage.getItem("dashboard_fontsize")
if (generalFont != null) {
    fontSizeValue.textContent = generalFont
}

increaseBtn.addEventListener("click", () => {
    let fontValue = parseInt(fontSizeValue.textContent)
    if (fontValue < 70) fontValue += 10
    fontSizeValue.textContent = fontValue
    localStorage.setItem("dashboard_fontsize", fontValue.toString())
})

decreaseBtn.addEventListener("click", () => {
    let fontValue = parseInt(fontSizeValue.textContent)
    if (fontValue > 30) fontValue -= 10
    fontSizeValue.textContent = fontValue
    localStorage.setItem("dashboard_fontsize", fontValue.toString())
})