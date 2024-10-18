import DrawLineChart, {
    randomNumberArray,
    START_X,
} from "./index.js"

const canvas = document.getElementById("line-chart")

const ctx = canvas.getContext('2d');

const dlc = new DrawLineChart(
    ctx,
    ["Followers"],
    [20],
    [START_X - 30],
    ['rgb(75, 192, 192)'],
    ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "",
    [...randomNumberArray(32, 60, 160), 158]
)

dlc.draw()

const canvas2 = document.getElementById("line-chart-2")
const ctx2 = canvas2.getContext("2d")

const dlc2 = new DrawLineChart(
    ctx2,
    ["Audiences"],
    [10],
    [START_X - 30],
    ["rgb(75, 192, 192)"],
    ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "",
    [...randomNumberArray(16, 50, 150), 117]
)

dlc2.draw()