// Saves options to chrome.storage
function save_options() {
	var tabSize = document.getElementById('tabSize').value;
	chrome.storage.sync.set({
    tabSize: tabSize
  }, function() {
    // Update status to let user know options were saved
    var status = document.getElementById('status');
    status.textContent = 'Options Saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1750);
  });
}

// Restores options using the preferences
// stored in chrome.storage
function restore_options() {
  // Use default value tabSize = 2
  chrome.storage.sync.get({
    tabSize: 2
  }, function(items) {
    document.getElementById('tabSize').value = items.tabSize;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);