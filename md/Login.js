import "./../scss/login.scss";
import Register from './Register.js';
import Home from "./Home.js";
import Toast from "./Toast.js";
import MyAjax from "./MyAjax.js";
import MainFooter from "./MainFooter.js";
import Cart from"./Cart.js";
import Myde from"./Myde.js";

export default{
	loadHeader(){
		$("#header").load("views/login.html .loginHeader",()=>{
			console.log("ok");
			$('.loginHome').on('tap',function(){
				Register.loadHeader();
				Register.loadContent();
			})
			$('.back').on('tap',function(){
				Home.loadHeader();
				Home.loadContent();
				$("#footer").css("display","block");
			})
			
		})
	},
	loadContent(type){
		$("#content").load("views/login.html .loginContent",()=>{
			console.log("ok");
			
			$(".skipReg").on("tap",function(){
				Register.loadHeader();
				Register.loadContent();
				$("#footer").css("display","none");
				
			})
		
			
			$("#loginBtn").on("tap",function(type){
				
				//获取值
				var userID = $("#userID").val();
				var password = $("#password").val();
				
				if(userID == "" || password == ""){
					$("#toast").css("background","mediumvioletred")
					Toast.makeText("用户信息不完整",2000);
				}else{
					$("#loginBtn").attr("disabled","disabled");//保证用户不可以连续点击
					$("#loginBtn").val("正在登录...");
					var url ="http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+userID+"&password="+password;
					MyAjax.fetch(url,function(num){
						$("#loginBtn").removeAttr("disabled")//保证用户不可以连续点击
						$("#loginBtn").val("登录")
						//console.log(num);						
						
						if(num == "0"){
							//用户名不存在
							Toast.makeText("用户不存在，请先注册",3000);
							$("#toast").css("background","mediumvioletred")
							console.log(userID,password)
							$("#userID").val("");
							$("#password").val("");
							$("#userID").focus();
						}else if(num == "2"){
							//密码错误
							Toast.makeText("密码错误",3000);
							$("#toast").css("background","mediumvioletred")
							console.log(userID,password)
							$("#password").val("");
							$("#password").focus();
						}else{
							
							//登录成功	
							//登录成功
							/**
							 * 保存登录信息，并且返回上一页
							 */
							localStorage.setItem("isLogin","1");
							localStorage.setItem("userID",userID);
							
							$("#toast").css("background","#00AA00")
							Toast.makeText("登录成功",3000);
												
							Myde.loadHeader();
							Myde.loadContent();	

							
						}
						
					},function(err){
						//保证用户不可以连续点击
						$("#loginBtn").removeAttr("disabled");
						$("loginBtn").val("登录");
						console.log(err);						
					})
				
			}
		})
	})
  }
}

