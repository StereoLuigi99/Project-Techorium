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
<<<<<<< HEAD
      label: "Herkesin OS/tarayıcı bilgisini gizle",
=======
      label: "Herkesin OS ve Tarayıcı Bilgisini gizle",
>>>>>>> d4adedb33ebdcaee0f114b9c21abc9e54ff7516f
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
<<<<<<< HEAD
      label: "İşletim sistemi kategori ikonlarını iyileştir",
=======
      label: "Eklentinin bölüm simgelerini kullan",
>>>>>>> d4adedb33ebdcaee0f114b9c21abc9e54ff7516f
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
<<<<<<< HEAD
    buttonImg.width = 30;
=======
    buttonImg.width = 20;
>>>>>>> d4adedb33ebdcaee0f114b9c21abc9e54ff7516f
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

<<<<<<< HEAD
  var url = "https://visual917.github.io/versions/ahmet.txt"; // Yes, that's my name.
  var res = await fetch(url);
  var data = await res.text();
  var currentVersion = "1.45";
=======
  var url = "https://visual917.github.io/versions/ahmet.txt";
  var res = await fetch(url);
  var data = await res.text();
  var currentVersion = "1.42";
>>>>>>> d4adedb33ebdcaee0f114b9c21abc9e54ff7516f
  var newVersion = data.trim();
  console.log("compar", currentVersion, newVersion);
  console.log("compar", currentVersion.length, newVersion.length);
  console.log("compar", typeof currentVersion, typeof newVersion);
  console.log("compar", currentVersion != newVersion);
  if (currentVersion != newVersion) {
    var xd = document.getElementById("updatetext");
    xd.style.cursor = "pointer";
    xd.innerText = `Yeni sürüm ${newVersion} çıktı. Tıkla!`;
    xd.addEventListener("click", function () {
      window.open(
        "https://github.com/StereoLuigi99/Project-Techorium/releases/latest",
      );
    });
  } else {
    var stru = `Sürüm: ${currentVersion} | Güncelsiniz.`;
    var xd = document.getElementById("updatetext");
    xd.innerText = stru;
  }
};
