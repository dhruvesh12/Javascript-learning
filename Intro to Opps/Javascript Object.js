//Create a JavaScript Object called User which has 2 properties fName and lName and try printing the lName in Console.

let names = { fname: "Dillion", lname: "Megida" }


class user{
    constructor(){

        this.fname=names.fname
        this.lname=names.lname
    }
}

let obj= new user()


console.log(obj.lname)

// Output

// Megida