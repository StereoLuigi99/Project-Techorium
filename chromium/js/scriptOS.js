document.addEventListener("DOMContentLoaded", async function (event) {
  const replacements = [
    {
      selector: ".node--id52 .fa-comments",
      src: "icons/windows/win11/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id53 .fa-comments",
      src: "icons/windows/win10/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id54 .fa-comments",
      src: "icons/windows/win8/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id55 .fa-comments",
      src: "icons/windows/win7/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id56 .fa-comments",
      src: "icons/windows/win-other/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id57 .fa-comments",
      src: "icons/macos/macos-cat/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id305 .fa-comments",
      src: "icons/macos/sequoia/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id58 .fa-comments",
      src: "icons/macos/sonoma/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id60 .fa-comments",
      src: "icons/macos/ventura/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id292 .fa-comments",
      src: "icons/macos/monterey/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id293 .fa-comments",
      src: "icons/macos/big-sur/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id59 .fa-comments",
      src: "icons/macos/opencore/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id61 .fa-comments",
      src: "icons/linux/linux-cat/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id62 .fa-comments",
      src: "icons/amogos-full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id191 .fa-comments",
      src: "icons/linux/debian/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id192 .fa-comments",
      src: "icons/linux/pardus/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id193 .fa-comments",
      src: "icons/linux/kali-linux/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id194 .fa-comments",
      src: "icons/linux/ubuntu/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id195 .fa-comments",
      src: "icons/linux/linux-mint/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id196 .fa-comments",
      src: "icons/linux/pop-os/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id197 .fa-comments",
      src: "icons/linux/elementary-os/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id198 .fa-comments",
      src: "icons/linux/redhat/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id199 .fa-comments",
      src: "icons/linux/fedora/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id200 .fa-comments",
      src: "icons/linux/arch/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id201 .fa-comments",
      src: "icons/linux/manjaro/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id202 .fa-comments",
      src: "icons/linux/gentoo/full.png",
      width: 34,
      height: 34,
    },
    {
      selector: ".node--id290 .fa-comments",
      src: "icons/linux/opensuse/full.png",
      width: 34,
      height: 34,
    },
  ];
  const result = await chrome.storage.local.get("changeOS_Icons");
  const changeOS_Icons = result["changeOS_Icons"];
  if (changeOS_Icons === "1") {
    const nodeIdsToHide = [
      "node--id52",
      "node--id53",
      "node--id54",
      "node--id55",
      "node--id56",
      "node--id57",
      "node--id61",
      "node--id59",
      "node--id58",
      "node--id60",
      "node--id191",
      "node--id192",
      "node--id194",
      "node--id193",
      "node--id196",
      "node--id195",
      "node--id198",
      "node--id199",
      "node--id197",
      "node--id200",
      "node--id201",
      "node--id202",
      "node--id62",
    ];

    nodeIdsToHide.forEach(nodeId => {
      const elements = document.querySelectorAll(`.${nodeId} i::before`);
      elements.forEach(element => {
        element.style.display = "none";
      });
    });
    if (Array.isArray(replacements) && replacements.length > 0) {
      replacements.forEach(item => {
        const oldElement = document.querySelector(item.selector);
        if (oldElement) {
          const newElement = document.createElement("img");
          newElement.src = chrome.runtime.getURL(item.src);
          newElement.width = item.width;
          newElement.height = item.height;
          oldElement.parentNode.insertBefore(newElement, oldElement);
          oldElement.parentNode.removeChild(oldElement);
        } else {
        }
      });
    } else {
    }
  }
  var savedTheme = await chrome.storage.local.get(["usertheme"]);
  if (savedTheme !== null) {
    var theme = savedTheme["usertheme"];
    var styleElement = document.createElement("style");
    styleElement.textContent = theme;
    document.head.appendChild(styleElement);
  }
});
