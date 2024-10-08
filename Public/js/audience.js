backButton = document.getElementById("back-button")

backButton.addEventListener("click", () => {
    window.location.href = "/twitter"
})

const canvas = document.getElementById("line-chart")

const ctx = canvas.getContext('2d');

const LINE_CHART_WIDTH = 400
const LINE_CHART_HEIGHT = 200
const START_X = 50
const TEXT_EXTRA_SPACE = 11

// Sample data points
const followersDataPoints = [87, 78, 61, 63, 92, 70, 124, 114, 159];
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'];

const LINE_LENGTH = LINE_CHART_WIDTH / (followersDataPoints.length - 1)

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
    ctx.fillText((2000 * count).toString(), START_X - 30, b)
    ctx.strokeStyle = "rgb(97, 95, 95)"
    ctx.strokeText((2000 * count).toString(), START_X - 30, b)
    count += 1
}

ctx.fillText("New Followers", 0, 10)

// Draw the line chart
ctx.beginPath();
ctx.moveTo(START_X, LINE_CHART_HEIGHT - followersDataPoints[0]);

for (let i = 1; i < followersDataPoints.length; i++) {
  ctx.lineTo(START_X + i * LINE_LENGTH, LINE_CHART_HEIGHT - followersDataPoints[i]);
}

ctx.strokeStyle = 'rgb(75, 192, 192)';
ctx.lineWidth = 2;
ctx.stroke();

for (let j = 0; j < labels.length; j++) {
    ctx.font = "10px Arial"
    ctx.fillStyle = 'rgb(0, 0, 0)'
    ctx.fillText(labels[j], START_X - 10 + j * LINE_LENGTH, LINE_CHART_HEIGHT + TEXT_EXTRA_SPACE)
}

ctx.beginPath();
ctx.setLineDash([7, 3])

for (let i = 1; i < followersDataPoints.length - 1; i++) {
    ctx.moveTo(START_X + i * LINE_LENGTH, LINE_CHART_HEIGHT)
    ctx.lineTo(START_X + i * LINE_LENGTH, LINE_CHART_HEIGHT - followersDataPoints[i])
    ctx.strokeStyle = "rgb(203, 209, 204)"
}

ctx.stroke()

const canvas2 = document.getElementById("line-chart-2")
const ctx2 = canvas2.getContext("2d")

ctx2.beginPath();
ctx2.moveTo(START_X, 0); // Top left
ctx2.lineTo(START_X, LINE_CHART_HEIGHT); // Bottom left
ctx2.lineTo(LINE_CHART_WIDTH + START_X, LINE_CHART_HEIGHT);
ctx2.stroke();

for (let a = 40; a < LINE_CHART_HEIGHT; a+=40) {
    ctx2.moveTo(START_X, a);
    ctx2.lineTo(LINE_CHART_WIDTH + START_X, a);
    ctx2.strokeStyle = "rgb(204, 203, 202)";
    ctx2.stroke();
}

count = 1

for (let b=163; b > 20; b-=40) {
    ctx2.font = "12px Arial"
    ctx2.fillStyle = "rgb(158, 152, 152)"
    ctx2.fillText(`${50*count}M`, START_X - 30, b)
    ctx2.strokeStyle = "rgb(97, 95, 95)"
    ctx2.strokeText(`${50*count}M`, START_X - 30, b)
    count += 1
}

const audienceDataPoints = [
    123, 108, 98, 84,
    120, 94, 67, 79,
    98, 75, 72, 91,
    100, 93, 86, 94,
    115
]

const LEN = LINE_CHART_WIDTH / (audienceDataPoints.length - 1)

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
    ctx2.fillText(audienceLabels[j], START_X - 10 + j * (LEN * 4), LINE_CHART_HEIGHT + TEXT_EXTRA_SPACE)
}

ctx2.beginPath();
ctx2.setLineDash([8, 2])

for (let i = 4; i < audienceDataPoints.length; i+=4) {
    ctx2.moveTo(START_X + i * (LEN), LINE_CHART_HEIGHT)
    ctx2.lineTo(START_X + i * (LEN), LINE_CHART_HEIGHT - audienceDataPoints[i])
    ctx2.strokeStyle = "rgb(203, 209, 204)"
}

ctx2.stroke()