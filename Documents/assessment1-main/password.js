console.log('welcome to password validator')

const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question('typle in your password', function(answer){
    if(answer.length < 10){
        console.log('password needs 10 characters try again')
    }else{
        console.log('password is valid')
    }
})