// Main file that loads things up.
// Called from require.js

require.config({
   paths: {
      "jquery": "../lib/jquery",
      "handlebars": "../lib/handlebars-v3.0.0"
      // or the following to load remotely:
      // "jquery": "https://code.jquery.com/jquery-2.1.3.min"
   }
});

// All other modules should be called through here
require(["jquery", "model", "controller"],
function($, Model, Controller) {
   var model, controller;
   $(function() {
      console.log("Page loaded!");
      console.log("Model Constructor:", Model);
      console.log("Controller Constructor:", Controller);

      // TODO: Create a model instance

      // TODO: Create a controller instance

   });
});
