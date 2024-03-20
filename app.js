// Chapter No 1 - Array

// Q NO: 1

var stringsArray = ["apple", "banana", "orange", "watermellon"];
console.log(stringsArray)

// Q NO: 2

var numArray = ["1", "2", "3", "4"];
console.log(numArray)

// Q NO: 3

var booleanArray = ["True", "False", "False", "True"];
console.log(booleanArray)

// Q NO: 4

var mixArray = ["apple", "1", "True", "Cat"];
console.log(mixArray)

// Q NO: 5

var Qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil.', 'PHD'];

var nestedArray = '<h1>Qualification</h1><br><ol>' +
                '<li>' + Qualification[0] + '</li>' +
                '<li>' + Qualification[1] + '</li>' +
                '<li>' + Qualification[2] + '</li>' +
                '<li>' + Qualification[3] + '</li>' +
                '<li>' + Qualification[4] + '</li>' +
                '<li>' + Qualification[5] + '</li>' +
                '<li>' + Qualification[6] + '</li>' +
                '<li>' + Qualification[7] + '</li>' +
              '</ol>';

document.write(nestedArray);

// Q NO: 6

var student = ['Micheal', 'John', 'Tony'], marks = [320, 230, 480]
var totalMarks = 500

document.write('Score of ' + student + ' is  ' + marks[0] + '. Percentage: ' + (marks[0]/totalMarks)* 100 + '%' + '<br>')

document.write('Score of ' + student + ' is  ' + marks[1] + '. Percentage: ' + (marks[1]/totalMarks)* 100 + '%' + '<br>')

document.write('Score of ' + student + ' is  ' + marks[2] + '. Percentage: ' + (marks[2]/totalMarks)* 100 + '%')

// Q NO: 7

var score = [320, 230, 480, 120]

score.sort()

document.write('score of students: ' + score)

// Q NO: 8

var citiess = ['Karachi', 'Islamabad', 'Lahore', 'Quetta', 'Peshawar']
var cities = ['Karachi', 'Islamabad', 'Lahore', 'Quetta', 'Peshawar']

selectedCities = cities.splice(3)

document.write('Cities list:' + '<br>' + citiess + '<br>')
document.write('Selected Cities list:' + '<br>' + cities)

// Q NO: 9

var arr = ['This', 'is', 'my', 'cat']
var singleString = arr.join(" ");
document.write('Array:' + '<br>' + arr + '<br>')
document.write('String:' + '<br>' + singleString)

// Q NO: 10

// Chapter 2 Array and loop

// Q NO: 1

for (var i = 1; i <= 10; i++){
    document.write(i + '<br>')
}

// Q NO: 2

var tableNumber = +prompt("Enter table number")
var tableLength = +prompt("Enter table length")

for (var i = 1; i <= tableLength; i++) {
    document.write(tableNumber + " * " + i + " = " + tableNumber * i + '<br> ');
}

// Q NO: 3

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + '<br>')
}

document.write("<br>")
document.write("Element at index " + fruits.indexOf("apple") + ' is ' + fruits[0] + '<br>')
document.write("Element at index " + fruits.indexOf("banana") + ' is ' + fruits[1] + '<br>')
document.write("Element at index " + fruits.indexOf("mango") + ' is ' + fruits[2] + '<br>')
document.write("Element at index " + fruits.indexOf("orange") + ' is ' + fruits[3] + '<br>')
document.write("Element at index " + fruits.indexOf("strawberry") + ' is ' + fruits[4] + '<br>')

// Q NO: 4

document.write("<strong>Counting:</strong>" + "<br>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br>");


document.write("<strong> Reverse counting:</strong>" + "<br>");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br>");


document.write("<strong>Even:</strong>" + "<br>");
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");


document.write("<strong>Odd:</strong>" + "<br>");
for (var i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");


document.write("<strong>Series:</strong>" + "<br>");
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}


