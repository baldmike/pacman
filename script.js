var PLYR = "plyr";
var WALL = "wall";
var FOOD = "food";
var NONE = "none";

var grid = [
    [ WALL, WALL, WALL, WALL ],
    [ WALL, NONE, FOOD, WALL ],
    [ WALL, FOOD, PLYR, WALL ],
    [ WALL, WALL, WALL, WALL ],
]

function findValue (grid, point)
{
    var row = grid(point.y);
    if (!row) {
        return null;
    }
    var value = row[point.x];
    if (!value) {
        return null;
    }
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
    $('container').html(gridHTML);
});