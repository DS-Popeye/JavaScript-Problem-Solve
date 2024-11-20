function findMissingNumber(array2) {
    const n = array2.length;
    let sumOfN = (n * (n + 1)) / 2;
    let result2 = 0;

    for (let i = 0; i < n; i++) {
        result2 += array2[i];
    }
    return sumOfN - result2;
}

const array2 = [0, 1, 3, 4, 5];
console.log(findMissingNumber(array2));