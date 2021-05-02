import WordCloud from "./cloud";

export function drawWordCloud() {
      // Size of the chart
    var diameter = 900;
    var height = 700;
    var width = 650;


  // append the svg object to the body of the page
  var svg = d3.select(".word-cloud-modal")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("class", "bubble");

  const wordcloud = new WordCloud(svg, diameter);
  wordcloud.render();
}
