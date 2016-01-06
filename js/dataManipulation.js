var jsonStockData;

function traverseJson(request){
    console.log('transferJson()');
    console.log(request.response.dataset);

    jsonStockData = request.response.dataset.data[4];
    console.log(jsonStockData);
}
