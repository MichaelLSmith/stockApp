function ajax_call(tag){

    // var photos={};
    $.ajax({
        url: 'https://www.quandl.com/api/v3/datasets/FRED/USARGDPQDSNAQ.json',
        type:'GET',
        // data:{clientId:'61f8b631abd34732a3bcd8c73d0d73a9'},
        dataType:'json',

        success:function(data){
            /* PLACE FUNCTION HERE */
            photos = data;
            console.log(photos);
            // images_response(photos);
            getData(data);

            
        },
        error:function(data){
            console.log(data);
        }
    });

}