let strings = ["avengers", "captain america", "ironman", "black panther"];


for(let i of strings){

    strings[strings.indexOf(i)]=i.toUpperCase();  
}
console.log(strings);

//Output
//[ 'AVENGERS', 'CAPTAIN AMERICA', 'IRONMAN', 'BLACK PANTHER' ]