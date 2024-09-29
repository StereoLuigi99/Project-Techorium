window.onload = function () {
  const settings = [
    {
      key: "buttonTopColorStatus",
      styles: [
        {
          condition: color => color === "rgb(25, 25, 25)",
          css: `
                        .p-header {
                            background: url(${chrome.runtime.getURL(
                              "techolay-title-dark.jpg",
                            )}) !important;
                        }
                        .p-nav {
                            background: url(${chrome.runtime.getURL(
                              "techolay-title-dark.jpg",
                            )}) !important;
                        }
                        .p-nav-scroller .hScroller-action.hScroller-action--end {
                            background: linear-gradient(to right, rgba(30, 30, 30, 0) 0%, #003e8d 33%) !important;
                        }
                        .p-nav-scroller .hScroller-action.hScroller-action--start {
                            background: linear-gradient(to right, #0052b9 66%, rgba(30, 30, 30, 0) 100%) !important;
                        }
                        .p-nav-list .p-navEl:not(.is-selected) {
                            background: none !important;
                        }
                        .p-nav-list .p-navEl:not(.is-selected):not(.is-menuOpen):hover, .p-nav-list .p-navEl:not(.is-selected):not(.is-menuOpen) .p-navEl-link:hover, .p-nav-list .p-navEl:not(.is-selected):not(.is-menuOpen) .p-navEl-splitTrigger:hover {
                            background: rgba(0, 0, 0, 0) !important;
                        }
                    `,
        },
        {
          condition: color => color === "rgb(236, 236, 236)",
          css: `
                        .p-header {
                            background: url(${chrome.runtime.getURL(
                              "techolay-title-light.jpg",
                            )}) !important;
                        }
                        .p-nav {
                            background: url(${chrome.runtime.getURL(
                              "techolay-title-light.jpg",
                            )}) !important;
                        }
                        .p-nav-scroller .hScroller-action.hScroller-action--end {
                            background: linear-gradient(to right, rgba(30, 30, 30, 0) 0%, #007eff 33%) !important;
                        }
                        .p-nav-scroller .hScroller-action.hScroller-action--start {
                            background: linear-gradient(to right, #006edf 66%, rgba(30, 30, 30, 0) 100%) !important;
                        }
                        .p-nav-list .p-navEl:not(.is-selected) {
                            background: none !important;
                        }
                        .p-nav-list .p-navEl:not(.is-selected):not(.is-menuOpen):hover, .p-nav-list .p-navEl:not(.is-selected):not(.is-menuOpen) .p-navEl-link:hover, .p-nav-list .p-navEl:not(.is-selected):not(.is-menuOpen) .p-navEl-splitTrigger:hover {
                            background: rgba(0, 0, 0, 0) !important;
                        }
                    `,
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
      key: "changeTLogo",
      styles: [
        {
          css: `
.p-header-logo.p-header-logo--image > a[href="/sosyal/"] > img {
    content: url(${chrome.runtime.getURL("techolay-dijitalfikir.png")}) !important;
    width: 275px !important;
    height: 59px !important;
    aspect-ratio: auto 275 / 59 !important;
}
          
.p-nav-smallLogo > a[href="/sosyal/"] > img {
    content: url(${chrome.runtime.getURL("techolay-dijitalfikir.png")}) !important;
    width: 280px !important;
    height: 20px !important;
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
        const pageWrapper = document.querySelector(".p-pageWrapper");
        const pageWrapperCS = getComputedStyle(pageWrapper);
        const bgColor = pageWrapperCS.backgroundColor;

        setting.styles.forEach(style => {
          if (!style.condition || style.condition(bgColor)) {
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
};
