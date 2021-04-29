import { includeHTML } from "./includeHTML";
import { drawHeatMap } from "./show_heatmap";

// This is essentially a a router. If the hash of the window location
// changes, this file will attempt to load the appropriate HTML file
// and apply whatever set up is required with a `then` statement

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
    // case "treemap":
    //   includeHTML().then(() => {
    //     drawTreeMap();
    //   });
    //   return;
    default:
      return;
  }
};

window.onhashchange = () => {
  const root = document.getElementById("root");
  root.setAttribute("include-html", window.location.hash.slice(2));

  router();
};
