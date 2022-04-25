/*  this in global scope
    this in a object
    this in a method
    this in a function
    this in a constructor
    this in a class


//this in global scope
this.garage={
    table: 'Dinning table'
}
console.log(this.garage.table);

//this in a object

let king={
    table: "kings table"
}
console.log(king.table)

//this in a method
this.garage={
    table: 'Dinning table',
    cleanTable(){
        console.log(`cleaning ${this.table}`);
    }
}
this.garage.cleanTable();

//this in a function
this.table='my table'
 const kings = function(){
     console.log(`cleaning ${this.table}`)
 }
 kings();

 //this in a constructor
 let myroom=function(name){
    this.table=`${name}'s table`
 }
 const jillroom=new myroom('jill');
 console.log(jillroom.table)

 //this in A class
 class mroom{
    constructor(name){
        this.table=`${name}'s table`
    }
 }
 const bilroom=new mroom('bill');
 console.log(bilroom.table)

/* class student{
   static count=0;  //static variable to call
   constructor(name,age,ph_no,marks){
       this.name=name;
       this.age=age;
       this.ph_no=ph_no;
       this.marks=marks;
       student.countStudent();
   }

   static countStudent(){
       return(student.count++);     //this is how u access static variable
   }

   eligible(){
       if(this.marks >=40){
           console.log(`${this.name} age ${age} is eligible`);
       }
       else if(this.marks<40){
           console.log(`${this.name} age ${age} is not eligible`);
       }
   }
}

const Riya=new student('Riya',18,1234,34);
const Hiya=new student('Hiya',15,2345,35);
const Diya=new student('Diya',16,4567,60);
const Siya=new student('Siya',17,7891,70);
const Rooh=new student('Rooh',19,3456,80);
console.log(student.countStudent());

Riya.eligible();
Hiya.eligible();
Diya.eligible();
Siya.eligible();
Rooh.eligible();






//fat arrow functions
var a=8;
let kiny = a => a**3
console.log(kiny())
let kings = function(){
    return a**3
}
console.log(kings())
let king = () =>{
    return a*a
}
console.log(king())

let kins = function(){
    console.log(arguments[1])
}
kins(2,4,6)
let kin = (...n) =>{
    console.log(n[0])
}
kin(1,3,5)

let bing = function(){
    this.val=1
    setTimeout(function(){
        this.val++
        console.log(this.val)
    },4000)
}
bing();

let bin = () => {
    this.val=1
    setTimeout(function(){
        this.val++
        console.log(this.val)
    },8000)
}
bin();
*/

class student{
    static count=0;  //static variable to call
    constructor(name,age,ph_no,marks){
        this.name=name;
        this.age=age;
        this.ph_no=ph_no;
        this.marks=marks;
    }
  
    eligibleForPlacements(minMarks){
        return (age) =>{
            if(this.marks >= minMarks && this.age >= age)
                console.log(`${this.name}`)
        }
    }
 }
 
 const Riya=new student('Riya',18,1234,34);
 const Hiya=new student('Hiya',15,2345,35);
 const Diya=new student('Diya',16,4567,60);
 const Siya=new student('Siya',18,7891,70);
 const Rooh=new student('Rooh',19,3456,80);
 
 Riya.eligibleForPlacements(40)(18);
 Hiya.eligibleForPlacements(40)(18);
 Diya.eligibleForPlacements(40)(18);
 Siya.eligibleForPlacements(40)(18);
 Rooh.eligibleForPlacements(40)(18);