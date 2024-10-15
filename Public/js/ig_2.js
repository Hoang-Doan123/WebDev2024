import DrawLineChart, {
    randomNumberArray,
    LINE_CHART_WIDTH,
    START_X
} from "./index.js"

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
    randomNumberArray(33, 40, 160),
    randomNumberArray(33, 40, 160)
)

dlc.draw();