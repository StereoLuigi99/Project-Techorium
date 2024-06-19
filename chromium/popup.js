window.onload = async function () {
  var userThemeBox = document.getElementById("usertheme");
  var savedTheme = await chrome.storage.local.get(["usertheme"]);
  if (savedTheme !== null) {
    userThemeBox.value = savedTheme["usertheme"];
  }
  var body = document.body;
  var settingsContainer = document.getElementById("settingsContainer");
  console.log("Hi");
  var settings = [
    {
      id: "buttonTopColor",
      imgSrcOn: "techorium-popup/toggle-on.png",
      imgSrcOff: "techorium-popup/toggle-off.png",
      storageKey: "buttonTopColorStatus",
      label: "Logo bölümündeki mavi renk teması",
      onEnable: function () {
        console.log("Özellik açıldı!");
      },
      onDisable: function () {
        console.log("Özellik kapatıldı!");
      },
    },
    {
      id: "buttonTopColor",
      imgSrcOn: "techorium-popup/toggle-on.png",
      imgSrcOff: "techorium-popup/toggle-off.png",
      storageKey: "osBrowserStatus",
      label: "Herkesin OS ve Tarayıcı Bilgisini gizle",
      onEnable: function () {
        console.log("Özellik açıldı!");
      },
      onDisable: function () {
        console.log("Özellik kapatıldı!");
      },
    },
    {
      id: "buttonTopColor",
      imgSrcOn: "techorium-popup/toggle-on.png",
      imgSrcOff: "techorium-popup/toggle-off.png",
      storageKey: "signatureStatus",
      label: "Herkesin imzasını gizle",
      onEnable: function () {
        console.log("Özellik açıldı!");
      },
      onDisable: function () {
        console.log("Özellik kapatıldı!");
      },
    },
    {
      id: "buttonTopColor",
      imgSrcOn: "techorium-popup/toggle-on.png",
      imgSrcOff: "techorium-popup/toggle-off.png",
      storageKey: "changeIcons",
      label: "Eklentinin bölüm simgelerini kullan",
      onEnable: function () {
        console.log("Özellik açıldı!");
      },
      onDisable: function () {
        console.log("Özellik kapatıldı!");
      },
    },
    // daha fazla ayar gelebilir. buradan sonra otherThings.js'e eklenecek.
  ];

  settings.forEach(function (setting) {
    var settingContainer = document.createElement("div");
    settingContainer.className = "settingContainer";
    var button = document.createElement("button");
    button.id = setting.id;
    button.className = "settingButton";
    var buttonImg = document.createElement("img");
    buttonImg.width = 20;
    buttonImg.height = 20;
    chrome.storage.local.get([setting.storageKey]).then(function (local) {
      buttonImg.src =
        local[setting.storageKey] == "1" ? setting.imgSrcOn : setting.imgSrcOff;
    });
    button.appendChild(buttonImg);
    settingContainer.appendChild(button);
    var label = document.createElement("p");
    label.className = "descriptionText";
    label.textContent = setting.label;
    settingContainer.appendChild(label);
    settingsContainer.appendChild(settingContainer);
    button.addEventListener("click", function () {
      chrome.storage.local.get([setting.storageKey]).then(function (local) {
        var value = local[setting.storageKey] == "1" ? "0" : "1";
        chrome.storage.local
          .set({ [setting.storageKey]: value })
          .then(function () {
            buttonImg.src = value == "1" ? setting.imgSrcOn : setting.imgSrcOff;
            if (value == "1") {
              setting.onEnable();
            } else {
              setting.onDisable();
            }
          });
      });
    });
  });

  userThemeBox?.addEventListener("change", function (e) {
    chrome.storage.local.set({ ["usertheme"]: e.target.value });
  });
};
