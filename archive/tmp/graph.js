const step = 50
const padding = 10
const sep = 2
const monthes = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function verticalLines(ctx, canvasWidth, canvasHeight) {
    for (let x = 0; x < canvasWidth; x = x + step) {
        ctx.fillText(monthes[x / step], x + 5, canvasHeight - 10)

        let fill = true
        for (let y = 0; y < canvasHeight; y = y + sep) {
            if (fill) {
                ctx.moveTo(x, y)
                ctx.lineTo(x, y + (sep / 2))
                fill = false
            } else {
                fill = true
            }
        }
    }
}

function horizontalLines(ctx, canvasWidth, canvasHeight) {
    for (let y = canvasHeight; y > 0; y = y - step) {
        if (canvasHeight - y !== 0) {
            ctx.fillText(canvasHeight - y, 0 + 5, y - 5)
        }

        let fill = true
        for (let x = 0; x < canvasWidth; x = x + sep) {
            if (fill) {
                ctx.moveTo(x, y)
                ctx.lineTo(x + (sep / 2), y)
                fill = false
            } else {
                fill = true
            }
        }
    }
}

function drawPowerLine(ctx, x, y, height) {
    console.log(x)
    console.log(y)
    ctx.moveTo(x, height)
    ctx.lineTo(x, y)

    ctx.fillText("Everything was change here", x - 100, y - 15)
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
}


const graph = [
  [0, 95],
  [25, 92],
  [50, 89],
  [75, 86],
  [100, 83],
  [125, 80],
  [150, 77],
  [175, 74],
  [200, 71],
  [225, 68],
  [250, 65],
  [275, 62],
  [300, 60],
  [325, 65],
  [350, 75],
  [375, 91],
  [400, 111],
  [425, 137],
  [450, 167],
  [475, 202],
  [500, 240],
  [525, 282],
  [550, 326],
  [575, 372]
]

function drawGraph(ctx, width, height) {
    ctx.moveTo(graph[0][0], graph[0][1])
    let max = graph.reduce((l, r) => l[1] < r[1] ? l : r)

    for (let i = 1; i < graph.length; i++) {
        ctx.lineTo(graph[i][0], graph[i][1])
    }

    drawPowerLine(ctx, max[0], max[1], height)
}

function Graph(canvas) {
    const canvasWidth = canvas.width
    const canvasHeight = canvas.height
    const ctx = canvas.getContext("2d")
    ctx.font = "15px serif"
    ctx.lineCap = 'round'

    ctx.beginPath()
    verticalLines(ctx, canvasWidth - padding, canvasHeight)
    horizontalLines(ctx, canvasWidth - padding, canvasHeight)
    drawGraph(ctx, canvasWidth - padding, canvasHeight)

    ctx.stroke()
}

new Graph(document.getElementById("canvas"))
