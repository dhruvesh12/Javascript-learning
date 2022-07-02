

//Create a Animals class with properties as name and species and a function called sing that adds 'can sing' string and prints the output.

class Animals{
    constructor(name,specie){

        this.n=name
        this.s=specie
    }

    sing(){
        console.log(`${this.n} Can Sing`)
    }

}
const cat = new Animals('Billi', 'Cat')



cat.sing()

// Output

// Billi Can Sing