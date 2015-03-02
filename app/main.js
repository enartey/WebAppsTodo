// Main file that loads things up.
// Called from require.js

require.config({
   // baseUrl is automatically set to the directory where this main.js file is.
   // Or we can set it in this config:
   baseUrl: "app",
   // This way one can call on jquery and libs directly
   paths: {
      "lib": "../lib",
      "jquery": "../lib/jquery"
   },
   waitSeconds: 15
});

// All other modules should be called through here
require(["jquery", "dataStructures/mixin"], function($, mixin) {
   // mixin
   $(function() {
      console.log("Page loaded!");
   });
   console.log("Other things here");
});
