// function findIndex(arr,ind) {
//     let newArr=[]
//     if (arr.indexOf(ind)!==-1) {
//         console.log('hi');
//         newArr.push(arr.indexOf(ind))
//     }
//     else {
//         console.log('bye');
//         newArr.push()
//     }
//     return newArr
    
// }
// console.log(findIndex([3,2,7,8,],7));




// const survey = [
//     { name: "Steve", answer: 50},
//     { name: "Jessica", answer: 40},
//     { name: "Peter", answer: 34},
//     { name: "Elaine", answer: 34}
//   ];
  
//   let result = survey.every(isOver30);
//   function isOver30(el,index, arr) {
//     if (index === 0) {
//       return true;
//     } else {
//       return (arr[index - 1].answer>30);
//     }
//   }
//   if (result) {
//     console.log('Katta bola');
//   }
//   else {
//     console.log('Yosh bola');
//   }



  const survey = [
    { name: "Steve", answer: 50},
    { name: "Jessica", answer: 40},
    { name: "Peter", answer: 24},
    { name: "Elaine", answer: 34}
  ];
  const result= survey.every(x=> x.answer>30) 
  if (result) {
    console.log('Katta bola');
  }
  else {
    console.log('Yosh bola');
  }



// const arr= [2,4];
// function numberF(value) {
//   return value+'000'
// }
// Array.prototype.calculate = function (logic) {
//     let output =[]
//     for (let index = 0; index < this.length; index++) {
//       output.push(logic(this[index]))
      
//     }
//     return output
//   }
// console.log(arr.calculate(numberF));