window.addEventListener('load', solve);

function solve() {
    let formElement = document.querySelector('form');
    let placeElement = document.getElementById('place');
    let actionElement = document.getElementById('action');
    let personElement = document.getElementById('person');

    let addButton = document.getElementById('add-btn');
    addButton.addEventListener('click', onAdd);

    function onAdd(event) {
        event.preventDefault();

        let place = placeElement.value.trim();
        let action = actionElement.value.trim();
        let person = personElement.value.trim();

        if (!place || !action || !person) {
            return;
        }

        let taskLiElement = document.createElement('li');
        taskLiElement.className = 'clean-task';

        taskLiElement.innerHTML = `
            <article>
                <p>Place: ${place}</p>
                <p>Action: ${action}</p>
                <p>Person: ${person}</p>
            </article>
            <div class="buttons">
                <button class="edit">Edit</button>
                <button class="done">Done</button>
            </div>
        `;

        const editBtn = taskLiElement.querySelector('.edit');
        const doneBtn = taskLiElement.querySelector('.done');

        editBtn.addEventListener('click', function () {
            placeElement.value = place;
            actionElement.value = action;
            personElement.value = person;

            taskLiElement.remove();
        });

        doneBtn.addEventListener('click', function () {
            taskLiElement.querySelector('.buttons').remove();

            let deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function () {
                taskLiElement.remove();
            });

            taskLiElement.appendChild(deleteBtn);
            document.getElementById('done-list').appendChild(taskLiElement);
        });

        document.getElementById('task-list').appendChild(taskLiElement);
        formElement.reset();
    }
}
