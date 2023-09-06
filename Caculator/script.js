var butns=document.querySelectorAll(".b")
var current=document.querySelectorAll('#input1 p')[0];  
var clear = document.getElementsByClassName('ac')[0];
for(var i=0;i<butns.length;i++){
    if(butns[i].innerHTML === '='){
        butns[i].addEventListener("click", calculate(i));
    }else{
        butns[i].addEventListener("click", addtocurrentvalue(i));
    }
}
function addtocurrentvalue (i){
	return function(){
		if (butns[i].innerHTML === "/") {
        current.innerHTML  +=  "/ " ;
    }else if(butns[i].innerHTML === "*"){
		current.innerHTML += "*";
	} else if(butns[i].innerHTML === "+"){
	current.innerHTML  += butns[i].innerHTML;
	}else{
        current.innerHTML  += butns[i].innerHTML;
    }
};
}
clear.onclick = function () {
    current.innerHTML = '';
}; 

function calculate(i) {
return function () {
    current.innerHTML = eval(current.innerHTML);
};
}
