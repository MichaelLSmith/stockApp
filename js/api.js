//ajax function from instagramAPI project 

//function ajax_call(tag){

//     // var photos={};
//     $.ajax({
//         url: 'https://www.quandl.com/api/v3/datasets/FRED/USARGDPQDSNAQ.json',
//         type:'GET',
//         // data:{clientId:'61f8b631abd34732a3bcd8c73d0d73a9'},
//         dataType:'json',

//         success:function(data){
//             /* PLACE FUNCTION HERE */
//             photos = data;
//             console.log(photos);
//             // images_response(photos);
//             getData(data);

            
//         },
//         error:function(data){
//             console.log(data);
//         }
//     });

// }

function ajax_call(url){
    apiCall = new XMLHttpRequest();
    apiCall.onreadystatechange = function{
        if( apiCall.readystate == 4 && apiCall.status == 200)
            { console.log(apiCall.responseText); };
    };

//parameters of apiCall(method, url of api, async:true/false)
//for reference: http://www.w3schools.com/ajax/ajax_xmlhttprequest_send.asp
    apiCall.open("GET", url, true);
    apiCall.send();

}