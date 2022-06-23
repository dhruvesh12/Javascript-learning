var var1 = 50;
var var2 = "42F";



if(!isNaN(var1)){

    console.log(`Out of ${var1} and ${var2}, ${var1} is number which is check by isNaN() method`)
}else{
    console.log(`Out of ${var1} and ${var2}, ${var1} is Not number which is check by isNaN() method`)
}

if(isNaN(var2)){

    console.log(`Out of ${var1} and ${var2}, ${var2} is Not number which is check by isNaN() method`)
}else{
    console.log(`Out of ${var1} and ${var2}, ${var2} is number which is check by isNaN() method`)
}

/*

Output

Out of 50 and 42F, 50 is number which is check by isNaN() method
Out of 50 and 42F, 42F is Not number which is check by isNaN() method

*/