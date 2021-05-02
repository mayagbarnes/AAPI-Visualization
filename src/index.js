const axios = require("axios");
import { includeHTML } from "./includeHTML";
import { router } from "./hashRouter.js";

document.addEventListener("DOMContentLoaded", () => {
  // This code will render the correct HTML file according to
  // the hash.
  // TODO: this code assumes that the hash is a valid HTML filename
  const root = document.getElementById("root");
  if (window.location.hash) {
    root.setAttribute("include-html", window.location.hash.slice(2));
  }
  router();
});
