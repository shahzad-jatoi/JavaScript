const accountId = 5143253
let accountEmail = "shahzad@gmail.com"
var accountPass = "12456"
accountcity = "dadu" // not a good practice in js but still we can use it
let accountstate // if we don't assign any value to this js will take it as undefined 

/*
prefer not to use var bcz issue in block scope and functional scope
 what is the difference between let and var
 we don't use var in js bcz it is causing the problem in scope like if someone create the same variable with same name 
 and one is  changed other will automatellicaly change that is why let is used ..
*/

console.log(accountcity);
console.table([accountId, accountEmail,accountPass,accountcity,accountstate]);
// semicolon is optional in js