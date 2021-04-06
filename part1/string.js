/* バッククォート */
const multiline = `1 行目
2 行目
3 行目`;
console.log(multiline); // '`' は、改行をそのまま挿入できる
console.log(`---\n${multiline}\n---`); // ${} は評価時に展開される

/* 文字列とは */
const str = "アオイ"; // 文字コード: Unicode, エンコード方式: UTF-16 をそれぞれ採用
console.log(str.charCodeAt(0).toString(16));
console.log(str.charCodeAt(1).toString(16));
console.log(str.charCodeAt(2).toString(16));

console.log( // 進数から文字列への変換
    String.fromCharCode(`0x${str.charCodeAt(0).toString(16)}`),
    String.fromCharCode(`0x${str.charCodeAt(1).toString(16)}`),
    String.fromCharCode(`0x${str.charCodeAt(2).toString(16)}`),
);

/* 文字列の大小比較 */
console.log("A" < "B"); // code unit 的には `65 < 66` という比較になっているので true
console.log("ABC" < "ACD"); // 先頭から順番に比較し、最終的に `C < D` なので、true

/* 文字列の部分取得 */
const url = "https://example.com?param=1";
console.log(url.slice(url.indexOf("?"))); // url.slice(19) => "?param=1"