// Generate random points for scatterplot
var data = d3.range(100).map(function(d) {
  return {
    x: Math.random() * 500,
    y: Math.random() * 500
  };
});

// Create scatterplot
var scatterplot = d3.select("#scatterplot");
scatterplot.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", function(d) { return d.x; })
  .attr("cy", function(d) { return d.y; })
  .attr("r", 5)
  .attr("fill", "red");

// Load Titanic dataset and create pie chart
d3.csv("titanic.csv").then(function(data) {
  var ageCounts = d3.rollup(data, v => v.length, d => d.Age);
  var ageData = Array.from(ageCounts, ([age, count]) => ({ age: age, count: count }));
  
  var piechart = d3.select("#piechart");
  var pie = d3.pie()
    .value(function(d) { return d.count; });
  var arcs = piechart.selectAll("arc")
    .data(pie(ageData))
    .enter()
    .append("g")
    .attr("class", "arc");
  arcs.append("path")
    .attr("d", d3.arc()
      .innerRadius(0)
      .


