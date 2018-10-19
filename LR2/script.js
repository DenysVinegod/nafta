window.onload = function() {
    const variant = prompt('Input your variant:', 8);
    //Task1
    let cube = (x) => (x*x*x);
    console.log('Task 1: variant^3 = '+cube(variant));
    //Task2
    let task2 = (num1, num2, num3) => ((num1+num2)/num3);
    console.log('Task 2: (31+12)/variant = '+task2(31, 12, variant));
    //Task3
    function detectDay(num){
        if ((1 <= num) && (num <= 7)){
            switch(num){
                case 1: day = 'Понеділок'; break;
                case 2: day = 'Вівторок'; break
                case 3: day = 'Середа'; break
                case 4: day = 'Четвер'; break
                case 5: day = 'П\'ятниця'; break
                case 6: day = 'Субота'; break
                case 7: day = 'Неділя'; break
                default: day = 'Error'; break
            }
        }
        return day;
    }
    const inDay = +prompt('Input number (1 to 7)', 1);
    console.log('Task3: '+detectDay(inDay));
    //Task4
    let detectDayNew = function(num){
        let day;
        if ((1 <= num) && (num <= 7)){
            switch(num){
                case 1: day = 'Понеділок'; break
                case 2: day = 'Вівторок'; break
                case 3: day = 'Середа'; break
                case 4: day = 'Четвер'; break
                case 5: day = 'П\'ятниця'; break
                case 6: day = 'Субота'; break
                case 7: day = 'Неділя'; break
                default: day = 'Error'; break
            }
        }
        return day;       
    }
    console.log('Task4: '+detectDayNew(inDay));
    //Task5
    //Cycle
    function factC (num){
            var tmp = 1;
            for (var i = 1; i <= num; i++) {
                tmp *= i;
            }
            return tmp;
    }
    //Recurse
    function factR(num) {
        return (num != 1) ? num * factR(num - 1) : 1;
    }
    number = prompt('Input number', 1);
    console.log('Task5: Factorial(cycle) = '+factC(+number));
    console.log('Task5: Factorial(recurse) = '+factR(+number));
};