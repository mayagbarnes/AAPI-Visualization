// const CONSTANTS = {
//     ROWS: 50,
//     COLS: 47,
//     WIDTH: 900,
//     HEIGHT: 600,
//     OPACITY: "1.0",
// }

// class Attacks {
//     constructor(svg) {
//         this.svg = svg;

//         d3.csv('./datasets/test.csv')
//             .then(function (d) {
//                 d.forEach((attack) => {
//                     console.log(attack)
//                         if (Number(attack.severity) === 3){
//                             this.render([attack.x, attack.y], "Severe", d);
//                         } else if (Number(attack.severity) === 2){
//                             this.render([attack.x, attack.y], "Moderate", d);
//                         } else {
//                             this.render([attack.x, attack.y], "Minor", d);
//                         }
//                 })
//             }.bind(this));
//     }

//     render(position, severity, data) {
//         var margin = {top: 10, right: 30, bottom: 30, left: 40};

//         // Add X axis
//             var x = d3.scaleLinear()
//                 .domain([0,900])
//                 .range([ margin.left, CONSTANTS.WIDTH - margin.right ]);
//             this.svg.append("g")
//                 .attr("transform", "translate(0," + CONSTANTS.HEIGHT + ")")
//                 .call(d3.axisBottom(x));

//         // Add Y axis
//             var y = d3.scaleLinear()
//                 .domain([0,600])
//                 .range([ CONSTANTS.HEIGHT - margin.bottom, margin.top ]);
//             this.svg.append("g")
//                 .call(d3.axisLeft(y));

//         if(severity === "Severe") {
//             this.svg.append("g")
//                 .selectAll("dot")
//                 .data([position])
//                 .enter().append("circle")
//                 .attr("cx", position[0] )
//                 .attr("cy", position[1] )
//                 .attr("r", 10)
//                 .attr("stroke", "white")
//                 .attr('transform', 'translate(250, 52.5)')
//                 .attr("fill", "#301b3f")
//                 .attr("fill-opacity", CONSTANTS.OPACITY)
//                 .attr("stroke-width", "0.1px");
//         } else if (severity === "Moderate") {
//             // this.svg.append("g")
//             //     .selectAll(".hexagon")
//             //     .data(hexbin([position]))
//             //     .enter().append("path")
//             //     .attr("d", function (d) {
//             //         return "M" + d.x + "," + d.y + hexbin.hexagon();
//             //     })
//             //     .attr("stroke", "white")
//             //     .attr('transform', 'translate(250, 52.5)')
//             //     .attr("fill", "#7b113a")
//             //     .attr("fill-opacity", CONSTANTS.OPACITY)
//             //     .attr("stroke-width", "0.1px");
//         } else if (severity === "Minor")  {

//             // Prepare a color palette
//             var color = d3.scaleLinear()
//                 .domain([0, 1]) // Points per square pixel.
//                 .range(["white", "#69b3a2"])
//             // compute the density data
//             var densityData = d3.contourDensity()
//                 .x(function(d) { return x(d.x); })
//                 .y(function(d) { return y(d.y); })
//                 .size([CONSTANTS.WIDTH, CONSTANTS.HEIGHT])
//                 .bandwidth(5)
//                 (data)
//             console.log(densityData)

//             this.svg.insert("g", "g")
//                     .selectAll("path")
//                     .data(densityData)
//                     .enter().append("path")
//                     .attr("d", d3.geoPath())
//                     .attr("fill", function(d) { return color(d.value); })

//             // this.svg.append("g")
//             //     .selectAll(".hexagon")
//             //     .data(hexbin([position]))
//             //     .enter().append("path")
//             //     .attr("d", function (d) {
//             //         return "M" + d.x + "," + d.y + hexbin.hexagon();
//             //     })
//             //     .attr("stroke", "white")
//             //     .attr('transform', 'translate(250, 52.5)')
//             //     .attr("fill", "#c64756")
//             //     .attr("fill-opacity", CONSTANTS.OPACITY)
//             //     .attr("stroke-width", "0.1px");
//         }
//     }

// }

// export default Attacks;
