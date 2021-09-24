import '../css/a.css';

function add(x, y) {
  return x + y;
}
const a = 'zh';
console.log('===a', a);

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("'''''");
  }, 1000);
});

console.log(promise);

console.log(add(1, 2));
