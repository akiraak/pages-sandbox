import { Chart, ChartData, ChartOptions } from 'chart.js'

var canvas = <HTMLCanvasElement>document.getElementById("chart_01")
var ctx = <CanvasRenderingContext2D>canvas.getContext("2d")

Chart.defaults.global.defaultFontColor = '#666';
Chart.defaults.global.defaultFontSize = 16;

var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [{
            label: 'Type 1',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 20, 200, 300, 450],
            pointRadius: 0,
        }]
    },

    // Configuration options go here
    options: {
        responsive: true,
        responsiveAnimationDuration: 0,
        maintainAspectRatio: true,
        hover: {
            mode: 'point',
            intersect: true,
            axis: 'x',
            animationDuration: 400,
        },
        legend: {
            labels: {
                // This more specific font property overrides the global property
                //  fontColor: 'white'
            }
        },
        elements: {
            line: {
                tension: 0, // disables bezier curves
            },
        },
    },
});
