var data = [ [1, 5], [2,10], [3,15], [4,20], [5,25], [6,30] ];
console.log(data);


//d3.extent - min and max values in one function


var outerWidth = 500;
    outerHeight = 250;
    margin = {left: 30, top: 30, right: 30, bottom: 30};

var innerWidth  = outerWidth  - margin.left - margin.right;
console.log('innerWidth');
console.log(innerWidth);

var innerHeight = outerHeight - margin.top  - margin.bottom;
console.log('innerHeight');
console.log(innerHeight);


var svg = d3.select("body").append("svg")
    .attr("width", outerWidth)
    .attr("height", outerHeight);
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
var path = g.append("path");
var axis = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + 230 + ")");


var xScale = d3.scale.linear().range([0, innerWidth]);
var yScale = d3.scale.linear().range([innerHeight, 0]);

var line = d3.svg.line()
    .x(function (d) {return xScale(d[0]); })
    .y(function (d) {return yScale(d[1]); });

// create yAxis
    var xAxis = d3.svg.axis()
                  .scale(xScale)
                  .orient("bottom");




// Add the x-axis.
    


// create left yAxis
    var yAxisLeft = d3.svg.axis()
// Add the y-axis to the left
    

function render(data){
    xScale.domain( d3.extent(data, function (d) { return d[0]; }));
    yScale.domain( d3.extent(data, function (d) { return d[1]; }));


    path.attr("d", line(data));
    axis.call(xAxis);

}

render(data);