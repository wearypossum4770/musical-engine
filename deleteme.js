let today = +new Date();
let start = 30 * 86_400_000;
let end = 90 * 86_400_000;
console.log(today);
let startDate = today - start;
let endDate = today + end;
console.log(new Date(startDate).toLocaleDateString());
console.log(new Date(endDate).toLocaleDateString());
