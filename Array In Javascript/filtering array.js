const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const filterwords=[];

for(let i of inputWords){

    if(i.length > 6){
        filterwords.push(i);
    }

}
console.log(filterwords);

//Output
//[ 'exuberant', 'destruction', 'present' ]