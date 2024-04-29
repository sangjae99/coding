function solution(s){
    var answer = true;
    let pcount = 0;
    let ycount = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'p' || s[i] === 'P') {
            pcount++;
        } else if(s[i] === 'y' || s[i] === 'Y') {
            ycount++;
        } 
    }
    if(pcount == ycount){
        answer = true;
    } else {
        answer = false;
    }
    return answer
    
}