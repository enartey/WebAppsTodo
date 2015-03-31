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

   function objectify(key, value) {
      var o = {};
      o[key] = value;
      return o;
   }

   Model.prototype = {
      // TODO: Compute sets result based on the other settings
      compute: function() {
         this.result = NaN;
      },
      // TODO: Set x, y, operator as appropriate
      // Should accept either key/value or an object
      // Should also call compute
      // Validate
      set: function(key, value) {
         if (arguments.length > 1) {
            key = objectify(key, value);
         }
         // From this point on: key is an object of key-value pairs
         console.log("object:", key);
         if (!this.validate(key)) {
            
         }
      // TODO: Should we somehow notify someone?
      },
      // TODO: Just return value at key
      get: function(key) {

      },
      validate: function(changes) {

      }
   };

   return Model;

});
