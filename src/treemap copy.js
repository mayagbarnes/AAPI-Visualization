class Treemap {
    constructor(svg, width, height) {
        this.svg = svg;
        this.width = width;
        this.height = height;
            // // set the dimensions and margins of the graph
            // var margin = {top: 10, right: 10, bottom: 10, left: 10},
            // width = 445 - margin.left - margin.right,
            // height = 445 - margin.top - margin.bottom;

            // // append the svg object to the body of the page
            // var svg = d3.select("#my_dataviz")
            // .append("svg")
            // .attr("width", width + margin.left + margin.right)
            // .attr("height", height + margin.top + margin.bottom)
            // .append("g")
            // .attr("transform",
            //         "translate(" + margin.left + "," + margin.top + ")");
    }

    render() {
        var flatData = [
            {"name": "Origin", "parent": null, "value": null }, 
            {"name": "Chinese", "parent": "Origin", "value": 42.2 },
            {"name": "Korean", "parent": "Origin", "value": 14.8 },
            {"name": "Asian", "parent": "Origin", "value": 9 },
            {"name": "Vietnamese", "parent": "Origin", "value": 8.5 },
            {"name": "Filipino", "parent": "Origin", "value": 7.9 },
            {"name": "Japanese", "parent": "Origin", "value": 6.9 },
            {"name": "Other", "parent": "Origin", "value": 21.4 }
            ];
            // stratify the data: reformatting for d3.js
                var treeData = d3.stratify()
                    .id(function(d) { return d.name; })   // Name of the entity (column name is name in csv)
                    .parentId(function(d) { return d.parent; })   // Name of the parent (column name is parent in csv)
                    (flatData);
            
            treeData.sum(function(d) { return +d.value })   // Compute the numeric value for each entity

            // Then d3.treemap computes the position of each element of the hierarchy
            // The coordinates are added to the root object above
            d3.treemap()
                .size([this.width, this.height])
                .padding(4)
                (treeData)

            console.log(treeData.leaves())
            // use this information to add rectangles:
            this.svg
                .selectAll("rect")
                .data(treeData.leaves())
                .enter()
                .append("rect")
                .attr('class', function (d) { return d.data.name; })
                .attr('x', function (d) { return d.x0; })
                .attr('y', function (d) { return d.y0; })
                .attr('width', function (d) { return d.x1 - d.x0; })
                .attr('height', function (d) { return d.y1 - d.y0; })
                .style("stroke", "black")
                // .style("fill", "#69b3a2");
                

            // and to add the text labels
            this.svg
                .selectAll("text")
                .data(treeData.leaves())
                .enter()
                .append("text")
                .attr("x", function(d){ return d.x0+10})    // +10 to adjust position (more right)
                .attr("y", function(d){ return d.y0+20})    // +20 to adjust position (lower)
                .text(function(d){ return d.data.name})
                .attr("font-size", "18px")
                .attr("font-weight", "700")
                .attr("fill", "black")
    }

}

export default Treemap;