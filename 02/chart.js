function makeChart(cvs_ar) {
    var dates = []
    var dailies = []
    var totals = []
    for(var index = 1; index < cvs_ar.length; ++index) {
        let elem = cvs_ar[index]
        dates.push(elem[0]);
        totals.push(elem[1]);
        if(index == 1) {
            dailies.push(elem);
        } else if(elem[0] == '2020/4/22') {
            dailies.push(0);
        } else {
            dailies.push(cvs_ar[index][1] - cvs_ar[index - 1][1]);
        }
    }

    var ctx = $('#myChart');
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dates,
            datasets: [{
                label: '死亡者数',
                data: dailies,
                backgroundColor: "rgba(227, 126, 25, 0.8)"
            }],
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMax: 100,
                        suggestedMin: 0,
                        stepSize: 10,
                        callback: function(value, index, values){
                            return  value +  '人'
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
    for(let row of cvs_str.split("\n")) {
        result.push(row.split(','));
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

getCsv('death_total.csv');
