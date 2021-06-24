function solution(left, right) {
    let answer = 0;
    let min=left;
    
    for(min; min<=right; min++){
        let count =0;
        for(let x=1; x<=min; x++){
            if(min%x==0){
                count++;
            }
        }
        if(count%2==0){
            answer+=min;
        }else answer-=min;
    }
    
    
    return answer;
}