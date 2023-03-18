var myArray = [["quincy", 89], ["sharon", 23]];
console.log (myArray);
var myArray = [30, 20, 35];
var myData = myArray [0];
console.log (myData);
console.log (myData);
function timesFive (num) {
    return num * 5;
}
console.log (timesFive (5))
function trueOrFalse (wasThatTrue) {
    if (wasThatTrue) {
return "Yes, that was true";
}
return "No, it was false"
}
console.log (trueOrFalse(false));
function compareEquality (a, b) {
    if (num = 3){
    return "equal";}
    return "false"
}
console.log (compareEquality(10))
function testGreaterThan(val) {
    if (val > 100){
        return "over 100"
    }
    if (val > 40) {
        return "over 40"
    }
    if (val > 10) {
        return "over 10"
    }
    
}

console.log (testGreaterThan(50))
var myCat = {
    name:"Maya",
    tails: 1,
    legs: 1,
    friends: ["everyone"],
    printObj: function(){
        console.log (this)
    }
    

}
myCat.name = "judith"
console.log(myCat);


myArray = []
var i = 0
while (i < 6){
    myArray.push (i);
    i++
}
console.log (myArray);

