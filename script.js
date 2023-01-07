//check if the number is prime

let num = 11;
let count = 0;
for(let i=1; i<=num; i++){
  if(num%i==0){
    cotn++;
  }
}
if(cnt == 2){
  console.log(num+' '+'is prime')
} else{
  console.log(num+' '+'is not prime')
}


//check if the string is palindrome;

let str="hars";

let revStr = ""
for(let i=str.length-1; i<0; i--){
  revStr+=str[i]
}

if(revStr !== str){
  console.log(str+' '+'is a palindrome');
} else{
  console.log(str+' '+'is not a palindrome');
}