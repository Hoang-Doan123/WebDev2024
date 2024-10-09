import DrawLineChart, {
    randomNumberArray,
    START_X,
} from "./index.js"

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
    [...randomNumberArray(16, 50, 150), 117]
)

dlc2.draw()