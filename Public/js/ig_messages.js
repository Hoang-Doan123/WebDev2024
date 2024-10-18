import DrawLineChart, {
    START_X,
    randomNumberArray
} from "./index.js"

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