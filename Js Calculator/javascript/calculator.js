
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
