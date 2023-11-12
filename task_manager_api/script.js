// script.js

document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('tasks');
    const addTaskForm = document.getElementById('add-task-form');

    // Function to fetch tasks from the backend API
    const fetchTasks = async () => {
        try {
            const response = await fetch('http://localhost:8080/tasks');
            const data = await response.json();

            if (response.ok) {
                displayTasks(data.tasks);
            } else {
                console.error('Error:', data.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Function to display tasks on the page
    const displayTasks = (tasks) => {
        taskList.innerHTML = '';

        tasks.forEach((task) => {
            const li = document.createElement('li');
            li.innerHTML = `
          <h3>${task.title}</h3>
          <p>${task.description}</p>
          <p>Due Date: ${task.due_date}</p>
          <p>Status: ${task.status}</p>
          <button class="delete-button" data-id="${task.id}">Delete</button>
        `;

            taskList.appendChild(li);
        });

        // Add event listeners to delete buttons
        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach((button) => {
            button.addEventListener('click', deleteTask);
        });
    };

    // Function to add a new task
    const addTask = async (event) => {
        event.preventDefault();
        console.log('Adding task...');
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('due-date').value;

        const newTask = {
            title,
            description,
            due_date: dueDate,
            status: 'Pending',
        };

        try {
            const response = await fetch('http://localhost:8080/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask),
            });
            const data = await response.json();

            if (response.ok) {
                fetchTasks();
                addTaskForm.reset();
            } else {
                console.error('Error:', data.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Function to delete a task
    const deleteTask = async (event) => {
        const taskId = event.target.dataset.id;

        try {
            const response = await fetch(`http://localhost:8080/tasks/${taskId}`, {
                method: 'DELETE',
            });
            const data = await response.json();

            if (response.ok) {
                fetchTasks();
            } else {
                console.error('Error:', data.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Fetch tasks when the page loads
    fetchTasks();

    // Add event listener to the add task form
    addTaskForm.addEventListener('submit', addTask);
});
