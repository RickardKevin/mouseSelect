var w = window.innerWidth;
var h = window.innerHeight;

function populate()
{
	for(x=0; x<126;x++) {
		var board = document.createElement('div');
		board.className = 'box';
		document.getElementById('OuterBox').appendChild(board);
	}	
}

function highlight()
{
			console.log("hi");
}