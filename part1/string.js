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