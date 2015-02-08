//     TODO: 
// -GUI (kinda done)
// -Comments (I think they're fine)
// -Save runs to localStorage
// -And load them
// -Floors??
// -Curses??
// -Use these --> /*blahblah*/ more often

//DISCLAIMER: Part of (or the whole of) this code might be crappy, ESPECIALLY
//the goddamn regexes. If you have an idea on how to improve it, PM me, 
//or just go to GitHub

var txt = document.getElementById('txt');
txt.value = 'Paste the contents of your log here!';
var wrapper = document.getElementById('wrapper');
var hasPlaceholder = true;
var textChunks;
var runs = new Array();
var runsHTML = new Array();
var isHidden = new Array();

//Run() object, contains a seed string and an array of items
function Run(seed, collectibles){
    this.seed = seed;
    this.collectibles = collectibles;
}

function main(){
	//Clean previous runs
	runs = new Array();
	wrapper.innerHTML = '';
	//Split the log into runs, store them in an array, and delete the first entry
	//which contains nothing useful (OpenGL, intro animation, etc.)
	textChunks = txt.value.split('RNG Start Seed: ');
	textChunks.splice(0, 1);
	//Parse seeds and items
	for (var i = 0; i < textChunks.length; i++) {
		var seed = textChunks[i].match(/[A-Z0-9]{4} [A-Z0-9]{4}/g).join();
		//Get raw collectible strings (e.g. "collectible 1 (Sad Onion)"). I didn't manage to find a regex that would
		//get me just the item (in this example, "Sad Onion")
		var collectibles = textChunks[i].match(/collectible [0-9]{1,3} \(.+\)/g);
		//Prevent catastrophic errors
		if (collectibles == null) {
			collectibles = new Array();
		}
		//Transform every collectible string into just the item (e.g. "collectible 1 (Sad Onion)" --> "Sad Onion")
		for (var j = 0; j < collectibles.length; j++) {
			collectibles[j] = collectibles[j].split(/collectible [0-9]{1,3} \(|\)/).slice(1, 2).join();
		}
		runs.push(new Run(seed, collectibles));
	}
	//Remove duplicate items
	for (var i = 0; i < runs.length; i++) {
		//Got this from StackOverflow. Don't ask, I only kind of understand it.
		runs[i].collectibles = runs[i].collectibles.filter(function(item, pos) {
    		return runs[i].collectibles.indexOf(item) == pos;
		})
	}
	//Create list of clickable seeds with item lists
	for (var i = 0; i < runs.length; i++){
		var seedHTML = document.createElement('div');
		var arrow = document.createElement('div');
		var seedText = document.createTextNode(runs[i].seed);
		var table = document.createElement('table');
		var tbody = document.createElement('tbody');
		seedHTML.id = 'seed' + i;
		seedHTML.className = 'seed';
		arrow.id = 'arrow' + i;
		arrow.className = 'arrowRight';
		table.id = 'table' + i;
		table.className = 'hidden';
		isHidden.push(true);
		seedHTML.appendChild(arrow);
		seedHTML.appendChild(seedText);
		for (var j = 0; j < runs[i].collectibles.length; j++) {
			var td = document.createElement('td');	
			var tr = document.createElement('tr');
			var item = document.createTextNode(runs[i].collectibles[j]);
			td.appendChild(item);
			tr.appendChild(td);
			tbody.appendChild(tr);
		}
		table.appendChild(tbody);
		wrapper.appendChild(seedHTML);
		wrapper.appendChild(table);
	}
	//Create onClick handlers for every seed-menu-item-thing
	for (var i = 0; i < runs.length; i++){
		var seedHTML = document.getElementById('seed' + i);
		var arrow = document.getElementById('arrow' + i);
		var table = document.getElementById('table' + i);
		/*Got this 
		
		function(args){
			return function(){...}
		}(args)
		
		trick from StackOverflow too. Don't even think of asking, I have no idea
		whatsoever of what is happening here, I just know it (dis)solved my problems.
		*/
		seedHTML.onclick = function(colls, arrow, j) {
			return function() {
				if (isHidden[j]) {
					colls.className = 'collectibles';
					arrow.className = 'arrowDown';
					isHidden[j] = false;
				} else {
					colls.className = 'hidden';
					arrow.className = 'arrowRight';
					isHidden[j] = true;
				}
			}	
		}(table, arrow, i);
	}
}

//Delete "Paste the contents of your log here!" in text area on click
txt.onclick = function() {
	if (hasPlaceholder) {
		txt.value = '';
		hasPlaceholder = false;
	}
};