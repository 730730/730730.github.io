var bodySel = document.getElementById('body');
var expSel = document.getElementById('exp');
var rSurf = document.getElementById('rSurf');
var rLow = document.getElementById('rLow');
var btn = document.getElementById('btn');
var btn2 = document.getElementById('btn2');
var resTxt = document.getElementById('result');

var surfMult = [9, 12, 9, 0.3, 4, 5, 8, 9, 8, 0, 10, 10, 11, 9, 9, 9];
var lowMult = [8, 7, 8, 1, 3, 4, 7, 8, 7, 7, 9, 9, 10, 8, 8, 8];
var expBase = [5, 8, 30, 10, 25, 8, 12, 20, 20, 20];
var transEff = [1, 1, 0.25, 0.3, 0.2, 0.5, 0.5, 0.45, 0.4, 0.35];
var procssBonus = [1, 1, 1.12, 1.15, 1.1, 1.25, 1.25, 1.22, 1.2, 1.7]

bodySel.onchange = function() {
	if (bodySel.selectedIndex === 0 || bodySel.selectedIndex === 2 || bodySel.selectedIndex === 4 || bodySel.selectedIndex === 5
	    || bodySel.selectedIndex === 7 || bodySel.selectedIndex === 8 || bodySel.selectedIndex === 11 || bodySel.selectedIndex === 12
	    || bodySel.selectedIndex === 13 || bodySel.selectedIndex === 14 || bodySel.selectedIndex === 15) {
		
		if (expSel.selectedIndex === 5 || expSel.selectedIndex === 8) {
			expSel.selectedIndex = 0;
		}
		
		document.getElementById('atm').setAttribute('disabled', true);
		document.getElementById('atm2').setAttribute('disabled', true);
	} else {
		document.getElementById('atm').removeAttribute('disabled');
		document.getElementById('atm2').removeAttribute('disabled');
	}
};

rLow.onchange = function() {
	if (expSel.selectedIndex === 2 || expSel.selectedIndex === 7) {
		expSel.selectedIndex = 0;
	}
	document.getElementById('srf').setAttribute('disabled', true);
	document.getElementById('seismic').setAttribute('disabled', true);
};

rSurf.onchange = function() {
	document.getElementById('srf').removeAttribute('disabled');
	document.getElementById('seismic').removeAttribute('disabled');
};

btn.onclick = function() {
	if (rSurf.checked) {
		resTxt.innerHTML = surfMult[bodySel.selectedIndex] * expBase[expSel.selectedIndex];
	} else {
		resTxt.innerHTML = lowMult[bodySel.selectedIndex] * expBase[expSel.selectedIndex];
	}
};

btn2.onclick = function() {
	if (document.getElementById('proc').checked) {
		if (rSurf.checked) {
			resTxt.innerHTML = surfMult[bodySel.selectedIndex] * expBase[expSel.selectedIndex] * transEff[expSel.selectedIndex] * procssBonus[expSel.selectedIndex];
		} else {
			resTxt.innerHTML = lowMult[bodySel.selectedIndex] * expBase[expSel.selectedIndex] * transEff[expSel.selectedIndex] * procssBonus[expSel.selectedIndex];
		}
	} else {
		if (rSurf.checked) {
			resTxt.innerHTML = surfMult[bodySel.selectedIndex] * expBase[expSel.selectedIndex] * transEff[expSel.selectedIndex];
		} else {
			resTxt.innerHTML = lowMult[bodySel.selectedIndex] * expBase[expSel.selectedIndex] * transEff[expSel.selectedIndex];
		}
	}
}