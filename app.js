// alert("Hello World");

// question no 1

// function day(){
//     var today = new Date();
//     alert(today);
// }

// day();



// question nu 2

// function greeting(){
//     var firstName = prompt("Enter your first name: ");
//     var lastName = prompt("Enter your last name: ");
//     alert("Hello! " + firstName+ " " + lastName);

// }

// greeting();


// question nu 3

// function add(num1,num2){
//     var number = num1 + num2;
//     return number;

// }

// var addition = add(5,10);
// alert(addition);


// question nu 4

// function calc(num1,opera,num2){
//     var num1 = prompt("Enter first number");
//     var opera = prompt("Enter operator");
//     var num2 = prompt("Enter 2nd number");
    
//     if(opera ==="+"){
//         var a = num1 + num2;
//         return a;
//         alert(num1 + num2);
//     }
//     else if(opera === "-" ){
//         var s = num1 - num2;
//         return s;
//         alert(num1 - num2);

//     }
//     else if (opera === "*" ){
//         var m = num1 * num2;
//         return m;
//         alert(num1 * num2);

//     }
//     else if (opera === "/" ){
//         var d = num1 / num2;
//         return d;
//         alert(num1 / num2);

//     }
// }

// var result = calc(2,"*",3);
// alert(result);

// question nu 5


// function square(num1){
//     return num1** 2;
// }

// var squared = square(4);
// alert(squared);

// question nu6

// var n = +prompt("enter your number");
// var ans = n;

// function factorial(number){
//     if (number == 0 || number == 1){
//         return 1;
//     }
//     else{
//         for(var i = number - 1; i >= 1; i--){
//             ans = ans*i;
//         }
//         return ans;
//     }
// }

// var result = factorial(n);
// alert(result);

// question nu 7

// var start = +prompt("Enter a start value");
// var end = +prompt("Enter a end value");


// function count(){
//     for (var i = start; i <= end; i++){
//         document.write(i+"<br>");
//     }
// }

// count();

// question nu 8

// function hypo(base,per){
//     var a = Math.sqrt (base * base + per * per);
//     return a;
// }

// var b = +prompt("enter base of triangle");
// var p = +prompt("enter perpendicular of triangle");

// var calculatehypo = hypo(b,p);
// document.write(calculatehypo);



// question nu 9

// function rect(l,b){
//     var area = l*b;
//     alert(area);
// }

// rect(6, 7);


// question nu 10

// function palindrome(){
//     var word = prompt("enter your word");
//     var check = "";
//     for(var i = word.lenght - 1; i >=0; i--){
//         check += word[i];
//     }
//     if (word === check){
//         alert(word + "is palindrome");
//     }
//     else{
//         alert("your word is not palindrome");

//     }
// }

// palindrome();


// question nu 11


// function abc(str){
//     var sentence = str.toLowerCase().split('');
//     for(var i = 0; i< sentence.lenght; i ++){
//         sentence [i] = sentence[i] [0].toUpperCase()+sentence[i].slice(1)
//     }
//     document.write(sentence.join("web development"));
//     return sentence;
// }

// abc("web development");

