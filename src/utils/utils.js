
function random(list, n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(list[Math.floor(Math.random() * (list.length - 0))]);
    }
    return arr;
}

// let randomStr = [1, 3, 4, 5, 6, 7, 8, 9, 10, 22, 34, 55]
// console.log(random(randomStr, 3));

export { random }