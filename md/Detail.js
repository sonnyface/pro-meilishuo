import "./../scss/detail.scss";
import Home from "./Home.js";
import MyAjax from "./MyAjax.js";

export default{
	loadHeader(){
		$("#header").load("views/detail.html .detailHeader",()=>{
			console.log("ok");
			$("#back").on("tap",function(){
				Home.loadHeader();
				Home.loadContent();
			})
		})
	},
	loadContent(){
		$("#content").load("views/detail.html .detailContent",()=>{
			console.log("ok")
					
			var url="http://m.meilishuo.com/detail/mls/v1/h5?iid=1kggb28&_ajax=1";
			
			
			MyAjax.fetchJsonp(url,function(data){
				console.log(data);
				
				
			},function(err){
				console.log(err);
			})
			
		})
	}
}
