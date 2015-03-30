define(function() {

   var Model, operators;

   operators = (function() {
      var ops = {};

      return {
         get: function(s) { return ops[s]; },
         add: function(s, f) { ops[s] = f; },
         all: function() { return Object.keys(ops); }
      };
   }());

   operators.add("+", function(x, y) { return x + y; });
   operators.add("-", function(x, y) { return x - y; });
   operators.add("*", function(x, y) { return x * y; });
   operators.add("/", function(x, y) { return x / y; });


   function Model() {
      // The two operands
      this.operators = operators.all();
      this.set({
         x: Math.random(),
         y: Math.random(),
         operator: this.operators[0]
      });
   }

   Model.prototype = {
      // TODO: Compute sets result based on the other settings
      compute: function() {
         this.result = NaN;
      },
      // TODO: Set x, y, operator as appropriate
      // Should accept either key/value or an object
      // Should also call compute
      set: function(key, value) {

      // TODO: Should we somehow notify someone?
      },
      // TODO: Just return value at key
      get: function(key) {

      }
   };

   return Model;

});
