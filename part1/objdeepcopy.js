const deepClone = obj => {
    const newObj = Object.assign({}, obj);
    Object.keys(newObj)
        .filter(j => typeof newObj[j] === "object")
        .forEach(k => newObj[k] = deepClone(newObj[k]));
    return newObj;
};

const obj = {
    level: 1,
    nest: {
        level: 2
    },
    nest2: {
        level: {
            level: 3
        }
    }
};

const cloneObj = deepClone(obj);
console.log(obj === cloneObj); // false
console.log(obj.nest === cloneObj.nest); // false
console.log(obj.nest2.level === cloneObj.nest2.level); // false

/* shallow copy だと ... */
const hoge = Object.assign({}, obj);
hoge.nest2.level.level = "3";
console.log(obj); // こっちも "3" になる
console.log(hoge);