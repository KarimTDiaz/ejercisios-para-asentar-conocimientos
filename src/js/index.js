// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { sliderCardsNext, sliderCardPrevious } from './slide-cards.js';

const previousElement = document.getElementById('previuos-card');
const nextElement = document.getElementById('next-card');

previousElement.addEventListener('click', ev => {
  sliderCardPrevious();
});
nextElement.addEventListener('click', ev => {
  sliderCardsNext();
});
