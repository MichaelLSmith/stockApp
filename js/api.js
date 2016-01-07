var stockUrl;
var auth_url;

//Passing a value from HTML into a function: http://stackoverflow.com/questions/7957039/passing-value-from-text-input-into-javascript-function

function buildUrl(){
    var input = document.getElementById('stockUrl'),
        stockUrl = input.value;
    if (stockUrl) {
        auth_url = stockUrl + '?auth_token=SQ6hUVEtaezYxrtDK__i'
    }
    console.log(auth_url);
}

//url for W.R. Berkley Corp
//https://www.quandl.com/api/v3/datasets/WIKI/WRB.json?auth_token=SQ6hUVEtaezYxrtDK__i


var request;


function simpleAjax(){
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


