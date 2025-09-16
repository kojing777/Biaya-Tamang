//for loops
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// while loops
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// do while loops
// let j = 6;
// do {
//     console.log(j);
//     j++;
// } while (j <= 10);

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;  
    }
    if (i === 5) {
        break; 
    }
    console.log(i);
}
