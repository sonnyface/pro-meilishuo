import "./../scss/myde.scss";
import Home from "./Home.js";
import Login from "./Login.js";
import MyAjax from "./MyAjax.js";

export default{
	loadHeader(){
		$("#header").load("views/myde.html .mydeHeader",()=>{
			console.log("ok");
			$(".back").on("tap",function(){
				Home.loadHeader();
				Home.loadContent();
			})
			$(".mydeHome").on("tap",function(){
				localStorage.setItem("isLogin","0");
				Login.loadHeader();
				Login.loadContent();
			})
			
		})
	},
	loadContent(){
		$("#content").load("views/myde.html .mydeContent",()=>{
			console.log("ok");
		
			
		})
			
		
	}
}
