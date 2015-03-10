define(function() {

   var todos, TodoStorage, id;

   // array storing the todos
   // ideally would be saving them in a more permanent location
   todos = [];
   id = 0;

   // Notice the CRUD operations
   // All storages should provide those 4 operations
   TodoStorage = {
      create: function(todo) {
         // Create and return a new todo
         // id will be generated
      },
      read: function(id) {
         // Return the todo with a given id
      },
      update: function(todo) {
         // Updates the entry for "todo" based on the entries in todo
      },
      delete: function(id) {
         // Deletes the entry for the todo with a given id
      }
      fetch: function() {
         // Return an array of all todos
         // Probably can merge with `read`
      }
   };

   return TodoStorage;

});
