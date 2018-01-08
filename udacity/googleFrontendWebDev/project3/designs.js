// Select color input
// Select size input

var table = $('#pixel_canvas');

// When size is submitted by the user, call makeGrid()
function makeGrid() {
		// Your code goes here!
	table.children().remove();
		
	var gridHeight = $('#input_height').val();
	var gridWidth = $('#input_width').val();
		
	if(gridHeight == '')
		alert('Please select minimum 1 row.');
	if(gridWidth == '')
		alert('Please select minimum 1 column.');
		
	for (let row = 0; row < gridHeight; row++) {
		table.append('<tr></tr>');
		for (let col = 0; col < gridWidth; col++) {
			$('<td></td>').appendTo($('tr')[row]);
		}
	}
}

// function call: build the grid
$('#sizePicker').on('submit', function( event){
	event.preventDefault();
	makeGrid();
});

// change the color of a cell
table.on( 'click', 'td', function() {
	var color = $('#colorPicker').val();
	$(this).css('backgroundColor', color);
	}
);

// clear the color of a cell
table.on( 'contextmenu', 'td', function( event ) {
	event.preventDefault();
	$(this).css('backgroundColor', '#ffffff');
	}
);

// clear the complete canvas
$('#clearGrid').on('submit', function( event ){
	event.preventDefault();
	$('#pixel_canvas td').css('backgroundColor', '#ffffff');
});

// remove the complete canvas
$('#deleteGrid').on('submit', function( event ){
	event.preventDefault();
	table.children().remove();
});
