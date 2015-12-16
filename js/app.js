var chart_obj = {
    labels: [],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: []
        },
        // {
        //     label: "My Second dataset",
        //     fillColor: "rgba(151,187,205,0.2)",
        //     strokeColor: "rgba(151,187,205,1)",
        //     pointColor: "rgba(151,187,205,1)",
        //     pointStrokeColor: "#fff",
        //     pointHighlightFill: "#fff",
        //     pointHighlightStroke: "rgba(151,187,205,1)",
        //     data: [28, 48, 40, 19, 86, 27, 90]
        // }
    ]
};

var getData = function(Stockdata,chart_obj){
    console.log(Stockdata);
  
    //loop through Stockdata and push dates and prices into the chart_obj label and datasets.data fields
    for(var i = 0; i< Stockdata.dataset.data.length; i++){
        chart_obj.datasets[0].data.push(Stockdata.dataset.data[i][1]);
        chart_obj.labels.push(Stockdata.dataset.data[i][0]);
    };
}

getData(Stockdata,chart_obj);
console.log(chart_obj);

//Code for chart
    // Get context with jQuery - using jQuery's .get() method.
    var ctx = $("#myLineChart").get(0).getContext("2d");

    var myLineChart = new Chart(ctx).Line(chart_obj, chart_options);
