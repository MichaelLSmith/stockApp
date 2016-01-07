var jsonStockData;
var isolatedStockData = [];

//for hardcoded Data
var dateWithFormatedDate = [];

function traverseJson(request){
    
    var stockData = request.response.dataset.data;
        counter = -1;

//go through array and isolate the closing price [array index 4] for each date.
    stockData.forEach(function (d){
        counter++;
        isolatedStockData[counter]= [Date.parse(stockData[counter][0]) , stockData[counter][4] ];
    })
    console.log(isolatedStockData);

    // render(isolatedStockData);
}
