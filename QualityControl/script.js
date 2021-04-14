var banner = document.querySelector(".badge");
banner.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    console.log('drag starts...');
});

var drop = document.getElementById("drop");
drop.addEventListener('drop', () => {
    alert("You dropped " + + " on the target. Good Job!!!");
})

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
    formSubmit(subtitle.value);  
    subtitle.value = "";
})

var addWarnOnLeave = document.getElementById("iwol");
addWarnOnLeave.addEventListener('click', () => {
    warnOnLeave();
})

var addWarnOnEnter = document.getElementById("iwoe");
addWarnOnEnter.addEventListener('click', () => {
    warnOnEnter();
})

/*
var newSubTitle = "";
subtitle.addEventListener('keydown', (e) => {
    newSubTitle += e.key;
    document.getElementById("isubmit").innerHTML
    alert("key pressed: " + e.key)
})
*/

function addRow(t, s, r){
    var itemTable = document.getElementById("itemList");

    var tr = itemTable.insertRow(itemTable.rows.length);
    var title = tr.insertCell(0);
    var step = tr.insertCell(1);
    var result = tr.insertCell(2);

    tr.setAttribute("id", itemTable.rows.length);
    //tr.setAttribute("ondblclick", `remove(${itemTable.rows.length})`);
/*
    title.addEventListener("dblclick", () => {
        title.setAttribute("contenteditable", true);
    })
*/
    title.innerHTML = t;

    //step.setAttribute("contenteditable", true);
    step.innerHTML = s;
    
    //result.setAttribute("contenteditable", true);
    result.innerHTML = r;
}

function remove(id){
    document.getElementById(id).remove();
}

function setupSteps(label = "WEB"){
    addRow(`${label} Start of Setup`, " ", " ");
    addRow("Page Under Test:", "[URL BEING TESTED]", "");
    addRow("Credentials", "User: [USERNAME] / Pass: [PASSWORD].", "");
    addRow(`${label} End of Setup`, " ", " ");
}

function smokeTest(label = "SMOKE"){
    addRow(`${label} Test`, " ", " ");
    addRow(" ", "Run Web Link Validator on [URL]", "No broken links found.");
    addRow(" ", "Search for [SEARCH TERM] using the sites search function.", "The search results for [SEARCH TERM] are displayed.");
    addRow(" ", "Check rendering for [URL] using the iphone, android and desktop browsers.", "No rendering defects are present.");
}

function anchorLink(label = "[LINK]"){
    addRow(`"${label}" Link`, " ", " ");
    addRow(" ", "Open [URL] in [BROWSER]", "The page is displayed.");
    addRow(" ", `Select the "${label}" link`, "Links to the [URL].");
    addRow(" ", `Select the "${label}" link`, "Link opens in new window/tab.");
}

function fieldInput(label = "[TEXT]"){
    addRow(`"${label}" Input`, " ", " ");
    addRow(" ", "Open [URL] in [BROWSER]", "The page is displayed.");
    addRow(" ", "Page loads", `"${label}" input is displayed on the page.`);
}

function fieldRequired(label = "[TEXT]"){
    addRow(`"${label}" Input Required`, " ", " ");
    addRow(" ", "Open [URL] in [BROWSER]", "The page is displayed.");
    addRow(" ", "Submit the form without any data", "The form is not submitted.");
    addRow(" ", "Submit the form without any data", `Error message for "${label}" is displayed.`);  
}

function fieldMaxlength(label = "[TEXT]"){
    addRow(`"${label}" Input Boundary`, " ", " ");
    addRow(" ", "Open [URL] in [BROWSER]", "The page is displayed.");
    addRow(" ", `Enter the text into the input field: [MIN BOUNDARY] - 1`, `Only [MIN BOUNDARY] is able to be entered.`);
    addRow(" ", `Enter the text into the input field: [MAX BOUNDARY] + 1`, `Only [TOP BOUNDARY] is able to be entered.`);
}

function fieldValue(label = "[TEXT]"){
    addRow(`"${label}" Input Default Value`, " ", " ");
    addRow(" ", "Open [URL] in [BROWSER]", "The page is displayed.");
    addRow(" ", "Submit the form without any data", "The form is not submitted.");
    addRow(" ", "Submit the form without any data", `Error message for "${label}" is displayed.`);  
}

function fieldAcceptedChars(label = "[TEXT]"){
    addRow(`${label} Input Accepted Characters`, " ", " ");
    addRow(" ", "Open [URL] in [BROWSER]", "The page is displayed.");
    addRow(" ", "Enter the text into the input field: [CHARACTERS]", "Only [CHARACTERS] are able to be entered.");
    
}

function warnOnEnter(label = "WOE"){
    addRow(`"${label}" - Display`,"","");
    addRow(" ", "Open [URL] in [BROWSER]", "The Warn On Enter interstitial is displayed.");
    addRow("","Click outside the interstitial","The interstitial closes.");
    addRow(`"${label}" - X Icon`,"","");
    addRow(" ", "Open [URL] in [BROWSER]", "The Warn On Enter interstitial is displayed.");
    addRow("","Click the X icon.","The interstitial closes.");
    addRow(`"${label}" - Cancel Button`,"","");
    addRow(" ", "Open [URL] in [BROWSER]", "The Warn On Enter interstitial is displayed.");
    addRow("","Click the Cancel button","The interstitial closes.");
    addRow(`"${label}" - OK Button`,"","");
    addRow(" ", "Open [URL] in [BROWSER]", "The Warn On Enter interstitial is displayed.");
    addRow("","Click the OK button.","The [URL] is displayed.");
    addRow(`"${label}" - Rendering`,"","");
    addRow(" ", "Open [URL] in [BROWSER]", "The Warn On Enter interstitial is displayed.");
    addRow("","Review the interstitial for rendering issues.","There are no rendering issues.");
}

function warnOnLeave(label = "WOL"){
    addRow(`"${label}" - Display`,"","");
    addRow("","Click on [LINK]","The Warn On Leave interstitial is displayed.");
    addRow("","Click outside the interstitial","The interstitial closes.");
    addRow(`"${label}" - X Icon`,"","");
    addRow("","Click on [LINK]","The Warn On Leave interstitial is displayed.");
    addRow("","Click the X icon.","The interstitial closes.");
    addRow(`"${label}" - Cancel Button`,"","");
    addRow("","Click on [LINK]","The Warn On Leave interstitial is displayed.");
    addRow("","Click the Cancel button","The interstitial closes.");
    addRow(`"${label}" - OK Button`,"","");
    addRow("","Click on [LINK]","The Warn On Leave interstitial is displayed.");
    addRow("","Click the OK button.","The associated page is opened in a new browser tab/window.");
    addRow(`"${label}" - Rendering`,"","");
    addRow("","Click on [LINK]","The Warn On Leave interstitial is displayed.");
    addRow("","Review the interstitial for rendering issues.","There are no rendering issues.");
}

var testPlan = document.getElementById("testPlan");
var addBannerTestPlanText = document.getElementById("ibannerplan");
addBannerTestPlanText.addEventListener("click", () => {
    addBannerTestPlan();
})

var addEmailTestPlanText = document.getElementById("iemailplan");
addEmailTestPlanText.addEventListener("click", () => {
    addEmailTestPlan();
})

var addVeevaTestPlanText = document.getElementById("iveevaplan");
addVeevaTestPlanText.addEventListener("click", () => {
    addVeevaTestPlan();
})

var addTestPlanText = document.getElementById("iwebplan");
addTestPlanText.addEventListener("click", () => {
    addWebTestPlan();
})

function addWebTestPlan(){

    testPlan.innerHTML = "<h2>Test Plan</h2>";

    testPlan.innerHTML += `<h3>Scope</h3>
    <p>[Testing will be conducted using scenarios for known business requirements. Any new requirements that are uncovered during testing must be put into a backlog and prioritized. Implementation of new requirements requires following the established OneIntouch Process Framework change request process.]</p>`;

    testPlan.innerHTML += `<h3>Features Being Tested</h3>
    <p>[The following features have been identified as useful to test end user experiences:]</p>`;

    testPlan.innerHTML += `<h3>Features Not Being Tested</h3>
    <p>[Testing will not cover:]</p>`;

    testPlan.innerHTML += `<h3>Test Environment Details</h3>
    <p>[Testing will be conducted on [URL] ]</p>`;

    testPlan.innerHTML += `<h3>Entry Criteria</h3>
    <p>[All code for this release must be deployed to the [ENVIRONMENT]<br/>
        Code is a vetted release candidate that matches FRD and Submission documentation ]</p>`;

    testPlan.innerHTML += `<h3>Suspension Criteria</h3>
    <p>[The test build will be rejected for one of the following reasons:<br/>
    Smoke test fails<br/>
    20% of functional tests fail]</p>`;

    testPlan.innerHTML += `<h3>Exit Criteria</h3>
    <p>[All failed tests must be triaged, and either fixed or deferred.]</p>`;

    testPlan.innerHTML += `<h3>References</h3>
    <p>[LINKS TO BRD, FRD, DESIGN DOC, ETC.]<br/></p>`;
}