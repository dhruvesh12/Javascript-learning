let count = 0


let Inc_count=setInterval(function(){

    count=count+2;
    console.log(count);

    if(count==10){

        clearInterval(Inc_count)
    }
},2000)


// Output

// 2
// 4
// 6
// 8
// 10