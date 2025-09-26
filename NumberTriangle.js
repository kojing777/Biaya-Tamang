for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j + ' ';
    }
    console.log(row);
}

for (let j = 1; j <= 5; j++) {
    let column = '';
    for (let i = 1; i <= j; i++) {
        column += j + ' ';
    }
    console.log(column);
}

for (k = 1; k <= 5; k++) {
    k = 5
    let row = '';
    for (let j = 1; j <= k; j++) {
        row += j + ' ';
    }
    console.log(row);
}

//last triangle
let n = 5;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === n || j===1) {
            row += '* ';
                
        } else {
            row += '  ';
        }
    }
    console.log(row);

}