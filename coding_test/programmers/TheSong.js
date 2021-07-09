function solution(m, musicinfos) {
    let answer = '';
    let obj = {};
    m = m.split('').reduce((acc, element) => {
        if(element === '\#') acc[acc.length - 1] += '#';
        else acc.push(element);
        return acc;
    }, []);

    for(let i = 0; i < musicinfos.length; i++) {
        let info = musicinfos[i].split(',');
        let time = (Number(info[1].substr(0, 2)) - Number(info[0].substr(0, 2))) * 60 + Number(info[1].substr(3, 2)) - Number(info[0].substr(3, 2));
        let subject = info[2];
        let sound = info[3].split('').reduce((acc, element) => {
            if(element === '\#') acc[acc.length - 1] += '#';
            else acc.push(element);
            return acc;
        }, []);

        let first = sound.reduce((acc, element, idx) => {
            if(element === m[0]) acc.push(idx);
            return acc;
        }, []);

        for(let j = 0; j < first.length; j++) {
            let cnt = 0;
            let idx = 0;
            let target = first[j];
            let t = target + 1;
            
            while(t <= time) {
                if(target === sound.length) target = 0;
                if(sound[target] !== m[idx] || idx >= m.length) break;
                console.log(sound[target], m[idx]);
                cnt++;
                target++;
                idx++;
                t++;
            }
            if(cnt === m.length) {
                obj[subject] = [cnt, time, i];
                break;
            }
        }
        
    }
    let song = '';

    for(let subject in obj) {
        if(obj[subject][0] === m.length) {
            if(song === '') song = subject;
            else if(obj[subject][0] === m.length) {
                if(obj[subject][1] > obj[song][1]) song = subject;
                else if(obj[subject][1] === obj[song][1]) {
                    song = obj[subject][2] < obj[song][2] ? subject : song;
                }
            }
        }
    }
    answer = song.length > 0 ? song : '(None)'; 

    console.log(obj, song);

    return answer;
}
solution('ABC',["12:00,12:14,HELLO,CDEFGABAB", "13:00,13:02,WORLD,CAB"]);