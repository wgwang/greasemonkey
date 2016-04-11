// ==UserScript==
// @name        去除知乎链接跳转
// @namespace   zhihu.wgwang
// @description 去除烦人的知乎的链接跳转. 知乎的所有链接都要到它自家服务器转一圈，纯属浪费时间
// @include     https://*.zhihu.com/*
// @include     http://*.zhihu.com/*
// @version     1
// @grant       none
// ==/UserScript==

var a = document.getElementsByTagName('a');
for (var i=0; i<a.length; i++){
  var b = a[i];
  if (b.href.contains("link.zhihu.com/?target=")){
    var c = b.href.split("target=");
    if (c.length==2){
      var d = c[1];
      a[i].href = unescape(d);
    }
  }
}
