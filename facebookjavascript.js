function display()
{
var x=document.getElementById('check1');
var y=document.getElementById('check2');
 if(x.value.trim()=="John123" && y.value.trim()=="John")
 {
	/*alert("wrong username or password!!!");*/return true;
 }
 else{
 	alert("wrong username or password!!!");
 	return false;
 }
}