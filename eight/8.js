/*	  _____     _______ _________ _______          _________ _______ _________ _______          _________    _____    _____    _____     _______ _________ _______          _________    _____   _______ _________ _______          _________
	 / ___ \   (  ____ \\__   __/(  ____ \|\     /|\__   __/(  ____ \\__   __/(  ____ \|\     /|\__   __/   / ___ \  / ___ \  / ___ \   (  ____ \\__   __/(  ____ \|\     /|\__   __/   / ___ \ (  ____ \\__   __/(  ____ \|\     /|\__   __/
	( (___) )  | (    \/   ) (   | (    \/| )   ( |   ) (   | (    \/   ) (   | (    \/| )   ( |   ) (     ( (___) )( (___) )( (___) )  | (    \/   ) (   | (    \/| )   ( |   ) (     ( (___) )| (    \/   ) (   | (    \/| )   ( |   ) (   
	 \     /   | (__       | |   | |      | (___) |   | |   | (__       | |   | |      | (___) |   | |      \     /  \     /  \     /   | (__       | |   | |      | (___) |   | |      \     / | (__       | |   | |      | (___) |   | |   
	 / ___ \   |  __)      | |   | | ____ |  ___  |   | |   |  __)      | |   | | ____ |  ___  |   | |      / ___ \  / ___ \  / ___ \   |  __)      | |   | | ____ |  ___  |   | |      / ___ \ |  __)      | |   | | ____ |  ___  |   | |   
	( (   ) )  | (         | |   | | \_  )| (   ) |   | |   | (         | |   | | \_  )| (   ) |   | |     ( (   ) )( (   ) )( (   ) )  | (         | |   | | \_  )| (   ) |   | |     ( (   ) )| (         | |   | | \_  )| (   ) |   | |   
	( (___) )  | (____/\___) (___| (___) || )   ( |   | |   | (____/\___) (___| (___) || )   ( |   | |     ( (___) )( (___) )( (___) )  | (____/\___) (___| (___) || )   ( |   | |     ( (___) )| (____/\___) (___| (___) || )   ( |   | |   
	 \_____/   (_______/\_______/(_______)|/     \|   )_(   (_______/\_______/(_______)|/     \|   )_(      \_____/  \_____/  \_____/   (_______/\_______/(_______)|/     \|   )_(      \_____/ (_______/\_______/(_______)|/     \|   )_(   
																																																												 
*/

//Eight eight eight, eight eight eight eight eight eight.
var txt = document.getElementById('txt');																																																												 
txt.onkeydown = function(e) {
	if(e.keyCode == 13) {
		e.preventDefault();
	}
};

//Eight eight (8), eight eight eight. Eight eight: eight eight eight.
document.getElementById('btn').onclick = function() {
    if (document.getElementById('rad8').checked){
		txt.value = txt.value.replace(/[a-zA-Z0-9]/g, "8");
    }else  if(document.getElementById('radeight').checked) {
		var arr = txt.value.split(" ");
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] !== '' && arr[i].toLowerCase() !== 'eight'){
				arr[i] = "eight";
			}
		}
		txt.value = arr.join(" ");
	}else{
		txt.value = txt.value.replace(/[a-zA-Z0-9]/g, "eight");
	}
};