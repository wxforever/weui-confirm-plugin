	;(function(){




		function weuiConfirm(){}
		
	

	weuiConfirm.prototype={
		init:function(obj){
			_this=this;
	         if(!document.querySelector('#weuidialog')){
	         			var confirmdom='<div class="weui_dialog_confirm" style="display:none;" id="weuidialog">'+
	    						'<div class="weui_mask" style="z-index:999999;"></div>'+
	    						'<div class="weui_dialog" style="z-index:999999;">'+
	        						'<div class="weui_dialog_hd"><strong class="weui_dialog_title" id="weuititle">'+obj.title+'</strong></div>'+
	        						'<div class="weui_dialog_bd" id="weuicontent">'+obj.content+'</div>'+
	        						'<div class="weui_dialog_ft">'+
	            						'<a href="javascript:;" class="weui_btn_dialog default" id="weuicancel">'+obj.cancel+'</a>'+
	            						'<a href="javascript:;" class="weui_btn_dialog primary" id="weuiconfirm">'+obj.confirm+'</a>'+
	        						'</div></div></div>';
	        var odiv=document.createElement('div');
	        odiv.innerHTML=confirmdom;
			document.body.insertBefore(odiv, document.body.firstChild);
			document.querySelector('#weuicancel').addEventListener('touchstart',function(){
				_this.hide();
				
			},false);


		}else{
			document.querySelector('#weuititle').innerHTML=obj.title;
			document.querySelector('#weuicontent').innerHTML=obj.content;
			document.querySelector('#weuicancel').innerHTML=obj.cancel;
			document.querySelector('#weuiconfirm').innerHTML=obj.confirm;
			
		}
     

		},
		show:function(obj){
                _this=this;
				var _default={
				title:'',
				content:'',
				cancel:'取消',
				confirm:'确定',
				ck:null
				};

			for (var i in obj) {
		    _default[i] = obj[i] || _default[i];
		  }

		   this.init(_default);
			document.querySelector('#weuidialog').style.display='block';

			   //点击确认后的回调
			if(typeof obj.ck=='function'){
				document.querySelector('#weuiconfirm').ontouchstart=function(){			   
			    	obj.ck.call(this);
				};
			}else{
				document.querySelector('#weuiconfirm').ontouchstart=function(){
					_this.hide();
				}
			}

		},
		hide:function(){
			document.querySelector('#weuidialog').style.display='none';
		},

	}

	window.weuiConfirm=weuiConfirm;

 	})();