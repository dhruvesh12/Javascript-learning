const userDetails = { 
    name: { first: "Kapil", last: "Raghuwanshi", }, 
    jobTitle: "JS Instructor@Almabetter.com", 
    email: { work: "kapil@google.com", personal: "", }, 
    status: { isOnline: true, isVerified: false, } 
}

userDetails.name.first="john";
userDetails.name.last="Snow";
userDetails.isProMember=false;
console.log(userDetails)

/*Output

{
  name: { first: 'john', last: 'Snow' },
  jobTitle: 'JS Instructor@Almabetter.com',
  email: { work: 'kapil@google.com', personal: '' },
  status: { isOnline: true, isVerified: false },
  isProMember: false
}
*/