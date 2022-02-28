form = document.getElementById('form');
//Add event
form.addEventListener('submit', saveToLocalStorage)

function saveToLocalStorage(e) {
    e.preventDefault();

    const name = e.target.username.value;
    const email = e.target.email.value;
    let obj = {
            name,
            email
        }
        //local storage can't store same key value so here we pass userEmail as a key because it is unique.
    localStorage.setItem(obj.email, JSON.stringify(obj))
    showUser(obj)
}

function showUser(user) {
    let li = document.createElement('li');
    let UserList = document.getElementById('UserList')
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(`${user.name} - ${user.email}`));


    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-change btn-sm float-right delete bg-danger';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    let btnEdit = document.createElement('button');
    btnEdit.className = 'btn btn-success btn-sm float-right edit';
    btnEdit.appendChild(document.createTextNode('Edit'));
    li.appendChild(btnEdit);

    userList.appendChild(li);

}