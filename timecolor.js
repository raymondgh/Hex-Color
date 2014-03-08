var d = new Date();
var hours=d.getHours();
var startOfDay = new Date(d.getFullYear(), d.getMonth(), d.getDate());
var timesegment = (d.getTime()-Date.parse(startOfDay))/168750
var timedbackground = grayscale(Math.floor(timesegment))


function timeFunction()
{
	x=document.getElementById("time")
	x.style.backgroundColor=timedbackground;
	x.style.color=night(d.getHours());
}
timeFunction();

// Number -> Number
// Takes a time block 0-511 and converts it to a color block 0-255

function reblock(x)
{
	return Math.floor(255.5-Math.abs(x-255))+Math.floor(Math.round(x/511))
}

// Number -> string
// Takes a number 0-255 and gives its corresponding grayscale hex code

function grayscale(x)
{
	return hex1(x)+hex2(x)+hex1(x)+hex2(x)+hex1(x)+hex2(x)
}

// Number -> String
// Takes a number 0-511 and gives first digit in hex code

function hex1(x)
{
	return hexify(Math.floor(reblock(x)/16))
}

// Number -> String
// Takes a number 0-511 and gives second digit in hex code

function hex2(x)
{
	return hexify(Math.floor(reblock(x)%16))
}

// Number -> String
// Takes a number 0-15 and gives a number 0-9 or letter a-f

function hexify(x)
{
	var hexies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
	return hexies.slice(x,x+1)
}


function night()  // determines ideal font color
{
if (hours>=6 && hours<=17)
	{return "Black"}
else
	{return "White"}
}
