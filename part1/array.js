const array = ["a", "b", "c"];

/* イディオム */
console.log(array[array.length - 1]); // 最後の要素へのアクセス

/* 疎な配列 と 密な配列 */
const so = [1,, 3] // 疎
const mitsu = [1, 2, 3] // 密
console.log(so[1]); // undefined
console.log(so.hasOwnProperty(1)); // => false (undefined を明記すれば true になる)

/* index 検索 */
const obj = { key: "value" };
const array1 = ["A", "B", obj];

console.log(array1.indexOf({ key: "value" })); // 厳密等価演算子 (===) での比較なため ==> -1
console.log(array1.indexOf(obj)); // 参照が同じなら true

console.log(array1.findIndex(obj => { // コールバックで渡して、値同士を比較 => true になってくれる
    return obj.key === "value";
}));

/* 次: 「条件に一致する要素を取得」から */