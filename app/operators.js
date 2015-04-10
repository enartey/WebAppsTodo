define(function() {

	var Operators;

	makeOperator = function(ops) {
      ops = ops || {};

      return {
         get: function(s) { return ops[s]; },
         add: function(s, f) { ops[s] = f; },
         all: function() { return Object.keys(ops); },
         has: function(s) {
            return ops.hasOwnProperty(s);
         }
      };
   };

   function makeArithmetic() {
   	return Operators.new({
   		"+": function(x, y) { return x + y; },
   		"-": function(x, y) { return x - y; },
   		"*": function(x, y) { return x * y; },
   		"/": function(x, y) { return x / y; }
	});
   }

   Operators = {
   	new: makeOperator,
   	arithmetic: makeArithmetic
   };

	return Operators;
});