//cintunue
for (let i=1;i<=20;i++){
    if(i%2===0){
        continue;
    }
    console.log(i);
}


//break
for (let j=1;j<=20;j++){
    if(j===15){ //when j is 15, the loop will stop
        break;
    }
    if (j%2===0){
        continue; //skip even numbers maile ehaa 2 ta loop use gareko cha
    }
    console.log(j);
}