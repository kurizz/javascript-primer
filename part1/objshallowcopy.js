/* オブジェクトの複製 */
const obj = { a: "a"};
const cloneObj = Object.assign({}, obj);

console.log(obj === cloneObj); // 複製なので、別物 => false

/* ただし、shallow copy */
const obj1 = {
    level: 1,
    nest: {
        level: 2
    },
};
const cloneObj1 = Object.assign({}, obj1);

console.log(obj1 === cloneObj1); // 1 階層目は別 obj なので false
console.log(obj1.nest === cloneObj1.nest); // 2 階層目以降は、複製されず、obj を共有するので true

/* よって、変更も共有される */
obj1.nest.level = "2";
console.log(obj1, cloneObj1); // cloneObj1.nest.level も "2" になる