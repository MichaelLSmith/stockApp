//Create chart function
function render(data){
    console.log('render()');
    console.log(data);
   xScale.domain( d3.extent(data, function (d) { return d[0]; }));
   yScale.domain( d3.extent(data, function (d) { return d[1]; }));

    path.attr("d", line(data), function (d) { return d} );

    xAxisG.call(xAxis);
    yAxisG.call(yAxis);
}