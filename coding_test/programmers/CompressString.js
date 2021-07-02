function solution(s) {
    let answer = 0;
    let result = [];

    compress(s);

    answer = result[0];

    function compress(arr, compression = '', unit = 0) {
        if(arr.length < 2) return;

        let len = arr.length;
        let pattern = '';
        let cnt = 0;
        let rest = '';

        if(unit === 0) {
            
            for(let i = len; i >= 1; i--) {
                if(len / i < 2) continue;
                
                pattern = arr.slice(0, i);
                
                for(let part = 1; part < Math.floor(len / i); part++) {
                    if(arr.slice(i * part, i * (part + 1)) === pattern) {
                        cnt++;
                    }else {
                        break;
                    }
                }   
                
                if(cnt > 0) {
                    compression += (cnt + 1) + pattern;
                    break;
                }
            }
            
            unit = pattern.length;
        }else {
            pattern = arr.slice(0, unit);
    
            for(let part = 1; part < Math.floor(len / unit); part++) {
               if(arr.slice(unit * part, unit * (part + 1)) === pattern) {
                    cnt++;
                }else {
                    break;
                }
            }   
            
            if(cnt > 0) {
                compression += (cnt + 1) + pattern;
            }

        }
        
        if(cnt === 0) compression += pattern;
        rest = arr.slice((cnt + 1) * unit, );
        
        if(rest.length >= 2 * unit) {
            result.push(compress(rest, compression, unit).length);
        }else {
            result.push((compression + rest).length);
        }
        console.log(pattern, compression, rest, unit, compression + rest, result);
        
        return compression + rest;
    }

    return answer;
}

console.log(solution('ababcdcdababcdcd'));