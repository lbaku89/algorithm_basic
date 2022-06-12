// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요..



function solution(arr){

    let answer = '';
    let max = Number.MIN_SAFE_INTEGER

    for(let x of arr){
        
        if(x.length>max){ 
            max = x.length;
            answer = x; 
        }
    }
    return answer;

}


arr = ['5','teacher','time','student','beautiful','good']

console.log(solution(arr));
     
