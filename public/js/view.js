console.log('=============================================================');
console.log('view.js                                                  ');
console.log('=============================================================');
$(document).ready(function() {
  // Getting a reference to the input field where user adds a new todo
  var newItemInput = $("input.new-item");
  // Our new todos will go inside the todoContainer
  var burgerContainer = $(".burger-container");
  // Adding event listeners for deleting, editing, and adding todos
  // $(document).on("click", "button.delete", deleteBurger);
  // $(document).on("click", "button.complete", toggleComplete);
  // $(document).on("click", ".burger-item", editBurger);
  // $(document).on("keyup", ".burger-item", finishEdit);
  // $(document).on("blur", ".burger-item", cancelEdit);
  $(document).on("submit", "#burger-form", insertBurger);

  // Our initial burgers
  var burgers;

  // Getting todos from database when page loads
  getBurgers();

  // This function resets the todos displayed with new todos from the database
  function initializeRows() {
    burgerContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < burgers.length; i++) {
      rowsToAdd.push(createNewRow(burgers[i]));
    }
    burgerContainer.prepend(rowsToAdd);
  }

  // This function grabs todos from the database and updates the view
  function getBurgers() {
    $.get("/api/burgers", function(data) {
      console.log("THESE ARE THE BURGERS FROM api/burgers Burgers", data);
      burgers = data;
      initializeRows();
    });
  }

  // // This function deletes a todo when the user clicks the delete button
  // function deleteBurger() {
  //   var id = $(this).data("id");
  //   $.ajax({
  //     method: "DELETE",
  //     url: "/api/burgers/" + id
  //   })
  //   .done(function() {
  //     getBurgers();
  //   });
  // }

  // // This function sets a todos complete attribute to the opposite of what it is
  // // and then runs the updateTodo function
  // function toggleComplete() {
  //   var burger = $(this)
  //     .parent()
  //     .data("burger");

  //   burger.complete = !burger.complete;
  //   updateBurger(burger);
  // }

  // // This function handles showing the input box for a user to edit a todo
  // function editBurger() {
  //   var currentBurger = $(this).data("burger");
  //   $(this)
  //     .children()
  //     .hide();
  //   $(this)
  //     .children("input.edit")
  //     .val(currentBurger.text);
  //   $(this)
  //     .children("input.edit")
  //     .show();
  //   $(this)
  //     .children("input.edit")
  //     .focus();
  // }

  // // This function starts updating a todo in the database if a user hits the
  // // "Enter Key" While in edit mode
  function finishEdit(event) {
    var updatedBurger;
    if (event.key === "Enter") {
      updatedBurger = {
        id: $(this)
          .data("burger")
          .id,
        text: $(this)
          .children("input")
          .val()
          .trim()
      };
      $(this).blur();
      updateBurger(updatedBurger);
    }
  }

  // // This function updates a todo in our database
  function updateBurger(burger) {
    $.ajax({
      method: "PUT",
      url: "/api/burgers",
      data: burger
    })
    .done(function() {
      getBurgers();
    });
  }

  // // This function is called whenever a todo item is in edit mode and loses focus
  // // This cancels any edits being made
  // function cancelEdit() {
  //   var currentBurger = $(this).data("burger");
  //   $(this)
  //     .children()
  //     .hide();
  //   $(this)
  //     .children("input.edit")
  //     .val(currentBurger.text);
  //   $(this)
  //     .children("span")
  //     .show();
  //   $(this)
  //     .children("button")
  //     .show();
  // }

  // // This function constructs a todo-item row
  // function createNewRow(burger) {
  //   var newInputRow = $("<li>");
  //   newInputRow.addClass("list-group-item todo-item");
  //   var newTodoSpan = $("<span>");
  //   newTodoSpan.text(todo.text);
  //   newInputRow.append(newTodoSpan);
  //   var newTodoInput = $("<input>");
  //   newTodoInput.attr("type", "text");
  //   newTodoInput.addClass("edit");
  //   newTodoInput.css("display", "none");
  //   newInputRow.append(newTodoInput);
  //   var newDeleteBtn = $("<button>");
  //   newDeleteBtn.addClass("delete btn btn-default");
  //   newDeleteBtn.text("x");
  //   newDeleteBtn.data("id", todo.id);
  //   var newCompleteBtn = $("<button>");
  //   newCompleteBtn.addClass("complete btn btn-default");
  //   newCompleteBtn.text("✓");
  //   newInputRow.append(newDeleteBtn);
  //   newInputRow.append(newCompleteBtn);
  //   newInputRow.data("burger", burger);
  //   if (burger.complete) {
  //     newTodoSpan.css("text-decoration", "line-through");
  //   }
  //   return newInputRow;
  // }

  // This function inserts a new BURGER into our database and then updates the view
  function insertBurger(event) {
    event.preventDefault();
    // if (!newItemInput.val().trim()) {   return; }
    var burger = {
      text: newItemInput
        .val()
        .trim(),
      complete: false
    };
  };

  //   // Posting the new todo, calling getTodos when done
  //   $.post("/api/burgers", burger, function() {
  //     getBurgers();
  //   });
  //   newItemInput.val("");
  // }

});
