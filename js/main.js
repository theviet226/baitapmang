var numBer = [];
function getNum() {
    var num = Number(document.getElementById('inputNum').value);
    numBer.push(num);
    document.getElementById('txtArray').innerHTML = numBer;
}

function sum() {
    var sum = 0;
    for (var i = 0; i < numBer.length; i++) {
        if (numBer[i] > 0) {
            sum += numBer[i];
        }
    }
    document.getElementById('txtSum').innerHTML = "Tổng các số dương: " + sum;
}

function count() {
    var count = 0;
    for (var i = 0; i < numBer.length; i++) {
        if (numBer[i] > 0) {
            count++
        }
    }
    document.getElementById('txtCount').innerHTML = "Số dương: " + count;
}

function findMin() {
    var min = numBer[0];
    for (var i = 0; i < numBer.length; i++) {
        if (min > numBer[i]) {
            min = numBer[i];
        }
    }
    document.getElementById('txtMin').innerHTML = "Số nhỏ nhất: " + min;
}
function findMinPos() {
    var minPos = numBer[0];
    for (var i = 0; i < numBer.length; i++) {
        if (numBer[i] > 0 && minPos > numBer[i]) {
            minPos = numBer[i];
        }
    }
    document.getElementById('txtMinPos').innerHTML = "Số dương nhỏ nhất: " + minPos;
}
function findEven() {
    var even = '';
    for (var i = numBer.length - 1; i >= 0; i--) {
        if (numBer[i] % 2 == 0) {
            even = numBer[i];
            break;
        }
    }
    document.getElementById('txtEven').innerHTML = "Số chẳn cuối cùng: " + even;
}

function changePos(){
    var index1 = document.getElementById('inputIndex1').value;
    var index2 = document.getElementById('inputIndex2').value;

    var temp = numBer[index1];
    numBer[index1] = numBer[index2];
    numBer[index2]= temp;


    document.getElementById('txtChangePos').innerHTML="Mảng sau khi đổi: "+ numBer;
}


function shortPos(){
    var shortPos = numBer.slice();
    shortPos.sort(function(a,b){
        return a-b;
    });
    document.getElementById('txtIncrease').innerHTML = "Hàm sau khi sắp xếp: " + shortPos;
}

function isPrime(num){
    if ( num < 2){
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
       if (num % i == 0){
        return false;
       }
    }
    return true
}

function findPrime(){
    var firstPrime = -1;
    for (var i = 0; i < numBer.length; i++) {
        if (isPrime(numBer[i])){
            firstPrime= numBer[i];
            break;
        }
    }
    document.getElementById('txtPrime').innerHTML = firstPrime;
    
    
}
var numFloat = [];
function getFloat(){
    var float =Number(document.getElementById('inputFloat').value);
    numFloat.push(float);
    document.getElementById('txtArrayFloat').innerHTML = numFloat;
}

function findInt(){
    var countInt= 0 ;
    for (var i = 0; i < numFloat.length; i++) {
        if(Number.isInteger(numFloat[i])){
            countInt++;
        }
    }
    document.getElementById('txtInt').innerHTML = "Số nguyên: " + countInt;
}



