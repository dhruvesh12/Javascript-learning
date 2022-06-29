
let count=0;

function randomGame(){

    const timer= setInterval(function(){
        let randomnum=Math.random();
        count++;

        if(randomnum>=.45){
            clearInterval(timer)
            console.log(` it took only ${count} try to get number greater than .45.`)
            console.log(randomnum)
        }else{
            console.log(count,randomnum)
        }
        



    },1000)
}


randomGame()