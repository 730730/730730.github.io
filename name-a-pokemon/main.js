/*TODO:
-10 seconds to guess
---ONLINE---
*/

var pokeList = ["", "abomasnow", "abra", "absol", "accelgor", "aegislash", "aerodactyl", "aggron", "aipom", "alakazam", "alomomola", "altaria", "amaura", "ambipom", "amoonguss", "ampharos", "anorith", "arbok", "arcanine", "arceus", "archen", "archeops", "ariados", "armaldo", "aromatisse", "aron", "articuno", "audino", "aurorus", "avalugg", "axew", "azelf", "azumarill", "azurill", "bagon", "baltoy", "banette", "barbaracle", "barboach", "basculin", "bastiodon", "bayleef", "beartic", "beautifly", "beedrill", "beheeyem", "beldum", "bellossom", "bellsprout", "bergmite", "bibarel", "bidoof", "binacle", "bisharp", "blastoise", "blaziken", "blissey", "blitzle", "boldore", "bonsly", "bouffalant", "braixen", "braviary", "breloom", "bronzong", "bronzor", "budew", "buizel", "bulbasaur", "buneary", "bunnelby", "burmy", "butterfree", "cacnea", "cacturne", "camerupt", "carbink", "carnivine", "carracosta", "carvanha", "cascoon", "castform", "castform", "caterpie", "celebi", "chandelure", "chansey", "charizard", "charmander", "charmeleon", "chatot", "cherrim", "cherubi", "chesnaught", "chespin", "chikorita", "chimchar", "chimecho", "chinchou", "chingling", "cinccino", "clamperl", "clauncher", "clawitzer", "claydol", "clefable", "clefairy", "cleffa", "cloyster", "cobalion", "cofagrigus", "combee", "combusken", "conkeldurr", "corphish", "corsola", "cottonee", "cradily", "cranidos", "crawdaunt", "cresselia", "croagunk", "crobat", "croconaw", "crustle", "cryogonal", "cubchoo", "cubone", "cyndaquil", "darkrai", "darmanitan", "darumaka", "dedenne", "deerling", "deino", "delcatty", "delibird", "delphox", "deoxys", "dewgong", "dewott", "dialga", "diancie", "diggersby", "diglett", "ditto", "dodrio", "doduo", "donphan", "doublade", "dragalge", "dragonair", "dragonite", "drapion", "dratini", "drifblim", "drifloon", "drilbur", "drowzee", "druddigon", "ducklett", "dugtrio", "dunsparce", "duosion", "durant", "dusclops", "dusknoir", "duskull", "dustox", "dwebble", "eelektrik", "eelektross", "eevee", "ekans", "electabuzz", "electivire", "electrike", "electrode", "elekid", "elgyem", "emboar", "emolga", "empoleon", "entei", "escavalier", "espeon", "espurr", "excadrill", "exeggcute", "exeggutor", "exploud", "farfetch'd", "fearow", "feebas", "fennekin", "feraligatr", "ferroseed", "ferrothorn", "finneon", "flaaffy", "flabebe", "flareon", "fletchinder", "fletchling", "floatzel", "floette", "florges", "flygon", "foongus", "forretress", "fraxure", "frillish", "froakie", "frogadier", "froslass", "furfrou", "furret", "gabite", "gallade", "galvantula", "garbodor", "garchomp", "gardevoir", "gastly", "gastrodon", "genesect", "gengar", "geodude", "gible", "gigalith", "girafarig", "giratina", "glaceon", "glalie", "glameow", "gligar", "gliscor", "gloom", "gogoat", "golbat", "goldeen", "golduck", "golem", "golett", "golurk", "goodra", "goomy", "gorebyss", "gothita", "gothitelle", "gothorita", "gourgeist", "gourgeist", "granbull", "graveler", "greninja", "grimer", "grotle", "groudon", "grovyle", "growlithe", "grumpig", "gulpin", "gurdurr", "gyarados", "happiny", "hariyama", "haunter", "hawlucha", "haxorus", "heatmor", "heatran", "heliolisk", "helioptile", "heracross", "herdier", "hippopotas", "hippowdon", "hitmonchan", "hitmonlee", "hitmontop", "ho-oh", "honchkrow", "honedge", "hoopa", "hoothoot", "hoppip", "horsea", "houndoom", "houndour", "huntail", "hydreigon", "hypno", "igglybuff", "illumise", "infernape", "inkay", "ivysaur", "jellicent", "jigglypuff", "jirachi", "jolteon", "joltik", "jumpluff", "jynx", "kabuto", "kabutops", "kadabra", "kakuna", "kangaskhan", "karrablast", "kecleon", "keldeo", "keldeo", "kingdra", "kingler", "kirlia", "klang", "klefki", "klink", "klinklang", "koffing", "krabby", "kricketot", "kricketune", "krokorok", "krookodile", "kyogre", "kyurem", "lairon", "lampent", "landorus", "lanturn", "lapras", "larvesta", "larvitar", "latias", "latios", "leafeon", "leavanny", "ledian", "ledyba", "lickilicky", "lickitung", "liepard", "lileep", "lilligant", "lillipup", "linoone", "litleo", "litwick", "lombre", "lopunny", "lotad", "loudred", "lucario", "ludicolo", "lugia", "lumineon", "lunatone", "luvdisc", "luxio", "luxray", "machamp", "machoke", "machop", "magby", "magcargo", "magikarp", "magmar", "magmortar", "magnemite", "magneton", "magnezone", "makuhita", "malamar", "mamoswine", "manaphy", "mandibuzz", "manectric", "mankey", "mantine", "mantyke", "maractus", "mareep", "marill", "marowak", "marshtomp", "masquerain", "mawile", "medicham", "meditite", "meganium", "meloetta", "meowstic", "meowth", "mesprit", "metagross", "metang", "metapod", "mew", "mewtwo", "mienfoo", "mienshao", "mightyena", "milotic", "miltank", "mime jr.", "minccino", "minun", "misdreavus", "mismagius", "moltres", "monferno", "mothim", "mr. mime", "mudkip", "muk", "munchlax", "munna", "murkrow", "musharna", "natu", "nidoking", "nidoqueen", "nidoran", "nidorina", "nidorino", "nincada", "ninetales", "ninjask", "noctowl", "noibat", "noivern", "nosepass", "numel", "nuzleaf", "octillery", "oddish", "omanyte", "omastar", "onix", "oshawott", "pachirisu", "palkia", "palpitoad", "pancham", "pangoro", "panpour", "pansage", "pansear", "paras", "parasect", "patrat", "pawniard", "pelipper", "persian", "petilil", "phanpy", "phantump", "phione", "pichu", "pidgeot", "pidgeotto", "pidgey", "pidove", "pignite", "pikachu", "piloswine", "pineco", "pinsir", "piplup", "plusle", "politoed", "poliwag", "poliwhirl", "poliwrath", "ponyta", "poochyena", "porygon", "porygon-z", "porygon2", "primeape", "prinplup", "probopass", "psyduck", "pumpkaboo", "pupitar", "purrloin", "purugly", "pyroar", "quagsire", "quilava", "quilladin", "qwilfish", "raichu", "raikou", "ralts", "rampardos", "rapidash", "raticate", "rattata", "rayquaza", "regice", "regigigas", "regirock", "registeel", "relicanth", "remoraid", "reshiram", "reuniclus", "rhydon", "rhyhorn", "rhyperior", "riolu", "roggenrola", "roselia", "roserade", "rotom", "rotom", "rufflet", "sableye", "salamence", "samurott", "sandile", "sandshrew", "sandslash", "sawk", "sawsbuck", "scatterbug", "sceptile", "scizor", "scolipede", "scrafty", "scraggy", "scyther", "seadra", "seaking", "sealeo", "seedot", "seel", "seismitoad", "sentret", "serperior", "servine", "seviper", "sewaddle", "sharpedo", "shaymin", "shedinja", "shelgon", "shellder", "shellos", "shelmet", "shieldon", "shiftry", "shinx", "shroomish", "shuckle", "shuppet", "sigilyph", "silcoon", "simipour", "simisage", "simisear", "skarmory", "skiddo", "skiploom", "skitty", "skorupi", "skrelp", "skuntank", "slaking", "slakoth", "sliggoo", "slowbro", "slowking", "slowpoke", "slugma", "slurpuff", "smeargle", "smoochum", "sneasel", "snivy", "snorlax", "snorunt", "snover", "snubbull", "solosis", "solrock", "spearow", "spewpa", "spheal", "spinarak", "spinda", "spiritomb", "spoink", "spritzee", "squirtle", "stantler", "staraptor", "staravia", "starly", "starmie", "staryu", "steelix", "stoutland", "stunfisk", "stunky", "sudowoodo", "suicune", "sunflora", "sunkern", "surskit", "swablu", "swadloon", "swalot", "swampert", "swanna", "swellow", "swinub", "swirlix", "swoobat", "sylveon", "taillow", "talonflame", "tangela", "tangrowth", "tauros", "teddiursa", "tentacool", "tentacruel", "tepig", "terrakion", "throh", "thundurus", "timburr", "tirtouga", "togekiss", "togepi", "togetic", "torchic", "torkoal", "tornadus", "torterra", "totodile", "toxicroak", "tranquill", "trapinch", "treecko", "trevenant", "tropius", "trubbish", "turtwig", "tympole", "tynamo", "typhlosion", "tyranitar", "tyrantrum", "tyrogue", "tyrunt", "umbreon", "unfezant", "unown", "ursaring", "uxie", "vanillish", "vanillite", "vanilluxe", "vaporeon", "venipede", "venomoth", "venonat", "venusaur", "vespiquen", "vibrava", "victini", "victreebel", "vigoroth", "vileplume", "virizion", "vivillon", "volbeat", "volcanion", "volcarona", "voltorb", "vullaby", "vulpix", "wailmer", "wailord", "walrein", "wartortle", "watchog", "weavile", "weedle", "weepinbell", "weezing", "whimsicott", "whirlipede", "whiscash", "whismur", "wigglytuff", "wingull", "wobbuffet", "woobat", "wooper", "wormadam", "wurmple", "wynaut", "xatu", "xerneas", "yamask", "yanma", "yanmega", "yveltal", "zangoose", "zapdos", "zebstrika", "zekrom", "zigzagoon", "zoroark", "zorua", "zubat", "zweilous", "zygarde", ""];
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var selectedLetter;
var letterIndex;
var input = document.getElementById("input");
var letter = document.getElementById("letter");

//Selects random letter
function getLetter() {
	letterIndex = Math.floor(Math.random() * letters.length);
	selectedLetter = letters[letterIndex];
	letter.innerHTML = selectedLetter;
	console.log(selectedLetter);
}

function clearInputColor() {
	input.style.background = 'white';
}

function wrong() {
	input.style.background = '#F4ADAD';
	window.setTimeout(clearInputColor, 250);
}

function correct() {
	input.style.background = '#A8E5A1';
	window.setTimeout(clearInputColor, 250);
}

input.onkeypress = function(e) {
	var keyCode = e.keyCode || e.which;
    if (keyCode === 13){
		var pokeIndex = pokeList.indexOf(input.value.toLowerCase());
		if (pokeIndex > -1 && input.value.toUpperCase().indexOf(selectedLetter) == 0) {
			correct();	
			previousItem = pokeList[pokeIndex - 1];
			nextItem = pokeList[pokeIndex + 1];
			//Remove letter if all Pokémon with it have been entered already
			if (previousItem.indexOf(selectedLetter) != 0 && nextItem.indexOf(selectedLetter) != 0) {
				letters.splice(letterIndex, 1);
			}
			pokeList.splice(pokeIndex, 1);
			getLetter();
		} else {
			wrong();
			console.log("Try again!");
		}
		input.value = "";
	}
}

getLetter();