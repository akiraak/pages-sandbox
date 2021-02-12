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

    var ctx = $('#myChart');
    var myBarChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                data: endPrices,
                backgroundColor: "rgba(227, 126, 25, 0.8)",
                pointStyle: 'line',
            }],
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
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
    request.addEventListener('load', (event) => {
        let cvs_array = csvArray(request.responseText);
        makeChart(cvs_array);
    });
    request.open('GET', dataPath, true);
    request.send();
}

getCsv('nikkei_stock_average_daily_jp.csv');
