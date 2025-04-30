const accountID = 12305
let accountEmail = "sharma@gmail.com"
var accountPassword = "1234"
accountcity = "hamirpur"
let accountState;


// accountID = 123 //not allowed
accountEmail = "abhi@google.com"
accountPassword = "014"
accountcity = "baddi"


console.log(accountID);

/*
prefer not to use var 
bez. of issue in block scope or functional scope 
*/

console.table([accountID, accountEmail, accountPassword, accountcity, accountState])