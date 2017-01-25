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