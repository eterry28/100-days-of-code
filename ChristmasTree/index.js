function printtree(n) {

    for (i = 0; i < n; i++) {
        if (i === 0) {
            console.log("*".padStart(n, '\xa0'));
        } else {

            str1 = "/".padStart(n - i, '\xa0');
            fill = (i % 3) === 0 ? "O" : "V";
            str2 = "\\".padStart((i + i), fill);
            console.log(str1.concat('', str2));
        }
    }

}

(function () {

    var old = console.log;
    var logger = document.getElementById('tree');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }

    console.clear = function () {
        logger.innerHTML = "";
    }
})();

var createButton = document.querySelector("#create");

createButton.onclick = function () {
    console.clear();
    //should really check that there is a valid value here.
    var n = document.getElementById("size").value;
    printtree(n);
};
