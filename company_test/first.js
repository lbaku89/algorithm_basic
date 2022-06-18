// 두 자연수 a,b 가 주어졌을 때 최소 공배수, 최대 공약수를 구하는 function을 구현하라 


function f1(a,b){

    let answer = [];
    let leastCommonMultiple = 0;
    let greatestCommonFactor = 0; 
    
    // 최대 공약수 구하기
    for(let i=1; i<=Math.min(a,b); i++){
        if(a%i===0 && b%i===0){
            greatestCommonFactor = i ;
        }
    }
    
    let j = Math.max(a,b); 

    // 최소 공배수 구하기
    while(true){
        if(j%a===0 && j%b===0){
            leastCommonMultiple = j;
            break;
        }
        j++;
    }

    answer.push(leastCommonMultiple);
    answer.push(greatestCommonFactor);

    return answer;
}

// test code 
console.log(f1(5,15));
console.log(f1(7,15));
console.log(f1(6,5));
console.log(f1(8,13));
console.log(f1(8,24));