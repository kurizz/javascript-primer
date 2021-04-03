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
console.log(array1.indexOf(obj)); // 参照が同じなので、index が得られる

console.log(array1.findIndex(obj => obj.key === "value")); // コールバックで渡して、値同士を比較 => index が得られる

/* 次: 「条件に一致する要素を取得」から */
console.log(array1.find(obj => obj.key === "value")); // 値が帰ってくる
console.log(array1.find(obj => obj.hoge === "value")); // なければ undefined

console.log(array1.includes({ key: "value" })); // indexOf と同じ理由で、false
console.log(array1.some(obj => obj.key === "value")); // true

/* メソッドチェーン */
const ECMAScriptVersions = [ // 2000 年以前の obj だけ取り出したい ...
    { name: "ECMAScript 1", year: 1997 },
    { name: "ECMAScript 2", year: 1998 },
    { name: "ECMAScript 3", year: 1999 },
    { name: "ECMAScript 5", year: 2009 },
    { name: "ECMAScript 5.1", year: 2011 },
    { name: "ECMAScript 2015", year: 2015 },
    { name: "ECMAScript 2016", year: 2016 },
    { name: "ECMAScript 2017", year: 2017 },
];

console.log( // メソッドチェーンで簡潔に書ける :+1:
    ECMAScriptVersions
        .filter(ESV => ESV.year < 2000)
        .map(arr => arr.name)
);

// 参考: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array
