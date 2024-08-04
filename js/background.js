const rulesetIds = {
    s_ptl: 1,
    s_ptg: 2,
};

chrome.runtime.onInstalled.addListener(async ({ reason, temporary }) => {
    await setDefaultSettings();

    // if (reason === "install") {
    //     checkPermissions();
    // }
});

chrome.runtime.onMessage.addListener(({ type, ...params }, sender, sendResponse) => {
    self[type](sender.tab.id, ...Object.values(params));
});

chrome.storage.onChanged.addListener(changes => {
    Object.entries(changes).forEach(([key, { oldValue, newValue }]) => {
        switch (key) {
            case "s_ptl":
            case "logoUrl":
                // logoDynamicRuleset(key, newValue);
                break;
            case "s_ptg":
                gifDynamicRuleset(key, newValue);
                break;
        }
    });
});

function checkPermissions() {
    chrome.permissions.contains({
        origins: ["https://techolay.net/sosyal/*"]
    }).then(granted => {
        if (!granted) {
            chrome.tabs.create({ url: `${ chrome.runtime.getURL("options.html") }` });
        }
    });
}

async function setDefaultSettings() {
    const settings = await chrome.storage.local.get();
    const defaultSettings = {
        s_ptbt: true,       // blue theme
        s_ptcc: true,       // custom css
        s_ptci: true,       // category icons
        s_pte: true,        // emoji picker
        s_ptg: true,        // gif avatars
        s_pthosb: true,     // hide osb
        s_pths: true,       // hide signature
        s_pti: true,        // improvements
        s_ptl: true,        // logo
        s_ptosb: true,      // osb
        customCss: "",
        customCssMin: "",
    };

    const defaultValues = {};
    Object.keys(defaultSettings).forEach(key => {
        if (settings[key] === undefined) {
            defaultValues[key] = defaultSettings[key];
        }
    });

    chrome.storage.local.set(defaultValues);
}

function customCss(tabId) {
    chrome.storage.local.get("customCssMin").then(settings => {
        chrome.scripting.insertCSS({
            target: { tabId: tabId },
            origin: "USER",
            css: settings["customCssMin"],
        });
    });
}

function insertCSS(tabId, css) {
    chrome.scripting.insertCSS({
        target: { tabId: tabId },
        origin: "USER",
        css: css,
    });
}

function removeCSS(tabId, css) {
    chrome.scripting.removeCSS({
        target: { tabId: tabId },
        origin: "USER",
        css: css,
    });
}

function gifDynamicRuleset(key, value) {
    if (!value) {
        removeDynamicRuleset(key, value);
        return;
    }

    chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [{
            id: rulesetIds[key],
            priority: 1,
            action: {
                type: "redirect",
                redirect: {
                    regexSubstitution: "https://techolay.net/sosyal/data/avatars/o\\1"
                }
            },
            condition: {
                regexFilter: "^https://techolay.net/sosyal/data/avatars/[sml](.+)$"
            }
        }],
        removeRuleIds: [rulesetIds[key]]
    });
}

function removeDynamicRuleset(key, value) {
    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [rulesetIds[key]],
    });
}
