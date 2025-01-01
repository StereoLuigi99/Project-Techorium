window.addEventListener('load', async function () {
  var url = "https://raw.githubusercontent.com/Wyltre/techolaydarkcss/refs/heads/main/style.css";
  var res = await fetch(url);
  var data = await res.text();
  var oTCSS = data.trim();

  var userID = document.querySelector('div.p-nav-opposite > div > a > span').getAttribute("data-user-id");
  var miniProfileBannerURL = `https://techolay.net/sosyal/data/profile_banners/m/0/${userID}.jpg`;
  var peaBody = document.querySelector(".p-body");

  chrome.storage.local.get(["mBgIMG"]).then((s) => {
    peaBody.style.backgroundImage = `url(${s.mBgIMG})`;
  });

  var mainBgButton = document.createElement("a");
  mainBgButton.classList.add("p-navgroup-link", "p-navgroup-link--iconic", "p-navgroup-link--alerts", "js-badge--alerts", "badgeContainer", "esek");

  var mainBgButtonST = document.createElement("i");
  mainBgButtonST.ariaHidden = true;

  mainBgButton.appendChild(mainBgButtonST);

  var peaGroup = document.querySelector("div.p-navgroup.p-account.p-navgroup--member");
  peaGroup.appendChild(mainBgButton);

  mainBgButton.addEventListener('click', function() {
    var mainBgLink = prompt("Lütfen istediğiniz arka planın bağlantısını girin.\nBu alanı boş bırakırsanız var olan arka plan kaldırılır.");
      if (mainBgLink != null && mainBgLink != undefined) {
        peaBody.style.backgroundImage = `url(${mainBgLink})`;
        chrome.storage.local.set({"mBgIMG": mainBgLink }).then(() => {
          console.log("Ana arka plan değiştirildi!");
        });
      } else {
        peaBody.style.backgroundImage = "none";
        chrome.storage.local.set({"mBgIMG": mainBgLink }).then(() => {
          console.log("Ana arka plan değiştirildi!");
        });
      }
  });

  if (document.querySelector('a[href="/sosyal/hesap/banner"]') != null) {
    chrome.storage.local.get(["pfBgIMG"]).then((s) => {
      peaBody.style.backgroundImage = `url(${s.pfBgIMG})`;
    });

    var bgButton = document.createElement("button");
    bgButton.classList.add("button", "button--link");

    var bgButtonST = document.createElement("span");
    bgButtonST.classList.add("button-text");
    bgButtonST.innerText = "Arka planı düzenle";

    bgButton.appendChild(bgButtonST);

    var buttonLoc = document.querySelector("div.memberHeader-actionTop > div.buttonGroup");
    buttonLoc.appendChild(bgButton);

    bgButton.addEventListener('click', function() {
      var bgLink = prompt("Lütfen istediğiniz arka planın bağlantısını girin.\nBu alanı boş bırakırsanız var olan arka plan kaldırılır.");
      if (bgLink != null && bgLink != undefined) {
        peaBody.style.backgroundImage = `url(${bgLink})`;
        chrome.storage.local.set({"pfBgIMG": bgLink }).then(() => {
          console.log("Profil arka planı değiştirildi!");
        });
      } else {
        peaBody.style.backgroundImage = "none";
        chrome.storage.local.set({"pfBgIMG": bgLink }).then(() => {
          console.log("Profil arka planı değiştirildi!");
        });
      }
    });
  } 

  const aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
  var dateString = new Date();

  function parseDate(dateString){
    var time = Date.parse(dateString);
    if(!time){
        time = Date.parse(dateString.replace("T"," "));
        if(!time){
            bound = dateString.indexOf('T');
            var dateData = dateString.slice(0, bound).split('-');
            var timeData = dateString.slice(bound+1, -1).split(':');

            time = Date.UTC(dateData[0],dateData[1]-1,dateData[2],timeData[0],timeData[1],timeData[2]);
        }
    }
    return time;
  }

  var currentDateMili = parseDate(dateString);
  var currentDate = new Date(currentDateMili);
  var currentDayNum = currentDate.getDate();
  var currentAy = aylar[currentDate.getMonth()];
  var currentDayFull = (currentDayNum + " " + currentAy).toString();
  console.log(`Bugün ${currentDayFull}.`);

  function checkDateL(x) {
    if (x == "25 Aralık") {
      var checkDateResult = `.p-header-logo.p-header-logo--image > a[href="/sosyal/"] > picture > img {
                content: url(${chrome.runtime.getURL("custom-logos/christmas.png")}) !important;
                width: 341px !important;
                height: 59px !important;
                aspect-ratio: auto 270 / 50 !important;
            }
          
            .p-nav-smallLogo > a[href="/sosyal/"] > picture > img {
                content: url(${chrome.runtime.getURL("custom-logos/christmas.png")}) !important;
                width: 280px !important;
                height: 20px !important;
            }`;
      return checkDateResult;
    } else if (x == "1 Ocak") {
      var checkDateResult = `.p-header-logo.p-header-logo--image > a[href="/sosyal/"] > picture > img {
                content: url(${chrome.runtime.getURL("custom-logos/newyear.png")}) !important;
                width: 341px !important;
                height: 59px !important;
                aspect-ratio: auto 270 / 50 !important;
            }
          
            .p-nav-smallLogo > a[href="/sosyal/"] > picture > img {
                content: url(${chrome.runtime.getURL("custom-logos/newyear.png")}) !important;
                width: 280px !important;
                height: 20px !important;
            }`;
      return checkDateResult;
    } else if (x == "6 Şubat") {
      var checkDateResult = `.p-header-logo.p-header-logo--image > a[href="/sosyal/"] > picture > img {
                content: url(${chrome.runtime.getURL("custom-logos/6subat.png")}) !important;
                width: 310px !important;
                height: 59px !important;
                aspect-ratio: auto 270 / 50 !important;
            }
          
            .p-nav-smallLogo > a[href="/sosyal/"] > picture > img {
                content: url(${chrome.runtime.getURL("custom-logos/6subat.png")}) !important;
                width: 280px !important;
                height: 20px !important;
            }`;
      return checkDateResult;
    } else if (x == "23 Nisan") {
      var checkDateResult = `.p-header-logo.p-header-logo--image > a[href="/sosyal/"] > picture > img {
                content: url(${chrome.runtime.getURL("custom-logos/23nisan.png")}) !important;
                width: 310px !important;
                height: 59px !important;
                aspect-ratio: auto 270 / 50 !important;
            }
          
            .p-nav-smallLogo > a[href="/sosyal/"] > picture > img {
                content: url(${chrome.runtime.getURL("custom-logos/23nisan.png")}) !important;
                width: 280px !important;
                height: 20px !important;
            }`;
      return checkDateResult;
    } else if (x == "19 Mayıs") {
      var checkDateResult = `.p-header-logo.p-header-logo--image > a[href="/sosyal/"] > picture > img {
                content: url(${chrome.runtime.getURL("custom-logos/19mayis.png")}) !important;
                width: 310px !important;
                height: 59px !important;
                aspect-ratio: auto 270 / 50 !important;
            }
          
            .p-nav-smallLogo > a[href="/sosyal/"] > picture > img {
                content: url(${chrome.runtime.getURL("custom-logos/19mayis.png")}) !important;
                width: 280px !important;
                height: 20px !important;
            }`;
      return checkDateResult;
    } else if (x == "30 Ağustos") {
      var checkDateResult = `.p-header-logo.p-header-logo--image > a[href="/sosyal/"] > picture > img {
                content: url(${chrome.runtime.getURL("custom-logos/30agustos.png")}) !important;
                width: 310px !important;
                height: 59px !important;
                aspect-ratio: auto 270 / 50 !important;
            }
          
            .p-nav-smallLogo > a[href="/sosyal/"] > picture > img {
                content: url(${chrome.runtime.getURL("custom-logos/30agustos.png")}) !important;
                width: 280px !important;
                height: 20px !important;
            }`;
      return checkDateResult;
    } else if (x == "29 Ekim") {
      var checkDateResult = `.p-header-logo.p-header-logo--image > a[href="/sosyal/"] > picture > img {
                content: url(${chrome.runtime.getURL("custom-logos/29ekim.png")}) !important;
                width: 310px !important;
                height: 59px !important;
                aspect-ratio: auto 270 / 50 !important;
            }
          
            .p-nav-smallLogo > a[href="/sosyal/"] > picture > img {
                content: url(${chrome.runtime.getURL("custom-logos/29ekim.png")}) !important;
                width: 280px !important;
                height: 20px !important;
            }`;
      return checkDateResult;
    } else if (x == "10 Kasım") {
      var checkDateResult = `.p-header-logo.p-header-logo--image > a[href="/sosyal/"] > picture > img {
                content: url(${chrome.runtime.getURL("custom-logos/10kasim.png")}) !important;
                width: 310px !important;
                height: 59px !important;
                aspect-ratio: auto 270 / 50 !important;
            }
          
            .p-nav-smallLogo > a[href="/sosyal/"] > picture > img {
                content: url(${chrome.runtime.getURL("custom-logos/10kasim.png")}) !important;
                width: 280px !important;
                height: 20px !important;
            }`;
      return checkDateResult;
    } else {
      var checkDateResult = `.p-header-logo.p-header-logo--image > a[href="/sosyal/"] > picture > img {
                content: url(${chrome.runtime.getURL("techolay-dijitalfikir.png")}) !important;
                width: 270px !important;
                height: 59px !important;
                aspect-ratio: auto 270 / 50 !important;
            }
          
            .p-nav-smallLogo > a[href="/sosyal/"] > picture > img {
                content: url(${chrome.runtime.getURL("techolay-dijitalfikir.png")}) !important;
                width: 280px !important;
                height: 20px !important;
            }`;
      return checkDateResult;
    }
  };

  function checkDateT(x) {
    switch(x) {
      case "6 Şubat":
      case "10 Kasım":
        var checkDateResult = `
                        .p-header {
                            background: url(${chrome.runtime.getURL(
                              "techolay-title-BK.jpg",
                            )}) !important;
                        }
                        .p-nav {
                            background: url(${chrome.runtime.getURL(
                              "techolay-title-BK.jpg",
                            )}) !important;
                        }
                        .p-nav-scroller .hScroller-action.hScroller-action--end {
                            background: linear-gradient(to right, rgba(30, 30, 30, 0) 0%, #161616 33%) !important;
                        }
                        .p-nav-scroller .hScroller-action.hScroller-action--start {
                            background: linear-gradient(to right, #000000 66%, rgba(30, 30, 30, 0) 100%) !important;
                        }
                        .p-nav-list .p-navEl:not(.is-selected) {
                            background: none !important;
                            color: hsl(0deg 0% 72.45%) !important;
                        }
                        .p-nav-list .p-navEl:not(.is-selected):not(.is-menuOpen):hover, .p-nav-list .p-navEl:not(.is-selected):not(.is-menuOpen) .p-navEl-link:hover, .p-nav-list .p-navEl:not(.is-selected):not(.is-menuOpen) .p-navEl-splitTrigger:hover {
                            background: rgba(0, 0, 0, 0) !important;
                        }
                    `;
        return checkDateResult;

      case "23 Nisan":
      case "19 Mayıs":
      case "30 Ağustos":
      case "29 Ekim":
        var checkDateResult = `
                        .p-header {
                            background: url(${chrome.runtime.getURL(
                              "techolay-title-RED.jpg",
                            )}) !important;
                        }
                        .p-nav {
                            background: url(${chrome.runtime.getURL(
                              "techolay-title-RED.jpg",
                            )}) !important;
                        }
                        .p-nav-scroller .hScroller-action.hScroller-action--end {
                            background: linear-gradient(to right, rgba(30, 30, 30, 0) 0%, #a50000 33%) !important;
                        }
                        .p-nav-scroller .hScroller-action.hScroller-action--start {
                            background: linear-gradient(to right, #a50000 66%, rgba(30, 30, 30, 0) 100%) !important;
                        }
                        .p-nav-list .p-navEl:not(.is-selected) {
                            background: none !important;
                            color: hsl(0deg 0% 90%) !important;
                        }
                        .p-nav-list .p-navEl:not(.is-selected):not(.is-menuOpen):hover, .p-nav-list .p-navEl:not(.is-selected):not(.is-menuOpen) .p-navEl-link:hover, .p-nav-list .p-navEl:not(.is-selected):not(.is-menuOpen) .p-navEl-splitTrigger:hover {
                            background: rgba(0, 0, 0, 0) !important;
                        }
                    `;
        return checkDateResult;

      default:
        var checkDateResult = `
                        .p-header {
                            background: url(${chrome.runtime.getURL(
                              "techolay-title.jpg",
                            )}) !important;
                        }
                        .p-nav {
                            background: url(${chrome.runtime.getURL(
                              "techolay-title.jpg",
                            )}) !important;
                        }
                        .p-nav-scroller .hScroller-action.hScroller-action--end {
                            background: linear-gradient(to right, rgba(30, 30, 30, 0) 0%, #004bab 33%) !important;
                        }
                        .p-nav-scroller .hScroller-action.hScroller-action--start {
                            background: linear-gradient(to right, #004399 66%, rgba(30, 30, 30, 0) 100%) !important;
                        }
                        .p-nav-list .p-navEl:not(.is-selected) {
                            background: none !important;
                            color: hsl(204deg 100% 72.45%) !important;
                        }
                        .p-nav-list .p-navEl:not(.is-selected):not(.is-menuOpen):hover, .p-nav-list .p-navEl:not(.is-selected):not(.is-menuOpen) .p-navEl-link:hover, .p-nav-list .p-navEl:not(.is-selected):not(.is-menuOpen) .p-navEl-splitTrigger:hover {
                            background: rgba(0, 0, 0, 0) !important;
                        }
                    `;
        return checkDateResult;
    }
  };
  var dateLogoCSS = checkDateL(currentDayFull);
  var dateTitleCSS = checkDateT(currentDayFull);

  const settings = [
    {
      key: "headerColorStatus",
      styles: [
        {
          css: `${dateTitleCSS}`,
        },
      ],
    },
    {
      key: "osBrowserStatus",
      styles: [
        {
          css: `
.iconspart {
    display: none;
}
`,
        },
      ],
    },
    {
      key: "signatureStatus",
      styles: [
        {
          css: `
.message-signature {
    display: none;
}
`,
        },
      ],
    },
    {
      key: "changeTLogoStatus",
      styles: [
        {
          css: `${dateLogoCSS}`,
        },
      ],
    },
    {
      key: "techolayOldThemeStatus",
      styles: [
        {
          css: `${oTCSS}`,
        },
      ],
    },
    {
      key: "lilBannerStatus",
      styles: [
        {
          css: `
div[data-widget-key="uye_istatistik_paneli"] > div.block-container,
.menu-row.menu-row--alt {
    background: url(${miniProfileBannerURL}) no-repeat center !important;
    background-size: cover !important;
}

div[data-widget-key="uye_istatistik_paneli"]> div > div > div > div > h3 > a,
div[data-widget-key="uye_istatistik_paneli"]> div > div > div > div > div > span,
ul.tabPanes > li > div > div > div > h3 > a,
ul.tabPanes > li > div > div > div > div > span {
    text-shadow: 1px 1px 5px black, 1px 1px 3px black !important;
}

div[data-widget-key="uye_istatistik_paneli"]> div > div > div > div > div.contentRow-minor,
ul.tabPanes > li > div > div > div > div.contentRow-minor {
    color: white !important;
    text-shadow: 1px 1px 5px black, 1px 1px 3px black !important;
}

div[data-widget-key="uye_istatistik_paneli"]> div > div > div > div > div.contentRow-minor > dl.pairs.pairs--justified.fauxBlockLink > dt,
ul.tabPanes > li > div > div > div > div.contentRow-minor > dl.pairs.pairs--justified.fauxBlockLink > dt {
    color: #c1c1c1 !important;
    text-shadow: 1px 1px 5px black, 1px 1px 3px black !important;
}
`,
        },
      ],
    },
    // daha fazla ayar eklenebilir, ama önce popup.js'e eklenmeli.
  ];

  chrome.storage.local.get(settings.map(s => s.key)).then(local => {
    settings.forEach(setting => {
      if (local[setting.key] === "1") {
        setting.styles.forEach(style => {
          if (!style.condition) {
            const styleElem = document.createElement("style");
            styleElem.innerText = style.css;
            document.body.appendChild(styleElem);
          }
        });
      }
    });
  });
  function insertEmoji(shortcut, url) {
    const postCreator = document.querySelector(
      ".fr-element.fr-view.fr-element-scroll-visible",
    );
    if (postCreator) {
      const imgElement = document.createElement("img");
      imgElement.src = url;
      imgElement.style.width = "24px";
      imgElement.style.height = "24px";

      const editor = postCreator.closest(".fr-element");
      editor.focus();

      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      range.insertNode(imgElement);

      // Move the cursor to the right of the inserted emoji
      range.setStartAfter(imgElement);
      range.setEndAfter(imgElement);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

  async function addEmojiPickerAndEmojis() {
    const response = await fetch(chrome.runtime.getURL("emoji/chooser.html"));
    const data = await response.text();
    // "#top > div.p-body > div > div.p-body-main.p-body-main--withSidebar > div.p-body-content > div > form > div > div > div > div > div.message-cell.message-cell--user",
    const targetSelectors = ["h4.block-textHeader"];
    var res = await fetch("https://iyonga.github.io/versions/emojis.json");
    var json = await res.text();
    const emojis = JSON.parse(json);
    targetSelectors.forEach(selector => {
      const targetElements = document.querySelectorAll(selector);
      targetElements.forEach(targetElement => {
        if (targetElement && !targetElement.hasAttribute("data-emoji-added")) {
          const div = document.createElement("div");
          div.innerHTML = data;

          targetElement.insertBefore(div, targetElement.firstChild);

          targetElement.setAttribute("data-emoji-added", "true");

          const emojiContainer = div.querySelector(".emoji-container");
          if (emojiContainer) {
            emojis.forEach(emoji => {
              const emojiElement = document.createElement("img");
              emojiElement.src = emoji.url;
              emojiElement.alt = emoji.name;
              emojiElement.title = emoji.shortcut;
              emojiElement.style.width = "24px";
              emojiElement.style.height = "24px";
              emojiElement.style.cursor = "pointer";
              emojiElement.onclick = () =>
                insertEmoji(emoji.shortcut, emoji.url);
              emojiContainer.appendChild(emojiElement);
            });
          } else {
            console.error("Emoji container not found in the data");
          }
        }
      });
    });
    var removals = [
      "div.p-body-sidebar > div:nth-child(6) > div > div.block-body > div:nth-child(1) > h4 > div > div > div",
      "div.p-body-sidebar > div:nth-child(5) > div > div.block-body > div:nth-child(1) > h4 > div > div > div",
      "div.p-body-sidebar > div:nth-child(6) > div > div.block-body > div:nth-child(2) > h4 > div > div > div",
      "div.p-body-content > div > ul > li.is-active > div > div > div > div:nth-child(2) > h4 > div > div > div",
      "div.p-body-sidebar > div:nth-child(5) > div > div.block-body > div:nth-child(2) > h4 > div > div > div",
      "div.p-body-content > div > ul > li.is-active > div > div > div > div:nth-child(3) > h4 > div > div > div",
      "div.p-body-content > div > ul > li.is-active > div > div > div > div:nth-child(5) > h4 > div > div > div",
      "div.p-body-content > div > ul > li.is-active > div > div > div > div:nth-child(4) > h4 > div > div > div",
      "div.message-cell.message-cell--main > div > div > div > section > h4 > div > div > div",
    ];
    removals.forEach(selector => {
      var element = document.querySelector(selector);
      if (element) {
        element.remove();
      }
    });
  }

  //const observer = new MutationObserver(addEmojiPickerAndEmojis);
  //observer.observe(document.body, { childList: true, subtree: true });
  //addEmojiPickerAndEmojis();
});
