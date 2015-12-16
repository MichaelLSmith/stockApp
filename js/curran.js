//Below: Two rects from Slide 60 of Curran's d3 talk
var scale = d3.scale.linear()
        .domain([1, 5])   // Data space
        .range([0, 200]); // Pixel space

      var svg = d3.select("body").append("svg")
        .attr("width",  250)
        .attr("height", 250);

      svg.selectAll("rect")
          .data(data)
        .enter().append("rect")
          .attr("x", function (d){ return scale(d); })
          .attr("y", 50)
          .attr("width",  20)
          .attr("height", 20);

//Below: Line chart from Slide 98 of Curran's d3 talk

      var outerWidth = 500;
      var outerHeight = 250;
      var margin = { left: 30, top: 30, right: 30, bottom: 30 };
      var xColumn = "timestamp";
      var yColumn = "temperature";

      var svg = d3.select("body").append("svg")
        .attr("width",  outerWidth)
        .attr("height", outerHeight);
      var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      var path = g.append("path");

      var innerWidth  = outerWidth  - margin.left - margin.right;
      var innerHeight = outerHeight - margin.top  - margin.bottom;

      var xScale = d3.time.scale().range([0, innerWidth]);
      var yScale = d3.scale.linear().range([innerHeight, 0]);

      var line = d3.svg.line()
        .x(function(d) { return xScale(d[xColumn]); })
        .y(function(d) { return yScale(d[yColumn]); });

      function render(data){
        xScale.domain( d3.extent(data, function (d){ return d[xColumn]; }));
        yScale.domain( d3.extent(data, function (d){ return d[yColumn]; }));
        path.attr("d", line(data));
      }

      function type(d){
        d.timestamp = new Date(d.timestamp);
        d.temperature = +d.temperature;
        return d;
      }

      d3.csv("week_temperature_sf.csv", type, render);