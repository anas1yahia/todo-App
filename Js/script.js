// 1. Verify selectors match HTML IDs
const addTaskBtn = document.querySelector('.add-task');
const popupContainer = document.querySelector('.popup-container');
const closeIcon = document.querySelector('.close-icon');
const cancelBtn = document.querySelector('.btn-cancel');
const taskTitleInput = document.querySelector('input[name="task-title"]'); // Update selector
const taskDescInput = document.querySelector('textarea[name="task-description"]'); // Update selector
const createTaskBtn = document.querySelector('.btn-create');
const tasksContainer = document.querySelector('.tasks-container');



addTaskBtn.addEventListener('click', () => {
    popupContainer.classList.add('show');
});

closeIcon.addEventListener('click', () => {
    popupContainer.classList.remove('show');
});

cancelBtn.addEventListener('click', () => {
    popupContainer.classList.remove('show');
});





function createTaskElement(title, description, priority = 'Low') {
    const taskBody = document.createElement('div');
    taskBody.className = 'task-body';
    
    taskBody.innerHTML = `
        <div class="task">
            <div class="task-top">
                <div class="task-preiority">    
                    <span>${priority}</span>
                </div>
                <i class="ri-more-2-fill"></i>
            </div>
            <div class="task-content">
                <h6>${title}</h6>
                <span>${description || 'No description provided'}</span>
            </div>
            <div class="task-bottom">
                <div class="invited-members-task">
                    <img src="../public/images/avatar.png" alt="Avatar">
                    <img src="../public/images/avatar.png" alt="Avatar">
                </div>
                <div class="task-attatchment">
                    <button>
                        <i class="ri-chat-1-line"></i>
                        <span>comments</span>
                    </button>
                    <button>
                        <i class="ri-attachment-line"></i>
                        <span>attatchment</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    return taskBody;
}



createTaskBtn.addEventListener('click', () => {
    const title = taskTitleInput.value;
    if (!title) return;
    
    const description = taskDescInput.value;
    const newTask = createTaskElement(title, description);
    
    tasksContainer.append(newTask);
    
    // Reset form and close popup
    taskTitleInput.value = '';
    taskDescInput.value = '';
    popupContainer.classList.remove('show');
});



