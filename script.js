$(document).ready(function () { 
  $('#sizePicker').submit(function makeGrid(grid) {  // Creates the grid upon clicking the button 'Submit'
    $('table tr').remove(); // clear out the grid by hitting submit button
    var row_input = $('#input_height').val(); // Allows the user to add a value in the input box to add rows 
    var col_input = $('#input_width').val(); // Same thing with the previous variable but with columns
    for (var i = 1; i <= row_input; i++) { 
      $('table').append("<tr></tr>"); // loop for creating cells
      for (var j = 1; j <= col_input; j++) {
        $('tr:last').append("<td></td>"); // The loop adds a cell after every row
        $('td').attr("class", 'cells') 
      }
    }
    grid.preventDefault(); // makes sure the grid is not going to be deleted after it is created

    $('.cells').click(function (event) { // The function allows the user to color a cell on click
      var paint = $('#colorPicker').val();
      $(event.target).css('background-color', paint); // Lets the chosen color on a click event to be added to the grid
    });
  }); 
});
