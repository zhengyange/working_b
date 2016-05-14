import B5MApp from 'b5m_app';
export function postBistData(bistData){
			
	//判断是否登录
	B5MApp.send_message('checkIsLogined', {}, function(res){
		var isLogined = 1;
		if(!res.isLogined){
			isLogined = 0;
		}
		B5MApp.send_message('commonParams', {}, function(res){
			//相关数据
			var data = {
				"uid": res.did,
				"mid": isLogined ? res.appUserId : '',
				"pt" : "1800",
				"cl" : res.appChannel,
				"ver": res.appVersion,
				"dev": res.dev,
				"mod": res.appDevice,
				"l1" : bistData.l1,
				"l2" : bistData.l2,
				"et" : bistData.et,
				"ei" : bistData.ei,
				"li" : bistData.li,
				"abt": "",
				"sid": res.sessionId,
				"ext": {
					"dl": window.location.href,
					"dr": "",
					"il": isLogined,
					"ut": "",
					"os": res.appOs,
					"idfa": res.idfa,
					"mac": res.mac,
					"ua": !res.ua ? "" : res.ua, 
					// "timestamp": new Date().getTime()

				}
			};
			var imgSrc = 'http://tr.bang5mai.com/app/__utm.gif?' + encodeURIComponent(JSON.stringify(data));
			if(document.querySelector('#bistData')){
				document.querySelector('#bistData').src = imgSrc;
				return false;
			}
			var img = document.createElement('img');
			img.style.display = 'none';
			img.id="bistData";
			img.src = imgSrc;
			document.body.appendChild(img);
			
			
		});
	});  
}
