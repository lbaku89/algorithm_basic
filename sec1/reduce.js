arr = [1,2,3,4,5,6,7,8,9]

let sum = arr.reduce((a,b)=>a+b, 0)

console.log("sum=>",sum);




obj = [
    {name:"철수", age:1},
    {name:"영희", age:2},
    {name:"민수", age:3},
]

let checkIndex= [ ]

const result = obj.reduce((accumulator,item,index)=>{
    checkIndex.push(index);
    return accumulator +=item.age
},0)

console.log(result);
console.log(checkIndex);
