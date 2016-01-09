//Set size of SVG
var outerWidth = 500;
    outerHeight = 250;
    buffer = 10;
    margin = {left: 50, top: 30, right: 30, bottom: 30};
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
        .orient("bottom")
        .ticks(5);

// create yAxis
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .ticks(5);


//Create chart function
function render(data){
   
   xScale.domain( d3.extent(data, function (d) { return d[0]; }));
   yScale.domain( d3.extent(data, function (d) { return d[1]; }));

    path.attr("d", line(data), function (d) { return d} );

    xAxisG.call(xAxis);
    yAxisG.call(yAxis);
}