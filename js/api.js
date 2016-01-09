var auth_url;
var base_url = 'https://www.quandl.com/api/v3/datasets/';
var companyCode;
var companyName;
var request;

//Passing a value from HTML into a function: http://stackoverflow.com/questions/7957039/passing-value-from-text-input-into-javascript-function

function buildUrl(code){
    console.log('buildUrl');
    // var input = document.getElementById('stockCode'),
        // stockCode = input.value;
    if (code) {
        auth_url = base_url + code + '.json?auth_token=SQ6hUVEtaezYxrtDK__i'
    }
    console.log(auth_url);
}

//function using vanilla AJAX to make api call to Quandl DB


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
        });

//get data from parsed csv (either array or obj form, prob obj)

function buildResults (codesObj) {
    var input = document.getElementById("codeSearch");
    var myExp = new RegExp(input.value, 'i');
    var output = '<ul class=searchResults>';
    var counter = -1;

    codesObj.forEach(function(company, i){
        if (company.name.search(myExp) != -1 ){

            counter ++;           
            companyCode = company.quandlcode;
            companyName = company.name;
            output += '<li><span id="'+counter+'"'+ 'data-code="'+company.quandlcode+ '"onclick="selectCompany(this.id)">'+company.name+' '+company.quandlcode+'</span></li>'
        }
    });

    output += '</ul>';

    //to output search results as HTML
    document.getElementById("searchResultsBase").innerHTML = output;

}

selectCompany = function(id){
    console.log('selectCompany');
    console.log(id);
    var selectedCompany = document.getElementById(id);
    var code = selectedCompany.dataset.code;

    buildUrl(code);
    apiCall();

}