timecolor
=========
Local time based background color


This javascript file calculates the time of day by comparing the client's date to his or her unix timestamp.

The day is divided into 512 intervals of 168.75 seconds. 

The background color updates each interval, becoming one shade lighter or darker. 
It is lightest at noon and darkest at midnight.

The text color is white for the first and last 6 hours of the day, otherwise it is black.
