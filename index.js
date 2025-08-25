import './utils/utils.js';
import './utils/styles.js';
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('welcome-btn')) {
    console.log('welcome btn');
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.innerHTML = '';
      mainContent.appendChild(window.getSectionUI());
    }
  }
  if (event.target.classList.contains('add-section')) {
    console.log('add-section');
    const newSection = window.getSectionUI();
    if (event.target.classList.contains('top')) {
      event.target.parentElement.insertAdjacentElement(
        'beforebegin',
        newSection
      );
    } else if (event.target.classList.contains('bottom')) {
      event.target.parentElement.insertAdjacentElement('afterend', newSection);
    }
  }
  if (event.target.classList.contains('components-list')) {
    const styleFormUI = document.querySelector('.style-form');
    if (styleFormUI) {
      styleFormUI.remove();
    }
    const prevBtn = document.querySelector('.sidebar .preview');
    if (prevBtn) {
      const compoentsList = document.querySelector('.components');
      if (compoentsList) {
        compoentsList.remove();
      }
      prevBtn.after(window.getComponentsListUI());
    }
  }
  const closesetTarget = event.target.closest('[data-target-type]');
  if (!closesetTarget) return;
  const targetType = closesetTarget.getAttribute('data-target-type');
  const targetEle = closesetTarget.querySelector('[data-target]');
  if (event.target.classList.contains('settings')) {
    console.log('settings');
    const componentsList = document.querySelector('.components');
    if (componentsList) {
      componentsList.remove();
    }

    const prevBtn = document.querySelector('.sidebar .preview');
    if (prevBtn) {
      const styleFormUI = document.querySelector('.style-form');
      if (styleFormUI) {
        styleFormUI.remove();
      }
      prevBtn.after(window.getDynamicCssFormUI());
      window.initColorChangeTracking('.style-form');
    }

    window.livePreview('.style-form', targetEle, targetType);
  }
  if (event.target.classList.contains('delete')) {
    console.log('delete');

    if (closesetTarget) {
      closesetTarget.remove();
    }
    if (targetType !== 'section') return;
    const sectionsList = document.querySelectorAll(
      '[data-target-type="section"]'
    );
    console.log('sectionsList', sectionsList);

    if (!sectionsList.length) {
      const main = document.querySelector('.main');
      if (main) {
        main.innerHTML = '';
        main.appendChild(window.getPlaceholderUI());
      }
    }
  }
  if (event.target.classList.contains('move-up')) {
    console.log('move-up');
    const closesetTarget = event.target.closest('[data-target-type]');
    console.log('closesetTarget', closesetTarget);

    if (closesetTarget) {
      const prevEle = closesetTarget.previousElementSibling;
      if (prevEle) {
        closesetTarget.parentNode.insertBefore(closesetTarget, prevEle);
      }
    }
  }
  if (event.target.classList.contains('move-down')) {
    console.log('move-down');
    const closesetTarget = event.target.closest('[data-target-type]');
    console.log('closesetTarget', closesetTarget);

    if (closesetTarget) {
      const nextEle = closesetTarget.nextElementSibling;
      if (nextEle) {
        closesetTarget.parentNode.insertBefore(nextEle, closesetTarget);
      }
    }
  }
  if (event.target.classList.contains('duplicate')) {
    console.log('duplicate');
    const closesetTarget = event.target.closest('[data-target-type]');
    if (closesetTarget) {
      const clone = closesetTarget.cloneNode(true);
      if (clone) {
        closesetTarget.insertAdjacentElement('afterend', clone);
      }
    }
  }
});

document.body.addEventListener('dragover', (event) => {
  const targetSection = event.target.closest('[data-target-type="section"]');
  if (!targetSection) return;
  const targetDropzone = targetSection.querySelector('[data-target="section"]');
  if (!targetDropzone) return;
  event.preventDefault();
  event.target.classList.add('drag-over');
});
document.body.addEventListener('dragleave', (event) => {
  const targetSection = event.target.closest('[data-target-type="section"]');
  if (!targetSection) return;
  const targetDropzone = targetSection.querySelector('[data-target="section"]');
  if (!targetDropzone) return;
  event.target.classList.remove('drag-over');
});
document.body.addEventListener('drop', (event) => {
  const targetSection = event.target.closest('[data-target-type="section"]');
  if (!targetSection) return;
  const targetDropzone = targetSection.querySelector('[data-target="section"]');
  if (!targetDropzone) return;
  event.target.classList.remove('drag-over');

  event.preventDefault();
  const cmpType = event.dataTransfer.getData('text/plain');
  console.log('cmpType', cmpType);
  const componentUI = window.getComponentUI(cmpType);
  if (componentUI) {
    targetDropzone.appendChild(componentUI);
  }
});
document.body.addEventListener('dragstart', (event) => {
  const draggable = event.target.closest('#components-list [draggable="true"]');
  if (!draggable) return;
  const cmpType = draggable.getAttribute('data-cmp-type');
  console.log('cmpType', cmpType);
  event.dataTransfer.setData('text/plain', cmpType);
});
document.body.addEventListener('dragend', (event) => {});
