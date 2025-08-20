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
