import MyAjax from "./MyAjax.js";
import "./../scss/kind.scss";

export default{
	loadHeader(){
		$("#header").load("views/kind.html .kindHeader",()=>{
			console.log("ok")
		})
	},
	loadContent(){
		var that=this;
		$("#content").load("views/kind.html .kindContent",()=>{
			console.log("ok");
			
			that.loadKind();
		})
	},
	loadKind(){
		var url="https://simba-api.meilishuo.com/venus/mce/v1/urlChange/pc?pid=20783&channel=wap&page=1&pageSize=30&_=1501030980544";
		MyAjax.fetchJsonp(url,function(data){
			console.log(data)
			
			for(var i in data.value){
				var tmp=data.value[i]
				
				$(".kindPic").append('<dl>'+
						'<dd><img src="'+tmp.image+'" alt="" /></dd>'+
						'<dt>'+tmp.title+'</dt>'+
					    '</dl>')
			}
		
			
		},function(err){
			console.log(err);
		})
	}
}
