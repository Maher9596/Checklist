const marked = require("marked");

document.getElementById("content").innerHTML =
      marked('# Marked on browser \n\nRendered by **marked**.');