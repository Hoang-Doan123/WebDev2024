import DrawLineChart, {
    randomNumberArray,
    START_X,
} from "./index.js";

const lineChart = document.getElementById("line-chart")
const ctx = lineChart.getContext("2d")

const dlc = new DrawLineChart(
    ctx,
    ["reacts"],
    [10],
    [START_X - 30],
    ['rgb(33, 102, 51)'],
    ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "",
    [...randomNumberArray(32, 40, 170), 168]
)

dlc.draw();

const lineChart2 = document.getElementById("line-chart-2")
const ctx2 = lineChart2.getContext("2d")

const dlc2 = new DrawLineChart(
    ctx2,
    ["shares"],
    [3],
    [START_X - 30],
    ["rgb(35, 35, 176)"],
    ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "",
    [...randomNumberArray(39, 30, 180), 102]
)

dlc2.draw()