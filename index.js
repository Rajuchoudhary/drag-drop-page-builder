import './utils/utils.js';
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
  if (event.target.classList.contains('settings')) {
    console.log('settings');
  }
  if (event.target.classList.contains('delete')) {
    console.log('delete');
  }
  if (event.target.classList.contains('move-up')) {
    console.log('move-up');
  }
  if (event.target.classList.contains('move-down')) {
    console.log('move-down');
  }
  if (event.target.classList.contains('duplicate')) {
    console.log('duplicate');
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
