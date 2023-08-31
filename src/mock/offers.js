import {getRandomArrayElement, getRandomInteger} from '../util.js';
import {OFFERS,TYPES} from '../const.js';

export const offers = [
      {
        'id': crypto.randomUUID(),
        'title': getRandomArrayElement(OFFERS),
        'price': getRandomInteger(0, 100)
      },
      {
        'id': crypto.randomUUID(),
        'title': getRandomArrayElement(OFFERS),
        'price': getRandomInteger(0, 100)
      },
      {
        'id': crypto.randomUUID(),
        'title': getRandomArrayElement(OFFERS),
        'price': getRandomInteger(0, 100)
      }
]


