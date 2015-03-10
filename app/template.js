// Used to load the template for todoLost
define(["handlebars", "text!../template.handlebars"], function(Handlebars, tmpl) {

   // We can add Handlebars helpers here

   // Return a compiled template
   return Handlebars.compile(tmpl);
});
