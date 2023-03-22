var myArray = [["quincy", 89], ["sharon", 23]];
console.log (myArray);
var myArray = [30, 20, 35];
var myData = myArray [0];
console.log (myData);
console.log (myData);
function timesFive (num) {
    return num * 5;
}
console.log (timesFive (9));
/* This function displays a shoping list
*/
let shoppingList = ['cabbages','tealeaves', 'juice', 'bread'];
shoppingList.slice
console.log (shoppingList.lenght);
/* an array that displays selected colours
*/
let selectedColors = ['red', 'blue', 'yellow', 'green'];
/* adding items into an array
*/
let myColors = ['red', 'blue', 'yellow'];
myColors.push ('amber');
myColors.push ('green');
console.log (myColors);
/* removing items from an array
*/
let myNames = ['james','john', 'keri', 'keit'];
myNames.pop ();
myNames.pop ();
console.log (myNames);
/* adding chracters to the left end of the array using unshift function
*/
let ourNames = ['james','john', 'keri'];
ourNames.unshift(100);
ourNames.unshift(0);
console.log (ourNames);
/* removing the first item in the array using shift function
*/
let ourColors = ['red', 'blue', 'yellow'];
ourColors.shift();
console.log (ourColors);
let rem = ourColors.shift();
console.log (rem);

/* manipulating elements in an array:
0 = judith
1 = Den
2 = Dam
3 = Dev
*/
var characters = ['judith', 'den', 'Dam', 'Dev'];
console.log (characters);
characters.splice (1, 2, 'sharon');
console.log (characters);
characters.splice (2, 1, 'jan', 'patrick');
console.log(characters);
characters.splice (3, 1, "trevor");
console.log (characters);
characters.splice (0, 3 , 'omwami', 70, 'agness');
console.log (characters);
characters.reverse ();



