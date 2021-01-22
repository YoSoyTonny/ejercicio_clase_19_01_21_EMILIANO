setTimeout(() => console.log("A"), 0);
console.log("B")
setTimeout(() => console.log("c"), 100);
setTimeout(() => console.log("D"), 0);

let i = 0;
while (i < 1000000000) { //se supone que esto toma ~500 ms
    let ignorar = Math.sqrt(i);
    i++;
}

console.log("E")