let page = document;

page.addEventListener("contextmenu", () => {
    console.log("right clicked in page");
})

let changeColor = document.getElementById("changeColor")

chrome.storage.sync.get("color", ({color}) => {
    changeColor.style.backgroundColor = color
});

changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true})

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
    })
})

changeColor.addEventListener("contextmenu", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true})

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: handleRightClick,
    })
})

function setPageBackgroundColor(){
    chrome.storage.sync.get("color", ({ color}) => {
        document.body.style.backgroundColor = color
    })
}

function handleRightClick(){
    console.log('Clicked right button.')
    alert('Clicked right button')
    //return false
}

