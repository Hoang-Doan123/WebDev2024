backButton = document.getElementById("back-button")

backButton.addEventListener("click", () => {
    window.location.href = "/"
})

const canvas = document.getElementById("line-chart")

const ctx = canvas.getContext('2d');

// Sample data points
const repostsDataPoints = [65, 59, 80, 95, 56, 50, 40, 87];
const likeDataPoints = [76, 95, 83, 78, 86, 91, 86, 64]
const labels = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'];

// Draw the axes
ctx.beginPath();
ctx.moveTo(30, 0); // Top left
ctx.lineTo(30, 180); // Bottom left
ctx.lineTo(400, 180); // Bottom right
ctx.stroke();

ctx.beginPath();

for (let a = 20; a < 180; a+=40) {
    ctx.moveTo(30, a);
    ctx.lineTo(400, a);
    ctx.strokeStyle = "rgb(204, 203, 202)";
    ctx.stroke();
}

let count = 1

for (let b=143; b > 20; b-=40) {
    ctx.font = "12px Arial"
    ctx.strokeText((1000 * count).toString(), 0, b)
    count += 1
}

// Draw the line chart
ctx.beginPath();
ctx.moveTo(30, 180 - repostsDataPoints[0]);

for (let i = 1; i < repostsDataPoints.length; i++) {
  ctx.lineTo(30 + i * 50, 180 - repostsDataPoints[i]);
}

ctx.strokeStyle = 'rgb(75, 192, 192)';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(30, 180 - likeDataPoints[0])

for (let i = 1; i < likeDataPoints.length; i++) {
    ctx.lineTo(30 + i * 50, 180 - likeDataPoints[i]);
}

ctx.strokeStyle = 'rgb(222, 57, 35)';
ctx.stroke();

for (let j = 0; j < labels.length; j++) {
    ctx.font = "10px Arial"
    ctx.strokeStyle = "rgb(0, 0, 0)"
    ctx.strokeText(labels[j], 20 + j * 50, 191)
}

ctx.beginPath();
ctx.setLineDash([7, 3])

for (let i = 1; i < repostsDataPoints.length; i++) {
    ctx.moveTo(30 + i * 50, 180)
    ctx.lineTo(30 + i * 50, 180 - Math.max(repostsDataPoints[i], likeDataPoints[i]))
    ctx.strokeStyle = "rgb(203, 209, 204)"
}

ctx.stroke()

