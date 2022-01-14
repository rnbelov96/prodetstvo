import '../scss/thanks.scss';
// import './modals';

const userName = localStorage.getItem('userName') || 'Гость';

const nameLabelEl = document.querySelector('.js-name') as HTMLSpanElement;
nameLabelEl.textContent = userName;

document.title = `${userName}, спасибо, Ваша заявка принята 👍`;
