/*
 * Github tab size manager
 *
 * Created by Namandeep Singh Chugh
 * Copyright (c) 2017 Namandeep Singh Chugh. All rights reserved.
 *
 */

 var tabsize = null;

 function manageUrl() {
 	var tabSize = tabsize || 2;
 	var url = window.location.href;
 	if(url.includes("ts=")) return;
 	if(url.includes("github.com")) {
 		if(url.includes("?")) {
 			url += ("&ts=" + tabSize);
 		} else {
 			url += ("?ts=" + tabSize);
 		}
 		window.location.href = url;
 	}
 }

 chrome.storage.sync.get('tabSize', function(items) {
 	tabsize = items.tabSize;
 	manageUrl();
 });

