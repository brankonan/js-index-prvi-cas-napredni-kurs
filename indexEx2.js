const niz = [1, 2, 10, 20, 1, 2, 3, 2, 1, 3, 10, 50];

// function unique(niz) {
//   return Array.from(new Set(niz));
// }
// console.log(unique(niz));
let obj = {};
let rezultat = [];

for (let i = 0; i < niz.length; i++) {
  if (!obj[niz[i]]) {
    obj[niz[i]] = true;
    rezultat.push(niz[i]);
  }
}
console.log(rezultat);
