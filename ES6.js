// let str = "123"; 
// let num = Number(str); 
// console.log(num + 1);


// let num="12345";
// let str=String(num);
// console.log(str + 1);

let n = 100; 
let s = String(n);
console.log(s + " points");


let s2 = n.toString();
console.log(s2);

//Boolean Conversion
console.log(Boolean(0));   
console.log(Boolean(1));   
console.log(Boolean(""));  
console.log(Boolean("Hello"));
console.log(Boolean(null)); 
console.log(Boolean(undefined)); 


////String Operators
//Concatenation
let firstName="Bijaya";
let lastName="Tamang";
console.log(firstName + " " + lastName);

//String Methods
// let str="Hello, World!";
// console.log(str.length); 
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.indexOf("World")); 
// console.log(str.slice(0, 5)); 
// console.log(str.replace("World", "JavaScript"));

let kojing="Hello, Bijaya!";
console.log(kojing.toUpperCase());
console.log(kojing.toLowerCase());
console.log(kojing.trim());
console.log(kojing.includes("Bijaya"));
console.log(kojing.startsWith("H"));
console.log(kojing.endsWith("!"));
console.log(kojing.split(","));
console.log(kojing.charAt(7));
console.log(kojing.indexOf("B"));
console.log(kojing.lastIndexOf("a"));
console.log(kojing.replace("Bijaya", "Sanu"));