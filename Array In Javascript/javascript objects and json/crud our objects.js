let person = {name: 'John', JobTitle: 'Developer', email: 'almabetter.com',isVerified : false}

console.log(person.name,person.isVerified)

person.isVerified=true;
delete person.name;
person.firstName="john";
person.lastName="Snow";
console.log(person)

//Output
//John false
//{
//  JobTitle: 'Developer',
//  email: 'almabetter.com',
//  isVerified: true,
//  firstName: 'john',
// lastName: 'Snow'
//}