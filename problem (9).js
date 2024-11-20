function mergeArrays(arr1, arr2) {
    const mergeArray = [...arr1, ...arr2];
    const newArray1 = [...new Set(mergeArray)];
    const sortedArray = newArray1.sort((a, b) => a - b);

    return sortedArray;
}

const array3 = [3, 1, 4];
const array4 = [2, 4, 5];
console.log(mergeArrays(array3, array4));