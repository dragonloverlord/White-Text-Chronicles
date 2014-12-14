chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    innerBounds: {
      width: 1200,
      height: 658,
      minWidth: 1200,
      minHeight: 658
    }
  });

});