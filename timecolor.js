var d = new Date();
var hours=d.getHours();
var startOfDay = new Date(d.getFullYear(), d.getMonth(), d.getDate());
var timesegment = Math.floor((d.getTime()-Date.parse(startOfDay))/168750)
var reblock = Math.floor(255.5-Math.abs(timesegment-255))+Math.floor(Math.round(timesegment/511))

function timeStyle() // Sets the background and text color 
{
	x=document.getElementById("time")
	x.style.backgroundColor=grayscale(timesegment);

	if (hours<=2 || ( hours>=8 && hours<=15 ) || hours>=21)
		{ x.className='extremestyle' }
	else 
		{ x.className='graystyle' }

	if (hours<=5 || hours>=18)
		{ x.style.color="white" }
	else	
		{ x.style.color="black" }
}
timeStyle();

// String, integer -> String
// Consumes a 6-digit hexadecimal color and a number, produces a hexidecimal color with an adjusted hue

function hue(hex, x) 
{
	var r = decify(hex.slice(0,2))
	var g = decify(hex.slice(2,4))
	var b = decify(hex.slice(4,6))

	for (var i=x; i>0; i--)
	{
	if (x==0 || r==g && g==b)  // no adjustment or gray, return input
		{
		return hex  
		} 

		if (x>0)  // increasing hue
			{
				if      (r>=g && r<b) { r++; }
				else if (b<=r && b>g) { b--; } 
				else if (g>=b && g<r) { g++; } 
				else if (r<=g && r>b) { r--; }
				else if (b>=r && b<g) { b++; } 
				else if (g<=b && g>r) { g--; } 
			}

		 else // decreasing hue
			{
				if      (g>=r && g<b) { g++; } 
				else if (b<=g && b>r) { b--; }
				else if (r>=b && r<g) { r++; } 
				else if (g<=r && g>b) { g--; } 
				else if (b>=g && b<r) { b++; } 
				else if (r<=b && r>g) { r--; } 
			}
	}
	return hexify(r)+hexify(g)+hexify(b)
}

console.log(hue("000000",0) == "000000");
console.log(hue("0000ff",1) == "0100ff");
console.log(hue("0000ff",254) == "fe00ff");
console.log(hue("0000ff",255) == "ff00ff");
console.log(hue("fe00ff",1) == "ff00ff");




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
	var firstDigit = Math.floor(x/16)
	var secondDigit = Math.floor(x%16)
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