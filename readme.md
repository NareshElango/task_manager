# Task Management Application

This is a simple task management application consisting of a frontend written in HTML, CSS, and JavaScript, and a backend written in Go using the Gin web framework.

## Frontend (HTML, CSS, JavaScript)

### `index.html`
- The main HTML file for the application.
- It includes a header, a section to display tasks, and a form to add new tasks.
- Linked to `styles.css` for styling and `script.js` for functionality.

### `styles.css`
- Contains the styles for the application, defining the layout, colors, and appearance.

### `script.js`
- Manages the dynamic behavior of the application.
- Communicates with the backend API to fetch, display, add, and delete tasks.
- Uses the Fetch API to make asynchronous requests to the backend.

## Backend (Go)
### `main.go`
- The main Go file for the backend using the Gin web framework.
- Defines a `Task` struct representing a task with properties.
- Initializes mock data for tasks.
- Sets up routes for handling CRUD operations on tasks.
- Implements CORS to allow requests from a specific frontend URL.

## How to Run

1. **Start the Backend Server:**
   - Ensure you have Go installed.
   - Open a terminal and navigate to the directory containing `main.go`.
   - Run `go run main.go`.
   - The backend server will start running at `http://localhost:8080`.

2. **Open the Frontend:**
   - Open `index.html` in a web browser.
   - Ensure the backend server is running to enable communication with the API.

3. **Interact with the Application:**
   - Use the form to add new tasks.
   - Existing tasks will be displayed, and you can delete them by clicking the "Delete" button.

