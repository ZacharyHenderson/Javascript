$(document).ready(function() {


$('[name="btnsquare"]').click(function() {
	if(Square.numSquare < 10){
	var square = new Square('Square','Square: ' + (Square.numSquare + 1), $('[name="side1square"]').val(), $('[name="side2square"]').val());
		Square.numSquare++;
		$('.tablerow > tbody > tr > td#1').text(square.type);
		$('.tablerow > tbody > tr > td#2').text(square.name);
		$('.tablerow > tbody > tr > td#3').text(square.size1);
		$('.tablerow > tbody > tr > td#4').text(square.size2);
		$('.tablerow > tbody > tr > td#5').text(square.getArea());
		$('.table tr:last-child').after($('.tablerow > tbody').html());
		$('[name="side1square"]').val('');
		$('[name="side2square"]').val('');
		$('.squarehead').text('Current Squares: ' + Square.numSquare);
		$('.shapehead').text('Current Shapes: ' + (Square.numSquare + Circle.numCircle + Rectangle.numRectangle + Triangle.numTriangle));
	}
});

$('[name="btncircle"]').click(function() {
	if(Circle.numCircle < 10){
	var circle = new Circle('Circle','Circle: ' + (Circle.numCircle + 1),$('[name="radius"]').val());
		Circle.numCircle++;
		$('.tablerow > tbody > tr > td#1').text(circle.type);
		$('.tablerow > tbody > tr > td#2').text(circle.name);
		$('.tablerow > tbody > tr > td#3').text(circle.size1);
		$('.tablerow > tbody > tr > td#4').text(circle.size2);
		$('.tablerow > tbody > tr > td#5').text(circle.getArea());
		$('.table tr:last-child').after($('.tablerow > tbody').html());
		$('[name="radius"]').val('');
		$('.circlehead').text('Current Circles: ' + Circle.numCircle);
		$('.shapehead').text('Current Shapes: ' + (Square.numSquare + Circle.numCircle + Rectangle.numRectangle + Triangle.numTriangle));
	}
});

$('[name="btnrectangle"]').click(function() {
	if(Rectangle.numRectangle < 10){
	var rectangle = new Rectangle('Rectangle','Rectangle: ' + (Rectangle.numRectangle + 1), $('[name="side1rectangle"]').val(), $('[name="side2rectangle"]').val());
		Rectangle.numRectangle++;
		$('.tablerow > tbody > tr > td#1').text(rectangle.type);
		$('.tablerow > tbody > tr > td#2').text(rectangle.name);
		$('.tablerow > tbody > tr > td#3').text(rectangle.size1);
		$('.tablerow > tbody > tr > td#4').text(rectangle.size2);
		$('.tablerow > tbody > tr > td#5').text(rectangle.getArea());
		$('.table tr:last-child').after($('.tablerow > tbody').html());
		$('[name="side1rectangle"]').val('');
		$('[name="side2rectangle"]').val('');
		$('.rectanglehead').text('Current Rectangles: ' + Rectangle.numRectangle);
		$('.shapehead').text('Current Shapes: ' + (Square.numSquare + Circle.numCircle + Rectangle.numRectangle + Triangle.numTriangle));
	}
});

$('[name="btntriangle"]').click(function() {
	if(Triangle.numTriangle < 10){
	var triangle = new Triangle('Triangle','Triangle: ' + (Triangle.numTriangle + 1),$('[name="side1triangle"]').val(),$('[name="side2triangle"]').val());
		Triangle.numTriangle++;
		$('.tablerow > tbody > tr > td#1').text(triangle.type);
		$('.tablerow > tbody > tr > td#2').text(triangle.name);
		$('.tablerow > tbody > tr > td#3').text(triangle.size1);
		$('.tablerow > tbody > tr > td#4').text(triangle.size2);
		$('.tablerow > tbody > tr > td#5').text(triangle.getArea());
		$('.table tr:last-child').after($('.tablerow > tbody').html());
		$('[name="side1triangle"]').val('');
		$('[name="side2triangle"]').val('');
		$('.trianglehead').text('Current Triangles: ' + Triangle.numTriangle);
		$('.shapehead').text('Current Shapes: ' + (Square.numSquare + Circle.numCircle + Rectangle.numRectangle + Triangle.numTriangle));
	}
});

function Shape(){
	var name = 0;
	var type;
	var size1;
	var size2;
	
	function getArea(){}
}
 
function Square(type, name, size1, size2){
	this.type = type;
	this.name = name;
	this.size1 = size1;
	this.size2 = size2;
	this.getArea = function(){
		return size1 * size2;
	}
}
Square.prototype = new Shape();
Square.numSquare = 0;

function Circle(type, name, radius){
	this.type = type;
	this.name = name;
	this.size1 = 'N/A';
	this.size2 = radius;
	this.getArea = function(){
		return 3.14 * (this.radius^2);
	}
}
Circle.prototype = new Shape();
Circle.numCircle = 0;

function Rectangle(type, name, size1, size2){
	this.type = type;
	this.name = name;
	this.size1 = size1;
	this.size2 = size2;
	this.getArea = function(){
		return this.size1 * this.size2;
	}
}
Rectangle.prototype = new Shape();
Rectangle.numRectangle = 0;

function Triangle(type, name, size1, size2){
	this.type = type;
	this.name = name;
	this.size1 = size1;
	this.size2 = size2;
	this.getArea = function(){
		return (this.size1 * this.size2) / 2;
	}
}
Triangle.prototype = new Shape();
Triangle.numTriangle = 0;


});