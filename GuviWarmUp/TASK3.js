// 1.Write a loop that makes seven calls to console.log to output the following triangle:
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

//   2.write a code to count the elements in the array . Don’t use length property
var a=[11,22,33,44,55]
function arrayLength(a){
  var length = 0;
  while(a[length]!==undefined){
    length++;
  }
  return length;
}
console.log(arrayLength(a)); 

// 3.Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
// How can you find your fifth favorite food?..Find the length of your foods array
let foods=["Parotta","kothuParotta","rice","chicken","mutton","beef","chappathi","pizza","burger","idli","dosai","pongal","oothappam"]
console.log(foods[5])
console.log(foods.length)

// 4.Mini Problems
let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
// 1.Get the first item, the middle item and the last item of the array
var n=friends.length
for(i=0;i<n;i++)
{
  console.log(friends[i])
  if(i=n/2)
  console.log(friends[i])
  if(i=n-1)
  console.log(friends[i])
}
// 2.Add your name to the end of the friends array, and add another name to beginning
friends.push("Mega")
console.log(friends)
friends.unshift("Arasan")
console.log(friends)
// 3.Add Mr or Ms to the names in the friends array.
for(i=0;i<friends.length;i++)
{
 friends[i]="Mr."+friends[i]
}
console.log(friends)
// 4.Concat all the names the friends array and return as comma “,” seperated string
var concat=''
for(i=0;i<friends.length;i++)
{
   concat = concat+friends[i]+","
}
console.log(concat)
// 5.Find the friends names who has letter ‘a’ and return the list.
var list=[]
for(i=0;i<friends.length;i++)
{
 if(friends[i].includes("a"))
  list.push(friends[i])
}
console.log(list)
// 6.Find the avg length of all the friends names. Get the individual length of the names and do the avg
var fanof=["Dhoni","Jadeja","Raina"]
var avg=fanof.reduce((a,b) => a + b.length / fanof.length, 0)
console.log(avg)
// 7.Find the names and return the list starting with letter M
let friends2 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK" ,"chandran"];
const startsWith = friends2.filter((name) => name.startsWith("M"));

console.log(startsWith);
// 8.Find the name with max characters and return the name
var lgth = 0;
var maxchar;
for (var i = 0; i < friends2.length; i++) {
  if (friends2[i].length > lgth) {
    var lgth = friends2[i].length;
    maxchar = friends2[i];
  }
}
console.log(maxchar);
// 9.Find the name with min characters and return the name.
var minchar;
for (var i = 0; i < friends2.length; i++) {
  if (friends2[i].length < lgth) {
    var lgth = friends2[i].length;
    minchar = friends2[i];
  }
}
console.log(minchar);