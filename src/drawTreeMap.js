import Treemap from "./treemap";

export function drawTreeMap() {
  // set the dimensions and margins of the graph
  var margin = { top: 10, right: 10, bottom: 10, left: 10 },
    width = 700 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  let svg = d3
    .select(".tree-map-modal")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const treemap = new Treemap(svg, width, height);
  treemap.render();
}
