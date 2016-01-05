

//Passing a value from HTML into a function: http://stackoverflow.com/questions/7957039/passing-value-from-text-input-into-javascript-function

function testFunction(){
    var input = document.getElementById('stockUrl'),
        stockUrl = input.value;
    if (stockUrl) {
        console.log(stockUrl);
    }
}


// function ajax_call(url){
//     console.log('ajax_call');
//     apiCall = new XMLHttpRequest();
//     apiCall.onreadystatechange = function(){
//         if( apiCall.readystate == 4 && apiCall.status == 200)
//             { console.log(apiCall.responseText); };
//     };

// //parameters of apiCall(method, url of api, async:true/false)
// //for reference: http://www.w3schools.com/ajax/ajax_xmlhttprequest_send.asp
//     apiCall.open("GET", url, true);
//     apiCall.send();

// }