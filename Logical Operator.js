// Operator	             Deskripsi

// &&	Operator dan (and). Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true).
// ||	Operator atau (or). Logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi (bernilai true).
// !    Operator tidak (not). Digunakan untuk membalikkan suatu kondisi.

let a = 10;
let b = 12;

// AND OPERATOR //

console.log(a < 20 && b > 10);
console.log(a > 15 && b > 5);

// OR OPERATOR //

console.log(a < 15 || b > 10);
console.log(a > 15 || b > 5);

// NOT OPERATOR //

console.log(!(a < 1));
console.log(!(a < 15 && b > 5));
