/*
 * Github tab size manager
 *
 * Created by Namandeep Singh Chugh
 * Copyright (c) 2017 Namandeep Singh Chugh. All rights reserved.
 *
 */

 function changeCSS() {
 	chrome.storage.local.get('tabSize', function(items) {
 		var tabSize = items.tabSize || 2;
 		// console.log(tabSize);
 		$('head').append('<style type="text/css">' + 
 		'.tab-size[data-tab-size="2"], .tab-size[data-tab-size="4"], ' + 
	 	'.tab-size[data-tab-size="8"], .inline-review-comment, .gist table.lines, table.diff-table, ' +
	 	'.markdown-body pre, body > pre { tab-size: ' + String(tabSize) + '!important; }' + '</style>');
 });
}

setTimeout(function(){ changeCSS(); }, 1000);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-91172423-1', 'auto');
ga('set', 'checkProtocolTask', function(){});
ga('send', 'pageview', '/content.html');

