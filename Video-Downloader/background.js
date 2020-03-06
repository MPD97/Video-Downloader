window.elements ={}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    window.elements[request.title] = request.src
})

chrome.browserAction.onClicked.addListener(function (tab){
  chrome.tabs.create({url: 'popup.html'})  
})