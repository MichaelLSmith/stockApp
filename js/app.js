
//Simple Test Data array
var testData = [ [1, 5], [2,10], [3,15], [4,20], [5,25], [6,30] ];
var stockData = stockListing.dataset.data;

//Set size of SVG
var outerWidth = 500;
    outerHeight = 250;
    buffer = 10;
    margin = {left: 30, top: 30, right: 30, bottom: 30};
var innerWidth  = outerWidth  - margin.left - margin.right;
var innerHeight = outerHeight - margin.top  - margin.bottom;

//create svg element in DOM
var svg = d3.select("body").append("svg")
    .attr("width", outerWidth)
    .attr("height", outerHeight)

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var path = g.append("path");

//Axes function definitions
var xAxisG = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + (outerHeight - margin.bottom ) + ")");

var yAxisG = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top  + ")");

//Scale creation
// var xScale = d3.scale.linear().range([0, innerWidth]);
var xScale = d3.time.scale().range([0, innerWidth]);
var yScale = d3.scale.linear().range([innerHeight, 0]);

//Line creation
var line = d3.svg.line()
    .x(function (d) {return xScale( d[0] ); })
    .y(function (d) {return yScale( d[1] ); });

// create yAxis
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");

// create yAxis
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

//parse Stock Data from API to convert date from string into number


//need to change date from string of 2015-01-01 into date number that d3 can chart on graph
//it will be in milliseconds. Need to convert it and then replace it in the data array along side
//the stock price. I might need to create a new array of just the two values.

//consider moving the array manipulation functionality into another file (possibly api.js or separate data manipulation file if api gets long).
var newData = [];

function dateParse(stockInfo){
    var counter = -1
    stockData.forEach (function (d){
        counter++;
        newData[counter] = [Date.parse(stockData[counter][0]) , stockData[counter][1] ];
    });
}

dateParse(stockData);
console.log(newData);

// console.log(stockData[0][0]);

//Create chart function
function render(data){
   xScale.domain( d3.extent(data, function (d) { return d[0]; }));
   yScale.domain( d3.extent(data, function (d) { return d[1]; }));

   //console.log('d[0]'); console.log(d[0]);
   //console.log('d[1]'); console.log(d[1]);
   // console.log('call dateParse()');
   // dateParse(data);

   //call dateParse function. Go through stock date in data array and return parsedData to chart line with.
  // console.log('newData'); 
  // console.log(newData);


    path.attr("d", line(data), function (d) { return d} );
    //problem is with scale not axis. Need to parse date so it can be drawn as a line.

    xAxisG.call(xAxis);
    yAxisG.call(yAxis);

}

render(newData);