/*
0 = no chat
1 = twitch
2 = chatango
3 = both
*/
var body = document.body;
var ustream = document.getElementById("ustream");
var twitch = document.getElementById("twitch");
var chatango = document.getElementById("chatango-wrapper");
var modeSelect = document.getElementById("mode-select");


function hide(element) {
	element.style.display = "none";
}

function show(element) {
	element.style.display = "block";
}

function halfHeight(element) {
	element.className = "half-height";
}

function fullHeight(element) {
	element.className = "full-height";
}

function switchMode(mode) {
	switch (mode) {
		case 0:
			hide(twitch);
			hide(chatango);
			ustream.style.width = "100%";
			break;
		case 1:
			ustream.style.width = "70%";
			show(twitch);
			hide(chatango);
			fullHeight(twitch);
			break;
		case 2:
			ustream.style.width = "70%";
			hide(twitch);
			show(chatango);
			fullHeight(chatango);
			break;
		case 3:
			ustream.style.width = "70%";
			show(twitch);
			show(chatango);
			halfHeight(twitch);
			halfHeight(chatango);
			break;
	}
}

/*document.onkeydown = function(e) {
	e = e || window.event;
	if (e.keyCode == 119) {
		if (currentMode == 3) {
			currentMode = 0;
		} else {
			currentMode++;
		}
		switchMode(currentMode);
	}
};
*/