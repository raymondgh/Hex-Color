var d = new Date();
var hours=d.getHours();
var startOfDay = new Date(d.getFullYear(), d.getMonth(), d.getDate());
var timesegment = Math.floor((d.getTime()-Date.parse(startOfDay))/168750)



function timeFunction() // Sets the background and text color 
{
	x=document.getElementById("time")          // Find the element
	x.style.backgroundColor=grayscale(timesegment);          // Change the style
	x.style.color=night(d.getHours());			// change style again
}
timeFunction();

// Number -> Number
// Takes a time block 0-511 and converts it to a color block 0-255

function reblock(x)
{
	return Math.floor(255.5-Math.abs(x-255))+Math.floor(Math.round(x/511))
}

// Number -> String
// Takes a number 0-255 and gives its corresponding grayscale hex code

function grayscale(x)
{
	return hexify(reblock(x))+hexify(reblock(x))+hexify(reblock(x))
}

// Number -> String
// Takes a decimal 0-255 and produces its hexadecimal equivalent

function hexify(x)
{
	var hexies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
	var firstDigit = Math.floor(reblock(x)/16)
	var secondDigit = Math.floor(reblock(x)%16)
	return hexies.slice(firstDigit,firstDigit+1) + hexies.slice(secondDigit,secondDigit+1);
}

function night()  // determines ideal font color
{
if (hours>=6 && hours<=17)
	{return "black"}
else
	{return "white"}
}

function twilight()  // determines ideal link style
{
if (hours<=2 || hours>=8 && hours<=15 || hours>=21)
	{document.getElementById("time").className='extremestyle'}
}