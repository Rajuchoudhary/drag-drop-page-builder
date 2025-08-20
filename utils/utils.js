function getSectionUI() {
  return window.getHTMLFromString(`<div data-target-type="section" class="section-min-height">
            <button class="add-section top" title="Add Section - Top">
              Add Section - Top
            </button>
            <button class="add-section bottom" title="Add Section - Bottom">
              Add Section - Bottom
            </button>
            <div data-target="section" class="drop-section"></div>
            <div class="options options--section">
              <button
                class="settings iconoir-settings"
                title="Settings"
              ></button>
              <button class="delete iconoir-trash" title="Delete"></button>
              <button class="move-up iconoir-arrow-up" title="Move Up"></button>
              <button
                class="move-down iconoir-arrow-down"
                title="Move Down"
              ></button>
              <button class="duplicate iconoir-copy" title="Duplicate"></button>
            </div>
          </div>`);
}

window.getSectionUI = getSectionUI;

function getHTMLFromString(htmlString) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlString;
  return tempDiv.firstChild;
}

window.getHTMLFromString = getHTMLFromString;
