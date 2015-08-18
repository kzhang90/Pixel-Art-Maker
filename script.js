window.onload=function(){

var color ;
makeDivs();
redPalette();
orangePalette();
yellowPalette();
greenPalette();
bluePalette();
purplePalette();
chooseColor();
makeColor();

};


function makeDivs(){
	for (var i = 0; i<1000; i++){
		var parent = document.getElementsByTagName("body")[0];
		var div = document.createElement("div");
		div.style.display="inline-block";
		div.style.height="20px";
		div.style.width="20px";
		div.style.float="left";
		div.style.backgroundColor="transparent";
		div.style.border="1px solid black";
		div.style.margin="1px";
		parent.appendChild(div);
	}
}
function redPalette(){
	var parent = document.getElementsByTagName("body")[0];
	var div = document.createElement("div");
	div.style.backgroundColor="red";
	div.style.display="inline-block";
	div.style.height="50px";
	div.style.width="50px";
	div.style.float="left";
	div.style.border="1px solid black";
	div.style.margin="1px";
	parent.appendChild(div);
}
function orangePalette(){
	var parent = document.getElementsByTagName("body")[0];
	var div = document.createElement("div");
	div.style.backgroundColor="orange";
	div.style.display="inline-block";
	div.style.height="50px";
	div.style.width="50px";
	div.style.float="left";
	div.style.border="1px solid black";
	div.style.margin="1px";
	parent.appendChild(div);
}
function yellowPalette(){
	var parent = document.getElementsByTagName("body")[0];
	var div = document.createElement("div");
	div.style.backgroundColor="yellow";
	div.style.display="inline-block";
	div.style.height="50px";
	div.style.width="50px";
	div.style.float="left";
	div.style.border="1px solid black";
	div.style.margin="1px";
	parent.appendChild(div);
}
function greenPalette(){
	var parent = document.getElementsByTagName("body")[0];
	var div = document.createElement("div");
	div.style.backgroundColor="green";
	div.style.display="inline-block";
	div.style.height="50px";
	div.style.width="50px";
	div.style.float="left";
	div.style.border="1px solid black";
	div.style.margin="1px";
	parent.appendChild(div);
}
function bluePalette(){
	var parent = document.getElementsByTagName("body")[0];
	var div = document.createElement("div");
	div.style.backgroundColor="blue";
	div.style.display="inline-block";
	div.style.height="50px";
	div.style.width="50px";
	div.style.float="left";
	div.style.border="1px solid black";
	div.style.margin="1px";
	parent.appendChild(div);
}
function purplePalette(){
	var parent = document.getElementsByTagName("body")[0];
	var div = document.createElement("div");
	div.style.backgroundColor="purple";
	div.style.display="inline-block";
	div.style.height="50px";
	div.style.width="50px";
	div.style.float="left";
	div.style.border="1px solid black";
	div.style.margin="1px";
	parent.appendChild(div);

}
function chooseColor(){
	var div = document.getElementsByTagName("div");
	for (var i = div.length-1; i>999; i--){
		div[i].addEventListener("click", function(){
			return (color = this.style.backgroundColor);
		});
	}
}
function makeColor(){
	var div = document.getElementsByTagName("div");
	for (var i = 0; i<div.length-6; i++){
		div[i].addEventListener("click", function(){
			this.style.backgroundColor= color;
		});
	}
}



















