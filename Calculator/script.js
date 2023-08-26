var firstNum = parseInt(prompt("Enter the first number: "));
var sign = prompt("Enter the operation sign (+,-,*,/) ");
var secondNum = parseInt(prompt("Enter the second number: "));

if (sign == "+") {
    var result = firstNum+secondNum;
    document.write("Operation Summation of " + firstNum + " and " + secondNum + " equals : " + result);
}
else if (sign == "-") {
    var result = firstNum-secondNum;
    document.write("Operation Subtraction of " + firstNum + " and " + secondNum + " equals : " + result);
}
else if (sign == "*") {
    var result = firstNum*secondNum;
    document.write("Operation Multiplication of " + firstNum + " and " + secondNum + " equals : " + result);
}
else if (sign == "/") {
    var result = firstNum/secondNum;
    document.write("Operation Division of " + firstNum + " and " + secondNum + " equals : " + result);
}

else {
    document.write("Refresh the page and enter a vaild operation sign!");
}