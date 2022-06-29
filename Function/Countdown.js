function countdown(a){

    let count=setInterval(function(){

        a--;

        if(a<=-1){

            clearInterval(count)
            
            console.log("done")
            
        }else{
            console.log(a)
        }


    },1000)


}

countdown(10);

// Output

// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// done