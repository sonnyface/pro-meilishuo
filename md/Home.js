import "./../scss/home.scss";
import MyAjax from "./MyAjax.js";
import Login from "./Login.js";
import MainFooter from "./MainFooter.js";
import Detail from "./Detail.js";

export default{
	loadHeader(){
		$("#header").load("views/home.html .homeHeader",()=>{
			console.log("ok");
			$(".headerTalk").on("tap",function(){
				Login.loadHeader();
				Login.loadContent();
			})
			
		})
	},
	loadContent(){
		var that = this;
		$("#content").load("views/home.html .homeContent",()=>{
			console.log("ok");
			
			that.loadBanner();
			that.loadShopValue();
			that.loadTapPic();
			that.loadShopLists1();
			that.loadShopLists2();
			that.loadShopLists3();
			
			$(".navBox").find("li").on("tap",function(){
				var index=$(this).index();
				$(this).addClass("active").siblings().removeClass("active");
				switch (index){
					case 0:
						console.log(11);
						$(".tabLists").html("")
						that.loadShopLists1();						
						break;
					case 1:5
						console.log(22);
						$(".tabLists").html("")
						that.loadShopLists2();						
						break;
					case 2:
						console.log(333);
						$(".tabLists").html("")
						that.loadShopLists3();						
						break;
				}
				
			})
			
			
		
		})
	},
	loadBanner(){
	
		var url="http://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730%2C42287";
		MyAjax.fetchJsonp(url,function(res){
			//console.log(res);
			var ttm=res.data[43542];
			for(var i in ttm.list){
				var obj=ttm.list[i];
				$("#homeWapper").append('<div class="swiper-slide">'+
							'<img src="'+obj.image+'" alt="" />'+
						'</div>')
			}

			//轮播图实例化
			var mySwiper = new Swiper("#homeBanner",{
				autoplay:3000,
				loop:true,
				autoplayDisableOnInteraction:false,
				pagination:".swiper-pagination"
			});
			
			$("#homeWapper img").on("tap",function(){
				  Detail.loadHeader();
				  Detail.loadContent();
				  $("footer").css("display","none")
			})
			
			
			
			var tmp=res.data[13730];
			for(var j in tmp.list){
				//console.log(tmp.list[j]);
				$(".box").append('<dl class="homeDl">'+
				 		'<dd><img src="'+tmp.list[j].image+'" /></dd>'+
						'<dt>'+tmp.list[j].title+'</dt>'+		 		
				 	'</dl>')
			}
			
			
			var tml=res.data[42287];
			for(var k in tml.list){
				//console.log(tmp.list[j]);
				var tmm=tml.list[k];
				$(".limitWrap").prepend('<div class="singleShop">'+
					'<img src="'+tmm.image+'" alt="" />'+
					'<div class="singleVal">'+
						'<span>￥'+tmm.discountPrice+'</span>'+
						'<span>￥'+tmm.price+'</span>'+
					'</div>'+					
					'<div class="rushShop">'+
						'<span>立即抢购</span>'+
					'</div>'+
				'</div>')
			}
			
			function countTime() {  
	            //获取当前时间  
	            var date = new Date();  
	            var now = date.getTime();  
	            //设置截止时间  
	            var endDate = new Date("2017-9-1 23:23:23");  
	            var end = endDate.getTime();  
	            //时间差  
	            var leftTime = end-now;
//	            console.log(leftTime)
	            //定义变量 d,h,m,s保存倒计时的时间  
	            var ms,h,m,s;  
	            if (leftTime>=0) {  
//	                d = Math.floor(leftTime/1000/60/60/24);  
	                h = Math.floor(leftTime/1000/60/60%24);
	                m = Math.floor(leftTime/1000/60%60);  
	                s = Math.floor(leftTime/1000%60);
	                ms = Math.floor((leftTime/100)%30);
	            }  
	            if(h<10){
	            	h="0"+h
	            }
	            if(m<10){
	            	m="0"+m
	            }
	            if(s<10){
	            	s="0"+s
	            }
	            if(ms<10){
	            	ms="0"+ms
	            }
//	            console.log(ms,h,m,s)
	            //将倒计时赋值到div中  
	         
	         	$("#hh").html(h)
	         	$("#mm").html(m)
	         	$("#ss").html(s)
	         	$("#ms").html(ms)
     
	            //递归每秒调用countTime方法，显示动态时间效果  
	            setTimeout(countTime,1);  
	        }
			  countTime()

			
	
		},function(err){
			console.log(err);
		})

	},
	loadShopValue(){
		
		var url='http://m.meilishuo.com/pintuan/aj/index_wall?offset=0&frame=0&trace=0&limit=18&endId=0&pid=59540&page=1';
		MyAjax.fetchJsonp(url,function(arr){
			//console.log(arr);
			for(var m in arr.data.list){
				var tpp=arr.data.list[m];
				if(m<=4){
					$('.mainVal').append('<div class="shopValue">'+
						'<img src="'+tpp.image+'" alt="" />'+
						'<div class="shopDet">'+
							'<h3>'+tpp.title+'</h3>'+
							'<p>￥'+tpp.discountPrice+'<span>￥'+tpp.price+'</span></p><p>'+tpp.ptUserCount+'人团•已团'+tpp.pintuanItemSale+'件</p>'+
							'<div class="valueBtn">开团</div>'+				
						'</div>'+
					'</div>')
				}								
			}
			
		},function(err){
			console.log(err);
		})
	},
	loadTapPic(){
		var url="https://simba-api.meilishuo.com/venus/topic/v2/queryTopicList/h5";
		MyAjax.fetchJsonp(url,function(result){
		//onsole.log(result);
			
			for(var i in result.data){
				var tay=result.data[i]
				$(".mainContent").append('<div class="mainBanner1">'+
					'<img class="bannerImg" src="'+tay.image+'" alt="" /><div class="mainList3"><div class="mainWrap"></div></div>'+					
				'</div>')
				
				for(var j in tay.goodsList){
					var tyy=tay.goodsList[j];
										
					$(".mainWrap").append('<div class="listWrap">'+
							'<img src="'+tyy.image+'" alt="" />'+
								'<h4>'+tyy.title+'</h4>'+
								'<p>￥'+tyy.price+'</p>'+		
						'</div>')
		            }
				}
	
		},function(err){
			console.log(err);
		})
	},
	loadShopLists1(){		
		var url="http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=dc7e162f-710d-4670-a659-4a0446ce01b3&sort=pop&_=1500963911686";
		MyAjax.fetchJsonp(url,function(dat){
			//console.log(dat);
		
			for(var i in dat.data.list){
				var ttps=dat.data.list[i];
				$("#home .tabLists").append('<li>'+
	    			'<img src="'+ttps.show.img+'" alt="" />'+
	    			'<h5>'+ttps.title+'</h5>'+
	    			'<p>'+ttps.price+'<i>&#xe656;</i>'+
	    				'<span>'+ttps.cfav+'</span>'+
	    			'</p>'+	    			
	    		'</li>')
			}
			
		},function(err){
			console.log(err)
		})
	
	},
	loadShopLists2(){
		
		var url="http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=dc7e162f-710d-4670-a659-4a0446ce01b3&sort=new&_=1501219017733";
		MyAjax.fetchJsonp(url,function(dat){
			//console.log(dat);
		
			for(var i in dat.data.list){
				var ttps=dat.data.list[i];
				$("#profile .tabLists").append('<li>'+
	    			'<img src="'+ttps.show.img+'" alt="" />'+
	    			'<h5>'+ttps.title+'</h5>'+
	    			'<p>'+ttps.price+'<i>&#xe656;</i>'+
	    				'<span>'+ttps.cfav+'</span>'+
	    			'</p>'+	    			
	    		'</li>')
			}
			
		},function(err){
			console.log(err)
		})
	
	},
	loadShopLists3(){
		
		var url="http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=dc7e162f-710d-4670-a659-4a0446ce01b3&sort=sell&_=1501219283830";
		MyAjax.fetchJsonp(url,function(dat){
			//console.log(dat);
		
			
			for(var i in dat.data.list){
				var ttps=dat.data.list[i];
				$("#messages .tabLists").append('<li>'+
	    			'<img src="'+ttps.show.img+'" alt="" />'+
	    			'<h5>'+ttps.title+'</h5>'+
	    			'<p>'+ttps.price+'<i>&#xe656;</i>'+
	    				'<span>'+ttps.cfav+'</span>'+
	    			'</p>'+	    			
	    		'</li>')
			}
		
		},function(err){
			console.log(err)
		})
	
  }

}
