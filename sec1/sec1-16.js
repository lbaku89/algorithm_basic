// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하
// 세요.
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

function solution(string){

    let answer = ''

    for(let i=0; i<string.length; i++){
    
        if(string.indexOf(string[i])===i) answer+=string[i]
        }

    return answer;

}

string = 'ksekkset'
console.log(solution(string));
     