import "./../scss/register.scss";
import Login from "./Login.js";
import Home from "./Home.js";
import MyAjax from "./MyAjax.js";
import MainFooter from "./MainFooter.js";
import Toast from "./Toast.js";

export default{
	
	loadHeader(){
		$("#header").load("views/register.html .registerHeader",()=>{
			console.log("ok");
			
			$(".back").on("tap",function(){
					Login.loadHeader();
					Login.loadContent();
					$("#footer").css("display","none");
			});
			
			$(".registerHome").on("tap",function(){
					Home.loadHeader();
					Home.loadContent();
					$("#footer").css("display","block");
				})
			
		})
	},
	loadContent(type){
		$("#content").load("views/register.html .registerContent",function(){
			console.log("ok")
			
			$("#registerBtn").on("tap",function(){
						//正则验证是否符合要求
			var userID=$("#userID").val();
			var password=$("#password").val();
			
			if(userID =="" || password ==""){
				Toast.makeText("填写信息不完整",3000);
				$("#toast").css("background","#ddd")
				
			}else{				
				$("#btn").attr("disabled","disabled");
				
				$("#btn").val("注册中...")
				var userObj={
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					data:{
						status:"register",
						userID:userID,
						password:password
					},
					dataType:"JSON"
				}
				
				MyAjax.zeptoAjax(userObj,function(data){
					
					if(data=="0"){
						Toast.makeText("用户名重名",3000);
						$("#toast").css("background","mediumvioletred")
					}else if(data=="1"){
						Toast.makeText("注册成功",3000);
						$("#toast").css("background","#00AA00")
						
						setTimeout(function(){
							Login.loadHeader();
							Login.loadContent();
						},3000)
						
					}else{
						Toast.makeText("注册失败",3000);						
					}
					
				 })
				
				
			  }
				
				
		   })
			
		})
	}
}

