window.onload = function(){
	scrollFunction();
}

function scrollFunction(){
	document.getElementById("navbar").style.top = "0";
}

function opendesc(x){
	document.getElementById("desc"+x).style.display="block";
}
function closedesc(x){
	document.getElementById("desc"+x).style.display="none";
}
function openthisdesc(x){
	x.style.display="block";
}
function closethisdesc(x){
	x.style.display="none";
}