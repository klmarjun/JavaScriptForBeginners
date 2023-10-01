const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Please enter a task!");
    } else {
        const taskText = inputBox.value;
        const listItem = createTaskElement(taskText);
        listContainer.appendChild(listItem);
    }
    inputBox.value = "";
    saveData();
}

function createTaskElement(taskText) {
    const listItem = document.createElement("li");
    listItem.innerHTML = taskText;

    const deleteButton = document.createElement("span");
    deleteButton.innerHTML = "\u00d7";
    deleteButton.addEventListener("click", function () {
        listItem.remove();
        saveData();
    });

    listItem.appendChild(deleteButton);
    listItem.addEventListener("click", function () {
        listItem.classList.toggle("checked");
        saveData();
    });

    return listItem;
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();



