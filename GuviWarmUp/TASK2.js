// 1.Square of a number
let num=9
var Square=num*num
console.log(Square)

// 2.Swapping 2 numbers
var  a=25,b=52
console.log("before swap",a,b)
var temp;
temp=a;
a=b;
b=temp
console.log("after swap",a,b)

// 3.Addition of 3 numbers
let c=+15;d=+22;e=+93;
console.log(c+d+e)

// 4.Celsius to Fahrenheit conversion
var cels=32
let fahr=(cels * 9/5) + 32
console.log(fahr)

// 5.Meter to miles
var Meter=35
var miles=Meter/1609
console.log(miles)

// 6.Pounds to kg
var Pounds=35
var kg=Pounds/2.205
console.log(kg)

// 7.Calculate Batting Average
var runs=3654
var timesOut=35
let avg=runs/timesOut
console.log(avg)

// 8.Calculate five test scores and print their average
array=[35,65,98,195,251]
var total = 0;count = 0;
array.forEach(function(item, index) {
    total += item;
    count++;
})
console .log(total / count)

// 9.Power of any number x ^ y.
var z=9;c=3
console.log(Math.pow(z,c))

// 10.Calculate Simple Interest
var p=50000;r=5;t=2
var simpleInterest=(p*r*t/100)
console.log(simpleInterest)

// 11.Calculate area of an equilateral triangle
var sides=4
var area=(Math.sqrt(3)/4)*sides*sides
console.log(area)

// 12.Area Of Isosceles Triangle
var side1=4;side2=5
var area1=(side1*side2)/2
console.log(area1)

// 13.Volume Of Sphere
var r=8
const volume=4/3*22/7*r*r*r
console.log(volume)

// 14.Volume Of Prism
 // formula to find Volume
let l = 18, base = 12, h = 9;
let Prism = (l * base * h) / 2;
console.log(Prism)

// 15.Find area of a triangle.
let bs=10;ht=12
const triarea=(bs*ht)/2
console.log("area:"+triarea)

// 16.Give the Actual cost and Sold cost, Calculate Discount Of Product
let actualcost=49990
let soldcost=35590
let discountamt=actualcost-soldcost
const discountpercent=(discountamt/actualcost)*100
console.log(discountpercent)

// 17.Calculate electricity bill?
//  Calculate the total energy bill of that consumer if per unit rate is 10?
var day=100
var month=30*100
var unit=10
var bill=month*unit
console.log(bill)

// 18.Program To Calculate CGPA
function CgpaCalc( marks, n)
{
    let grade = []
    let cgpa, sum = 0;
    for(let i = 0; i < n; i++)
    {
        grade[i] = (marks[i] / 10);
    }
    for(let i = 0; i < n; i++)
    {
        sum += grade[i];
    }
    cgpa = sum / n;
  
    return cgpa;
}
 
let n = 5;
let marks = [ 90, 80, 70, 80, 90 ];
let cgpa = CgpaCalc(marks, n);
console.log(cgpa)