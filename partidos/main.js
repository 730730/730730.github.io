var pri = ['Frente', 'Uni\xF3n', 'Partido', 'Junta', 'Movimiento', 'Fuerza', 'Acci\xF3n', 'Encuentro', 'Proyecto'];
var seg = ['Obrer', 'Popular', 'Renovador', 'Federal', 'Radical', 'Progresista', 'Justicialista'];
var ter = ['Obrer', 'Popular', 'Renovador', 'Federal', 'Radical', 'Progresista', 'del Progreso', 'para el Progreso', 'para la Justicia', 'de la Justicia', 'Justicialista', 'para la Victoria', 'de la Victoria'];
var partido = document.getElementById("partido");
function getPartido() {
	var terNew = ter.slice(0);
	var isFem = false;
	var priIndex = Math.floor(Math.random() * pri.length);
	switch (priIndex) {
		case 1:
		case 3:
		case 5:
		case 6:
			isFem = true;
			break;
	}
	var segIndex = Math.floor(Math.random() * seg.length);
	switch (segIndex) {
		case 5:
			terNew.splice(5, 3);
			console.log(terNew);
			break;
		case 6:
			terNew.splice(8, 3);
			break;
		default:
			terNew.splice(segIndex, 1);
			break;
	}
	var terIndex = Math.floor(Math.random() * terNew.length);
	var priWord = pri[priIndex];
	var segWord = seg[segIndex];
	var terWord = terNew[terIndex];
	if (isFem && (segWord == 'Obrer' || segWord == 'Renovador')) {
		segWord = segWord + 'a';
	}
	if (!isFem && segWord == 'Obrer') {
		segWord = segWord + 'o';
	}
	if (isFem && (terWord == 'Obrer' || terWord == 'Renovador')) {
		terWord = terWord + 'a';
	}
	if (!isFem && terWord == 'Obrer') {
		terWord = terWord + 'o';
	}
	var partido = priWord + ' ' + segWord + ' ' + terWord;
	return partido;
}