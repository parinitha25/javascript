function checked(){
	var num=document.getElementByname('number');
	var sum=0;
	for(var i=0;i<num.length;i++){
		if(num[i].type=='checkbox' && num[i].checked==true){
			sum+=parseint(num[i].value);
		}
		
	}
	alert(sum);
}
 // function selectAll() {
 //        var items = document.getElementsByName('number');
 //        for (var i = 0; i < items.length; i++) {
 //            if (items[i].type == 'checkbox')
 //                items[i].checked = true;
 //        }
 //    }