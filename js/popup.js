/* Settings */
{
    chrome.storage.local.get().then(settings => {
        document.querySelectorAll("[data-setting-name]").forEach(elem => {
            elem.checked = settings[elem.getAttribute("data-setting-name")];
            elem.addEventListener("change", settingChanged);
        });
    });

    function settingChanged(event) {
        const settingName = event.currentTarget.getAttribute("data-setting-name");
        chrome.storage.local.set({
            [settingName]: event.currentTarget.checked,
        });
    }
}

/* CodeMirror */
{
    const codeMirrorOptions = {
        autofocus: true,
        autoCloseBrackets: true,
        extraKeys: {
            "Ctrl-Space": "autocomplete",
            "Shift-Tab": "indentLess",
            "Ctrl-/": "toggleComment",
            "Tab": cm => {
                if (cm.getMode().name === "null") {
                    cm.execCommand("insertTab");
                    return;
                }
                if (cm.somethingSelected()) {
                    cm.execCommand("indentMore");
                    return;
                }

                cm.execCommand("insertSoftTab");
            },
            "Backspace": cm => {
                if (cm.somethingSelected()) {
                    cm.execCommand("delCharBefore");
                    return;
                }

                const cursorsPos = cm.listSelections().map(selection => selection.anchor);
                const indentUnit = cm.options.indentUnit;
                let shouldDelChar = false;

                cursorsPos.forEach(({ line, ch }) => {
                    const indentation = cm.getStateAfter(line).indented;

                    if (!(
                        indentation !== 0 &&
                        ch > 0 &&
                        ch <= indentation &&
                        ch % indentUnit === 0
                    )) {
                        shouldDelChar = true;
                    }
                });

                shouldDelChar
                    ? cm.execCommand("delCharBefore")
                    : cm.execCommand("indentLess");
            },
        },
        foldGutter: true,
        gutters: ["CodeMirror-foldgutter", "CodeMirror-linenumbers"],
        indentUnit: 4,
        indentWithTabs: false,
        lineNumbers: true,
        lineWiseCopyCut: true,
        mode: "text/css",
        scrollbarStyle: "overlay",
        styleActiveLine: { nonEmpty: true },
    };

    const editor = new CodeMirror(document.querySelector(".codeMirrorContainer"), codeMirrorOptions);
    let cacheCss;

    chrome.storage.local.get([
        "customCss",
        "customCssMin",
    ]).then(settings => {
        editor.setValue(settings["customCss"]);
        cacheCss = settings["customCssMin"];
    });
    editor.on("changes", editorChanged);

    function editorChanged(editor, changes) {
        const editorText = editor.getValue();
        const wrappedEditorText = `html.s_ptcc{${editorText}}`;
        const editorTextMin = minifyCSS(wrappedEditorText);
        if (cacheCss === editorTextMin) { return; }

        cacheCss = editorTextMin;

        chrome.storage.local.set({
            customCss: editorText,
            customCssMin: editorTextMin,
        });
    }

    function minifyCSS(css) {
        return css
            .replace(/\/\*[\s\S]*?\*\//g, "")
            .replace(/\s*([{}:;,!])\s*/g, "$1")
            .replace(/;}/g, "}")
            .trim();
    }
}
