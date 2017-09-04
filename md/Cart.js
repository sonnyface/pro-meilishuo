import "./../scss/cart.scss";

export default{
	loadHeader(){
		$("#header").load("views/cart.html .cartHeader",()=>{
			console.log("ok");
		})
	},
	loadContent(){
		$("#content").load("views/cart.html .cartContent",()=>{
			console.log("ok")
		})
	}
}
