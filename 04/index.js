function setupChart() {
    var ctx = document.getElementById('chart_01').getContext('2d');

    Chart.defaults.global.defaultFontColor = '#666';
    //Chart.defaults.global.defaultFontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
    Chart.defaults.global.defaultFontSize = 16;
    //Chart.defaults.global.defaultFontStyle = 'normal';
    //Chart.defaults.global.hover.mode = 'nearest';

    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7],
            datasets: [{
                label: 'Type 3',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 20, 200, 300, 450],
                pointRadius: 0,
            }, {
                label: 'Type 2',
                borderColor: 'rgb(120, 99, 160)',
                data: [0, 5, 2, 200, 300, 40, 10],
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
            hover: {
                // Overrides the global setting
                mode: 'index'
            },
        },
    });
}

function setupChart2() {
    var ctx = document.getElementById('chart_01').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets:[{
                type: 'line',
                label: "A",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgb(54, 162, 235)",
                borderWidth: 1,
                borderDash: [1, 3],
                strokeStyle: "rgb(54, 162, 235)",
                pointStyle: 'triangle',
            },
            {
                type: 'line',
                label: "B",
                data: [55, 59, 70, 91, 26, 25, 70],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgb(255, 99, 132)",
                borderWidth: 1,
                borderDash: [5, 10],
                strokeStyle: "rgb(255, 99, 132)",
                pointStyle: 'rect',
            },
            {
                type: 'line',
                label: "C",
                data: [70, 43, 33, 62, 53, 93, 30],
                backgroundColor: "rgba(255, 206, 86, 0.2)",
                borderColor: "rgb(255, 206, 86)",
                borderWidth: 1,
                borderDash: [3, 15],
                strokeStyle: "rgb(255, 206, 86)",
                pointStyle: 'star',
            }]
        },
        options: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    boxWidth: 30,
                    fontSize: 16,
                    fontColor: '#333',
                    padding: 20,
                    /*
                    filter: function(items, chartData) {
                        // データセットのインデックスが0(A)でないものを表示します。
                        return items.datasetIndex !== 0;
                    },
                    */
                    usePointStyle: true,
                    generateLabels: function(chart){
                        return  chart.data.datasets.map(function(dataset, i) {
                            return {
                                // plugin.legend.js generateLabels.labelsを参照してください。
                                text: "X",
                                fillStyle: dataset.backgroundColor,
                                hidden: dataset.hidden,
                                lineCap: dataset.borderCapStyle,
                                lineDash: dataset.borderDash,
                                lineDashOffset: dataset.borderDashOffset,
                                lineJoin: dataset.borderJoinStyle,
                                lineWidth: dataset.borderWidth,
                                strokeStyle: dataset.borderColor,
                                pointStyle: dataset.pointStyle,
                                // 以下はデータセットの表示をトグルする場合に使用します。
                                datasetIndex: i
                            };
                        });
                    }
                }
            }
        }
    });
}
setupChart2();
