const pisang1 = function(data) {
    return data;
  };

console.log(pisang1('ini fungsi lama')); 



//
//
//
//


// Arrow function di ES6

// Contoh 1
const pisang2 = (data) => {
    return data;
}
console.log(pisang2('ini fungsi baru bernama arrow function normal'))

// Contoh 2
const pisang3 = (data) => data;
console.log(pisang3('ini fungsi baru bernama arrow function tanpa return'))

// Contoh 3
const pisang4 = (data) => data + data;
console.log(pisang4(5)); 

// Contoh 4
const pisang5 = (a, b) => a + b;
console.log(pisang5(20, 20));

// Contoh 5
const arrayNumber = [1,2,3,4,5,6]
const hitung = arrayNumber.map(kalidua => 2 * kalidua);
console.log(hitung)