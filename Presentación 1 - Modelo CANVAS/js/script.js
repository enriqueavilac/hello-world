var n = 0;
var left = document.getElementById("left");
var rigtht = document.getElementById("right");

left.addEventListener("click",prev);
right.addEventListener("click",next);

function prev(){
	if(n > 0){
		n = n - 1;
	}
	diaps = document.getElementsByClassName("pinicio")[0];
	diaps.style.marginLeft = -(n)*(33.33) + '%';
}
function next(){
	if(n < 2){
		n = n + 1;
	}
	diaps = document.getElementsByClassName("pinicio")[0];
	diaps.style.marginLeft = -(n)*(33.33) + '%';
}


/*$(document).ready(function(){
  $("document").click(function(){
    alert("asdsda");
  });
});*/