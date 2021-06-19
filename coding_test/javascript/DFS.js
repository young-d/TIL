let n = 3;
let ch = [n + 1];

function DFS(L) {
    if(L === n + 1) {
        let tmp = '';
        for(let i = 1; i <= n; i++) {
            if(ch[i] === 1) tmp += i + '';
        }
        if(tmp.length > 0) console.log(tmp);
    }else {

        
        ch[L] = 1;
        DFS(L + 1);
        ch[L] = 0;
        DFS(L + 1);
    }
}

DFS(1);