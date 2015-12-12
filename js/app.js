var chart_obj = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: []
        },
        // {
        //     label: "My Second dataset",
        //     fillColor: "rgba(151,187,205,0.2)",
        //     strokeColor: "rgba(151,187,205,1)",
        //     pointColor: "rgba(151,187,205,1)",
        //     pointStrokeColor: "#fff",
        //     pointHighlightFill: "#fff",
        //     pointHighlightStroke: "rgba(151,187,205,1)",
        //     data: [28, 48, 40, 19, 86, 27, 90]
        // }
    ]
};
var prices = []; 

var getData = function(Stockdata,chart_obj){
    console.log(Stockdata);
  
        //loop through Stockdata and isolate the stock price and copy it into the chart_obj data field
        for(var i = 0; i< Stockdata.dataset.data.length; i++){
            // prices.push(data.dataset.data[i][1]);
            chart_obj.datasets[0].data.push(Stockdata.dataset.data[i][1]);
    };
}

getData(Stockdata,chart_obj);
console.log(chart_obj);


    // Get context with jQuery - using jQuery's .get() method.
	var ctx = $("#myLineChart").get(0).getContext("2d");

    var myLineChart = new Chart(ctx).Line(chart_obj);

    // console.log(data);





// });//end doc.ready


//global variable
// var animation ='';
// var photos={};

// function instagram_api(frm){
// 	var search = frm.find('input[name="tag_search"]').val();
// 	ajax_call(search)
// 	console.log(search);
// 	/* PLACE FUNCTION HERE */

// }

// // var scroll_images=function(){
// // 	$('#image-container').animate({'top':'-=5'},1,function(){
// // 	});
// // }

// function images_response(data){
// 	console.log(data);
// 	images = data.dataset.data;
// 	console.log(images);
// 	$('#myChart').html('');
// 	var image_url="";
// 	for(image in images){
// 		var image_url=images[image].images.standard_resolution.url;
// 		console.log(image_url)


	
	    
// 	}

// }





