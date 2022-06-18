

function f2(array){

    let answer = 0;
    let count =0;


    let average = array.reduce((previousValue,currentValue)=>{ return previousValue+currentValue },0)/array.length;

    for(let x of array){
        if(x>average){
            count++
        }        
    }

    answer = (count/array.length).toFixed(2);
    return answer

}

let array = [1,2,3,4,5,6,7,10,11,20,100]
console.log(f2(array));