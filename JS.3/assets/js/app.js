document.body.style.backgroundColor = "rgb(8, 144, 110)";

var input1 = document.getElementById('input1')
var range1 = document.getElementById('range1')

var input2 = document.getElementById('input2')
var range2 = document.getElementById('range2')

var input2 = document.getElementById('input2')
var range2 = document.getElementById('range2')

var button = document.getElementById('button');

input1.oninput = function() {
    var inputvalue1 = document.getElementById('input1').value
    document.getElementById('range1').value = inputvalue1
}

range1.oninput = function() {
    var rangevalue1 = document.getElementById('range1').value
    document.getElementById('input1').value = rangevalue1
}

input2.oninput = function() {
    var inputvalue1 = document.getElementById('input2').value
    document.getElementById('range2').value = inputvalue1
}

range2.oninput = function() {
    var rangevalue1 = document.getElementById('range2').value
    document.getElementById('input2').value = rangevalue1
}

input3.oninput = function() {
    var inputvalue1 = document.getElementById('input3').value
    document.getElementById('range3').value = inputvalue1
}

range3.oninput = function() {
    var rangevalue1 = document.getElementById('range3').value
    document.getElementById('input3').value = rangevalue1
}

button.onclick = function() {
    var amount = Number(document.getElementById('input1').value)
    var time = Number(document.getElementById('input2').value)
    var percentage = Number(document.getElementById('input3').value)


    var monthpay = (amount * (100 + percentage) / 100) / time
    document.getElementById('monthpay').innerHTML = `${monthpay.toFixed(2)} ₼`
    var total = (amount * (100 + percentage) / 100)
    document.getElementById('total').innerHTML = `${total.toFixed(2)} ₼`
   
}
