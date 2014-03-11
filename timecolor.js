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
