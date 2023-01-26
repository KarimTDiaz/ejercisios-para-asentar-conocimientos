import { INFO } from './constans.js';

const cardElement = document.getElementById('card');
const newArray = Object.values(INFO);
let counter = 0;

const printCard = () => {
  cardElement.children[0].textContent = newArray[counter].title;
  cardElement.children[1].textContent = newArray[counter].description;
};
console.log(newArray.length);
/* preguntar la importancia de printcard antes del counter */
const sliderCardsNext = () => {
  if (counter > newArray.length - 1) counter = 0;
  printCard();
  counter++;
};

const sliderCardPrevious = () => {
  if (counter <= 0 && counter !== newArray.length - 1)
    counter = newArray.length - 1;
  printCard();
  counter--;
};

export { sliderCardsNext, sliderCardPrevious };
