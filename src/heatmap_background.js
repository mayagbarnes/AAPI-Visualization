class HeatmapBackground {
  constructor(svg) {
    this.svg = svg;
  }

  render() {
    // container dimensions
    const shoulderWidth = 900;
    const headHeight = 600;

    // legend - minor
    this.svg
      .append("rect")
      .attr("x", 90)
      .attr("y", 575)
      .attr("width", 50)
      .attr("height", 16)
      .attr("fill", "#c64756");

    this.svg
      .append("text")
      .attr("x", 0)
      .attr("y", 580)
      .attr("font-size", 22)
      .attr("dy", ".35em")
      .attr("font-family", "Oswald")
      .text("Minor")
      .style("fill", "black");

    // legend - moderate
    this.svg
      .append("rect")
      .attr("x", 90)
      .attr("y", 605)
      .attr("width", 50)
      .attr("height", 16)
      .attr("fill", "#7b113a");

    this.svg
      .append("text")
      .attr("x",0)
      .attr("y", 610)
      .attr("dy", ".35em")
      .attr("font-size", 22)
      .attr("font-family", "Oswald")
      .text("Moderate")
      .style("fill", "black");

    // legend - severe
    this.svg
      .append("rect")
      .attr("x", 90)
      .attr("y", 635)
      .attr("width", 50)
      .attr("height", 16)
      .attr("fill", "#593275");

    this.svg
      .append("text")
      .attr("x", 0)
      .attr("y", 640)
      .attr("dy", ".35em")
      .attr("font-size", 22)
      .attr("font-family", "Oswald")
      .text("Severe")
      .style("fill", "black");
  }
}

export default HeatmapBackground;
