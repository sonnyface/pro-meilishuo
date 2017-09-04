
import Home from "./Home.js";
import Kind from "./Kind.js";
import Cart from "./Cart.js";
import Login from "./Login.js";
import Myde from "./Myde.js";

export default {
	loadFooterActive(index){
		$("#footer").find("li").eq(index).addClass("active").siblings().removeClass("active");
	},
	loadFooter(){
		$("#footer").load("views/mainFooter.html",function(){
			$("#footer").find("li").on("tap",function(){
				var index = $(this).index();
				$(this).addClass("active").siblings().removeClass("active");
				
				switch (index){
					case 0:
						Home.loadHeader();
						Home.loadContent();
						break;
					case 1:
						Kind.loadHeader();
						Kind.loadContent();
						break;
					case 2:
					/**
					 * 如果登录成功，则显示购物车数据
					 * 如果没有成功登录，那么跳转到登录页面
					 */
						if(localStorage.getItem("isLogin") == "1"){
							Cart.loadHeader();
							Cart.loadContent();
						}else{
							Login.loadHeader("cart");
							Login.loadContent("cart");
							$("#footer").css("display","none")
						}
					
						break;
					case 3:
						if(localStorage.getItem("isLogin")=="1"){
							Myde.loadHeader();
							Myde.loadContent();
						}else{
							Login.loadHeader();
							Login.loadContent();
							$("footer").css("display","none");
						}
						
						break;
					default:
						break;
				}
			})
		})
	}
}
