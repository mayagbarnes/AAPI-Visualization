class WordCloud {
    constructor(svg, diameter) {
        this.svg = svg;
        this.diameter = diameter;

    }

    render() {
            var dataset = {
                "children": [{"Name":"Words & Actions","Count":26},
                            {"Name":"Spit On","Count":8},
                            {"Name":"Beaten","Count":4},
                            {"Name":"Kicked","Count":6},
                            {"Name":"Punched","Count":13},
                            {"Name":"Hair Pulled","Count":3},
                            {"Name":"Shoved","Count":6},
                            {"Name":"Stabbed","Count":3},
                            {"Name":"Pepper Spray","Count":3},
                            {"Name":"Go back to your country!","Count":10},
                            {"Name":"You have Covid!","Count":7}]
                    };
            // Coloration options for chart
            var color = {"Words" : "#b4a5a5", 
                        "Spit" : "#04009a", 
                        "Beaten" : "#591851",
                        "Kicked" : "#2978b5", 
                        "Punched" : "#206a5d", 
                        "Hair" : "#c73490",
                        "Shoved" : "#ff6701",
                        "Stabbed" : "#7b22a1", 
                        "Pepper" : "#81b214",
                        "Go" : "#cf0000", 
                        "You" : "#ffb037" }
                // "Stabbed" : "#81b214", 
                // "Pepper" : "#217da3",
            
            // Build chart
            var bubble = d3.pack(dataset)
                .size([650, 650])
                .padding(1.5);


            // Organize circles with sort
            var nodes = d3.hierarchy(dataset)
                .sum(function(d) { return d.Count; })
                .sort(function(a, b) {return -(a.value - b.value);})


            var node = this.svg.selectAll(".node")
                .data(bubble(nodes).descendants())
                .enter()
                .filter(function(d){
                    return  !d.children
                })
                .append("g")
                .attr("class", "node")
                .attr("transform", function(d) {
                    return "translate(" + d.x + "," + d.y + ")";
                });

            // Build bubbles
            node.append("circle")
                .attr("r", function(d) {return d.r})
                .attr("class", function(d) { return d.data.Name.split(" ")[0]})
                .style("fill", function(d) { return color[d.data.Name.split(" ")[0]]});

            // Add title
            node.append("text")
                .attr("dy", ".2em")
                .attr('class', function(d) { return d.data.Name.split(" ")[0]})
                .style("text-anchor", "middle")
                .text(function(d) {
                    return d.data.Name.substring(0, d.r / 3);
                })
                .attr("font-family", "sans-serif")
                .attr("font-size", function(d){
                    return d.r/5.8;
                })
                .attr("fill", "white")
                .attr("font-weight", "500");

            d3.select(self.frameElement)
                .style("height", this.diameter + "px");
                
    }

}

export default WordCloud;