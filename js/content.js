/*
 * Github tab size manager
 *
 * Created by Namandeep Singh Chugh
 * Copyright (c) 2017 Namandeep Singh Chugh. All rights reserved.
 *
 */

 function changeCSS() {
 	var tabSize = null;
 	chrome.storage.local.get('tabSize', function(items) {
 		tabSize = items.tabSize;
 		// console.log(tabSize);
 		$(".tab-size[data-tab-size='2'], .tab-size[data-tab-size='4'], " + 
 		".tab-size[data-tab-size='8'], .inline-review-comment, .gist table.lines, " +
 		"table.diff-table, .markdown-body pre").css("tab-size", String(tabSize));
 });
}

 changeCSS();

