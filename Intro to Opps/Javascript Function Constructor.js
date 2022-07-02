// Create a JavaScript constructor function called Animals which accepts 2 input parameters (name and specie) as
//  arguments and stores them internally. Now create a proto function called sing that prints the name of the animal with 'can sing' returned at the end.

const dog = new Animals('Pogo', 'Dog')

function Animals(name,specie){

    this.name=name;
    this.specie=specie;

}


Animals.prototype.proto =function(){
    console.log(`${this.name} can sing`);
}





dog.proto()


// Output

// Pogo can sing