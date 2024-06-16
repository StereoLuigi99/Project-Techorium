document.addEventListener("DOMContentLoaded", (event) => {
  browser.storage.local.get(["buttonTopColorStatus"]).then((local) => {
    if (local.buttonTopColorStatus == "1") {
      var darkTitleCSS = `.p-header {
        background: url(${browser.runtime.getURL("techolay-title-dark.jpg")}) !important;
      }
      
      .p-nav {
        background: url(${browser.runtime.getURL("techolay-title-dark.jpg")}) !important;
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
      }`;
    
      var darkTitleElem = document.createElement('style');
      darkTitleElem.innerText = darkTitleCSS;
    
      var lightTitleCSS = `.p-header {
        background: url(${browser.runtime.getURL("techolay-title-light.jpg")}) !important;
      }
      
      .p-nav {
        background: url(${browser.runtime.getURL("techolay-title-light.jpg")}) !important;
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
      }`;
    
      var lightTitleElem = document.createElement('style');
      lightTitleElem.innerText = lightTitleCSS;
    
      var pageWrapper = document.querySelector(".p-pageWrapper");
      var pageWrapperCS = getComputedStyle(pageWrapper);
    
      if (pageWrapperCS.backgroundColor != "rgb(236, 236, 236)" && pageWrapperCS.backgroundColor != "rgb(0, 0, 0)") {
          document.body.appendChild(darkTitleElem);
      }

      else if (pageWrapperCS.backgroundColor != "rgb(25, 25, 25)" && pageWrapperCS.backgroundColor != "rgb(0, 0, 0)") {
          document.body.appendChild(lightTitleElem);
      }
    }
    else {
      return;
    }
  });
});