function makeChart(cvs_ar) {
    var dates = []
    var endPrices = []
    
    for(let row of cvs_ar) {
        date = row[0]
        var pattern = /^\d{4}\/\d{2}\/\d{2}$/g;
        var result = date.match(pattern);
        if(result) {
            dates.push(result[0]);
            let value = Number(row[1]);
            endPrices.push(value);
        }
    }

    //var ctx = $('#myChart');
    var ctx = document.getElementById('chart_01').getContext('2d');
    var myBarChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                data: endPrices,
                backgroundColor: "rgba(255, 255, 255, 0)",
                pointStyle: 'line',
            }],
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        callback: function(value, index, values){
                            return  value +  '円'
                        }
                    }
                }]
            },
            legend: {
                display: false
            },
        }
    });
}


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
            hover: {
                // Overrides the global setting
                mode: 'index'
            },
        },
    });
}

function csvArray(cvs_str) {
    var result = [];
    for(let row of cvs_str.split('\n')) {
        let noQuotes = row.replace(/"/g, '');
        let value = noQuotes.split(',')
        result.push(value);
    }
    return result;
}

function getCsv(dataPath) {
    const request = new XMLHttpRequest();
    /*
    request.addEventListener('load', (event) => {
        let cvs_array = csvArray(request.responseText);
        makeChart(cvs_array);
    });
    */
    request.open('GET', dataPath, false);
    request.send(null);
    //return request.responseText;
    return csvArray(request.responseText);
}

let csv = getCsv('nikkei_stock_average_daily_jp.csv');
makeChart(csv);
