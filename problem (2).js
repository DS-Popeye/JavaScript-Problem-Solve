function findDuplicates(array1) {
    let result1 = [];
    let seen = new Set();

    for (let i = 0; i < array1.length; i++) {
        if (seen.has(array1[i]) && !result1.includes(array1[i])) {
            result1.push(array1[i]);
        } else {
            seen.add(array1[i]);
        }
    }
    return result1;
}

const array1 = [1, 2, 3, 2, 4, 3, 5];
const duplicates = findDuplicates(array1);
console.log(duplicates);