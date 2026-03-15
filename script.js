// 1. SELECTING DOM ELEMENTS
// We use getElementById to find the HTML elements we want to interact with.
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// 2. ADDING AN EVENT LISTENER
// This listens for a "click" on the Add button, then runs the function inside.
addButton.addEventListener("click", function() {
    
    // Get the text the user typed and remove any extra spaces from the ends (.trim)
    const taskTextValue = taskInput.value.trim();

    // Prevent the app from adding empty tasks
    if (taskTextValue === "") {
        alert("Please enter a task!");
        return; // Stops the function here
    }

    // 3. CREATING NEW DOM ELEMENTS
    // createElement() builds new HTML tags entirely in JavaScript
    const newTaskItem = document.createElement("li");
    
    // Create a span to hold the actual text
    const taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskTextValue;
    taskTextSpan.classList.add("task-text");

    // Create a container for our complete and delete buttons
    const actionButtons = document.createElement("div");
    actionButtons.classList.add("action-buttons");

    // Create the Complete Button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Done";
    completeBtn.classList.add("complete-btn");

    // Create the Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.classList.add("delete-btn");

    // 4. EVENT LISTENERS FOR DYNAMIC ELEMENTS
    // How to mark a task as completed:
    // We toggle a CSS class on the list item when the "Done" button is clicked.
    completeBtn.addEventListener("click", function() {
        newTaskItem.classList.toggle("completed");
    });

    // How to remove a task:
    // We call the remove() method on the list item when "Remove" is clicked.
    deleteBtn.addEventListener("click", function() {
        newTaskItem.remove(); // This deletes the item from the DOM completely
    });

    // 5. MODIFYING THE DOM (APPENDING)
    // Now we piece it all together. 
    // Put the Complete and Delete buttons inside the actionButtons div
    actionButtons.appendChild(completeBtn);
    actionButtons.appendChild(deleteBtn);

    // Put the text and the buttons inside the new list item (li)
    newTaskItem.appendChild(taskTextSpan);
    newTaskItem.appendChild(actionButtons);

    // Finally, put the whole list item inside the unordered list (ul) on the page
    taskList.appendChild(newTaskItem);

    // 6. CLEANUP
    // Clear the input field so the user can type the next task easily
    taskInput.value = "";
});