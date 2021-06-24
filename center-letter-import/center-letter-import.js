
function solution(s) {
    let answer = '';
    let min=Math.floor(s.length/2); //abcde -> 2
    for(let x of s){
        if(s.length%2==1){
            answer=s.substr(min, 1);
        }else{
            answer=s.substr(min-1,2);
        }
            
    }
    
    
    
    
    
    return answer;
}