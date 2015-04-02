// Main file that loads things up.
// Called from require.js

require.config({
   baseUrl: "app",
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

      // TODO: Create a model instance
      model = new Model();
      // model.on("change", function(o) {
      //    console.log("Change!", o);
      // });
      // model.on("error", function(o) {
      //    console.log("Ooops!");
      // });
      model.set("x", 4);
      model.set("y", "2");  // Should turn it into number 2
      model.set("y", "Huh??"); // Should produce an error
      console.log("model: ", model);
      // TODO: Create a controller instance
      controller = new Controller("main", model);
   });
});
