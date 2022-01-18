const v = [1,2,3,4,5];

// //2의 배수구하기
// for(let i=0; i<v.length; i++){
//   console.log(v[i]*2);
// }

// //3의 배수구하기
// for(let i=0; i<v.length; i++){
//   console.log(v[i]*3);
// }

function cal( f1 ){
  for(let i=0; i<v.length; i++){
    console.log(f1(v[i]) );
  }
}

// function exp2(ele){
//   return ele * 2;
// }

// const exp2 = ele => ele * 2;
// const exp3 = ele => ele * 3;


//2의 배수
// cal(exp2);
cal(ele => ele * 2);
console.log('----------');
//3의 배수
// cal(exp3);
cal(ele => ele * 3);
