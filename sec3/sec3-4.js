// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출
// 력하는 프로그램을 작성하세요.

function solution(str,t){

    let answer = [];
    let distance = 0;

    for(let x of str){
        if(x===t){
            answer.push(0)
            distance=0;
        }else{
            distance++;
            answer.push(distance)
        }
    }

        distance =0;

    for(let i=str.length-1; i>=0; i--){
        if(str[i]!==t){
            distance++;
            if(distance<answer[i]){
                answer[i]=distance;
            }
        }else{
            distance=0;
        }
    }
    return answer
}
let str = "teachermode"

console.log(solution(str,'e'));
     
