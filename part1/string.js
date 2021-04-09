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

/* 正規表現: pattern の書き方*/
const regexp = () => {
    const re1 = new RegExp("["); // 不正な正規表現だが、呼び出されない限りは問題なし
    // const re2 = /[/; // ソースコードがロードされた段階で評価されるので、呼び出されなくとも例外を吐く
}

const count = 3; // コンストラクタを使うと、動的にも書ける例
const pattern1 = new RegExp(`a{${count}}`);
const pattern2 = new RegExp(`\\s{${count}}`);

/* 正規表現: 検索 */
const str1 = "あ ABC あいう DE えお";

const alphabetsPattern1 = /[a-zA-Z]+/;
const result1 = str1.match(alphabetsPattern1);
console.log(result1);

const alphabetsPattern2 = /[a-zA-Z]+/g; // g フラグをつけると、繰り返し match をかける
const result2 = str1.match(alphabetsPattern2);
console.log(result2);

/* 正規表現: 部分取得 capture */
const pattern = /ECMAScript (\d+)/g;
const [c1, c2] = "ECMAScript 6 ECMAScript 5".match(pattern);
console.log(c1, c2); // => ECMAScript 6 ECMAScript 5
