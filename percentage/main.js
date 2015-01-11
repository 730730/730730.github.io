var one = document.getElementById("1");
var two = document.getElementById("2");
var res = document.getElementById("res");

one.onkeypress = function(e) {
	var keyCode = e.keyCode || e.which;
    if (keyCode === 13){
		res.innerHTML = (one.value / two.value) * 100
	}
}

two.onkeypress = function(e) {
	var keyCode = e.keyCode || e.which;
    if (keyCode === 13){
		res.innerHTML = (one.value.replace(",", ".") / two.value.replace(",", ".")) * 100 + "%"
	}
}