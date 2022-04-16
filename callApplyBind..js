const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  // function call 
  person.fullName.call(person1);

  //function apply
  person.fullName.apply(person1);

  //function bind  
  let fullName = pers.fullName.bind(member);
  