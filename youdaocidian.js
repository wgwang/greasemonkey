// ==UserScript==
// @name        dict.youdao.com open collin dict
// @namespace   youdao.wgwang
// @description 有道词典移动版，自动打开柯林斯词典，并自动发音
// @include     http://m.youdao.com/dict?*
// @version     1
// @grant       none
// ==/UserScript==



var fi = document.getElementById("formInput");
fi.focus()
fi.select()
q = fi.value
//var url = "/singledict?q="+q+"&dict=collins&le=eng&more=false"
//alert(url)
requestData(q, "collins", "eng", "", function(data){
  document.getElementById("collins").innerHTML = data;
//  alert(data);
})
var doc = document.getElementById("collins_contentWrp")
if (doc != null && doc != undefined ){
  var c = doc.attributes['class']
  c.value = c.value.replace("closed", "opened")
}

var player = $('dictVoice')
var au = document.getElementsByClassName('dictvoice')
if (au.length>0){
  var url = au[0].getAttribute('data-rel')
  player.setAttribute('src', url);
  player.volume = 1;
  player.play();
}

