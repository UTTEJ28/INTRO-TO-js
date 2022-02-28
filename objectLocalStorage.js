let userDetails = {
    userName: 'Rahul',
    userAge: '25',
    userEmail: 'r@gmail.com'
};
//Convert object in string
let obj_serialized = JSON.stringify(userDetails);
localStorage.setItem('user_details', obj_serialized);
//Convert string to its original format
let obj_deserialized = JSON.parse(localStorage.getItem('user_details'));
console.log(obj_deserialized)