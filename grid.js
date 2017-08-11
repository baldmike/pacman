var PLYR = "plyr";
var WALL = "wall";
var FOOD = "food";
var NONE = "none";

var grid = [
//   1      2     3     4     5     6     7     8     9    10     11   12    13   |14|  |15|    16    17    18    19    20    21    22    23    24    25    26    27    28
    [ WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL ],
    [ WALL, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, WALL, WALL, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, WALL ],
    [ WALL, FOOD, WALL, WALL, WALL, WALL, FOOD, WALL, WALL, WALL, WALL, WALL, FOOD, WALL, WALL, FOOD, WALL, WALL, WALL, WALL, FOOD, WALL, WALL, WALL, WALL, WALL, FOOD, WALL ],
    [ WALL, FOOD, WALL, WALL, WALL, WALL, FOOD, WALL, WALL, WALL, WALL, WALL, FOOD, WALL, WALL, FOOD, WALL, WALL, WALL, WALL, FOOD, WALL, WALL, WALL, WALL, WALL, FOOD, WALL ],
    [ WALL, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, WALL ],
    [ WALL, FOOD, WALL, WALL, WALL, WALL, FOOD, WALL, WALL, FOOD, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, FOOD, WALL, WALL, FOOD, WALL, WALL, WALL, WALL, FOOD, WALL ],
    [ WALL, FOOD, WALL, WALL, WALL, WALL, FOOD, WALL, WALL, FOOD, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, FOOD, WALL, WALL, FOOD, WALL, WALL, WALL, WALL, FOOD, WALL ],
    [ WALL, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, WALL, WALL, FOOD, FOOD, FOOD, FOOD, WALL, WALL, FOOD, FOOD, FOOD, FOOD, WALL, WALL, FOOD, WALL, WALL, WALL, WALL, FOOD, WALL ],
    [ WALL, FOOD, FOOD, FOOD, FOOD, FOOD, FOOD, WALL, WALL, FOOD, FOOD, FOOD, FOOD, WALL, WALL, FOOD, FOOD, FOOD, FOOD, WALL, WALL, FOOD, WALL, WALL, WALL, WALL, FOOD, WALL ]
];

function findValue (grid, point)
{
    var row = grid[point.y];
    if (!row) {
        return null;
    }
    var value = row[point.x];
    if (!value) {
        return null;
    }
    return value;
}

function setValue (grid, point, newValue)
{
    var row = grid[point.y];
    if (!row) {
        return false;
    }
    var value = row[point.x];
    if (!value) {
        return false;
    }
    row[point.x] = newValue;
    return true;
}

function findNeighbors (grid, point)
{
    var x = point.x;
    var y = point.y;
    var neighbors = {};
    neighbors.up    = { x: x, y: y-1};
    neighbors.left  = { x: x-1, y: y};
    neighbors.right = { x: x+1, y: y};
    neighbors.down  = { x: x, y: y+1};
    return neighbors;
}

function generateGridHTML (grid)
{
    var gridHTML = '<div class="grid">';

    for (var y = 0; y < grid.length; y += 1) {
        var row = grid[y];

        var rowHTML = '<div class="row">';
        for (var x = 0; x < row.length; x += 1) {
            var point = { x : x, y: y };
            var value = findValue(grid, point);
            var cell = '<div class="' + value + '"></div>';
            rowHTML += cell;
        }
        rowHTML += '</div>';
        gridHTML += rowHTML;
    }
    gridHTML += '</div>';

    return gridHTML;

}

var gridHTML = generateGridHTML(grid);

$(document).ready(function () {
    $('.container').html(gridHTML);

    console.log("READY");
});