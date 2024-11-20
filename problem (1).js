function customMap(array, callback) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array));
    }
    return newArray;
}


const array = [1, 2, 3];
const result = customMap(array, (num) => num * 2);
console.log(result);