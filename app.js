document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Cargar tareas existentes
    const loadTasks = async () => {
        const response = await fetch('/tasks');
        const tasks = await response.json();
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `${task.task} <button onclick="deleteTask(${task.id})">Eliminar</button>`;
            taskList.appendChild(li);
        });
    };

    // Agregar una nueva tarea
    taskForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const task = taskInput.value;

        await fetch('/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ task })
        });

        taskInput.value = '';
        loadTasks();
    });

    // Eliminar tarea
    window.deleteTask = async (id) => {
        await fetch(`/tasks/${id}`, { method: 'DELETE' });
        loadTasks();
    };

    loadTasks();
});
