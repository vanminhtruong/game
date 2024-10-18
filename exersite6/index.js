const addBtn = document.getElementById('add-btn');
const addFormContainer = document.getElementById('add-form-container');
const overlay = document.getElementById('overlay');
const container = document.getElementById('container');
const saveBtn = document.getElementById('save-btn');
const cancelBtn = document.getElementById('cancel-btn');
const todoList = document.getElementById('todo-list');
let editItem = null;
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];  // Load tasks from localStorage

document.addEventListener('DOMContentLoaded', loadTasks);  // Load tasks when the page is loaded
addBtn.onclick = () => toggleForm(true);
cancelBtn.onclick = () => toggleForm(false);
saveBtn.onclick = saveTask;

function toggleForm(show) {
    if (show) {
        addFormContainer.style.display = 'block'; 
        overlay.style.display = 'block';  
        container.classList.add('blur'); 
    } else {
        addFormContainer.style.display = 'none';  
        overlay.style.display = 'none';  
        container.classList.remove('blur');  
        clearForm();
    }
}

function saveTask() {
    const title = document.getElementById('task-title').value;
    const content = document.getElementById('task-content').value;
    if (!title || !content) return;

    if (editItem) {
        const index = Array.from(todoList.children).indexOf(editItem);
        tasks[index] = { title, content };  
        editItem.querySelector('span').innerHTML = `<strong>${title}</strong>: ${content}`;
        editItem = null;
    } else {
        tasks.push({ title, content });  // Thêm task mới vào mảng tasks
        const li = createTaskElement(title, content);
        todoList.appendChild(li);
    }

    updateLocalStorage();
    toggleForm(false);  // Ẩn form sau khi lưu
}

function editTask(item, title, content) {
    editItem = item;
    document.getElementById('task-title').value = title;
    document.getElementById('task-content').value = content;
    toggleForm(true);  // Hiển thị form với nội dung đã chọn
}

function clearForm() {
    document.getElementById('task-title').value = '';
    document.getElementById('task-content').value = '';
}

function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));  // Lưu task list vào localStorage
}

function loadTasks() {
    tasks.forEach(task => {
        const li = createTaskElement(task.title, task.content);
        todoList.appendChild(li);
    });
}

function createTaskElement(title, content) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span><strong>${title}</strong>: ${content}</span>
        <div>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    li.querySelector('.edit-btn').onclick = () => editTask(li, title, content);
    li.querySelector('.delete-btn').onclick = () => {
        const index = Array.from(todoList.children).indexOf(li);
        tasks.splice(index, 1); 
        li.remove();
        updateLocalStorage();
    };

    return li;
}
