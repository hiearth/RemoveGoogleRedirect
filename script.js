var googleSearchReg = /^(https?:\/\/)?www.google.com(.hk)?\/search*/;
if(googleSearchReg.test(window.location.href.toLowerCase())){
	var ires = document.getElementById('ires');
	if(ires){
		var h3s = ires.getElementsByTagName('h3');
		if(h3s){
			for (var i = 0, l = h3s.length; i < l; i++) {
				var h3 = h3s[i];
				var as = h3.getElementsByTagName('a');
				if(as){
					for (var j = 0, m = as.length; j < m; j++) {
						var a = as[j];
						a.removeAttribute('onmousedown');
					}
				}
			}
		}
	}
}