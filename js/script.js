function sequence(start, step) {
    start -= step;
    return function() {
        return start += step;
    }
}

function take(gen, x) {
    var array = [];
    for (i = 0; i <= x; i++) {
        array[i] = gen();
    }
    return array;
}

function pluck(array1, field) {
    var array2 = [];
    for (i = 0; i < array1.length; i++) {
        array2.push(array1[i][field]);
    }
    return array2;
}

function map(fn, array) {
    array4 = [];
    array4 = fn(array);
    return array4;

}

function foo() {
    arr1 = [];
    return function(arr) {
        for (i = 0; i < arr.length; i++) {
            arr1[i] = ++arr[i];
        }
        return arr1;
    };
}

var generator = sequence(10, 3);
var generator2 = sequence(7, 1);
document.write(generator() + "<br>");
document.write(generator() + "<br>");
document.write(generator2() + "<br>");
document.write(generator() + "<br>");
document.write(generator2() + "<br>");
// console.log(generator());
// console.log(generator());
// console.log(generator2());
// console.log(generator());
// console.log(generator2());

var gen2 = sequence(0, 2);
console.log(take(gen2, 5));
var characters = [
    { 'name': 'barney', 'age': 36 },

    { 'name': 'fred', 'age': 40 }

];

var number = [1, 2, 3, 4, 5, 6, 7, 9];
var gen3 = foo();

console.log(pluck(characters, 'name'));
document.write(pluck(characters, 'name') + "<br>");
console.log(map(gen3, number));
document.write(map(gen3, number));