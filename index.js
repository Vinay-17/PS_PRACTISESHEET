// Create a function that takes two numbers as arguments and returns their sum.
 prompt=require(`prompt-sync`)();
// function add(a,b){
//   return a+b
// }
// let a = +prompt("enter your number :")
// let b = +prompt("enter your number :")
// console.log(add(a,b))
// Write a function that takes an integer minutes and converts it to seconds.
// N=prompt("enter your minutes: ")
// function minutes(N1){
//     return N1*60
// }
// console.log(minutes(N)) 
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.   
// function increment(N1){
//     return Number(N1)+1
// }
// n=prompt("enter your value: ")
// console.log(increment(n))
// Create a function that takes the age in years and returns the age in days.
// function days(Y){
//     days=365
//     return Y*days

// }
// year=prompt("enter your value: ")
// console.log(days(year))
// Create a function that takes voltage and current and returns the calculated power.
// function power(v,c){
//    let power1 = v*c;  
//    return power1

// }
// voltage=prompt("enter your value:")
// current=prompt("enter your value:")
// console.log(power(voltage,current))
// Write a function that returns the string "something" joined with a space " " and the given argument a.
// function vinay(a){
//     return "something"+" "+a
// }
// n=prompt("enter your string value:")
// console.log(vinay(n))
// 7.Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
// function TRUE(a,b){
//     if((a==10 || b==10) || (a+b==10)){
//            return true
//     }
//     else{
//         return false
//     }

// }
// a=+prompt("enter your value:")
// b=+prompt("enter your value:")
// console.log(TRUE(a,b))
// 8.Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// function eight(s1,s2){
//    if(s1.length==s2.length){
//     return true
//    }else{
//     return false
//    }
// }
// string1=prompt("enter your string: ")
// string2=prompt("enter your string: ")
// console.log(eight(string1,string2))

// 24. Print Patter using loop.

// // 1
// // 1 2
// // 1 2 3
// // 1 2 3 4
// //   1 2 3 4 5
// for(i=1;i<=1;i++){
//     for(j=1;j<=5;j++){
//         if(j==1)
//             continue
//         console.log(j) 
//     }
   
// }
// 32. Reverse a number using while Loop

// 			Input: 123
// 			Output: 321
n=prompt("enter your number: ")
s=""
for(i=n.length;i>=0;i--){
    s=s+i
    console.log(s)
}

