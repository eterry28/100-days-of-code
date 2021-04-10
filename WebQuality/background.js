let color = '#3aa757'

chrome.runtime.onInstalled.addListener( () => {
    chrome.storage.sync.set({color})
    console.log('Default background color set to %cgreen', `color: ${color}`)
})

chrome.contextMenus.create({
    title: "first",
    contexts: ["action"],
    onclick: function() {
        alert('yes')
    }
})
