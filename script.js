const addTask = document.getElementById('addTask');
const task_popup = document.getElementById('task_popup');
addTask.addEventListener('click', () => {
    console.log("addTask button clicked");
    task_popup.classList.add("active");
})
