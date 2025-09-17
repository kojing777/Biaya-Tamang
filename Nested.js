// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//     let row = "";

//     // print spaces
//     for (let s = 1; s <= rows - i; s++) {
//         row += " ";
//     }

//     // print stars
//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }

//     console.log(row);
// }


let rows = 10;
for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let b = 1; b <= rows - i; b++) {
        row += " ";
    }
    for (let t = 1; t <= i; t++) {
        row += "+ ";
    }
    console.log(row);
}
for (let i = rows - 1; i >= 1; i--) {
    let row = "";
    for (let b = 1; b <= rows - i; b++) {
        row += " ";
    }
    for (let t = 1; t <= i; t++) {
        row += "+ ";
    }
    console.log(row);
}