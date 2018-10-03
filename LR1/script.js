window.onload = function() {
    // Task1
    const name = 'Denys';
    alert(name);
    // Task2
    const a = 8;    // My variant is 8
    const b = 12;   // I was born in Decembers
    const c = a - b;
    const d = 7;    // I don`t know why do you wont '7' :)
    const result = c + d;
    console.log(result);
    // Task3
    function task3 (variant){
        +variant >= 7 ? alert('Right') : alert('Wrong');
        if(variant%2 == 0) {
        variant = +variant + 7;
        } else { 
        variant -= 3;
        }
        return variant;
    };
    console.log('Task 3 begins: ');
    console.log(task3(prompt('Input your variant: ', a)));
    console.log(task3(prompt('Input your variant: ', 5)));
    console.log(task3(prompt('Input your variant: ', 0)));
    console.log(task3(prompt('Input your variant: ', -3)));
    console.log(task3(prompt('Input your variant: ', 2)));
    console.log('Task 3 ended her.');
    // Task4
    function pow(x, n) {
    var result = x;
    for (var i = 1; i < n; i++) {
        result *= x;
    }
    return result;
    }
    console.log('Task 4 begins: ');
    for (var i = 0; i <= a+10; i++) {
        console.log(i+'^2 = '+pow(i, 2));
    }
    console.log('Task 4 ended her.');
    // Task 5
    function simpleNumber(begin, end){
        next:
        for (var i = begin; i <= end; i++) {
            for (var j = 2; j < i; j++) {
                if (i % j == 0) continue next;
            }
        console.log(i);
        }
    }
    console.log('Task 5 begins: ');
    console.log(simpleNumber(2, a+10));
    console.log('Task 5 ended her.');
};