var auth_url;
var base_url = 'https://www.quandl.com/api/v3/datasets/';

//Passing a value from HTML into a function: http://stackoverflow.com/questions/7957039/passing-value-from-text-input-into-javascript-function

function buildUrl(){
    var input = document.getElementById('stockCode'),
        stockCode = input.value;
    if (stockCode) {
        auth_url = base_url + stockCode + '.json?auth_token=SQ6hUVEtaezYxrtDK__i'
    }
    console.log(auth_url);
}

//function using vanilla AJAX to make api call to Quandl DB
var request;

function apiCall(){
    request = new XMLHttpRequest()
    console.log(request);
    request.open('GET', auth_url);
    console.log(auth_url);
    request.responseType = 'json';

    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {

        //moves jsonData into dataManipulation.js so it can be formated to build d3 chart.
        traverseJson(request);
      }
    }

    request.send();
    console.log(request.status);
}


//url for W.R. Berkley Corp
//https://www.quandl.com/api/v3/datasets/WIKI/WRB.json?auth_token=SQ6hUVEtaezYxrtDK__i


//   WIKI/CSII


//use d3 to parse csv of stock Codes

//creates and array of arrays
d3.text('../stockList/WIKI_tickers.csv', function(data){
    arrayOfCodes = d3.csv.parseRows(data);
    // console.log(arrayOfCodes);
});

//creates an array of objects
d3.csv('../stockList/WIKI_tickers.csv', function(data){
    codesObj=data;
    // console.log(codesObj);
    });




