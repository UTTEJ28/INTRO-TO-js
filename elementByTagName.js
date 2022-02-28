let li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
for (let i = 0; i < li.length; i++) {
    if (i == 3) {
        // Make the 3 rd element in the list have green background color
        li[2].style.backgroundColor = 'green';
    }
    //Make all the elements in the list have bold color font
    li[i].style.fontWieght = 'bold';

}