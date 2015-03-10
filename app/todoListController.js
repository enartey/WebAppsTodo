define(["jquery", "./template", "./structures/mixin", "./structures/newClass"],
function($, template, mixin, newClass) {

   // Controller for a todoList

   var TodoController;
   // The `template` variable is a function that expects an object
   // that contains a `todos` property that in turn contains an
   // array of todos.

   TodoController = newClass(function init(todos, element) {
      this.todos = todos // A TodoList instance
      this.el = $(element);  // The element to contain the list representation
      this.render(); // Create the list in the element
      // Should add here listeners on this.el for various view events
      // ...
      // Also add listeners to "todos"
      this.todos.on("change", modelChanged, this);
   });

   // Instance methods
   mixin(TodoController.prototype, {
      render: function() {
         // Responsible for updating the interface
         // Will probably use the `template` function
         // Sets the `this.el`'s contents
         // Could be as simple as:
         // this.el.html(template({ todos: this.todos }));
      },
      toggleCompleted: function(el) {
         // In response to user asking to toggle completion of element
         // Should delegate to `this.todos`
      },
      enableEditMode: function(el) {
         // In response to user trying to edit a task
      },
      cancelEditMode: function(el) {},
      keyPressed: function(el) {},
      updateFromEdit: function(el) {
         // In response to the user editing a task's test
         // Should delegate to `this.todos`
      },
      modelChanged: function() {
         // The todos list has changed.
         // Rerender element's contents
         // Other methods should not do re-rendering. They should
         // wait for the model update.
         this.render();
         // Maybe other bookkeeping?
      },
      addNewTask: function() {
         // In response to user clicking the new task button
         // Should delegate to `this.todos`
      },
      deleteTask: function(el) {
         // In response to user clicking to delete an element
         // Should delegate to `this.todos`
      }
   });

   return TodoController;
});
