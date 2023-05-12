const primeSet = new Set()

function isPrime(number){
    for(let i = 2; i < number ; i ++){
        if((number % i) === 0 ) return false;
    }
    return true;
}

const recursive = (prev, numbers) => {
    if(prev !== ""){
        const numPrev = Number(prev);
        if(numPrev !== 0 && numPrev !== 1){
            isPrime(numPrev)? primeSet.add(numPrev):""
        }
    }

    numbers.forEach((number)=>{
        const newNumbers = [...numbers]
        const idx = newNumbers.indexOf(number)
        newNumbers.splice(idx, 1)
        recursive(prev.concat(number), newNumbers)
    }
    )
}

function solution(numbers) {
    const numbersArray = numbers.split('');

    recursive("", numbersArray);

    console.log(primeSet)

    return primeSet.size
}

solution("011")

//console.log("testCase1",solution("17") === 3);
//console.log("testCase1",solution("011") === 2);

