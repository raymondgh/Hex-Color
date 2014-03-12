var d = new Date();
var hours=d.getHours();
var startOfDay = new Date(d.getFullYear(), d.getMonth(), d.getDate());
var timesegment = Math.floor((d.getTime()-Date.parse(startOfDay))/168750)
var reblock = Math.floor(255.5-Math.abs(timesegment-255))+Math.floor(Math.round(timesegment/511))

function timeStyle() // Sets the background and text color 
{
	x=document.getElementById("time")

	x.style.backgroundColor=grayscale(timesegment);

	if (hours<=2 || hours>=8 && hours<=15 || hours>=21)
	{x.className='extremestyle'}

	if (hours<=5 || hours>=18)
	{x.style.color="white"}
}
timeStyle();


/* Ignore this code for now. Just brainstorming. 

// String, integer -> String
// Consumes a 6-digit hexadecimal color and a number, produces a hexidecimal color with an adjusted hue

function hue(hex, x) 
{
	var r = hex.slice(0,2)
	var g = hex.slice(2,4)
	var b = hex.slice(4,6)

	if (x==0 || r==g && g==b) {return hex}; // other x values will return  hex as well, but varies by hex. can solve.

	//loop through x here. essentially 4 remaining cases. need to study & condennse
	if (r==b && r<g) {r++ i--}
	if (r==g && r<b) {r++ i--}
	if (r==b && r>g) {r-- i--}
	if (r==g && r>b) {r-- i--}

	if (g==b && g>r) {g-- i--}
	if (g==r && g>b) {g-- i--}
	if (g==b && g<r) {g++ i--}
	if (g==r && g<b) {g++ i--}

	if (b==g && b>r) {b-- i--}
	if (b==r && b>g) {b-- i--}
	if (b==g && b<r) {b++ i--}
	if (b==r && b<g) {b++ i--}

	if (none are the same) {reduce 2nd highest until 2 are the same}
// need a way to reconsile positive and negative hue adjustments 
}
*/


// Number -> String
// Consumes a timeSegment and produces a corresponding grayscale hexidecimal color 

function grayscale(x)
{
	return hexify(reblock)+hexify(reblock)+hexify(reblock)
}




// Number -> String
// Consumes a decimal 0-255 and produces its hexadecimal equivalent

function hexify(x)
{
	var hexies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
	var firstDigit = Math.floor(reblock/16)
	var secondDigit = Math.floor(reblock%16)
	return hexies.slice(firstDigit,firstDigit+1) + hexies.slice(secondDigit,secondDigit+1);
}

// String -> Number
// Consumes a 2-digit hexademical and produces its decimal equivalent

function decify(x)
{
	var hexies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
	var firstDigit = hexies.indexOf(x.slice(0,1))
	var secondDigit = hexies.indexOf(x.slice(1,2))
	return 16*firstDigit+secondDigit
}