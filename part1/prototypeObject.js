/* Object はプロパティとして、prototype オブジェクトを持っている*/
console.log(typeof Object.prototype.toString); // => function
console.log(typeof Object.prototype.hasOwnProperty); // => function

/* プロトタイプチェーン */
const arr = [];
console.log(arr.hasOwnProperty === Object.prototype.hasOwnProperty); // => true