const CONSTANTS = {
  WIDTH: 800,
  HEIGHT: 700,
  OPACITY: "1.0",
};

class Attacks {
  constructor(svg) {
    this.svg = svg;

    // Add X axis
    // var x = d3.scaleLinear().domain([0, 700]).range([100, 600]);
    // this.svg
    //   .append("g")
    //   .attr("transform", "translate(0," + 600 + ")")
    //   .call(d3.axisBottom(x));

    var tooltip = d3
      .select(".heat-map-tooltip")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "10px");

    d3.csv("./datasets/test.csv").then(
      function (d) {
        d.forEach((attack) => {
          if (Number(attack.severity) === 3) {
            this.render(attack, [attack.x, attack.y], "Severe", tooltip);
          } else if (Number(attack.severity) === 2) {
            this.render(attack, [attack.x, attack.y], "Moderate", tooltip);
          } else {
            this.render(attack, [attack.x, attack.y], "Minor", tooltip);
          }
        });
      }.bind(this)
    );
  }

  render(attack, position, severity, tooltip) {

    var mouseover = function (event, d) {
      tooltip
        .style("opacity", 1)
        .html(
          `<span class='date'> Date: </span> ${attack.date} <br/>
            <span class='severity'> Severity: </span> ${severity} <br/>
            <span class='description'> Description: </span> ${attack.details}`
        )
    };

    var mouseleave = function (event, d) {
      tooltip.style("opacity", 0);
    };

    if (severity === "Severe") {
      this.svg
        .append("g")
        .selectAll("dot")
        .data([position])
        .enter()
        .append("circle")
        .attr("cx", position[0])
        .attr("cy", position[1])
        .attr("r", 10)
        .attr("stroke", "white")
        // .attr("fill", "#301b3f")
        .attr("fill", "#593275")
        .attr("fill-opacity", CONSTANTS.OPACITY)
        .attr("stroke-width", "0.1px")
        .on("mouseover", mouseover)
        .on("mouseleave", mouseleave);
    } else if (severity === "Moderate") {
      this.svg
        .append("g")
        .selectAll("dot")
        .data([position])
        .enter()
        .append("circle")
        .attr("cx", position[0])
        .attr("cy", position[1])
        .attr("r", 10)
        .attr("stroke", "white")
        .attr("fill", "#7b113a")
        .attr("fill-opacity", CONSTANTS.OPACITY)
        .attr("stroke-width", "0.1px")
        .on("mouseover", mouseover)
        .on("mouseleave", mouseleave);
    } else if (severity === "Minor") {
      this.svg
        .append("g")
        .selectAll("dot")
        .data([position])
        .enter()
        .append("circle")
        .attr("cx", position[0])
        .attr("cy", position[1])
        .attr("r", 10)
        .attr("stroke", "white")
        .attr("fill", "#c64756")
        .attr("fill-opacity", CONSTANTS.OPACITY)
        .attr("stroke-width", "0.1px")
        .on("mouseover", mouseover)
        .on("mouseleave", mouseleave);
    }
  }
}

export default Attacks;



    // var mousemove = function (event, d) {
    //   tooltip
    //     .html(
    //       `<span class='date'> Date: </span> ${attack.date} <br/>
    //         <span class='severity'> Severity: </span> ${severity} <br/>
    //         <span class='description'> Description: </span> ${attack.details}`
    //     )
    // };

    // var mouseleave = function (event, d) {
    //   tooltip.transition().duration(100).style("opacity", 0);
    // };

    // var mouseover = function (event, d) {
    //   tooltip
    //     .style("opacity", 1);
    // };