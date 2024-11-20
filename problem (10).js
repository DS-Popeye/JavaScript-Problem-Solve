function mergeObjects(obj1, obj2) {
    const merged = {};
    Object.assign(merged, obj1, obj2);

    for (let key in merged) {
        const value1 = obj1[key];
        const value2 = obj2[key];

        if (typeof value1 === 'object' && typeof value2 === 'object' && !Array.isArray(value1) && !Array.isArray(value2)) {
            merged[key] = mergeObjects(value1, value2);
        }
        else if (value1 !== undefined && value2 !== undefined && value1 !== value2) {
            merged[key] = [value1, value2];
        }
        else if (value1 !== undefined) {
            merged[key] = value1;
        } else if (value2 !== undefined) {
            merged[key] = value2;
        }
    }
    return merged;
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, a: 4 };
console.log(mergeObjects(obj1, obj2)); 