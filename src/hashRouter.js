import { includeHTML } from "./includeHTML";
import { drawHeatMap } from "./drawHeatmap";
import { drawTreeMap } from "./drawTreeMap";
import { drawWordCloud } from "./drawWordCloud";
import { getToday, getWeather } from "./date_weather";
// import { getWeather } from "./xml_test";


// Main router - If the hash url changes, loads appropriate HTML file

export const router = () => {
  switch (window.location.hash.slice(2)) {
    case "home":
      includeHTML().then(() => {
        getToday();
        getWeather();
      });
      return;
    case "injuries":
      includeHTML().then(() => {
        getToday();
        drawHeatMap();
        getWeather();
      });
      return;
    case "ethnicities":
      includeHTML().then(() => {
        getToday();
        drawTreeMap();
        getWeather();
      });
      return;
    case "weapons":
      includeHTML().then(() => {
        getToday();
        drawWordCloud();
        getWeather();
      });
      return;
    default:
      includeHTML().then(() => {
        getToday();
        getWeather();
      });
      return;
  }
};

window.onhashchange = () => {
  const root = document.getElementById("root");
  root.setAttribute("include-html", window.location.hash.slice(2));

  router();
};
