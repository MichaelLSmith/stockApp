

//Passing a value from HTML into a function: http://stackoverflow.com/questions/7957039/passing-value-from-text-input-into-javascript-function

function testFunction(){
    var input = document.getElementById('stockUrl'),
        stockUrl = input.value;
    if (stockUrl) {
        console.log(stockUrl);
    }
}


function ajaxCall(){
    console.log('ajaxCall');
    var input = document.getElementById('stockUrl'),
        stockUrl = input.value;
    console.log(stockUrl);
    if (stockUrl) {

        console.log('if statement');

        apiCall = new XMLHttpRequest();
        apiCall.onreadystatechange = function(){
            console.log('onreadystatechange');
            if( apiCall.readystate == 4 && apiCall.status == 200)
                { console.log(apiCall.responseText); }
            else {
                console.log('Error: '+ apiCall.readystate);
            }
        };
    }
//parameters of apiCall(method, url of api, async:true/false)
//for reference: http://www.w3schools.com/ajax/ajax_xmlhttprequest_send.asp
    console.log('apiCall.open');
    apiCall.open("GET", 'https://www.quandl.com/api/v3/datasets/WIKI/WRB.json?auth_token=SQ6hUVEtaezYxrtDK__i', true);
    apiCall.send();

}

//url for W.R. Berkley Corp
//https://www.quandl.com/api/v3/datasets/WIKI/WRB.json?auth_token=SQ6hUVEtaezYxrtDK__i


//simple AJAX test

var request;
// var stockObj;

function simpleAjax(){
    console.log('simpleAjax()');
    request = new XMLHttpRequest();

    request.open('GET', 'https://www.quandl.com/api/v3/datasets/WIKI/ALEX.json?auth_token=SQ6hUVEtaezYxrtDK__i');
    request.send();
    console.log(request);
    console.log(request.status);
    console.log(typeof request.responseText);
    var stockObj = JSON.parse('{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}');
    console.log(stockObj);
    // console.log(request.response);
    // console.log(request.responseText);
}