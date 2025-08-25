function generateClassName() {
  const uniqueClassName = Math.random().toString(36).slice(2, 10);
  return `dynamic-${uniqueClassName}`;
}
window.generateClassName = generateClassName;
function livePreview(formSelector, targetEle, targetType) {
  const form = document.querySelector(formSelector);
  if (!form) return;
  if (!targetEle) return;
  // generate class name add to targetEle
  let className = window.generateClassName();
  targetEle.classList.add(className);

  const classSelector = `.${className}`;
  const styleTagId = 'stone-ui-dynamic-styles';
  let styleTag = document.getElementById(styleTagId);

  styleTag = document.createElement('style');
  styleTag.id = styleTagId;
  document.head.appendChild(styleTag);

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
    styles['font-size'] = `${width}px`;
  }
  const height = form.querySelector('#height')?.value;
  if (height) {
    styles['font-size'] = `${height}px`;
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
    styles['border-radius'] = `${borderRadius}`;
  }
  return styles;
}

window.getDynamicStyles = getDynamicStyles;
