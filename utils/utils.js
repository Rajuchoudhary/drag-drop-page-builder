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

function getComponentUI(cmpType) {
  const cmpUIList = {
    text: `<div data-target-type="text" data-cmp-type="text">
      <p contenteditable="true" data-target="text">This is a Text Component</p>
      <div class="options options--component">
        <button class="settings iconoir-settings" title="Settings"></button>
        <button class="delete iconoir-trash" title="Delete"></button>
        <button class="move-up iconoir-arrow-up" title="Move Up"></button>
        <button class="move-down iconoir-arrow-down" title="Move Down"></button>
        <button class="duplicate iconoir-copy" title="Duplicate"></button>
      </div>
    </div>`,
    img: `<div data-target-type="img">
      <div class="img" data-target="img">
        <img
          src="https://images.pexels.com/photos/29743804/pexels-photo-29743804/free-photo-of-ortakoy-mosque-beside-the-bosphorus-bridge-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />        
      </div>
      <div class="options options--component">
        <button class="settings iconoir-settings" title="Settings"></button>
        <button class="delete iconoir-trash" title="Delete"></button>
        <button class="move-up iconoir-arrow-up" title="Move Up"></button>
        <button class="move-down iconoir-arrow-down" title="Move Down"></button>
        <button class="duplicate iconoir-copy" title="Duplicate"></button>
      </div>
    </div>`,
    btn: `<div data-target-type="btn">
      <button class="btn btn-primary" data-target="btn">Primary Button</button>
      <div class="options options--component">
        <button class="settings iconoir-settings" title="Settings"></button>
        <button class="delete iconoir-trash" title="Delete"></button>
        <button class="move-up iconoir-arrow-up" title="Move Up"></button>
        <button class="move-down iconoir-arrow-down" title="Move Down"></button>
        <button class="duplicate iconoir-copy" title="Duplicate"></button>
      </div>
    </div>`,
    'form:text': `<div data-target-type="form:text">
      <div class="form-group">        
        <input
          type="text"
          id="name-simple"
          class="form-input"
          placeholder="Enter your name"
          data-target="form:text"
        />
      </div>
      <div class="options options--component">
        <button class="settings iconoir-settings" title="Settings"></button>
        <button class="delete iconoir-trash" title="Delete"></button>
        <button class="move-up iconoir-arrow-up" title="Move Up"></button>
        <button class="move-down iconoir-arrow-down" title="Move Down"></button>
        <button class="duplicate iconoir-copy" title="Duplicate"></button>
      </div>
    </div>`,
  };

  const cmpUI = cmpUIList[cmpType];
  if (cmpUI) {
    return window.getHTMLFromString(cmpUI);
  }
  return null;
}

window.getComponentUI = getComponentUI;
