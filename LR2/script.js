window.onload = function() {
    const variant = prompt('Input your variant:', 8);
    //Task1
    let cube = (x) => (x*x*x);
    console.log('Task 1: variant^3 = '+cube(variant));
    //Task2
    let task2 = (num1, num2, num3) => ((num1+num2)/num3);
    console.log('Task 2: (31+12)/variant = '+task2(31, 12, variant));
    //Task3
    function detectDay (num){
        if ((1 <= num) && (num <= 7)){
            switch(num){
                case 1: console.log('Mondey');
                break
                case 2: console.log('Tuesday');
                break
                case 3: console.log('Wednesday');
                break
                case 4: console.log('Thursdaty');
                break
                case 5: console.log('Friday');
                break
                case 6: console.log('Saturday');
                break
                case 7: console.log('Sunday');
                break
                default: console.log('Error');
                break
            }
        }
        
    }
    console.log(detectDay(+prompt('Input number (1 to 7)', 1)));
};