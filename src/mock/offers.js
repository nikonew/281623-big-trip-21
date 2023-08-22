import {OFFERS} from '../const.js';
import {getRandomArrayElement} from '../util.js';

export const offers = [
  {
    'id': 0,
    'title': getRandomArrayElement(OFFERS),
    'price': '100'
  },
  {
    'id': 1,
    'title': getRandomArrayElement(OFFERS),
    'price': '50'
  },
  {
    'id': 2,
    'title': getRandomArrayElement(OFFERS),
    'price': '15'
  },
];


