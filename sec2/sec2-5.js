// N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는
// 프로그램을 작성하세요.



function solution(a){

    let answer =[]
    let number = 1;

    for(let i=0; i<a.length; i++){
        for(let j=0; j<a.length; j++){
            if(a[i]<a[j]){
                number++;
            }
        }
        answer.push(number);
        number=1;
    }   
    return answer ;

}

a = [87, 89, 92, 100, 76]
    
console.log(solution(a));
     
