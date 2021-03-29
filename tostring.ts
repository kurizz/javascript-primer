const obj = {
    key: "value"
}

console.log(obj.toString());
console.log(String(obj)); // String コンストラクタの中で、toString() が呼ばれる

console.log(obj.toString() === String(obj));
