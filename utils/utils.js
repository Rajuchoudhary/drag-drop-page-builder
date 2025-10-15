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

function getDynamicCssFormUI(targetType) {
  const formElements = {
    fontSize: `<div class="form-group">
            <label for="font-size">Font Size (px)</label>
            <input
              type="number"
              id="font-size"
              name="font-size"
              min="1"
              placeholder="e.g. 16"
            />
          </div>`,
    fontColor: `<div class="form-group">
            <label for="font-color">Font Color</label>
            <input type="color" id="font-color" name="font-color" />
          </div>`,
    width: `<div class="form-group">
            <label for="width">Width (px)</label>
            <input
              type="number"
              id="width"
              name="width"
              min="0"
              placeholder="e.g. 200"
            />
          </div>`,
    height: `<div class="form-group">           
          <div class="form-group">
            <label for="height">Height (px)</label>
            <input
              type="number"
              id="height"
              name="height"
              min="0"
              placeholder="e.g. 50"
            />
          </div>`,
    img: `<div class="form-group">
              <label for="img-url">Image URL</label>
              <input
                type="url"
                id="img-url"
                name="img-url"
                placeholder="https://example.com/image.jpg"
              />
            </div>`,
    backgroundColor: `<div class="form-group">
            <label for="background-color">Background Color</label>
            <input type="color" id="background-color" name="background-color" />
          </div>`,
    btnText: `<div class="form-group">
            <label for="button-text">Button Text</label>
            <input
              type="text"
              id="button-text"
              name="button-text"
              placeholder="Enter button text"
            />
          </div>`,
    padding: `<div class="form-group">
            <label for="padding">Padding (px)</label>
            <input
              type="number"
              id="padding"
              name="padding"
              min="0"
              placeholder="e.g. 10"
            />
          </div>`,
    borderRadius: `<div class="form-group">
            <label for="border-radius">Border Radius (px)</label>
            <input
              type="number"
              id="border-radius"
              name="border-radius"
              min="0"
              placeholder="e.g. 5"
            />
          </div>`,
    placeholderText: `<div class="form-group">
            <label for="placeholder-text">Placeholder Text</label>
            <input
              type="text"
              id="placeholder-text"
              name="placeholder-text"
              placeholder="Enter placeholder text"
            />
          </div>`,
  };
  const defaultOptions = `${formElements.padding} ${formElements.width} ${formElements.height} ${formElements.borderRadius}`;
  const fontOptions = `${formElements.fontColor} ${formElements.fontSize}`;
  const backgroundOptions = formElements.backgroundColor;
  const btnOptions = `${defaultOptions} ${formElements.btnText} ${fontOptions} ${backgroundOptions}`;
  const imgOptions = `${formElements.padding} ${formElements.width} ${formElements.img} ${backgroundOptions} ${formElements.borderRadius}`;
  const formTextOptions = `${defaultOptions} ${formElements.placeholderText}  ${formElements.fontSize}`;
  const textOptions = `${defaultOptions} ${fontOptions} ${backgroundOptions}`;
  const sectionOptions = `${defaultOptions} ${backgroundOptions}`;
  const formUI = `<form class="style-form">
                      ${targetType === 'btn' ? btnOptions : ''}
                      ${targetType === 'text' ? textOptions : ''}
                      ${targetType === 'img' ? imgOptions : ''}
                      ${targetType === 'form:text' ? formTextOptions : ''}
                      ${targetType === 'section' ? sectionOptions : ''}
                    </form>`;

  return window.getHTMLFromString(formUI);
}

window.getDynamicCssFormUI = getDynamicCssFormUI;

function getComponentsListUI() {
  const componentsList = `<div class="components">
          <h4>Component: Drag & Drop builder</h4>
          <div id="components-list">
            <div data-cmp-type="text" draggable="true">
              <i class="iconoir-text"></i>Text
            </div>
            <div data-cmp-type="img" draggable="true">
              <i class="iconoir-media-image"></i>Image
            </div>
            <div data-cmp-type="btn" draggable="true">
              <i class="iconoir-arrow-reduce-tag"></i>Button
            </div>
            <div data-cmp-type="form:text" draggable="true">
              <i class="iconoir-input-field"></i>Form: Text
            </div>
          </div>
        </div>`;
  return window.getHTMLFromString(componentsList);
}

window.getComponentsListUI = getComponentsListUI;

function getPlaceholderUI() {
  const placeholder = `<div class="placeholder-section">
            <h3>Start by adding section</h3>
            <button class="welcome-btn">Add Section</button>
          </div>`;
  return window.getHTMLFromString(placeholder);
}
window.getPlaceholderUI = getPlaceholderUI;

function initColorChangeTracking(formSelector) {
  const form = document.querySelector(formSelector);
  if (!form) return;
  form.querySelectorAll('input[type=color]').forEach((input) => {
    input.dataset.changed = 'false';
    input.addEventListener('input', () => {
      input.dataset.changed = 'true';
    });
  });
}
window.initColorChangeTracking = initColorChangeTracking;

function removeDynamicStyles(el) {
  const styleTag = document.getElementById('stone-ui-dynamic-styles');
  if (!styleTag) return;
  let cssText = styleTag.textContent;
  const dynamicClasses = Array.from(el.classList).filter((cls) =>
    cls.startsWith('dynamic-')
  );

  el.querySelectorAll('[class]').forEach((child) => {
    Array.from(child.classList).forEach((cls) => {
      if (cls.startsWith('dynamic-') && !dynamicClasses.includes(cls)) {
        dynamicClasses.push(cls);
      }
    });
  });
  if (!dynamicClasses.length) return;
  dynamicClasses.forEach((cls) => {
    const regex = new RegExp(`\\.${cls}\\s*\\{[^}]*\\}`, 'g');
    cssText = cssText.replace(regex, '');
  });
  styleTag.textContent = cssText;
}
window.removeDynamicStyles = removeDynamicStyles;

document.querySelector('.save-page')?.addEventListener('click', () => {
  const mainEl = document.querySelector('.main');
  if (!mainEl) {
    return;
  }

  const styleEl = document.getElementById('stone-ui-dynamic-styles');

  localStorage.setItem('builder-main', mainEl.outerHTML);
  if (styleEl) {
    localStorage.setItem('builder-style', styleEl.outerHTML);
  }

  const mainclone = mainEl.cloneNode(true);
  mainclone
    .querySelectorAll('.placeholder-section')
    .forEach((el) => el.remove());

  mainclone.querySelectorAll('[data-target-type]').forEach((wrapper) => {
    const targetEl = wrapper.querySelector('[data-target]');
    if (targetEl) {
      targetEl.classList.remove('drop-section');
      targetEl.removeAttribute('data-target');
      targetEl.removeAttribute('contenteditable');
      wrapper.replaceWith(targetEl);
    } else {
      wrapper.remove();
    }
  });

  localStorage.setItem('live-main', mainclone.outerHTML);
  localStorage.setItem('live-style', styleEl ? styleEl.outerHTML : '');
  alert('Page saved successfully!');
});
