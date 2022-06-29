const input = [1,[2,[3,[4,[5,[6,[7]]]]]]]
const newList =[];

function flatten(input){

  for(let i=0;i<input.length;i++){
    

    if(Array.isArray(input[i])){

      flatten(input[i]);
    }else{
      newList.push(input[i])
    }
  }





}


flatten(input);
console.log(newList);

// Output

// [
//   1, 2, 3, 4,
//   5, 6, 7
// ]