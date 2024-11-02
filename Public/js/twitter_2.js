import DrawLineChart, {
    randomNumberArray,
    LINE_CHART_WIDTH,
    START_X
} from "./index.js"
import DrawCircleChart from "./DrawCircleChart.js";

const canvas = document.getElementById("line-chart")

const ctx = canvas.getContext('2d');

const dlc = new DrawLineChart(
    ctx,
    ["Reposts", "Likes"],
    [1000, 10000],
    [START_X - 30, START_X + LINE_CHART_WIDTH + 3],
    ['rgb(75, 192, 192)', 'rgb(222, 57, 35)'],
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
    "",
    localStorage.getItem("theme") === "dark-mode" ? "dark-mode" : "light-mode",
    randomNumberArray(33, 40, 160),
    randomNumberArray(33, 40, 160)
)

dlc.draw();

const circleChartContainer = document.querySelector(".circle-chart-container-test")

const dcc = new DrawCircleChart(
    circleChartContainer,
    [
        ["circle", "chart-1"],
        ["circle-inner"]
    ],
    150, 80,
    ["lime", "green", "blue", "cyan"],
    [25, 30, 25, 20],
    "Total: 999", 
    ["circle-chart-footer"],
    "August", 
    ""
)

dcc.build()