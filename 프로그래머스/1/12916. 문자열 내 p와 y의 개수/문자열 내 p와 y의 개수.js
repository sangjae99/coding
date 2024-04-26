function solution(s){
    var answer = true;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}function solution(s) {
    // 소문자로 변환하여 비교하기 쉽게 함
    s = s.toLowerCase();
    
    // 'p'와 'y'의 개수를 담을 변수 초기화
    let pCount = 0;
    let yCount = 0;
    
    // 문자열을 순회하면서 'p'와 'y'를 찾음
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'p') {
            pCount++;
        } else if (s[i] === 'y') {
            yCount++;
        }
    }
    
    // 'p'와 'y'의 개수가 같으면 true, 아니면 false 반환
    return pCount === yCount;
}

// 테스트
console.log(solution("pPoooyY")); // 예시 입력: true
console.log(solution("Pyy")); // 예시 입력: false
