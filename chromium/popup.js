window.onload = function() {
    var body = document.body;

    var buttonTopColor = document.getElementById("buttonTopColor");
    var buttonTopColorIMG = buttonTopColor.getElementsByTagName("img")[0];

    chrome.storage.local.get(["buttonTopColorStatus"]).then((local) => {
        if (local.buttonTopColorStatus == "1") {
            buttonTopColorIMG.setAttribute("src", "techorium-popup/toggle-on.png");
        }
        if (local.buttonTopColorStatus == "0") {
            buttonTopColorIMG.setAttribute("src", "techorium-popup/toggle-off.png");
        }
    });

    buttonTopColor.addEventListener('click', function() {
        var buttonTopColorIMGsrc = buttonTopColorIMG.getAttribute("src");
        if (buttonTopColorIMGsrc == "techorium-popup/toggle-on.png") {
            buttonTopColorIMG.setAttribute("src", "techorium-popup/toggle-off.png");
            chrome.storage.local.set({ "buttonTopColorStatus" : "0" }).then(() => {
                console.log("Özellik kapatıldı!");
            });
        }
        if (buttonTopColorIMGsrc == "techorium-popup/toggle-off.png") {
            buttonTopColorIMG.setAttribute("src", "techorium-popup/toggle-on.png");
            chrome.storage.local.set({ "buttonTopColorStatus" : "1" }).then(() => {
                console.log("Özellik açıldı!");
            });
        }
    });

    var darkModeButton = document.getElementById("darkModeButton");
    var darkModeButtonIMG = darkModeButton.getElementsByTagName("img")[0];
    body.classList.add("lightMode");

    chrome.storage.local.get(["darkModeStatus"]).then((local) => {
        if (local.darkModeStatus == "1") {
            darkModeButtonIMG.setAttribute("src", "techorium-popup/light-moon.png");
            body.classList.remove("lightMode");
            body.classList.add("darkMode");
        }
        if (local.darkModeStatus == "0") {
            darkModeButtonIMG.setAttribute("src", "techorium-popup/dark-moon.png");
        }
    });

    darkModeButton.addEventListener('click', function() {
        var darkModeButtonIMGsrc = darkModeButtonIMG.getAttribute("src");
        if (darkModeButtonIMGsrc == "techorium-popup/dark-moon.png") {
            darkModeButtonIMG.setAttribute("src", "techorium-popup/light-moon.png");
            body.classList.remove("lightMode");
            body.classList.add("darkMode");
            chrome.storage.local.set({ "darkModeStatus" : "1" }).then(() => {
                console.log("Karanlık mod açıldı!");
            });
        }
        if (darkModeButtonIMGsrc == "techorium-popup/light-moon.png") {
            darkModeButtonIMG.setAttribute("src", "techorium-popup/dark-moon.png");
            body.classList.remove("darkMode");
            body.classList.add("lightMode");
            chrome.storage.local.set({ "darkModeStatus" : "0" }).then(() => {
                console.log("Karanlık mod kapatıldı!");
            });
        }
    });
};