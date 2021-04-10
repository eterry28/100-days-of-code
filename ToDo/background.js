/*
chrome.runtime.onInstalled.addListener( () => {
    console.log('Installed New Toy')
    chrome.contextMenus.create({
        "id": "newToyContextMenu",
        "title": "New Toy Context Menu",
        "contexts": ["selection"]
    })
})

chrome.browserAction.onClicked.addListener( function(tab) {
    chrome.tabs.executeScript(
        console.log(tab.url),
        alert(tab.url)
    )    
})
*/
