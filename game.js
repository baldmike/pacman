
var LEFT = 'ArrowLeft';
var RIGHT = 'ArrowRight';
var UP = 'ArrowUp';
var DOWN = 'ArrowDown';
var score = 0;
var rot = 0;

$(document).ready(function (){

    function rnum () //picks a random number 1-4
    {
        var r = Math.floor(Math.random()*4+1);
        return r;
    }    
    var player = { x: rnum(), y: rnum() }; //randomly places pacman on board 

    function updateDisplay ()
    {
        var gridHTML = generateGridHTML(grid);
        $('.container').html(gridHTML);
        $('#score').text(score);
    }
    setValue(grid, player, PLYR);
    updateDisplay();

    function setPlayerPosition (destination, destinationValue)
    {
        if (destinationValue === null || destinationValue === WALL) {
            return false;
        }
        setValue(grid, destination, PLYR);
        setValue(grid, player,      NONE);
        player = destination;
        return true;
    }

    $(document).keydown(function (event) {
        var key = event.key;
        var neighbors = findNeighbors(grid, player);
        var destination = null;


        if (key === LEFT) {
            destination = neighbors.left;
            rot = 0;
            console.log('LEFT');
        }
        if (key === RIGHT) {
            destination = neighbors.right;
            rot = 180;
            console.log(rot);
        }
        if (key === UP) {
            destination = neighbors.up;
            rot = 90;
            console.log(rot);
        }
        if (key === DOWN) {
            destination = neighbors.down;
            rot = 270;
            console.log(rot);
        }

        $('style').html('.plyr {transform: rotate(' + rot + 'deg)}')

        var destinationValue = null;
        if (destination) {
            event.preventDefault();
            destinationValue = findValue(grid, destination);
        }
        if (destinationValue==FOOD) {
            score += 10;
            console.log(score);
        }
        var shouldUpdateDisplay = setPlayerPosition(destination, destinationValue);
            
        if (shouldUpdateDisplay) {
            updateDisplay();
        }            
        
    })
});