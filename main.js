
var C = document.getElementById("C");var ctx = C.getContext("2d"); Cw = C.width; Ch = C.height;
var mouse = {x:0,y:0,lckick:false,mclick:false,rclick:false};

var cur = new Image(); cur.src = "cursor.png";
var peg = new Image(); peg.src = "blackmarble/c1.png";
var peg2 = new Image(); peg2.src = "blackmarble/c11.png";
var peg3 = new Image(); peg3.src = "blackmarble/c10.png";
var slot = new Image(); slot.src = "hole.png";
var shad = new Image(); shad.src = "blackmarble/shadow.png";

var s_peg = new Audio(); s_peg.src = "sound/peg.wav";
var s_peg2 = new Audio(); s_peg2.src = "sound/peg2.wav";
var s_toc = new Audio(); s_toc.src = "sound/toc.wav";

var intro = "Move the pegs like checkers to leave only one in the end.";
var intro2 = "Type some numbers ;)"

var board1 = [
	{ 2: {peg: false},3: {peg: false},4: {peg: false} },
	{ 2: {peg: false},3: {peg: false},4: {peg: false} },
	{ 0: {peg: false},1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false},6: {peg: false} },
	{ 0: {peg: false},1: {peg: false},2: {peg: false},3: {peg: false,empty:true},4: {peg: false},5: {peg: false},6: {peg: false} },
	{ 0: {peg: false},1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false},6: {peg: false} },
	{ 2: {peg: false},3: {peg: false},4: {peg: false} },
	{ 2: {peg: false},3: {peg: false},4: {peg: false} }
];
var board2 = [
	{ 2: {peg: false},3: {peg: false},4: {peg: false} },
	{ 1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false} },
	{ 0: {peg: false},1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false},6: {peg: false} },
	{ 0: {peg: false},1: {peg: false},2: {peg: false},3: {peg: false,empty:true},4: {peg: false},5: {peg: false},6: {peg: false} },
	{ 0: {peg: false},1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false},6: {peg: false} },
	{ 1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false} },
	{ 2: {peg: false},3: {peg: false},4: {peg: false} }
];
var board3 = [
	{ 3: {peg: false},4: {peg: false},5: {peg: false} },
	{ 3: {peg: false},4: {peg: false},5: {peg: false} },
	{ 3: {peg: false},4: {peg: false},5: {peg: false} },
	{ 0: {peg: false},1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false},6: {peg: false},7: {peg: false},8: {peg: false} },
	{ 0: {peg: false},1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false,empty:true},5: {peg: false},6: {peg: false},7: {peg: false},8: {peg: false} },
	{ 0: {peg: false},1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false},6: {peg: false},7: {peg: false},8: {peg: false} },
	{ 3: {peg: false},4: {peg: false},5: {peg: false} },
	{ 3: {peg: false},4: {peg: false},5: {peg: false} },
	{ 3: {peg: false},4: {peg: false},5: {peg: false} }
];
var board4 = [
	{ 4: {peg: false} },
	{ 3: {peg: false},4: {peg: false},5: {peg: false} },
	{ 2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false},6: {peg: false} },
	{ 1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false},6: {peg: false},7: {peg: false} },
	{ 0: {peg: false},1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false,empty:true},5: {peg: false},6: {peg: false},7: {peg: false},8: {peg: false} },
	{ 1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false},6: {peg: false},7: {peg: false} },
	{ 2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false},6: {peg: false} },
	{ 3: {peg: false},4: {peg: false},5: {peg: false} },
	{ 4: {peg: false} }
];
var board5 = [
	{ 0: {peg: false},1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false},6: {peg: false},7: {peg: false},8: {peg: false} },
	{ 0: {peg: false},1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false},6: {peg: false},7: {peg: false},8: {peg: false} },
	{ 0: {peg: false},1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false},6: {peg: false},7: {peg: false},8: {peg: false} },
	{ 0: {peg: false},1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false},6: {peg: false},7: {peg: false},8: {peg: false} },
	{ 0: {peg: false},1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false,empty:true},5: {peg: false},6: {peg: false},7: {peg: false},8: {peg: false} },
	{ 0: {peg: false},1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false},6: {peg: false},7: {peg: false},8: {peg: false} },
	{ 0: {peg: false},1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false},6: {peg: false},7: {peg: false},8: {peg: false} },
	{ 0: {peg: false},1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false},6: {peg: false},7: {peg: false},8: {peg: false} },
	{ 0: {peg: false},1: {peg: false},2: {peg: false},3: {peg: false},4: {peg: false},5: {peg: false},6: {peg: false},7: {peg: false},8: {peg: false} },
];

var type = 1; var w = 60;
var board = [

];

var select = {x:-1,y:-1};


window.onload=function(){
	res(); loadpegs();
}

function res(){
	C.width = window.innerWidth; C.height = window.innerHeight; ctx.imageSmoothingEnabled = false;
	Cw = C.width; Ch = C.height;
}

window.setInterval(function(){
	
	
	draw();
	
	if( C.width != window.innerWidth || C.height != window.innerHeight ){ res(); }
},1000/60)

function draw(){

	ctx.clearRect(0,0,C.width,C.height);

	
		
	drawBoard();
	
    ctx.fillStyle = "#aaa";
    ctx.font = "Bold 15px Arial";
    ctx.fillText(intro,20,20);
    ctx.fillText(intro2,20,40);
    
	drawCursor();
	
}

function drawCursor(){
	ctx.drawImage(cur,mouse.x,mouse.y);
}

function drawBoard(){
	x1 = (Cw/2); y1 = (Ch/2); grid = board.length;
	ctx.fillStyle = "#333";
	
	for( n1 = 0; n1 < grid; n1++ ){
		for( n2 = 0; n2 < grid; n2++ ){
			b = board[n1][n2];
			if( typeof b != "undefined" ){
				x = (x1)+(w*(n1-(grid/2)));
				y = (y1)+(w*(n2-(grid/2)));
				/*if( (mouse.x > x && mouse.x < x+w) && (mouse.y > y && mouse.y < y+w) ){
					ctx.fillStyle = "#033";
				}else{ ctx.fillStyle = "#333"; }*/
				ctx.drawImage(slot,x,y,w,w);
				if( b.peg == true ){
					ctx.drawImage(shad,x,y+2,w,w);
					if( select.x == n1 && select.y == n2 ){
						ctx.drawImage(peg2,x+(w/4),y+(w/4),w/2,w/2);
					}else{
						if( (mouse.x > x && mouse.x < x+w) && (mouse.y > y && mouse.y < y+w) ){
							ctx.drawImage(peg3,x+(w/4),y+(w/4),w/2,w/2);
						}else{
							ctx.drawImage(peg,x+(w/4),y+(w/4),w/2,w/2);
						}
					}
				}
			}
		}
	}
	
	
};



function loadpegs(){
	switch( type ){
		case 1: board = board1; break;
		case 2: board = board2; break;
		case 3: board = board3; break;
		case 4: board = board4; break;
		case 5: board = board5; break;
		default: board = board1; break;
	}
	select = {x:-1,y:-1};
	for( i = 0; i < board.length; i++ ){
		for( j = 0; j < board.length; j++ ){
			b = board[i][j];
			if( typeof b != "undefined" ){
				if( b.empty == true ){
					b.peg = false;
				}else{ b.peg = true; };
			}
		}
	}
}





function click(){
	x1 = (Cw/2); y1 = (Ch/2); grid = board.length;
	for( i = 0; i < board.length; i++ ){
		for( j = 0; j < board.length; j++ ){
			b = board[i][j];
			if( typeof b != "undefined" ){
				x = (x1)+(w*(i-(grid/2)));
				y = (y1)+(w*(j-(grid/2)));
				if( (mouse.x > x && mouse.x < x+w) && (mouse.y > y && mouse.y < y+w) ){
					if( b.peg == true ){
						if( select.x != i || select.y != j ){
							select.x = i; select.y = j;
							s_peg.curentTime = 0; s_peg.play();
						}else{
							select = {x:-1,y:-1}; s_peg2.play();
						}
					}else if( b.peg == false && select.x >= 0 && select.y >= 0 ){
						b1 = board[select.x][select.y];
						if( ( i == select.x && Math.abs(j-select.y) == 2 ) || ( j == select.y && Math.abs(i-select.x) == 2 ) ){
							x2 = i-((i-select.x)/2);
							y2 = j-((j-select.y)/2);
							if( board[x2][y2].peg == true ){
								b.peg = true; b1.peg = false;
								board[x2][y2].peg = false;
								select.x = i; select.y = j;
							}
                            s_toc.play();
						}
					}
					break;
				}
			}
		}
	}
}

$('#C').mousedown(function(e) {
	switch (e.which) {
		case 1: //Left mouse button
			mouse.lclick = true;
			click();
			break;
		case 2: //Middle mouse button
			mouse.mclick = true;
			break;
		case 3: //Right mouse button
			mouse.rclick = true;
			rightclick();
			break;
	}
});
$('#C').mouseup(function(e) {
	switch (e.which) {
		case 1: //Left mouse button
			mouse.lclick = false;
			break;
		case 2: //Middle mouse button
			mouse.mclick = false;
			break;
		case 3: //Right mouse button
			mouse.rclick = false;
			break;
	}
});

window.onkeydown = function (e){
	key = e.keyCode ? e.keyCode : e.which;
		switch(key){
            case 32:
            case 82: loadpegs(); break;
            case 49: type = 1; loadpegs(); break;
            case 50: type = 2; loadpegs(); break;
            case 51: type = 3; loadpegs(); break;
            case 52: type = 4; loadpegs(); break;
            case 53: type = 5; loadpegs(); break;
			default: console.log(key); break;
		};
}
window.onkeyup = function (e){
	key = e.keyCode ? e.keyCode : e.which;
		switch(key){
		}
}
window.oncontextmenu = function(){
	return false;
};
C.addEventListener('mousemove', function(evt) {
		//When the mouse is moved
		var rekt = C.getBoundingClientRect();
		mouse.x = evt.clientX - rekt.left;
		mouse.y = evt.clientY - rekt.top;
}, false);

 $('#C').bind('DOMMouseScroll', function(e){
     scroll(e.originalEvent.detail);

     //prevent page fom scrolling
     return false;
 });

 //IE, Opera, Safari
 $('#C').bind('mousewheel', function(e){
     scroll(e.originalEvent.wheelDelta);
	 
     //prevent page fom scrolling
     return false;
 });
 
 function scroll( e ){
	if( game.pause == false && game.view == 1 ){
		if(e < 0) {
			 //scroll down
			
		}else {
			 //scroll up
			
		}
	}
 }