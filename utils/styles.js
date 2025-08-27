function generateClassName() {
  const uniqueClassName = Math.random().toString(36).slice(2, 10);
  return `dynamic-${uniqueClassName}`;
}

function getDynamicClassName(targetEle) {
  if (!targetEle || !targetEle.classList) return null;
  return (
    Array.from(targetEle.classList).find((cls) => cls.startsWith('dynamic-')) ||
    null
  );
}

window.generateClassName = generateClassName;
function livePreview(formSelector, targetEle, targetType) {
  const form = document.querySelector(formSelector);
  if (!form) return;
  if (!targetEle) return;
  // generate class name add to targetEle
  let className = getDynamicClassName(targetEle);
  if (!className) {
    className = window.generateClassName();
    targetEle.classList.add(className);
  }

  const classSelector = `.${className}`;
  const styleTagId = 'stone-ui-dynamic-styles';
  let styleTag = document.getElementById(styleTagId);
  if (!styleTag) {
    styleTag = document.getElementById(styleTagId);
    styleTag = document.createElement('style');
    styleTag.id = styleTagId;
    document.head.appendChild(styleTag);
  }

  form.addEventListener('input', (e) => {
    const styles = getDynamicStyles(formSelector);
    console.log('stlye', styles);
    let cssContent = styleTag.textContent;

    const cssRules = Object.entries(styles)
      .map(([prop, value]) => `${prop}: ${value};`)
      .join(' ');

    cssContent = `\n${classSelector} {${cssRules}}`;

    styleTag.textContent = cssContent;
  });
}
window.livePreview = livePreview;

function getDynamicStyles(formSelector) {
  const form = document.querySelector(formSelector);
  const styles = {};
  if (!form) return {};
  const fontSize = form.querySelector('#font-size')?.value;
  if (fontSize) {
    styles['font-size'] = `${fontSize}px`;
  }
  const fontColorEle = form.querySelector('#font-color');
  if (fontColorEle && fontColorEle.dataset.changed === 'true') {
    styles['color'] = `${fontColorEle.value}`;
  }
  const width = form.querySelector('#width')?.value;
  if (width) {
    styles['width'] = `${width}px`;
  }
  const height = form.querySelector('#height')?.value;
  if (height) {
    styles['height'] = `${height}px`;
  }
  const backgroundEle = form.querySelector('#background-color');
  if (backgroundEle && backgroundEle.dataset.changed === 'true') {
    styles['background-color'] = `${backgroundEle.value}`;
  }
  const padding = form.querySelector('#padding')?.value;
  if (padding) {
    styles['padding'] = `${padding}px`;
  }
  const borderRadius = form.querySelector('#border-radius')?.value;
  if (borderRadius) {
    styles['border-radius'] = `${borderRadius}px`;
  }
  return styles;
}

window.getDynamicStyles = getDynamicStyles;

function loadExistingStyles(targetEle) {
  const className = getDynamicClassName(targetEle);
  if (!className) return;

  const styleTag = document.getElementById('stone-ui-dynamic-styles');
  if (!styleTag) return;

  const cssContent = styleTag.textContent;
  const regex = new RegExp(`\\.${className}\\s*\\{([^}]*)\\}`, 'i');
  const match = cssContent.match(regex);
  if (match && match[1]) {
    const cssRules = match[1]
      .split(';')
      .map((r) => r.trim())
      .filter(Boolean);
    const styleMap = {};
    cssRules.forEach((rule) => {
      const [prop, value] = rule.split(':');
      styleMap[prop] = `${value}`.trim();
    });
    console.log('styleMap', styleMap);

    const form = document.querySelector('.style-form');
    if (form) {
      if (form.querySelector('#font-size')) {
        form.querySelector('#font-size').value = parseInt(
          styleMap['font-size'] || ''
        );
      }
      if (form.querySelector('#font-color')) {
        form.querySelector('#font-color').value = styleMap['color'] || '';
      }
      if (form.querySelector('#width')) {
        form.querySelector('#width').value = parseInt(styleMap['width'] || '');
      }
      if (form.querySelector('#height')) {
        form.querySelector('#height').value = parseInt(
          styleMap['height'] || ''
        );
      }
      if (form.querySelector('#background-color')) {
        form.querySelector('#background-color').value =
          styleMap['background-color'] || '';
      }
      if (form.querySelector('#padding')) {
        form.querySelector('#padding').value = parseInt(
          styleMap['padding'] || ''
        );
      }
      if (form.querySelector('#border-radius')) {
        form.querySelector('#border-radius').value = parseInt(
          styleMap['border-radius'] || ''
        );
      }
    }
  }
}

window.loadExistingStyles = loadExistingStyles;
