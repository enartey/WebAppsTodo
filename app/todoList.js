define(["./structures", "./todoStorage", "./todoTask", "./structures/event"],
function(structures, TodoStorage, TodoTask, Event) {

// Model for a todoTask collection

   var mixin, newClass;

   mixin = structures.mixin;
   newClass = structures.newClass;

   TodoList = newClass(function init() {
      this.tasks = TodoStorage.fetch();
   });

   mixin(TodoList.prototype, {
      fetch: function() {
         // Fetches newest entries from storage
      },
      newTodo: function() {
         // Creates and returns a new todo
         // Needs to notify storage
      },
      remove: function(todo) {
         // Removes todo. It is enough to have the right id
         // Needs to notify storage
      },
      update: function(todo) {
         // Updates the entries in a todo
         // Needs to notify storage
      },
      filter: function(predicate) {
         // filters todos based on a predicate
         // Simple determines which todos are in the list
         // Not which are in storage
      },
      sort: function(compare) {
         // reorders the todos
      },
      toggleCompleted: function(todo) {
         // Marks a todo as completed
         // Needs to notify storage
      }
   },
   // Mix in observer pattern
   // Provides `on`, `off`, `trigger`
   Event.prototype);

   // What events should be observable?
   // - change: When anything changes (add/remove/update/filter/sort etc)
   // - what else?
   // Here is a list of events provided in
   // [Backbone](http://backbonejs.org/#Events-catalog)

   return TodoList;

});
