var sum = 0;
var notNum = false;

do {
var entry = parseInt(prompt("Enter a number"));
sum += entry;
console.log(typeof(entry));

if(isNaN(entry)) {
    notNum = true;
    break;
}

if (entry == "0") {
    break;
}


} while (sum < 100)

if (notNum == true) {

    document.write("Refresh the page and enter a number!");

}

else {
    document.write("The summation of the entered numbers is : ", sum);
}

