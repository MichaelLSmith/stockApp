var data = [ [1, 5], [2,10], [3,15], [4,20], [5,25], [6,30] ];
console.log(data);


//d3.extent - min and max values in one function


var outerWidth = 500;
    outerHeight = 250;
    margin = {left: 30, top: 30, right: 30, bottom: 30};


var svg = d3.select("body").append("svg")
    .attr("width", outerWidth)
    .attr("height", outerHeight);
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
var path = g.append("path");

var innerWidth  = outerWidth  - margin.left - margin.right;
var innerHeight = outerHeight - margin.top  - margin.bottom;

var xScale = d3.scale.linear().range([0, innerWidth]);
var yScale = d3.scale.linear().range([innerHeight, 0]);

var line = d3.svg.line()
    .x(function (d) {return xScale(d[0]); })
    .y(function (d) {return yScale(d[1]); });

function render(data){
    xScale.domain( d3.extent(data, function (d) { return d[0]; }));
    yScale.domain( d3.extent(data, function (d) { return d[1]; }));
    path.attr("d", line(data));
}

render(data);