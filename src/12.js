const randInt = () => Math.floor(Math.random() * 10);
const randNum = () => randInt() / 2;
const randStr = () => String.fromCharCode(randInt());

console.log(`${randInt()} ${randNum()} ${randStr()}`);
