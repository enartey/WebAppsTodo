# Sample TODO Application

This document describes a TODO application that we will be building as the class progresses.

You should model your project's proposal similarly.

## Description

Our TODO app is meant to provide users with a way to manage their tasks.

Users will be able to keep track of a list of "tasks", include deadlines and completion status, color-code them in categories, and filter their view of the tasks in various ways.

## Specific operations

This section will describe the specific tasks that users should be able to accomplish.

- The user should be able to see the list of tasks they currently have
- The user should be able to create a new task to be added to the list
- The user should be able to mark a task as completed
- The user should be able to edit existing tasks
- The user should be able to set and change due dates for the tasks
- The user should be able to set labels/tags on tasks.
- The user should be able to adjust the view so that it shows tasks only for specific labels or dates.

As time permits:

- The user should be able to calibrate the labels/tags, choosing colors/names for them and adding new ones.
- The tasks should at least persist across multiple sessions (e.g. close and reopen window).
- The tasks ideally should persist across multiple machines (need some account management system).
- Should be able to read/write lists of tasks from/to plain text (or perhaps markdown)
- Should be able to filter the list of tasks based on a keyword

## Necessary Components

### Models

- Task
    - Each task should have an associated text
    - Optional due date
    - List of "labels/tags"
    - Completion state
    - Should have convenience methods to test whether it has a certain tag and to toggle a tag

- Tasks
    - List holding all tasks
    - Can add/remove tasks
    - Can "filter" tasks before showing them in the UI

- Tag(s)
    - A tag has settable name and color
    - Editable list of tags

### Views/Controls

- List of items, one for each visible task.
    - Each item:
        - Shows name
        - Shows due date in appropriate form (days till due if close)
        - Date icon to change the date
        - Contains checkbox to mark task as completed or not
        - Appears "crossed out" if task is completed
        - Contains "bubbles" for each label/tag the task has
        - Contains pulldown menu to add a tag
        - Double-clicking the name should make it "editable"
    - There's an input row to type in new task
        - Using "#" offers tag completion options
        - Button or Enter for creating a new issue
        - Should be able to use same interface when "editing" a task
    - There should be filters for showing only completed/active tasks
    - There should be filters for showing/hiding tasks with certain tags
    - There should be ways to order the filters by date or group by tags etc
- List of tags
    - Each tag:
        - Has an editable name and a color selectable from a palette
        - Has an option to delete it
        - Can be dragged to an item to set it
        - Has checkboxes to hide the tag, or to show only this tag
    - Can reorder the list by dragging the tags around
    - Need an edit box to add new tag
