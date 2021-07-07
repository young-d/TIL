function solution(skill, skill_trees) {
    var answer = 0;

    for(let i = 0; i < skill_trees.length; i++) {
        //선행순위있는 스킬만 뽑아내기
        let tmp = skill_trees[i].split('').reduce((acc, element) => {
            if(skill.indexOf(element) > -1) {
                acc += element;
            }
            return acc;
        }, '');

        //선행순위와 비교
        if(skill.slice(0, tmp.length) === tmp) answer++;
    }

    return answer;
}