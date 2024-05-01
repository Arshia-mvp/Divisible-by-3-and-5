let userNumber = Number(prompt('Enter your numbers ?'));
function numbers () {
    if(userNumber % 3){
        alert('Fizz');
        console.log('Fizz');
    }
    else if(userNumber % 5){
        alert('Buzz');
        console.log('Buzz');
    }
    else if(userNumber % 3,5){
        alert('Fizz Buzz');
        console.log('Fizz Buzz');
    }   
}
numbers();