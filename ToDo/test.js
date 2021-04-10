// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// forEach method, could be shipped as part of an Object Literal/Module
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};


//var tags = document.getElementsByTagName("a");
//tags += document.getElementsByTagName('input');
//tags += document.getElementsByTagName('select');
//tags += document.getElementsByTagName('textarea');
//tags += document.getElementsByTagName('button');
//tags += document.getElementsByTagName('option');

//forEach(tags, function (index, value) {
//  tags[index].addEventListener('click', () => {
//    console.log(index, value); // passes index + value back!
//  })
//});


// A generic onclick callback function.
function genericOnClick(info, tab) {

  document.addEventListener('DOMContentLoaded', () => {
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
    var tags = document.getElementsByTagName("a");
    console.log(tags)
  })
    

    
    //forEach(tags, function (index, value) {
      //console.log(index, value); // passes index + value back!
      //tags[index].addEventListener('click', () => {
        
      //})
    //});
  }
  
  // Create one test item for each context type.
  var contexts = ["all", "page", "frame", "selection", 
  "link", "editable", "image", "video", "audio", 
  "browser_action", "page_action", "action"];
  for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    var title = "Test '" + context + "' menu item";
    var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "onclick": genericOnClick});
    console.log("'" + context + "' item:" + id);
  }
  
  
  // Create a parent item and two children.
  var parent = chrome.contextMenus.create({"title": "Test parent item"});
  var child1 = chrome.contextMenus.create(
    {"title": "Child 1", "parentId": parent, "onclick": genericOnClick});
  var child2 = chrome.contextMenus.create(
    {"title": "Child 2", "parentId": parent, "onclick": genericOnClick});
  console.log("parent:" + parent + " child1:" + child1 + " child2:" + child2);
  
  
  // Create some radio items.
  function radioOnClick(info, tab) {
    console.log("radio item " + info.menuItemId +
                " was clicked (previous checked state was "  +
                info.wasChecked + ")");
  }
  var radio1 = chrome.contextMenus.create({"title": "Radio 1", "type": "radio",
                                           "onclick":radioOnClick});
  var radio2 = chrome.contextMenus.create({"title": "Radio 2", "type": "radio",
                                           "onclick":radioOnClick});
  console.log("radio1:" + radio1 + " radio2:" + radio2);
  
  
  // Create some checkbox items.
  function checkboxOnClick(info, tab) {
    console.log(JSON.stringify(info));
    console.log("checkbox item " + info.menuItemId +
                " was clicked, state is now: " + info.checked +
                "(previous state was " + info.wasChecked + ")");
  
  }
  var checkbox1 = chrome.contextMenus.create(
    {"title": "Checkbox1", "type": "checkbox", "onclick":checkboxOnClick});
  var checkbox2 = chrome.contextMenus.create(
    {"title": "Checkbox2", "type": "checkbox", "onclick":checkboxOnClick});
  console.log("checkbox1:" + checkbox1 + " checkbox2:" + checkbox2);
  
  
  // Intentionally create an invalid item, to show off error checking in the
  // create callback.
  console.log("About to try creating an invalid item - an error about " +
              "item 999 should show up");


/*function genericOnClick(info, tab){
    console.log("item " + info.menuItemId + " was clicked")
    console.log("info " + JSON.stringify(info))
    console.log("tab " + JSON.stringify(tab))
}

var contexts = ["page","selection","link","editable","image","video","audio"]

for(var i=0; i < contexts.length; i++){
    var context = contexts[i]
    var title = "Test '" + context + "' menu item"
var id = chrome.contextMenus.create({
    "title": title,
    "contexts": [context],
    "onclick": genericOnClick}) /*(e) => {
        var url = e.pageUrl;
        var posturl = "https://translate.google.com/"

        if(e.selectionText){
            //alert(encodeURI(e.selectionText))
            posturl += "?hl=en&sl=auto&tl=eo&text=" + encodeURI(e.selectionText) + "&op=translate"
        }

        if(e.mediaType === "image"){
            //alert(encodeURI(e.srcUrl))
            posturl += "?hl=en&sl=auto&tl=eo&u=" + encodeURI(e.srcUrl)
        }

        if(e.linkUrl){
            //alert(e.linkUrl)
            posturl += "translate?hl=en&sl=auto&tl=eo&u=" + encodeURI(e.linkUrl)
        }

       //posturl += encodeURI(url)

        chrome.tabs.create({
            "url": posturl        
        })
    }    
})*/
//}