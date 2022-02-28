let form = document.getElementsByClassName('.form-inline mb-3');
let itemLIst = document.getElementsById('items');
var li = document.getElementsById('addform');


function addItems(e) {
    e.preventDefault

    let newItem = document.getElementsById('item').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    itemLIst.appendChild(li);
}

//create del btn
let deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-change btn-sm float-right delete';

deleteBtn.appendChild(document.createTextNode('X'));
li.appendChild(deleteBtn);

function removeItem(e) {
    if (e.targrt.classList.contains('delete')) {
        let li = e.targrt.parentElement;
        itemLIst.removeChild(li);
    }
}