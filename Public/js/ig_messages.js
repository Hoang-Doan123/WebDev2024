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
    [...randomNumberArray(32, 40, 170), 153]
)

dlc.draw();