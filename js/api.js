var auth_url;
var base_url = 'https://www.quandl.com/api/v3/datasets/';
var companyCode;

//Passing a value from HTML into a function: http://stackoverflow.com/questions/7957039/passing-value-from-text-input-into-javascript-function

function buildUrl(){
    console.log('buildUrl');

    //need to pass company code into this function from codesObj search results.
    console.log



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

//Search Functionality

    //use d3 to parse csv of stock Codes
    //from http://bl.ocks.org/zross/6702090

    //creates an array of objects
    d3.csv('../stockList/WIKI_tickers.csv', function(data){
        codesObj=data;
        console.log(codesObj);
        });

//get data from parsed csv (either array or obj form, prob obj)

function buildResults (codesObj) {
    var input = document.getElementById("codeSearch");
    // console.log(input.value);

    // console.log(codesObj[0].name);
    // console.log(codesObj[0].quandlcode);

    var myExp = new RegExp(input.value, 'i');

    var output = '<ul class=searchResults>';


    codesObj.forEach(function(company, i){
        // console.log(company);
        if (company.name.search(myExp) != -1 ){
            // console.log(company.name + company.quandlcode);
        output += '<li><span onclick="buildUrl()">'+company.name+'</span></li>'
        }
    })

    output += '</ul>';

    //to output search results as HTML
    document.getElementById("searchResultsBase").innerHTML = output;
}
