window.onload = function(){
	var oNotice = document.getElementById('noticeMask');
	var obox = document.getElementById('noticebox');
	var omask = document.getElementById('maskbox');
	if(typeof (Storage) != undefined && localStorage.getItem('result')){
		oNotice.style.display = 'block';
		if(localStorage.getItem('result').indexOf('registed') > -1){
			obox.style.color = "red";
			obox.innerHTML = '该账号应经注册过！';
		}else if(localStorage.getItem('result').indexOf('fail') > -1){
			obox.style.color = "red";
			obox.innerHTML = '注册失败！请重新注册！';
		}else{
			obox.style.color = "green";
			obox.innerHTML = '注册成功！请登录';
		}

		omask.onclick = function(){
			oNotice.style.display = 'none';
			localStorage.clear();
		}
	}

	var inp = document.getElementById('inpBox').getElementsByTagName('input');

	for(var i = 0; i < inp.length-1; i++){
		inp[i].onfocus = function(event){
			event = event ? event : window.event;
			var ele = event.target ? event.target : event.srcElement;
			focusfun(ele);

			return false;
		}

		inp[i].onblur = function(event){
			event = event ? event : window.event;
			var ele = event.target ? event.target : event.srcElement;
			blurfun(ele);

			return false;
		}
	}


	function node(ele){
		var parent = ele.parentNode;
		var node = parent.getElementsByTagName('label');
		if(node.length > 1){
			return node;
		}else{
			return 0;
		}
	}

	function focusfun(ele){
		var obj = node(ele);
		if(!obj) return false;
		obj[1].style.display = "block";
		obj[1].style.background = "#5cb85c";
	}

	function blurfun(ele){
		var obj = node(ele);
		if(!obj) return false;
		var str = obj[0].innerHTML;
		if(!+[1,]){
			var txt = ele.getAttribute('pattern');
			if(txt.indexOf('a') > -1){
				var reg = /^[0-9a-zA-Z]{4,16}$/;
			}else{
				var reg = /^[0-9]{6,12}$/;
			}
			if(ele.value && reg.test(ele.value)){
				obj[1].innerHTML = str + '输入正确';
				obj[1].style.background = '#5cb85c';
			}else if(!ele.value){
				obj[1].innerHTML = '请输入' + str;
				obj[1].style.background = '#d9534f';
			}else if(ele.value && !reg.test(this.value)){
				obj[1].innerHTML = str + '输入格式不正确';
			}
		}else{
			if(ele.validity.valid){
				obj[1].innerHTML = str + '输入正确';
				obj[1].style.background = '#5cb85c';
			}else{
				if(ele.validity.valueMissing){
					obj[1].innerHTML = '请输入' + str;
					obj[1].style.background = '#d9534f';
				}else if(ele.validity.patternMismatch){
					obj[1].innerHTML = str + '输入格式不正确';
					obj[1].style.background = '#d9534f';
				}
			}
		}
	}
}

function checkfun(){
    var olab = document.getElementsByTagName('label');
    var flag = true;
    for(var i = 0; i < olab.length; i++){
        if(olab[i].getAttribute('id').indexOf('Tip') > -1){
        	var oinp = olab[i].parentNode.getElementsByTagName('input');
        	if(oinp[0].value == ''){
        		alert('请将必填信息补全完整！');
        		flag = false;
        		return flag;
        	}
            if(olab[i].style.background.indexOf('#5cb85c') < 0){
	            flag = false;
	            return flag;
            }
        }
    }
}

