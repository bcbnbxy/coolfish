window.onload=function(){
	var myIscroll=new IScroll('.index-categories',{
			scrollX:true
	});
	var mySwiper = new Swiper('.index-carouselfigure', {
            autoplay: 2000,//可选选项，自动滑动
            loop : true,
            autoplayDisableOnInteraction : false
        })
	var mySwiper = new Swiper('.index-notice-right', {
           direction : 'vertical',
           autoplay: 2000,//可选选项，自动滑动
            loop : true,
            autoplayDisableOnInteraction : false            
        })
	var mySwiper = new Swiper('.index-branch', {
            autoplay: 2000,//可选选项，自动滑动
            loop : true,
            autoplayDisableOnInteraction : false
        })
	djs(60000,$(".duanzu .duanzuday"),$(".duanzu .duanzushi"),$(".duanzu .duanzufen"),$(".duanzu .duanzumiao"),"duanzu");
	djs(80000,$(".zhigou .duanzuday"),$(".zhigou .duanzushi"),$(".zhigou .duanzufen"),$(".zhigou .duanzumiao"),"zhigou");
}
//倒计时函数
function djs(seconds,duanzuday,duanzushi,duanzufen,duanzumiao,time){
	var timer=time;
	var s=parseInt(seconds/1000);
	var day=parseInt(s/86400)<10?"0"+parseInt(s/86400):parseInt(s/86400);
	s=s%86400;
	var hour=parseInt(s/3600)<10?"0"+parseInt(s/3600):parseInt(s/3600);
	s=s%3600;
	var fen=parseInt(s/60)<10?"0"+parseInt(s/60):parseInt(s/60);
	s=s%60<10?"0"+s%60:s%60;
	if(parseInt(day)<=0&&parseInt(hour)<=0&&parseInt(fen)<=0&&parseInt(s)<=0){
		$(duanzuday).html(00);
		$(duanzushi).html(00);
		$(duanzufen).html(00);
		$(duanzumiao).html(00);
		clearInterval(timer)
		return;
	}
	$(duanzuday).html(day);
	$(duanzushi).html(hour);
	$(duanzufen).html(fen);
	$(duanzumiao).html(s);
	 timer=setInterval(function(){
		if(parseInt(s)>0){
			s=parseInt(s)
			s--;
			$(duanzumiao).html(s<10?"0"+s:s);
		}else{
			if(parseInt(fen)>0){
				fen=parseInt(fen)
				fen--;
				s=59;
				$(duanzufen).html(fen<10?"0"+fen:fen);
				$(duanzumiao).html(s);
			}else{
				if(parseInt(hour)>0){
					hour=parseInt(hour)
					hour--;
					fen=59;
					s=59;
					$(duanzushi).html(hour<10?"0"+hour:hour);
					$(duanzufen).html(fen);
					$(duanzumiao).html(s);
				}else{
					if(parseInt(day)>0){
						day=parseInt(day)
						day--;
						hour=23;
						fen=59;
						s=59;
						$(duanzuday).html(day<10?"0"+day:day);
						$(duanzushi).html(hour);
						$(duanzufen).html(fen);
						$(duanzumiao).html(s);
					}else{
						clearInterval(timer)
					}					
				}
			}
		}	
	},1000)
}

