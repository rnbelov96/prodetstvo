/* eslint-disable no-param-reassign */
export {};

const leftColor = '#FFBC0E';
const rightColor = '#ffbb0e93';

const rangeElList = document.querySelectorAll('.js-range');

const yaselRange = document.querySelector(
  '.js-yasel-range',
) as HTMLInputElement;
const oldRange = document.querySelector('.js-old-range') as HTMLInputElement;
const youngRange = document.querySelector(
  '.js-young-range',
) as HTMLInputElement;
const dopRange = document.querySelector('.js-dop-range') as HTMLInputElement;

const yaselRangeLineEl = document.querySelector(
  '.js-yasel-line',
) as HTMLDivElement;
const oldRangeLineEl = document.querySelector('.js-old-line') as HTMLDivElement;
const youngRangeLineEl = document.querySelector(
  '.js-young-line',
) as HTMLDivElement;
const dopRangeLineEl = document.querySelector('.js-dop-line') as HTMLDivElement;

const yaselEndpointsElList = [
  ...(document.querySelector('.js-yasel-endpoints') as Element).children,
] as HTMLDivElement[];
const oldEndpointsElList = [
  ...(document.querySelector('.js-old-endpoints') as Element).children,
] as HTMLDivElement[];
const youngEndpointsElList = [
  ...(document.querySelector('.js-young-endpoints') as Element).children,
] as HTMLDivElement[];
const dopEndpointsElList = [
  ...(document.querySelector('.js-dop-endpoints') as Element).children,
] as HTMLDivElement[];

const resultLabelEl = document.querySelector(
  '.js-calc-result',
) as HTMLSpanElement;

let result: number;

let yaselCurrentStep = 5;
let oldCurrentStep = 5;
let youngCurrentStep = 5;
let dopCurrentStep = 5;

const calcResult = () => {
  result = (Number(yaselRange.value) * 4500
      + Number(oldRange.value) * 1050
      + Number(youngRange.value) * 2000
      + Number(dopRange.value) * 3000)
    * 0.5;
  resultLabelEl.textContent = result.toLocaleString();
  return result;
};

calcResult();

rangeElList.forEach(el => {
  const rangeEl = el as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const currentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;
});

yaselRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  yaselEndpointsElList[yaselCurrentStep].classList.remove(
    'calc__endpoint_active',
  );

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  yaselCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  yaselRangeLineEl.style.width = `${yaselCurrentStep * 10}%`;

  yaselEndpointsElList[yaselCurrentStep].classList.add('calc__endpoint_active');

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (yaselCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (yaselCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

oldRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  oldEndpointsElList[oldCurrentStep].classList.remove('calc__endpoint_active');

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  oldCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  oldRangeLineEl.style.width = `${oldCurrentStep * 10}%`;

  oldEndpointsElList[oldCurrentStep].classList.add('calc__endpoint_active');

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (oldCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (oldCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

youngRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  youngEndpointsElList[youngCurrentStep].classList.remove(
    'calc__endpoint_active',
  );

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  youngCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  youngRangeLineEl.style.width = `${youngCurrentStep * 10}%`;

  youngEndpointsElList[youngCurrentStep].classList.add('calc__endpoint_active');

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (youngCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (youngCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

dopRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  dopEndpointsElList[dopCurrentStep].classList.remove('calc__endpoint_active');

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  dopCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  dopRangeLineEl.style.width = `${dopCurrentStep * 10}%`;

  dopEndpointsElList[dopCurrentStep].classList.add('calc__endpoint_active');

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (dopCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (dopCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});
