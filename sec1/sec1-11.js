// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램
// 을 작성하세요.



function solution(string){

    let answer = 0;

    for(let x of string){
        if(x===x.toUpperCase()) answer+=1;
    }    

    return answer

}

string = 'aaaaaaa'
input = 'R'

console.log(solution(string));
     
