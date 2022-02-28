let form = document.getElementById('myForm');
let itemList = document.getElementById('items');
// add event listner to from
form.addEventListener('submit', addItem);
//function addItem
function addItem(e) {
    e.preventDefault();

    let newItem = document.getElementById('itemText').value;
    //read description 
    let descr = document.getElementById('desc').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(`${newItem}`));
    // create delete button
    let delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right bg-danger delete';
    //Append text in button
    delBtn.appendChild(document.createTextNode('X'));
    let edtBtn = document.createElement('button');
    edtBtn.className = 'btn btn-success btn-sm float-right edit';
    //Append text in button
    edtBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(delBtn);
    li.appendChild(edtBtn);
    let descLabel = document.createElement('label');
    descLabel.className = 'text-info';
    let linebreak = document.createElement('br');
    li.appendChild(linebreak);
    descLabel.appendChild(document.createTextNode(descr));
    li.appendChild(descLabel);
    itemList.appendChild(li);
}

//Remove item in the list
itemList.addEventListener('click', removeItem);

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?..')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//
let filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItems);

function filterItems(e) {
    let text = e.target.value.toLowerCase();
    //Getb Items
    let items = itemList.getElementsByTagName('li');
    //convert to array
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        let itemDesc = item.lastChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1 || itemDesc.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }

    });
}