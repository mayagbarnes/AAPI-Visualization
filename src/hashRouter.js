import { includeHTML } from "./includeHTML";
import { drawHeatMap } from "./drawHeatmap";
import { drawTreeMap } from "./drawTreeMap";
import { drawWordCloud } from "./drawWordCloud";


// Main router - If the hash url changes, loads appropriate HTML file

export const router = () => {
  switch (window.location.hash.slice(2)) {
    case "home":
      includeHTML();
      return;
    case "heatmap":
      includeHTML().then(() => {
        drawHeatMap();
      });
      return;
    case "treemap":
      includeHTML().then(() => {
        drawTreeMap();
      });
      return;
    case "wordcloud":
      includeHTML().then(() => {
        drawWordCloud();
      });
      return;
    default:
      includeHTML();
      return;
  }
};

window.onhashchange = () => {
  const root = document.getElementById("root");
  root.setAttribute("include-html", window.location.hash.slice(2));

  router();
};
