const axios = require("axios");

// import Contours from './contour';
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
