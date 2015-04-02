define(function() {

   var Model, operators;

   operators = (function() {
      var ops = {};

      return {
         get: function(s) { return ops[s]; },
         add: function(s, f) { ops[s] = f; },
         all: function() { return Object.keys(ops); },
         has: function(s) {
            return ops.hasOwnProperty(s);
         }
      };
   }());

   operators.add("+", function(x, y) { return x + y; });
   operators.add("-", function(x, y) { return x - y; });
   operators.add("*", function(x, y) { return x * y; });
   operators.add("/", function(x, y) { return x / y; });


   function Model() {
      // The two operands
      this.operators = operators.all();
      this.events = {};
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
         var f = operators.get(this.operator);
         this.result = f(this.x, this.y);
         return this;
      },
      // TODO: Set x, y, operator as appropriate
      // Should accept either key/value or an object
      // Should also call compute
      // Validate
      set: function(key, value) {
         var changes;

         changes = arguments.length > 1
                 ? objectify(key, value)
                 : key;

         if (!this.validate(changes)) {
            this.trigger('error', this);
            return this;
         }
         for (key in changes) {
            if (changes.hasOwnProperty(key)) {
               this[key] = changes[key];
            }
         }
         this.compute();
         this.trigger('change', this);
         return this;
      },
      // Just return value at key
      get: function(key) {
         return this[key];
      },
      // TODO: Implement
      validate: function(changes) {
         if (changes.hasOwnProperty("x")) {
            changes.x = parseFloat(changes.x);
            if (changes.x != changes.x) { return false; }
         }
         if (changes.hasOwnProperty("y")) {
            changes.y = parseFloat(changes.y);
            if (changes.y != changes.y) { return false; }
         }
         if (changes.hasOwnProperty("operator")) {
            if (!operators.has(changes.operator)) {
               return false;
            }
         }
         return true;
      },
      // Simple event system
      // 1. this.events object initialized at constructor
      // 2. on(event, handler, context)
      // 3. trigger(event, data)
      on: function(event, handler, ctx) {
         var handle = { handler: handler, ctx: ctx || null };
         this.events[event] = this.events[event] || [];
         this.events[event].push(handle);
         return handle;
      },
      trigger: function(event, data) {
         if (this.events[event]) {
            this.events[event].forEach(function(handle) {
               handle.handler.call(handle.ctx, data);
            });
         }
         return this;
      }
   };

   return Model;

});
