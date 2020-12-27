	
function scroll(val,el,timeout,step){
var i=0;
(function(){
	if(i<=val){
setTimeout(arguments.callee,timeout);
document.getElementById(el).innerHTML=i;
i=i+step;
	}else{
document.getElementById(el).innerHTML=val;
}
})();
}
scroll(10458,'number-of-students',10,5);
scroll(120,'number-of-universities',10,1);
scroll(500,'number-of-teachers',10,1);
scroll(8456,'Employed',10,5);