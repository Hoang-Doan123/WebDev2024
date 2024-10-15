function randomNumberArray(length, min, max) {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        // Generate random number between min and max
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNumber);
    }
    return randomArray;
}

const LINE_CHART_HEIGHT = 200
const LINE_CHART_WIDTH = 400
const START_X = 50
const TEXT_EXTRA_SPACE = 11

/**
 * A class defined to draw line chart
 * @params {CanvasRenderingContext2D} ctx: Defined 2d canvas context
 * @params {Array<string>} units: the units of the chart.
 * @params {Array<number>} cycles: the cycle values for the units.
 * @params {Array<number>} unitsStartPoints: to define where the unit text to be placed.
 * @params {Array<string>} lineStrokeStyles: define the style of the line
 * @params {Array<string>} labels: the labels below the chart
 * @params {string} letters: the number sometimes can be too long, so the letters represent the number usual units (like K (thousand), M (million), etc.).
 * @params {Array<Array<number>>} dataPoints: the points where the line goes.
*/

class DrawLineChart {
    constructor(
        ctx, 
        units,
        cycles,
        unitsStartPoints,
        lineStrokeStyles,
        labels,
        letters,
        ...dataPoints
    ) {
        const len = [
            units.length,
            cycles.length,
            unitsStartPoints.length,
            lineStrokeStyles.length,
            dataPoints.length
        ]
        if ((new Set(len).size !== 1)) {
            throw RangeError("units, cycles, unitStartPoints, lineStrokeStyles, labels must have the same length")
        }
        this.ctx = ctx
        this.dataPoints = dataPoints
        this.units = units
        this.isMultipleUnits = this.units.length != 1
        this.cycles = cycles
        this.unitsStartPoints = unitsStartPoints
        this.lineStrokeStyles = lineStrokeStyles;
        this.labels = labels
        this.letters = letters
        this.LINE_CHART_HEIGHT = LINE_CHART_HEIGHT
        this.LINE_CHART_WIDTH = LINE_CHART_WIDTH
        this.START_X = START_X
        this.TEXT_EXTRA_SPACE = TEXT_EXTRA_SPACE
        this.LINE_LENGTH = this.LINE_CHART_WIDTH / (this.dataPoints[0].length - 1)
        this.INFO_SPACE = (this.dataPoints[0].length - 1) / (this.labels.length - 1)
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(
            this.START_X, 0); // Top left
        this.ctx.lineTo(
            this.START_X, 
            this.LINE_CHART_HEIGHT
        ); // Bottom left
        this.ctx.lineTo(
            this.LINE_CHART_WIDTH + this.START_X, 
            this.LINE_CHART_HEIGHT
        );
        this.isMultipleUnits && this.ctx.lineTo(this.LINE_CHART_WIDTH + this.START_X, 0) // Bottom right
        this.ctx.stroke();

        this.ctx.beginPath()

        for (let a = 40; a < this.LINE_CHART_HEIGHT; a+= 40) {
            this.ctx.moveTo(this.START_X, a);
            this.ctx.lineTo(this.LINE_CHART_WIDTH + this.START_X, a);
            this.ctx.strokeStyle = "rgb(204, 203, 202)"
            this.ctx.stroke()
        }

        for (let i = 0; i < this.units.length; i++) {
            this.setUnitValue(this.unitsStartPoints[i], this.cycles[i], this.letters)
            this.fillUnits(this.units[i], this.unitsStartPoints[i])
        }

        for (let i = 0; i < this.dataPoints.length; i++) {
            this.lineDraw(this.dataPoints[i], this.lineStrokeStyles[i])
        }

        for (let j = 0; j < this.labels.length; j++) {
            this.ctx.font = "10px Arial"
            this.ctx.fillStyle = 'rgb(0, 0, 0)'
            this.ctx.fillText(
                this.labels[j], 
                this.START_X - 10 + j * this.LINE_LENGTH * this.INFO_SPACE, 
                this.LINE_CHART_HEIGHT + this.TEXT_EXTRA_SPACE
            )
        }
        
        this.ctx.beginPath();
        this.ctx.setLineDash([7, 3])

        for (let i = this.INFO_SPACE; i < this.dataPoints[0].length - 1; i+=this.INFO_SPACE) {
            const getPointsInIndex = this.dataPoints.map(data => {
                return data[i]
            })
            console.log(this.LINE_CHART_HEIGHT - Math.max(...getPointsInIndex))
            this.ctx.moveTo(
                this.START_X + i * this.LINE_LENGTH, 
                this.LINE_CHART_HEIGHT)
            this.ctx.lineTo(
                this.START_X + i * this.LINE_LENGTH, 
                this.LINE_CHART_HEIGHT - Math.max(...getPointsInIndex));
            this.ctx.strokeStyle = "rgb(203, 209, 204)"
        }

        this.ctx.stroke();
    }

    setUnitValue(startPoint, cycle, letters) {
        let count = 1
        for (let b=163; b > 20; b-=40) {
            this.ctx.font = "12px Arial"
            this.ctx.fillStyle = "rgb(158, 152, 152)"
            this.ctx.fillText(`${(cycle * count)}${letters}`, startPoint, b)
            this.ctx.strokeStyle = "rgb(97, 95, 95)"
            this.ctx.strokeText(`${(cycle * count)}${letters}`, startPoint, b)
            count += 1
        }
    }

    fillUnits(unit, startPoint) {
        this.ctx.fillText(unit, startPoint, 10)
    }

    lineDraw(dataPoints, lineStrokeStyle) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.START_X, this.LINE_CHART_HEIGHT - dataPoints[0]);

        for (let i = 1; i < dataPoints.length; i++) {
            this.ctx.lineTo(this.START_X + i * this.LINE_LENGTH, this.LINE_CHART_HEIGHT - dataPoints[i]);
        }

        this.ctx.strokeStyle = lineStrokeStyle;
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
    }
}

export {
    randomNumberArray,
    LINE_CHART_HEIGHT,
    LINE_CHART_WIDTH,
    START_X,
    TEXT_EXTRA_SPACE
}
export default DrawLineChart;