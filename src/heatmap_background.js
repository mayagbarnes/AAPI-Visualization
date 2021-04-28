class HeatmapBackground {
    constructor(svg) {
        this.svg = svg;
    }

    render() {

        // container dimensions
        const shoulderWidth = 900;
        const headHeight = 600;
        
        // black background
        this.svg.append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', shoulderWidth)
            .attr('height', headHeight)
            .attr('background', "url('./images/body_outline.jpg')")
            .attr('fill', 'transparent');

        // legend - minor
        this.svg.append('rect')
            .attr('x', 800)
            .attr('y', 550)
            .attr('width', 50)
            .attr('height', 12)
            .attr('fill', '#c64756')

        this.svg.append("text")
            .attr("x", 758)
            .attr("y", 555)
            .attr("font-size", 14)
            .attr("dy", ".35em")
            .attr("font-family", "Oswald")
            .text("Minor")
            .style("fill", "#D5D5D5")

        // legend - moderate
        this.svg.append('rect')
            .attr('x', 800)
            .attr('y', 530)
            .attr('width', 50)
            .attr('height', 12)
            .attr('fill', '#7b113a')

        this.svg.append("text")
            .attr("x", 740)
            .attr("y", 535)
            .attr("dy", ".35em")
            .attr("font-size", 14)
            .attr("font-family", "Oswald")
            .text("Moderate")
            .style("fill", "#D5D5D5")

        // legend - severe
        this.svg.append('rect')
            .attr('x', 800)
            .attr('y', 510)
            .attr('width', 50)
            .attr('height', 12)
            .attr('fill', '#301b3f')

        this.svg.append("text")
            .attr("x", 755)
            .attr("y", 515)
            .attr("dy", ".35em")
            .attr("font-size", 14)
            .attr("font-family", "Oswald")
            .text("Severe")
            .style("fill", "#D5D5D5")
    }
}

export default HeatmapBackground;