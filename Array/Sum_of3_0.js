let num = Math.floor(Math.random() *10) + 5;
console.log("Given Number by Random for No.of Elements: "+num);
let randNumArr = new Array();
for(i=0; i<num; i++){
    let number = Math.floor(Math.random() * 10) -5;
    randNumArr.push(number);
}
console.log("Array of "+num+" Random Numbers:\n["+randNumArr+"]");
let count=0;
for(i=0;i<num-2;i++){
    for(j=1;j<num-1;j++){
        for(k=2;k<num;k++){
            if (randNumArr[i]+randNumArr[j]+randNumArr[k]==0){
                count++;
                console.log(count+":"+"{"+randNumArr[i]+","
                +randNumArr[j]+","+randNumArr[k]+"}");
            }
        }
    }
}
