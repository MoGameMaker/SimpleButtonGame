var plus = document.getElementById("plus");
var number = document.getElementById("number");
var minus = document.getElementById("minus");

var num = 0;

console.log(plus, minus, number, num)

plus.addEventListener('click', () => {

    num++;

    number.innerHTML = num;

    console.log(num);

});

minus.addEventListener('click', () => {2

    num--;

    number.innerHTML = num;

    console.log(num);

});