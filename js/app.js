$(document).ready(function(){
	//enable listeners
	$('#tag-search').submit(function(event){event.preventDefault();instagram_api($(this));})

	//load default page
	/*PLACE FUNCTION HERE THAT LOADS PICTURES ON PAGE LOAD */
	
});

//global variable
var animation ='';
var photos={};

function instagram_api(frm){
	var search = frm.find('input[name="tag_search"]').val();
	ajax_call(search)
	console.log(search);
	/* PLACE FUNCTION HERE */

}
var scroll_images=function(){
	$('#image-container').animate({'top':'-=5'},1,function(){
	});
}

function images_response(data){
	console.log(data);
	images = data.data;
	$('#instagram-pics').html('');
	var image_url="";
	for(image in images){
		var image_url=images[image].images.standard_resolution.url;
		console.log(image_url)


	$('#instagram-pics').append('<li style="background:url('+ "'" + image_url+ "'" + ');background-size:cover;background-position:center center;"> </li>');
	



		/* 
			WRITE THE FUNCTION THAT TAKES THE IMAGE URL AND ADDS THEM TO
			list with the id instagram-pics. You will need to know the following things:

			1. To add html to an element with jquery use this syntax $('#instagram-pics').append('html tag goes in here');
			2. To make sure all images fit in the squares available to them, use these css properties
			   background:url('+image url+'), 
			   background-size:cover
			   background-position:center center
	     */
	}




	$('#image-container').css('top','0px');
	clearInterval(animation);
	animation=setInterval(scroll_images,100);
}

function ajax_call(tag){

	/* 
	complete the AJAX code block below to gather the 20 most recent photos with the tag 
	you searched for

	You can use the following client Id:
	client_id=61f8b631abd34732a3bcd8c73d0d73a9

	*/
	// var photos={};=
	$.ajax({
		url: 'https://www.quandl.com/api/v3/datasets/WIKI/FB.json',
		type:'GET',
		// data:{clientId:'61f8b631abd34732a3bcd8c73d0d73a9'},
		dataType:'json',

		success:function(data){
			/* PLACE FUNCTION HERE */
			photos = data;
       	 	console.log(photos);
       	 	images_response(photos);

			
		},
		error:function(data){
			console.log(data);
		}
	});

}

