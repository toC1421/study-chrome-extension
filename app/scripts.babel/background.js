'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
chrome.contextMenus.create({
  title : 'プチブックマークに飛ぶ',
  type  : 'normal',
  onclick : function(info){
    var url = 'https://www.google.co.jp/'
    chrome.tabs.create({ url : url});
  }
});
    
    
});

console.log('\'Allo \'Allo! Event Page');
