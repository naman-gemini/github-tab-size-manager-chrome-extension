// Saves options to chrome.storage
function save_options() {
  var status = document.getElementById('status');
	status.style.color = 'Green';
	var tabSize = document.getElementById('tabSize').value;
	if((/^\d+$/).test(tabSize) && parseInt(tabSize) > 0) {
		chrome.storage.local.set({
			tabSize: tabSize
		}, function() {
    // Update status to let user know options were saved
    status.textContent = 'Options Saved.';
    setTimeout(function() {
    	status.textContent = '';
    }, 1750);
  });
	} else {
		status.style.color = 'Red';
		status.textContent = 'Invalid Input. (Enter an integer greater than 0)';
	}
}

// Restores options using the preferences
// stored in chrome.storage
function restore_options() {
  // Use default value tabSize = 2
  chrome.storage.local.get({
  	tabSize: 2
  }, function(items) {
  	document.getElementById('tabSize').value = items.tabSize;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-91172423-1', 'auto');
ga('set', 'checkProtocolTask', function(){});
ga('send', 'pageview', '/options.html');