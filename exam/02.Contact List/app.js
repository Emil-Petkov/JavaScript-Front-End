window.addEventListener('load', solve);

function solve() {
    const addContactBtn = document.getElementById('add-btn');
    const nameField = document.getElementById('name');
    const phoneField = document.getElementById('phone');
    const categoryDropdown = document.getElementById('category');
    const verificationList = document.getElementById('check-list');
    const finalContactList = document.getElementById('contact-list');

    function clearInputFields() {
        nameField.value = '';
        phoneField.value = '';
        categoryDropdown.selectedIndex = 0;
    }

    addContactBtn.addEventListener('click', () => {
        const nameValue = nameField.value.trim();
        const phoneValue = phoneField.value.trim();
        const categoryValue = categoryDropdown.value;

        if (!nameValue || !phoneValue || categoryValue === '') {
            return;
        }

        const newContactItem = document.createElement('li');
        newContactItem.innerHTML = `
            <article>
                <p>name:${nameValue}</p>
                <p>phone:${phoneValue}</p>
                <p>category:${categoryValue}</p>
            </article>
            <div class="buttons">
                <button class="edit-btn">Edit</button>
                <button class="save-btn">Save</button>
            </div>
        `;

        verificationList.appendChild(newContactItem);

        clearInputFields();

        newContactItem
            .querySelector('.edit-btn')
            .addEventListener('click', () => {
                nameField.value = nameValue;
                phoneField.value = phoneValue;
                categoryDropdown.value = categoryValue;
                verificationList.removeChild(newContactItem);
            });

        newContactItem
            .querySelector('.save-btn')
            .addEventListener('click', () => {
                newContactItem.querySelector('.edit-btn').remove();
                newContactItem.querySelector('.save-btn').remove();

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.className = 'del-btn';
                newContactItem.appendChild(deleteBtn);

                finalContactList.appendChild(newContactItem);

                deleteBtn.addEventListener('click', () => {
                    finalContactList.removeChild(newContactItem);
                });
            });
    });
}
