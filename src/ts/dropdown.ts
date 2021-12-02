export {};

const dropdownElList = document.querySelector('.steps__content');

dropdownElList?.addEventListener('click', e => {
  const clickedElement = e.target as HTMLElement;

  if (clickedElement.classList.contains('steps__dropdown-title')) {
    clickedElement.classList.toggle('steps__dropdown-title_active');
  }
});
