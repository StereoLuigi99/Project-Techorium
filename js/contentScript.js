const settingPrefix = "s_";

chrome.storage.local.get().then(settings => {
    if (settings["s_ptl"]) {
        waitForElements(
            ".p-header-logo>a[href='/sosyal/']>img",
            ".p-nav-smallLogo>a[href='/sosyal/']>img",
        ).then(elems => s_ptl(true));
    }

    if (settings["s_ptcc"]) {
        chrome.runtime.sendMessage({ type: "customCss" });
    }

    document.documentElement.classList.add(
        ...Object.keys(settings).filter(key => settings[key] && key.startsWith(settingPrefix))
    );
});

chrome.storage.onChanged.addListener(changes => {
    Object.entries(changes).forEach(([key, { oldValue, newValue }]) => {
        if (key.startsWith(settingPrefix)) {
            document.documentElement.classList.toggle(key, newValue);
        }
        if (self[key]) {
            self[key](newValue);
        }
    });
});

function s_ptl(value) {
    const elems = [
        document.querySelector(".p-header-logo>a[href='/sosyal/']>img"),
        document.querySelector(".p-nav-smallLogo>a[href='/sosyal/']>img"),
    ];

    if (!value) {
        elems.forEach(elem => {
            elem.src = elem.pt_src;
            elem.srcset = elem.pt_srcset;
        });
        return;
    }

    elems.forEach(elem => {
        elem.pt_src = elem.src;
        elem.pt_srcset = elem.srcset;
        elem.src = elem.srcset = chrome.runtime.getURL("img/dijitalfikir.png");
    });
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

function waitForElements(...selectors) {
    return new Promise(resolve => {
        const elements = selectors.map(selector => document.querySelector(selector));
        const allExist = elements.every(node => node);
        if (allExist) { return resolve(elements); }
        new MutationObserver((_, observer) => {
            const elements = selectors.map(selector => document.querySelector(selector));
            const allExist = elements.every(node => node);
            if (allExist) {
                observer.disconnect();
                return resolve(elements);
            }
        }).observe(document, { childList: true, subtree: true });
    });
}


