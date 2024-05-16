// if //

// const isRaining = true;

// console.log("Persiapan sebelum berangkat kegiatan.");
// if (isRaining) {
//   console.log("Hari ini hujan. Bawa payung.");
// }
// console.log("Berangkat kegiatan.");

// // else //

// let x = 50;

// if (x > 100) {
//   console.log(x);
// } else {
//   console.log("Nilai kurang dari 100.");
// }

// if/else //

let united = "RED";
let city = "BLUE";

if (united === "MADRID") {
  city = "BARCELONA";
} else if (united === "RED") {
  city = "DECUL";
} else if (united === "OLD TRAFORD") {
  city = "ETIHAD";
}

console.log(city);

// Condition ? true expression : false expression //

const isMember = false;
const discount = isMember ? 0.1 : 0;

console.log(`anda mendapatkan diskon sebesar ${discount * 100}%`);

// Ternary operator membutuhkan tiga operand. Sebelum tanda tanya (?) berisi kondisi yang ingin kita evaluasi.
// Kemudian diikuti dengan expression apabila nilai kondisinya benar sebelum tanda titik dua.
// Terakhir adalah expression yang dieksekusi ketika kondisinya salah.
// Karena merupakan conditional expression, maka operand kedua dan ketiga harus mengembalikan nilai.
