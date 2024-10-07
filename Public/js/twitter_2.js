const canvas = document.getElementById("line-chart")

const ctx = canvas.getContext('2d');

const LINE_CHART_WIDTH = 400
const LINE_CHART_HEIGHT = 200
const START_X = 50
const TEXT_EXTRA_SPACE = 11

// Sample data points
const repostsDataPoints = [107, 96, 119, 96, 132, 127, 104, 130, 147];
const likesDataPoints = [153, 132, 104, 89, 97, 86, 134, 146, 136]
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'];

const LINE_LENGTH = LINE_CHART_WIDTH / (repostsDataPoints.length - 1)

// Draw the axes
ctx.beginPath();
ctx.moveTo(START_X, 0); // Top left
ctx.lineTo(START_X, LINE_CHART_HEIGHT); // Bottom left
ctx.lineTo(LINE_CHART_WIDTH + START_X, LINE_CHART_HEIGHT);
ctx.lineTo(LINE_CHART_WIDTH + START_X, 0) // Bottom right
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

count = 1

for (let b=163; b > 20; b-=40) {
    ctx.font = "12px Arial"
    ctx.fillStyle = "rgb(158, 152, 152)"
    ctx.fillText((10000 * count).toString(), START_X + LINE_CHART_WIDTH + 3, b)
    ctx.strokeStyle = "rgb(97, 95, 95)"
    ctx.strokeText((10000 * count).toString(), START_X + LINE_CHART_WIDTH + 3, b)
    count += 1
}

ctx.fillText("Reposts", 0, 10)
ctx.fillText("Likes", START_X + LINE_CHART_WIDTH + 3, 10)

// Draw the line chart
ctx.beginPath();
ctx.moveTo(START_X, LINE_CHART_HEIGHT - repostsDataPoints[0]);

for (let i = 1; i < repostsDataPoints.length; i++) {
  ctx.lineTo(START_X + i * LINE_LENGTH, LINE_CHART_HEIGHT - repostsDataPoints[i]);
}

ctx.strokeStyle = 'rgb(75, 192, 192)';
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(START_X, LINE_CHART_HEIGHT - likesDataPoints[0])

for (let i = 1; i < likesDataPoints.length; i++) {
    ctx.lineTo(START_X + i * LINE_LENGTH, LINE_CHART_HEIGHT - likesDataPoints[i]);
}

ctx.strokeStyle = 'rgb(222, 57, 35)';
ctx.lineWidth = 2;
ctx.stroke();

for (let j = 0; j < labels.length; j++) {
    ctx.font = "10px Arial"
    ctx.fillStyle = 'rgb(0, 0, 0)'
    ctx.fillText(labels[j], START_X - 10 + j * LINE_LENGTH, LINE_CHART_HEIGHT + TEXT_EXTRA_SPACE)
}

ctx.beginPath();
ctx.setLineDash([7, 3])

for (let i = 1; i < repostsDataPoints.length - 1; i++) {
    ctx.moveTo(START_X + i * LINE_LENGTH, LINE_CHART_HEIGHT)
    ctx.lineTo(START_X + i * LINE_LENGTH, LINE_CHART_HEIGHT - Math.max(repostsDataPoints[i], likesDataPoints[i]))
    ctx.strokeStyle = "rgb(203, 209, 204)"
}

ctx.stroke()