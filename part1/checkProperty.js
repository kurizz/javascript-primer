/* 存在の確認 */
const obj1 =  { key: undefined };

if ("key" in obj1) { // Good: 値が nullish でも true を返してくれる
    console.log("`key` は存在する");
}

if (obj1.hasOwnProperty("key")) { // Good: 値が nullish でも true を返してくれる
    console.log("`key` は存在する");
}

if (obj1.key !== undefined) { // Bad: これだと false になってしまい、意図した挙動かどうかがちょっと微妙 ...
    console.log("`key` は存在する");
} else {
    console.log("`key` は存在しない");
}


/* nullish かどうか置いといて、とにかく値が欲しいなら Optional chaining を使う */
const oc = obj1?.key?.hoge ?? "未定義"; // Good: 例外を気にしなくていいので、スッキリ書ける :)
console.log(`object は${oc}です (Optional chaining 演算子 ver.)`);

if (obj1.key !== undefined && obj1.key.hoge !== undefined) { // Bad: 普通にやると、undefined との比較と && が必要で冗長
    console.log(`object は${obj1.key.hoge}です`);
} else {
    console.log("object は未定義です");
}
