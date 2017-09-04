//import "./../scss/main.scss";

export default {
	makeText(str,time){
		$("#toast").show()
		$("#toast").html(str);
		
		setTimeout(function(){
			$("#toast").hide()
		},time)
	}
}


