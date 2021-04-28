const CONSTANTS = {
    WIDTH: 900,
    HEIGHT: 600,
    OPACITY: "1.0",
}

class Attacks {
    constructor(svg) {
        this.svg = svg;

        // Add X axis
        var x = d3.scaleLinear()
            .domain([0, 800])
            .range([ 0, 800 ]);
        this.svg.append("g")
            .attr("transform", "translate(0," + 600 + ")")
            .call(d3.axisBottom(x));

        var tooltip = d3.select(".heat-map-modal")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "1px")
            .style("border-radius", "5px")
            .style("padding", "10px")

        d3.csv('./datasets/test.csv')
            .then(function (d) {
                d.forEach((attack) => {
                        if (Number(attack.severity) === 3){
                            this.render(attack, [attack.x, attack.y], "Severe", tooltip);
                        } else if (Number(attack.severity) === 2){
                            this.render(attack, [attack.x, attack.y], "Moderate", tooltip);
                        } else {
                            this.render(attack, [attack.x, attack.y], "Minor", tooltip);
                        }
                })
            }.bind(this));
    }

    render(attack, position, severity, tooltip) {

        var mouseover = function(event, d) {
                tooltip
                    .style("opacity", 1)
            }

        var mousemove = function(event, d) {
                tooltip
                    .html(` Date: ${attack.date} <br/>
                            Severity: ${severity} <br/>
                            Description: ${attack.details}`)
                    .style("left", ((d[0]) + "px")) // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
                    .style("top", (d[1] + "px"))
        }

        var mouseleave = function(event, d) {
            tooltip
                .transition()
                .duration(100)
                .style("opacity", 0)
        }


        if(severity === "Severe") {
            this.svg.append("g")
                .selectAll("dot")
                .data([position])
                .enter()
                .append("circle")
                    .attr("cx", position[0] )
                    .attr("cy", position[1] )
                    .attr("r", 10)
                    .attr("stroke", "white")
                    .attr("fill", "#301b3f")
                    .attr("fill-opacity", CONSTANTS.OPACITY)
                    .attr("stroke-width", "0.1px")
                .on("mouseover", mouseover )
                .on("mousemove", mousemove)
                .on("mouseleave", mouseleave )

        } else if(severity === "Moderate") {
            this.svg.append("g")
                .selectAll("dot")
                .data([position])
                .enter()
                .append("circle")
                    .attr("cx", position[0] )
                    .attr("cy", position[1] )
                    .attr("r", 10)
                    .attr("stroke", "white")
                    .attr("fill", "#7b113a")
                    .attr("fill-opacity", CONSTANTS.OPACITY)
                    .attr("stroke-width", "0.1px")
                .on("mouseover", mouseover )
                .on("mousemove", mousemove )
                .on("mouseleave", mouseleave )

        } else if(severity === "Minor") {
            this.svg.append("g")
                .selectAll("dot")
                .data([position])
                .enter()
                .append("circle")
                    .attr("cx", position[0] )
                    .attr("cy", position[1] )
                    .attr("r", 10)
                    .attr("stroke", "white")
                    .attr("fill", "#c64756")
                    .attr("fill-opacity", CONSTANTS.OPACITY)
                    .attr("stroke-width", "0.1px")
                .on("mouseover", mouseover )
                .on("mousemove", mousemove )
                .on("mouseleave", mouseleave )
        } 
    }

    
}

export default Attacks;