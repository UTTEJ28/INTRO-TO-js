let form = document.getElementById('form');
//Add Event Listner
form.addEventListener('submit', storeData);

function storeData() {
    let name = document.getElementById('uName').value;
    let email = document.getElementById('uEmail').value;
    localStorage.setItem('UserName', `${name}`);
    localStorage.setItem('userEmail', `${email}`);

}