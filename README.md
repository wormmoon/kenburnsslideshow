# Ken Burns Slideshow

The Ken Burns Effect is a way of animating still photos by panning and zooming 
them on the screen.

This project set out to recreate this effect in CSS and Javascript, ultimately to 
create a photo display page for travel photography by Lucy Oliver at 
www.flightandpursuit.co.uk.

This works by using CSS to define a 'transition' class, which animates the fading 
in and zooming of an image by manipulating the opacity, z-index, and size of it. 
The Javascript then iterates through all the images and either adds or removes this 
class to create the effect between only two images at a time.
