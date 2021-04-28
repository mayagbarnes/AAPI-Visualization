const CONSTANTS = {
    ROWS: 50,
    COLS: 47,
    WIDTH: 900,
    HEIGHT: 600,
    OPACITY: "1.0",
}

class Attacks {
    constructor(svg) {
        this.svg = svg;

        d3.csv('./datasets/test.csv')
            .then(function (d) {
                d.forEach((attack, i) => {
                    console.log(attack)
                        if (Number(attack.severity) === 3){
                            this.render([attack.x, attack.y], "Severe");
                        } else if (Number(attack.severity) === 2){
                            this.render([attack.x, attack.y], "Moderate");
                        } else {
                            this.render([attack.x, attack.y], "Minor");
                        }
                })
            }.bind(this));
    }

    render(position, severity) {

        const hexbin = d3.hexbin().radius(20);
        if(severity === "Severe") {
            this.svg.append("g")
                .selectAll(".hexagon")
                .data(hexbin([position]))
                .enter().append("path")
                .attr("d", function (d) {
                    return "M" + d.x + "," + d.y + hexbin.hexagon();
                })
                .attr("stroke", "white")
                .attr('transform', 'translate(250, 52.5)')
                .attr("fill", "#301b3f")
                .attr("fill-opacity", CONSTANTS.OPACITY)
                .attr("stroke-width", "0.1px");
        } else if (severity === "Moderate") {
            this.svg.append("g")
                .selectAll(".hexagon")
                .data(hexbin([position]))
                .enter().append("path")
                .attr("d", function (d) {
                    return "M" + d.x + "," + d.y + hexbin.hexagon();
                })
                .attr("stroke", "white")
                .attr('transform', 'translate(250, 52.5)')
                .attr("fill", "#7b113a")
                .attr("fill-opacity", CONSTANTS.OPACITY)
                .attr("stroke-width", "0.1px");
        } else if (severity === "Minor")  {
            this.svg.append("g")
                .selectAll(".hexagon")
                .data(hexbin([position]))
                .enter().append("path")
                .attr("d", function (d) {
                    return "M" + d.x + "," + d.y + hexbin.hexagon();
                })
                .attr("stroke", "white")
                .attr('transform', 'translate(250, 52.5)')
                .attr("fill", "#c64756")
                .attr("fill-opacity", CONSTANTS.OPACITY)
                .attr("stroke-width", "0.1px");
        }
    }

    
}

export default Attacks;