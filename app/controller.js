// TODO: Need to install the text plugin
define(["jquery", "handlebars", "text!./template.handlebars"],

function($, Handlebars, tmplText) {

   var template, Controller;

   Handlebars.registerHelper('isSelected', function(current, selected) {
      return current === selected ? "selected" : "";
   });


   template = Handlebars.compile(tmplText);

   function Controller(domElement, model) {
      this.el = $(domElement);
      this.model = model;

      this.render();
      // TODO: Set up handlers at the this.el level
      this.model.on("change", this.render, this);
      // return this; implicit
   };

   Controller.prototype = {
      // TODO: Implement rendering
      render: function() {
         // set the html of element to equal result of applying template
         this.el.html(template(this.model))
       }

   };

   return Controller;

});
