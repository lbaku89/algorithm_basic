let arr = [
    [1,2],
    [3,4],
    [5,6]
]

let arr2 = arr;

arr2[0]=arr[0].reduce((a,b)=>{return a+b},0)

let a = arr[0].reduce((a,b)=>{
    return a+b
},0)
console.log(arr2[0])