const is22 = !document.documentElement.hasAttribute("data-xf");
const emojis = [
    {
        src: "https://techolay.net/sosyal/ek/71241",
        src2: "https://techolay.net/sosyal/ek/catpleading1-png.71241/",
        title: "catpleading1",
        alt: "catpleading1",
    },
    {
        src: "https://techolay.net/sosyal/ek/71242",
        src2: "https://techolay.net/sosyal/ek/catpleading2-png.71242/",
        title: "catpleading2",
        alt: "catpleading2",
    },
    {
        src: "https://techolay.net/sosyal/ek/71243",
        src2: "https://techolay.net/sosyal/ek/cjsmiling-png.71243/",
        title: "cjsmiling",
        alt: "cjsmiling",
    },
    {
        src: "https://techolay.net/sosyal/ek/71244",
        src2: "https://techolay.net/sosyal/ek/thinking-gif.71244/",
        title: "thinking",
        alt: "thinking",
    },
    {
        src: "https://techolay.net/sosyal/ek/71245",
        src2: "https://techolay.net/sosyal/ek/pleading-png.71245/",
        title: "pleading",
        alt: "pleading",
    },
    {
        src: "https://techolay.net/sosyal/ek/71246",
        src2: "https://techolay.net/sosyal/ek/eyescry-png.71246/",
        title: "eyescry",
        alt: "eyescry",
    },
    {
        src: "https://techolay.net/sosyal/ek/71247",
        src2: "https://techolay.net/sosyal/ek/eyeshmm-png.71247/",
        title: "eyeshmm",
        alt: "eyeshmm",
    },
    {
        src: "https://techolay.net/sosyal/ek/71248",
        src2: "https://techolay.net/sosyal/ek/eyessus-png.71248/",
        title: "eyessus",
        alt: "eyessus",
    },
    {
        src: "https://techolay.net/sosyal/ek/71249",
        src2: "https://techolay.net/sosyal/ek/harold1-png.71249/",
        title: "harold1",
        alt: "harold1",
    },
    {
        src: "https://techolay.net/sosyal/ek/71250",
        src2: "https://techolay.net/sosyal/ek/harold2-png.71250/",
        title: "harold2",
        alt: "harold2",
    },
    {
        src: "https://techolay.net/sosyal/ek/71251",
        src2: "https://techolay.net/sosyal/ek/okjoy-gif.71251/",
        title: "okjoy",
        alt: "okjoy",
    },
    {
        src: "https://techolay.net/sosyal/ek/71253",
        src2: "https://techolay.net/sosyal/ek/pepeno-gif.71253/",
        title: "pepeno",
        alt: "pepeno",
    },
    {
        src: "https://techolay.net/sosyal/ek/71254",
        src2: "https://techolay.net/sosyal/ek/peperain-gif.71254/",
        title: "peperain",
        alt: "peperain",
    },
    {
        src: "https://techolay.net/sosyal/ek/71255",
        src2: "https://techolay.net/sosyal/ek/pepesadge-png.71255/",
        title: "pepesadge",
        alt: "pepesadge",
    },
    {
        src: "https://techolay.net/sosyal/ek/71256",
        src2: "https://techolay.net/sosyal/ek/pepewow-gif.71256/",
        title: "pepewow",
        alt: "pepewow",
    },
    {
        src: "https://techolay.net/sosyal/ek/71257",
        src2: "https://techolay.net/sosyal/ek/popcat-gif.71257/",
        title: "popcat",
        alt: "popcat",
    },
    {
        src: "https://techolay.net/sosyal/ek/71258",
        src2: "https://techolay.net/sosyal/ek/rollingeyes-png.71258/",
        title: "rollingeyes",
        alt: "rollingeyes",
    },
    {
        src: "https://techolay.net/sosyal/ek/71259",
        src2: "https://techolay.net/sosyal/ek/toexplode-png.71259/",
        title: "toexplode",
        alt: "toexplode",
    },
    {
        src: "https://techolay.net/sosyal/ek/71260",
        src2: "https://techolay.net/sosyal/ek/trollsiyah-gif.71260/",
        title: "trollsiyah",
        alt: "trollsiyah",
    },
    {
        src: "https://techolay.net/sosyal/ek/71261",
        src2: "https://techolay.net/sosyal/ek/wazoo2-png.71261/",
        title: "wazoo2",
        alt: "wazoo2",
    },
    {
        src: "https://techolay.net/sosyal/ek/71262",
        src2: "https://techolay.net/sosyal/ek/kekw-png.71262/",
        title: "KEKW",
        alt: "KEKW",
    },
    {
        src: "https://techolay.net/sosyal/ek/71263",
        src2: "https://techolay.net/sosyal/ek/kekwait-png.71263/",
        title: "kekwait",
        alt: "kekwait",
    },
    {
        src: "https://techolay.net/sosyal/ek/71264",
        src2: "https://techolay.net/sosyal/ek/troll-png.71264/",
        title: "troll",
        alt: "troll",
    },
    {
        src: "https://techolay.net/sosyal/ek/71265",
        src2: "https://techolay.net/sosyal/ek/sheep-gif.71265/",
        title: "sheep",
        alt: "sheep",
    },
    {
        src: "https://techolay.net/sosyal/ek/71266",
        src2: "https://techolay.net/sosyal/ek/wazoo-png.71266/",
        title: "wazoo",
        alt: "wazoo",
    },
    {
        src: "https://techolay.net/sosyal/ek/71267",
        src2: "https://techolay.net/sosyal/ek/doggo-png.71267/",
        title: "doggo",
        alt: "doggo",
    },
    {
        src: "https://techolay.net/sosyal/ek/71268",
        src2: "https://techolay.net/sosyal/ek/grin-png.71268/",
        title: "grin",
        alt: "grin",
    },
    {
        src: "https://techolay.net/sosyal/ek/71269",
        src2: "https://techolay.net/sosyal/ek/danskedi-gif.71269/",
        title: "danskedi",
        alt: "danskedi",
    },
    {
        src: "https://techolay.net/sosyal/ek/71270",
        src2: "https://techolay.net/sosyal/ek/cildir-gif.71270/",
        title: "cildir",
        alt: "cildir",
    },
    {
        src: "https://techolay.net/sosyal/ek/71271",
        src2: "https://techolay.net/sosyal/ek/loading-gif.71271/",
        title: "loading",
        alt: "loading",
    },
    {
        src: "https://techolay.net/sosyal/ek/71272",
        src2: "https://techolay.net/sosyal/ek/hehe-gif.71272/",
        title: "hehe",
        alt: "hehe",
    },
    {
        src: "https://techolay.net/sosyal/ek/71273",
        src2: "https://techolay.net/sosyal/ek/pepedance-gif.71273/",
        title: "pepedance",
        alt: "pepedance",
    },
    {
        src: "https://techolay.net/sosyal/ek/71274",
        src2: "https://techolay.net/sosyal/ek/pepe-dab-png.71274/",
        title: "pepedab",
        alt: "pepedab",
    },
    {
        src: "https://techolay.net/sosyal/ek/71275",
        src2: "https://techolay.net/sosyal/ek/3-png.71275/",
        title: "<3",
        alt: "<3",
    },
    {
        src: "https://techolay.net/sosyal/ek/71276",
        src2: "https://techolay.net/sosyal/ek/skull-png.71276/",
        title: "skull",
        alt: "skull",
    },
    {
        src: "https://techolay.net/sosyal/ek/71277",
        src2: "https://techolay.net/sosyal/ek/windows98-png.71277/",
        title: "windows98",
        alt: "windows98",
    },
    {
        src: "https://techolay.net/sosyal/ek/71278",
        src2: "https://techolay.net/sosyal/ek/winxp-png.71278/",
        title: "winxp",
        alt: "windowsxp",
    },
    {
        src: "https://techolay.net/sosyal/ek/71279",
        src2: "https://techolay.net/sosyal/ek/winvista-png.71279/",
        title: "winvista",
        alt: "windowsvista",
    },
    {
        src: "https://techolay.net/sosyal/ek/71280",
        src2: "https://techolay.net/sosyal/ek/win7-png.71280/",
        title: "win7",
        alt: "windows7",
    },
    {
        src: "https://techolay.net/sosyal/ek/71281",
        src2: "https://techolay.net/sosyal/ek/win8-png.71281/",
        title: "win8",
        alt: "windows8",
    },
    {
        src: "https://techolay.net/sosyal/ek/71282",
        src2: "https://techolay.net/sosyal/ek/win8-1-png.71282/",
        title: "win8.1",
        alt: "windows8.1",
    },
    {
        src: "https://techolay.net/sosyal/ek/71283",
        src2: "https://techolay.net/sosyal/ek/windows10-png.71283/",
        title: "windows10",
        alt: "windows10",
    },
    {
        src: "https://techolay.net/sosyal/ek/71284",
        src2: "https://techolay.net/sosyal/ek/vadaa-jpg.71284/",
        title: "vadaa",
        alt: "vadaa",
    },
];

waitForElement("input[data-bb-code='message']").then(elem => {
    initEmojiPickers();

    waitForVariable("XF.activate").then(_ => {
        // const setEvent = (elem, event, callback) => is22 ? $(elem).on(event, callback) : XF.on(elem, event, callback);
        // setEvent(document, "xf:page-load-complete", initEmojiPickers);
        // setEvent(document, "editor:config", initEmojiPickers);
        // setEvent(document.querySelector("form[data-xf-init~='quick-reply']"), "ajax-submit:always", initEmojiPickers);

        if (is22) {
            waitForVariable("$").then(_ => {
                $(document).on("xf:page-load-complete", initEmojiPickers);
                $(document).on("editor:config", initEmojiPickers);
                $("form[data-xf-init~='quick-reply']").on("ajax-submit:always", initEmojiPickers);
            });
            return;
        }
        XF.on(document, "xf:page-load-complete", initEmojiPickers);
        XF.on(document, "editor:config", initEmojiPickers);
        XF.on(document.querySelector("form[data-xf-init~='quick-reply']"), "ajax-submit:always", initEmojiPickers);
    });
});

function initEmojiPickers() {
    document.querySelectorAll(".js-editor").forEach(editor => {
        if (editor.nextElementSibling.classList.contains("emoji-container")) { return; }

        editor.parentElement.insertBefore(makeEmojiPicker(), editor.nextElementSibling);
    });
}

function makeEmojiPicker() {
    const element = document.createElement("div");
    element.className = "emoji-container input fr-basic fr-box";
    element.append(...makeEmojis());
    return element;
}

function makeEmojis() {
    const baseImg = document.createElement("img");
    baseImg.style.width = "24px";

    return emojis.map(({ src, title, alt, src2 }) => {
        const img = baseImg.cloneNode();
        // img.src = src;
        img.src = src2;
        img.alt = alt;
        img.title = title;
        img.loading = "lazy";
        img.addEventListener("click", handleEmojiClick);
        img.addEventListener("mousedown", handleImgMouseDown);

        return img;
    });
}

function handleEmojiClick(event) {
    const editor = is22
        ? $(event.currentTarget.parentElement.previousElementSibling)
        : event.currentTarget.parentElement.previousElementSibling;
    const url = event.currentTarget.getAttribute("data-url");
    const width = event.currentTarget.style.width;

    XF.insertIntoEditor(
        editor,
        `<img src="${ url }" style="width:${ width }">`,
        `[IMG width="${ width }"]${ url }[/IMG]`,
    );
}

function handleImgMouseDown(event) {
    const elem = event.currentTarget.parentElement.parentElement.querySelector(".fr-element.fr-view.fr-element-scroll-visible");
    elem.addEventListener("blur", handleImgBlur);
}

function handleImgBlur(event) {
    event.currentTarget.closest(".fr-box.bbWrapper").classList.add("is-focused");
    event.currentTarget.removeEventListener("blur", handleImgBlur);
}

function waitForElement(selector) {
    return new Promise(resolve => {
        const elem = document.querySelector(selector);
        if (elem) { return resolve(elem); }
        new MutationObserver((_, observer) => {
            const elem = document.querySelector(selector);
            if (elem) {
                observer.disconnect();
                return resolve(elem);
            }
        })
            .observe(document, { childList: true, subtree: true });
    });
}

function waitForVariable(path, interval = 10) {
    return new Promise(resolve => {
        const getValue = (obj, key) => key.split(".").reduce((o, k) => (o || {})[k], obj);
        if (getValue(window, path)) { resolve(); }
        const id = setInterval(_ => {
            if (getValue(window, path)) {
                resolve();
                clearInterval(id);
            }
        }, interval);
    });
}
