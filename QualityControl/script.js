var addSmokeTestSteps = document.getElementById('ismoke');
addSmokeTestSteps.addEventListener('click', () => {
    smokeTest();
})

var addSetupSteps = document.getElementById('isetup');
addSetupSteps.addEventListener('click', () => {
    setupSteps();
})

var addAnchorLinkTests = document.getElementById('link');
var iLinkLabel = document.getElementById('iLinkLabel');
addAnchorLinkTests.addEventListener('click', () => {
    iLinkLabel.value = (iLinkLabel.value.length > 0) ? iLinkLabel.value : "Text";
    anchorLink(iLinkLabel.value);
    iLinkLabel.value = "";
})

var addTextInputTests = document.getElementById('text');
var iTextLabel = document.getElementById('itextlabel');
addTextInputTests.addEventListener('click', () => {
    iTextLabel.value = (iTextLabel.value.length > 0) ? iTextLabel.value : "Text";
    fieldInput(iTextLabel.value);
    fieldRequired(iTextLabel.value);
    fieldMaxlength(iTextLabel.value);
    fieldValue(iTextLabel.value);
    fieldAcceptedChars(iTextLabel.value);
    iTextLabel.value = "";
})

var addPasswordTests = document.getElementById('password');
var pass = "Password";
addPasswordTests.addEventListener('click', () => {
    fieldInput(pass);
    fieldRequired(pass);
    fieldMaxlength(pass);
    fieldAcceptedChars(pass);    
})

var addSubmitTests = document.getElementById('submit');
var subtitle = document.getElementById("iSubmitLabel");
addSubmitTests.addEventListener('click', () => {
    subtitle.value = (subtitle.value.length > 0) ? subtitle.value : "Submit";
    fieldInput(subtitle.value);
    fieldRequired(subtitle.value);
    fieldMaxlength(subtitle.value);
    fieldAcceptedChars(subtitle.value);    
    subtitle.value = "";
})


function addElement(t, s, r){
    var itemTable = document.getElementById("itemList");

    var tr = itemTable.insertRow(itemTable.rows.length);
    var title = tr.insertCell(0);
    var step = tr.insertCell(1);
    var result = tr.insertCell(2);

    tr.setAttribute("id", itemTable.rows.length);
    tr.setAttribute("ondblclick", `remove(${itemTable.rows.length})`);

    title.innerHTML = t;
    step.innerHTML = s;
    result.innerHTML = r;
}

function remove(id){
    document.getElementById(id).remove();
}

function setupSteps(label = "WEB"){
    addElement(`${label} Start of Setup`, " ", " ");
    addElement("Page Under Test:", "[URL BEING TESTED]", "");
    addElement("Credentials", "User: [USERNAME] / Pass: [PASSWORD].", "");
    addElement(`${label} End of Setup`, " ", " ");
}

function smokeTest(label = "SMOKE"){
    addElement(`${label} Test`, " ", " ");
    addElement(" ", "Run Web Link Validator on [URL]", "No broken links found.");
    addElement(" ", "Search for [SEARCH TERM] using the sites search function.", "The search results for [SEARCH TERM] are displayed.");
    addElement(" ", "Check rendering for [URL] using the iphone, android and desktop browsers.", "No rendering defects are present.");
}

function anchorLink(label = "[LINK]"){
    addElement(`"${label}" Link`, " ", " ");
    addElement(" ", "Open [BROWSER] and launch [URL]", "The page is displayed.");
    addElement(" ", `Select the "${label}" link`, "Links to the [URL].");
    addElement(" ", `Select the "${label}" link`, "Link opens in new window/tab.");
}

function fieldInput(label = "[TEXT]"){
    addElement(`"${label}" Input`, " ", " ");
    addElement(" ", "Open [BROWSER] and launch [URL]", "The page is displayed.");
    addElement(" ", "Page loads", `"${label}" input is displayed on the page.`);
}

function fieldRequired(label = "[TEXT]"){
    addElement(`"${label}" Input Required`, " ", " ");
    addElement(" ", "Open [BROWSER] and launch [URL]", "The page is displayed.");
    addElement(" ", "Submit the form without any data", "The form is not submitted.");
    addElement(" ", "Submit the form without any data", `Error message for "${label}" is displayed.`);  
}

function fieldMaxlength(label = "[TEXT]"){
    addElement(`"${label}" Input Boundary`, " ", " ");
    addElement(" ", "Open [BROWSER] and launch [URL]", "The page is displayed.");
    addElement(" ", `Enter the text into the input field: [MIN BOUNDARY] - 1`, `Only [MIN BOUNDARY] is able to be entered.`);
    addElement(" ", `Enter the text into the input field: [MAX BOUNDARY] + 1`, `Only [TOP BOUNDARY] is able to be entered.`);
}

function fieldValue(label = "[TEXT]"){
    addElement(`"${label}" Input Default Value`, " ", " ");
    addElement(" ", "Open [BROWSER] and launch [URL]", "The page is displayed.");
    addElement(" ", "Submit the form without any data", "The form is not submitted.");
    addElement(" ", "Submit the form without any data", `Error message for "${label}" is displayed.`);  
}

function fieldAcceptedChars(label = "[TEXT]"){
    addElement(`${label} Input Accepted Characters`, " ", " ");
    addElement(" ", "Open [BROWSER] and launch [URL]", "The page is displayed.");
    addElement(" ", "Enter the text into the input field: [CHARACTERS]", "Only [CHARACTERS] are able to be entered.");
    
}