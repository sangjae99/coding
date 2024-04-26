function solution(absolutes, signs) {
    var answer = 123456789;
    return answer;
}function solution(absolutes, signs) {
    let sum = 0;
    for (let i = 0; i < absolutes.length; i++) {
        // signs[i]가 true이면 양수, false이면 음수로 처리하여 더함
        sum += signs[i] ? absolutes[i] : -absolutes[i];
    }
    return sum;
}

// 테스트
console.log(solution([4, 7, 12], [true, false, true])); // 예시 입력: 9
console.log(solution([1, 2, 3], [false, false, true])); // 예시 입력: 0
