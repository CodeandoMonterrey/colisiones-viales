var margin = {top: 10, right: 10, bottom: 80, left: 70},
    width = 700 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("#causas").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("../data/causas.tsv", type, function(error, data) {
  x.domain(data.map(function(d) { return d.causa; }));
  y.domain([0, d3.max(data, function(d) { return d.percances; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .selectAll("text")
        .style('font-size','8')
        .attr('transform','rotate(-65)');

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Percances");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.causa); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.percances); })
      .attr("height", function(d) { return height - y(d.percances); })
      .on("mouseover", function(d) {
        console.log(d);
      });

});

function type(d) {
  d.percances = +d.percances;
  return d;
}