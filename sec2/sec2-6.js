// N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는
// 프로그램을 작성하세요.



function solution(arr){
    
    let length = arr.length;
    let answer = Number.MIN_SAFE_INTEGER

    let sum1 =0;
    let sum2 =0;


    for(let i=0; i<length; i++){


        for(let j=0; j<length; j++){
            sum1 += arr[i][j]
            sum2 += arr[j][i]            
        }
        answer = Math.max(sum1,sum2,answer)
        sum1 = sum2 = 0;
    }

    for(let i=0; i<length; i++){

        sum1+=arr[i][i]
        sum2+=arr[i][length-1-i]

       
    }

    answer = Math.max(answer,sum1,sum2);
    return answer
    
}

arr=[[10, 13, 10, 12, 15], 
[12, 39, 30, 23, 11],
[11, 25, 50, 53, 15],
[19, 27, 29, 37, 27],
[19, 13, 30, 13, 19]];

console.log(solution(arr));
     
