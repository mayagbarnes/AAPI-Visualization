import HeatmapBackground from './heatmap_background';
const axios = require('axios');
import * as d3 from "d3";
import Attacks from './scatter';
// import Contours from './contour';
import {showHeatMap} from './show_heatmap.js';

const CONSTANTS = {
    shoulderWidth: 900,
    headHeight: 800,
}

document.addEventListener('DOMContentLoaded', () => {
    showHeatMap();
    drawHeatMap();
    
})


export function drawHeatMap() {    

    let svg = d3.select(".heat-map-modal")
        .append("svg").attr("width", CONSTANTS.shoulderWidth).attr("height", CONSTANTS.headHeight);
    
    const heatmap = new HeatmapBackground(svg);
    heatmap.render();

    const hexes = new Attacks(svg);
    hexes.render();

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


