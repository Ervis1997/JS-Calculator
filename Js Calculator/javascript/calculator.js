
    // let plus = document.getElementById("plus");
    // let minus = document.getElementById("minus");
    // let multi = document.getElementById("multi")
    // let divide = document.getElementById("divide");

    // console.log (firstNum.value);
    // console.log(secondNum.value);

    // firstNum.addEventListener('change', function() { 
    //     console.log('first number is', firstNum.value)
    // })

    // secondNum.addEventListener('change', function() { 
    //     console.log('second number is', secondNum.value)
    // })

    // plus.addEventListener('click', function(){
    //     console.log(Number(firstNum.value) + Number(secondNum.value))
    // })

    // minus.addEventListener('click', function(){
    //     console.log(firstNum.value - secondNum.value)
    // })

    // multi.addEventListener('click', function(){
    //     console.log(firstNum.value * secondNum.value)
    // })

    // divide.addEventListener('click', function(){
    //     console.log(firstNum.value / secondNum.value)
    // })

function calculate(event) {
    let firstNum = Number(document.getElementById("first_num").value);
    let secondNum = Number(document.getElementById("second_num").value);
    let result;


    if(event.value === "+") {
        result = firstNum + secondNum;
    } else if(event.value === "-") {
        result = firstNum - secondNum;
    } else if(event.value === "*") {
        result = firstNum * secondNum;
    } else {
        result = firstNum / secondNum;
    }

    document.getElementById("result").innerHTML = "Result is: " + result;

    //console.log(result);

}