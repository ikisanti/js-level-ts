//! 10-list-filter
//? "Crea una pequeña app que muestre una lista de tareas con estado (completada o no).
//? Permite al usuario marcar tareas como completadas desde un botón, y que el DOM se actualice dinámicamente."

//? const tasks = [
//?     { id: 1, text: "Hacer ejercicio", complete: false },
//?     { id: 2, text: "Estudiar JavaScript", complete: true },
//?     { id: 3, text: "Leer un libro", complete: false }
//? ];

//? What your app should do:
//? Display all tasks in a list with a button: "Mark as complete" or "Completed ✅" depending on their status.
//? When the button is clicked, the status should change and the DOM should update.
//? Use createElement, addEventListener, classList, etc.
//?     Don't use innerHTML.
//? 💡 Bonus(optional):
//? You can apply a.completed class to visually check off the task if it's completed.
//? You can separate the rendering and event handling logic into functions.

const tasks = [
    { id: 1, text: "Hacer ejercicio", complete: false },
    { id: 2, text: "Estudiar JavaScript", complete: true },
    { id: 3, text: "Leer un libro", complete: false }
];

function renderTasks() {
    const list = document.querySelector("#task-list");
    list.innerHTML = ""; // Cleaning container

    tasks.forEach((task) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        if (task.complete) taskDiv.classList.add("completed");

        const text = document.createElement("span");
        text.textContent = task.text;

        const button = document.createElement("button");
        button.textContent = task.complete ? "Completada" : "Marcar como completada";

        button.addEventListener("click", () => {
            task.complete = !task.complete;
            renderTasks(); // Render Again
        });

        taskDiv.appendChild(text);
        taskDiv.appendChild(button);
        list.appendChild(taskDiv);
    });
}

renderTasks();
//*-----------------------------------------------------------------
// const renderTasksShort = () => {
//     const list = document.querySelector("#task-list");
//     list.innerHTML = tasks.map((task, i) => `
//     <div class="task${task.complete ? ' completed' : ''}">
//       <span>${task.text}</span>
//       <button onclick="toggleTask(${i})">
//         ${task.complete ? 'Completada ✅' : 'Marcar como completada'}
//       </button>
//     </div>
//   `).join('');
// };

// const toggleTask = (index) => {
//     tasks[index].complete = !tasks[index].complete;
//     renderTasks();
// };

// renderTasksShort();
//*-----------------------------------------------------------------