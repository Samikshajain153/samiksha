function display()
{
var x=document.getElementById('check1');
var y=document.getElementById('check2');
 if(x.value.trim()=="samikshajain95" && y.value.trim()=="samikshajain")
 {
	/*alert("wrong username or password!!!");*/return true;
 }
 else{
 	alert("wrong username or password!!!");
 	return false;
 }
}