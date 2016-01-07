

//Passing a value from HTML into a function: http://stackoverflow.com/questions/7957039/passing-value-from-text-input-into-javascript-function

// function testFunction(){
//     var input = document.getElementById('stockUrl'),
//         stockUrl = input.value;
//     if (stockUrl) {
//         console.log(stockUrl);
//     }
// }


// function ajaxCall(){
//     console.log('ajaxCall');
//     var input = document.getElementById('stockUrl'),
//         stockUrl = input.value;
//     console.log(stockUrl);
//     if (stockUrl) {

//         console.log('if statement');

//         apiCall = new XMLHttpRequest();
//         apiCall.onreadystatechange = function(){
//             console.log('onreadystatechange');
//             if( apiCall.readystate == 4 && apiCall.status == 200)
//                 { console.log(apiCall.responseText); }
//             else {
//                 console.log('Error: '+ apiCall.readystate);
//             }
//         };
//     }
// //parameters of apiCall(method, url of api, async:true/false)
// //for reference: http://www.w3schools.com/ajax/ajax_xmlhttprequest_send.asp
//     console.log('apiCall.open');
//     apiCall.open("GET", 'https://www.quandl.com/api/v3/datasets/WIKI/WRB.json?auth_token=SQ6hUVEtaezYxrtDK__i', true);
//     apiCall.send();

// }

//url for W.R. Berkley Corp
//https://www.quandl.com/api/v3/datasets/WIKI/WRB.json?auth_token=SQ6hUVEtaezYxrtDK__i


//simple AJAX test


// var stockObj;

var request;


function simpleAjax(){
    request = new XMLHttpRequest()
    console.log(request);
    request.open('GET', 'https://www.quandl.com/api/v3/datasets/WIKI/ALEX.json?auth_token=SQ6hUVEtaezYxrtDK__i');
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


