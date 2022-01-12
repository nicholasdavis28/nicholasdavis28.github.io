console.log("hello world");

function hello() {
    console.log("Hello Nick!");
}

function hello2(name) {
    console.log("Hi " + name);
}

function annoyingGreet(name, numTimes) {
    let counter = 0;

    while (counter < numTimes) {
        hello2(name);
        counter++;
    }
}


function sumOfNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}

function square(num1) {
    let result = num1 * num1;
    return result;

}

function sumOfSquares(num1, num2) {
    let result = sumOfNumbers(square(num1), square(num2));
    return result;
}


function calculateHypotenuse(num1, num2) {
    let result = Math.sqrt(sumOfNumbers(square(num1), square(num2)));
    return result;
}


hello();
hello2("Dog");
annoyingGreet("Tom", 100);
console.log(sumOfNumbers(10, 2));
console.log(square(4));
console.log(sumOfSquares(2, 4));
console.log(calculateHypotenuse(3, 4));