$(document).ready(function(){
    //enable listeners
    $('#tag-search').submit(function(event){event.preventDefault();instagram_api($(this));})
    //load default page
    /*PLACE FUNCTION HERE THAT LOADS PICTURES ON PAGE LOAD */
    ajax_call('Gross')

    
});

var results;

function ajax_call(tag){

    var stocks = {};
    $.ajax({
        url:'https://www.quandl.com/api/v3/datasets/WIKI/FB.json',
        type:'GET',
        dataType:'json',
        success:function(data){
            /* PLACE FUNCTION HERE */
            stocks = data;

            // return stocks;
            console.log(stocks);
            images_response(stocks);
            
        },
        error:function(data){
            console.log(data);
        }
        
    });