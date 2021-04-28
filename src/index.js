import HeatmapBackground from './heatmap_background';
const axios = require('axios');
import * as d3 from "d3";
import Attacks from './scatter';
// import Contours from './contour';
import {showHeatMap} from './show_heatmap.js';
import Treemap from './treemap';

// const HEATMAPCONSTANTS = {
    
// }


document.addEventListener('DOMContentLoaded', () => {
    showHeatMap();
    drawHeatMap();
    drawTreeMap();
})


export function drawHeatMap() {    
    let width = 900;
    let height = 800;

    let svg = d3.select(".heat-map-modal")
        .append("svg").attr("width", width).attr("height", height);
    
    const heatmap = new HeatmapBackground(svg);
    heatmap.render();

    const hexes = new Attacks(svg);
    hexes.render();

}

export function drawTreeMap() {    
    // set the dimensions and margins of the graph
        var margin = {top: 10, right: 10, bottom: 10, left: 10},
        width = 900 - margin.left - margin.right,
        height = 900 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    let svg = d3.select(".tree-map-modal")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
    
    const treemap = new Treemap(svg, width, height);
    treemap.render();
}

    // let isbn = '0201558025';
    // axios.get(`/books/${isbn}`)
    // .then((response) => {
    //     console.log(response); 
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });

    // let query = "grace hopper";
    // axios.get(`/search?string=${query}`)
    // .then((response) => {
    //     console.log(response);
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });


