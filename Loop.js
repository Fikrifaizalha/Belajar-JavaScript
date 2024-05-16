// for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {

// do something
// }

// contoh //

for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 1. Pertama, variabel i sebagai index iterasi.
//    Pada variabel ini kita menginisialisasi nilai awal dari perulangan.
// 2. Kedua, operasi perbandingan. Pada bagian ini, JavaScript akan melakukan
//    pengecekan kondisi apakah perulangan masih perlu dilakukan.
//    Jika bernilai true, maka kode di dalam blok for akan dijalankan.
// 3. Ketiga, increment/decrement. Di sini kita melakukan penambahan atau pengurangan variabel iterasi.
//    Jadi, pada contoh di atas variabel i akan ditambah dengan 1 di setiap akhir perulangan.
//    Perubahan nilai ini penting karena jika kita mengubah nilainya,
//    proses perulangan dapat terus berjalan selama kondisinya terpenuhi.

//    JIka diartikan, maka kode di atas bisa dimaknai dengan
//    “Jika i kurang dari 5, maka tampilkan nilai i.”

// 1.FOR OF LOOP //

// for (arrayItem of myArray) {

// do something }

let myArray = ["Onana", "Maguire", "Casemiro", "Bruno", "Rashford"];

for (arrayItem of myArray) {
  console.log(arrayItem);
}

// “Hei JavaScript! Lakukan perulangan pada myArray, akses tiap nilainya,
//  dan simpan pada variabel arrayItem”.

// 2.WHILE AND DO-WHILE //

let i = 50;

while (i <= 100) {
  console.log(i);
  i++;
}

// ATAU //

let k = 50;
do {
  console.log(k);
  k++;
} while (k <= 100);

// while lebih cocok digunakan pada kasus di mana kita tidak tahu pasti berapa banyak perulangan yang diperlukan. //

// Kondisi pada while akan dievaluasi sebelum blok kode di dalamnya dijalankan,
// sedangkan do-while akan mengevaluasi boolean expression setelah blok kodenya berjalan.
// Ini artinya kode di dalam do-while akan dijalankan setidaknya satu kali.

// 3.INFINITE LOOPS //

// WHILE //
// let i = 1;

// while (i <= 5) {
//   console.log(i);
// }

// FOR //
//
// for (let i = 1; i <= 5; i = 1) {
// console.log(i);
// }
