const wordSet = new Set();

const recursive = (prev, vowels) => {

    if(prev !== ''){
        wordSet.add(prev)
    }
    if(prev.length >= 5){
        return
    }

    vowels.forEach(vowel => {
        const current = prev.concat(vowel)
        recursive(current, vowels)
    })
}

function solution(word){
    let answer = 0;
    const vowels = ['A', 'E', 'I', 'O', 'U'];

    recursive('', vowels);
    const wordArray = Array.from(wordSet);
    const idx = wordArray.indexOf(word) + 1;
    console.log(idx)
    return idx;
};

solution("EIO")

console.log(solution("EIO") === 1189);