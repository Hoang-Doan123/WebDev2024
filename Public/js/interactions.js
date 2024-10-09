import {
    randomNumberArray,
    LINE_CHART_WIDTH,
    LINE_CHART_HEIGHT,
    START_X,
    TEXT_EXTRA_SPACE
} from "./index.js";

const likesDataPoints = randomNumberArray(33, 40, 160)
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'];

const LINE_LENGTH = LINE_CHART_WIDTH / (likesDataPoints.length - 1)
const infoSpace = (likesDataPoints.length - 1) / (labels.length - 1)

const canvas = document.getElementById("line-chart")

const ctx = canvas.getContext('2d');

// Draw the axes
ctx.beginPath();
ctx.moveTo(START_X, 0); // Top left
ctx.lineTo(START_X, LINE_CHART_HEIGHT); // Bottom left
ctx.lineTo(LINE_CHART_WIDTH + START_X, LINE_CHART_HEIGHT);
ctx.stroke();

ctx.beginPath();

for (let a = 40; a < LINE_CHART_HEIGHT; a+=40) {
    ctx.moveTo(START_X, a);
    ctx.lineTo(LINE_CHART_WIDTH + START_X, a);
    ctx.strokeStyle = "rgb(204, 203, 202)";
    ctx.stroke();
}

let count = 1

for (let b=163; b > 20; b-=40) {
    ctx.font = "12px Arial"
    ctx.fillStyle = "rgb(158, 152, 152)"
    ctx.fillText((1000 * count).toString(), START_X - 30, b)
    ctx.strokeStyle = "rgb(97, 95, 95)"
    ctx.strokeText((1000 * count).toString(), START_X - 30, b)
    count += 1
}

ctx.fillText("Reposts", 0, 10)

// Draw the line chart
ctx.beginPath();
ctx.moveTo(START_X, LINE_CHART_HEIGHT - likesDataPoints[0]);

for (let i = 1; i < likesDataPoints.length; i++) {
  ctx.lineTo(START_X + i * LINE_LENGTH, LINE_CHART_HEIGHT - likesDataPoints[i]);
}

ctx.strokeStyle = 'rgb(75, 192, 192)';
ctx.lineWidth = 2;
ctx.stroke();

for (let j = 0; j < labels.length; j++) {
    ctx.font = "10px Arial"
    ctx.fillStyle = 'rgb(0, 0, 0)'
    ctx.fillText(labels[j], START_X - 10 + j * LINE_LENGTH * infoSpace, LINE_CHART_HEIGHT + TEXT_EXTRA_SPACE)
}

ctx.beginPath();
ctx.setLineDash([7, 3])

for (let i = 4; i < likesDataPoints.length - 1; i+=infoSpace) {
    ctx.moveTo(START_X + i * LINE_LENGTH, LINE_CHART_HEIGHT)
    ctx.lineTo(START_X + i * LINE_LENGTH, LINE_CHART_HEIGHT - likesDataPoints[i])
    ctx.strokeStyle = "rgb(203, 209, 204)"
}

ctx.stroke()

ctx2.beginPath();
ctx2.moveTo(START_X, LINE_CHART_HEIGHT - audienceDataPoints[0]);

for (let i = 1; i < audienceDataPoints.length; i++) {
  ctx2.lineTo(START_X + i * LEN, LINE_CHART_HEIGHT - audienceDataPoints[i]);
}

ctx2.strokeStyle = 'rgb(75, 192, 192)';
ctx2.lineWidth = 2;
ctx2.stroke();

const audienceLabels = ["May", "Jun", "Jul", "Aug", "Sep"]

for (let j = 0; j < audienceLabels.length; j++) {
    ctx2.font = "10px Arial"
    ctx2.fillStyle = 'rgb(0, 0, 0)'
    ctx2.fillText(audienceLabels[j], START_X - 10 + j * (LEN * infoSpace), LINE_CHART_HEIGHT + TEXT_EXTRA_SPACE)
}

ctx2.beginPath();
ctx2.setLineDash([8, 2])

for (let i = 4; i < audienceDataPoints.length; i+=infoSpace) {
    ctx2.moveTo(START_X + i * (LEN), LINE_CHART_HEIGHT)
    ctx2.lineTo(START_X + i * (LEN), LINE_CHART_HEIGHT - audienceDataPoints[i])
    ctx2.strokeStyle = "rgb(203, 209, 204)"
}

ctx2.stroke()