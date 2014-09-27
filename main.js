/*
TODO: 
  -Reiniciar 'times' al terminar la décima nota
  -Colores y diversión
  -Señalización de la nota actual
*/
var noteHeight = [27, 38, 49, 60, 71, 82, 93, 104, 115]
var notes = [];
var input = document.getElementById("input");
var times = 0;
var mark = document.getElementById("mark");
var canvas = document.getElementById("pent");
var ctx = canvas.getContext("2d");
var tmp;

function draw() {	
	notes = [];
	times = 0;
	ctx.clearRect(0, 0, 600, 150)
	ctx.fillStyle = "black";
	ctx.strokeStyle = "black";
	for(var i=0;i<10;i++) {
		ctx.beginPath();
		var y = noteHeight[Math.floor(Math.random()*9)];
		notes.push(y);
		ctx.arc(90+i*50, y, 6, 0, 2 * Math.PI, false);			
		ctx.fill();
		ctx.stroke();
	}
	tmp = ctx.getImageData(0,0,600,150);
	if (times == 0) {
		drawTriangle();
	}
}
input.onkeypress = function(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
		if (times < 10) {
			switch (input.value.toLowerCase()) {
				case "do":
					if (notes[times] == 60) {
						if (times < 9) {	
							times++;
							drawTriangle();
						} else {
							draw();
						}
						/*if (parseInt(nota.innerHTML) != 10) {
							//nota.innerHTML = parseInt(nota.innerHTML) + 1;
							drawTriangle();
						}*/
						putMark(1);
					} else {
						putMark(0);
					}
					break;
				case "re":
					if (notes[times] == 49) {
						if (times < 9) {	
							times++;
							drawTriangle();
						} else {
							draw();
						}
						putMark(1);
					} else {
						putMark(0);
					}
					break;
				case "mi":
					if (notes[times] == 115 || notes[times] == 38) {
						if (times < 9) {	
							times++;
							drawTriangle();
						} else {
							draw();
						}
						putMark(1);
					} else {
						putMark(0);
					}
					break;
				case "fa":
					if (notes[times] == 104 || notes[times] == 27) {
						if (times < 9) {	
							times++;
							drawTriangle();
						} else {
							draw();
						}
						putMark(1);
					} else {
						putMark(0);
					}
					break;
				case "sol":
					if (notes[times] == 93) {
						if (times < 9) {	
							times++;
							drawTriangle();
						} else {
							draw();
						}
						putMark(1);
					} else {
						putMark(0);
					}
					break;
				case "la":
					if (notes[times] == 82) {
						if (times < 9) {	
							times++;
							drawTriangle();
						} else {
							draw();
						}
						putMark(1);
					} else {
						putMark(0);
					}
					break;
				case "si":
					if (notes[times] == 71) {
						if (times < 9) {	
							times++;
							drawTriangle();
						} else {
							draw();
						}
						putMark(1);
					} else {
						putMark(0);
					}
					break;
				default:
					putMark(0);
					break;
			}
		}
		input.value = "";
	}
};
function wipeMark() {
	mark.innerHTML = "";
}
function putMark(grade) {
	if (grade == 0) {
		mark.innerHTML = '<b style="color:red;">&#10007;</b>';
	} else {
		mark.innerHTML = '<b style="color:green;">&#10003;</b>';
	}
	window.setTimeout(wipeMark, 700);
}
function drawTriangle() {
	ctx.putImageData(tmp,0,0);
	ctx.fillStyle = "red";
	ctx.strokeStyle = "red";
	ctx.beginPath();
	ctx.moveTo(90+times*50, 125);
	ctx.lineTo(105+times*50, 142);
	ctx.lineTo(75+times*50, 142);
	ctx.fill();
	ctx.moveTo(90+times*50, 125);
	ctx.lineTo(90+times*50, 0);
	ctx.stroke();
}

window.onload = draw;	
					
				