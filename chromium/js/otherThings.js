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
};
