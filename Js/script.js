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




/* filepath: /Volumes/Drive/todo-App-1/js/script.js */


const addSectionBtn = document.querySelector('.add-container').parentElement;
const popup = document.querySelector('.create-section-popup');
const closePopupBtn = document.querySelector('.close-popup');
const cancelButton = document.querySelector('.button-cancel');
const createSectionForm = document.getElementById('createSectionForm');

function showPopup() {
    popup.style.display = 'flex';
}

function hidePopup() {
    popup.style.display = 'none';
    createSectionForm.reset();
}

function createNewSection(title, color) {
    const template = `
        <div class="tasks-container">
            <div class="task-header">
                <div class="task-header-left">
                    <i class="ri-circle-fill" style="color: ${color}"></i>
                    <h3>${title}</h3>
                    <span>0</span>
                </div>
                <button class="add-container" onclick="showPopup()">
                            <i class="ri-add-line"></i>
                </button>
            </div>
        </div>
    `;
    
    document.querySelector('.tasks').insertAdjacentHTML('beforeend', template);
}

addSectionBtn.addEventListener('click', showPopup);
closePopupBtn.addEventListener('click', hidePopup);
cancelButton.addEventListener('click', hidePopup);

createSectionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('sectionTitle').value;
    const color = document.querySelector('input[name="priority"]:checked').value;
    
    createNewSection(title, color);
    hidePopup();
});

