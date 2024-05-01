function solution(id_pw, db) {
    // id_pw 배열에서 아이디와 비밀번호를 추출합니다.
    const [inputId, inputPw] = id_pw;
    
    // db 배열을 순회하며 로그인 여부를 확인합니다.
    for (let i = 0; i < db.length; i++) {
        const [dbId, dbPw] = db[i];
        // 아이디가 일치할 경우
        if (inputId === dbId) {
            // 비밀번호도 일치하는 경우 로그인 성공
            if (inputPw === dbPw) {
                return "login";
            } else {
                return "wrong pw"; // 비밀번호가 일치하지 않는 경우
            }
        }
    }
    // 아이디가 일치하는 회원이 없는 경우
    return "fail";
}