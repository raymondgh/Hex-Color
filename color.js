// Number -> String
// Consumes a decimal 0-255 and produces its hexadecimal equivalent

function hexify(x) {
    var hexies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    var firstDigit = Math.floor(x / 16);
    var secondDigit = Math.floor(x % 16);
    return hexies.slice(firstDigit, firstDigit + 1) + hexies.slice(secondDigit, secondDigit + 1);
}

// String -> Number
// Consumes a 2-digit hexademical and produces its decimal equivalent

function decify(x) {
    var hexies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    var firstDigit = hexies.indexOf(x.slice(0, 1));
    var secondDigit = hexies.indexOf(x.slice(1, 2));
    return 16 * firstDigit + secondDigit;
}

// String, Integer -> String
// Consumes a 6-digit hexadecimal color and a number, produces a hexidecimal color with an adjusted hue

function hue(rawHex, x) {
    let hex = rawHex.toLowerCase()
    var r = decify(hex.slice(0, 2));
    var g = decify(hex.slice(2, 4));
    var b = decify(hex.slice(4, 6));

	for (var i=Math.abs(x); i>0; i--)
	{
		// no adjustment or gray
		if (x==0 || r==g && g==b)
		{
			return hex  
		} 

		// increasing hue
		if (x>0)  
		{
			if      (r>=g && r<b) { r++; } // hue 240-300
			else if (b<=r && b>g) { b--; } // hue 300-0
			else if (g>=b && g<r) { g++; } // hue 0-60
			else if (r<=g && r>b) { r--; } // hue 60-120
			else if (b>=r && b<g) { b++; } // hue 120-180
			else if (g<=b && g>r) { g--; } // hue 180-240
		}

		// decreasing hue
		 else 
		{
			if      (g>=r && g<b) { g++; } 
			else if (b<=g && b>r) { b--; }
			else if (r>=b && r<g) { r++; } 
			else if (g<=r && g>b) { g--; } 
			else if (b>=g && b<r) { b++; } 
			else if (r<=b && r>g) { r--; } 
		}
	}
	return hexify(r)+hexify(g)+hexify(b);
}

// String, Integer -> String
// Consumes a 6-digit hex color and a number, produces a hexadecimal color with an adjusted saturation

function saturation(hex, x)
{
	var r = decify(hex.slice(0,2))
	var g = decify(hex.slice(2,4))
	var b = decify(hex.slice(4,6))

	var mid = Math.floor((Math.max(r,g,b)+Math.min(r,g,b))/2)
	var gray = -Math.abs(x)/x * (Math.max(r,g,b) - mid)

	if (x == 0) 
		{
			return hex
		}
		if (x < 0) 
			{
				var steps = Math.max(r,g,b) - mid
			}
			else
			{
				var steps = Math.min( 255 - Math.max(r,g,b), Math.min(r,g,b) )
			}


	var rint = (mid-r)/gray
	var gint = (mid-g)/gray
	var bint = (mid-b)/gray

	if (Math.abs(x) > steps) { x = Math.abs(steps);}
	else {x = x = Math.abs(x);}

	for (var i=x; i>0; i--)
	{ r = r+rint; g=g+gint; b=b+bint; }
	return hexify(Math.round(r))+hexify(Math.round(g))+hexify(Math.round(b));
}

// String, Integer -> String
// Consumes a 6-digit hexademical color and a number, produces a hexadecimal color with an adjusted lightness

function lightness(hex, x)
{
	var r = parseInt(decify(hex.slice(0,2))) + parseInt(x)
	var g = parseInt(decify(hex.slice(2,4))) + parseInt(x)
	var b = parseInt(decify(hex.slice(4,6))) + parseInt(x)

	if (r>255) {r = 255}
	if (g>255) {g = 255}
	if (b>255) {b = 255}

	if (r<0) {r = 0}
	if (g<0) {g = 0}
	if (b<0) {b = 0}

	return hexify(r)+hexify(g)+hexify(b);
}

