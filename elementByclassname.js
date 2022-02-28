let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
for (let i = 0; i < items.length; i++) {
    if (i == 3) {
        // Make the 3 rd element in the list have green background color
        items[2].style.backgroundColor = 'green';
    }
    //Make all the elements in the list have bold color font
    items[i].style.fontWieght = 'bold';

}