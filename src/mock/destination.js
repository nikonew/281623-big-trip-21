import {getRandomArrayElement} from '../util.js';
import {DESCRIPTIONS,DESTINATIONS} from '../const.js';

export const destinations = [
  {
    'id': crypto.randomUUID(),
    'description': getRandomArrayElement(DESCRIPTIONS),
    'name': getRandomArrayElement(DESTINATIONS),
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        'description': getRandomArrayElement(DESCRIPTIONS),
      }
    ]
  },
  {
    'id': crypto.randomUUID(),
    'description': getRandomArrayElement(DESCRIPTIONS),
    'name': getRandomArrayElement(DESTINATIONS),
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        'description': getRandomArrayElement(DESCRIPTIONS),
      }
    ]
  },
  {
    'id': crypto.randomUUID(),
    'description': getRandomArrayElement(DESCRIPTIONS),
    'name': getRandomArrayElement(DESTINATIONS),
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        'description': getRandomArrayElement(DESCRIPTIONS),
      }
    ]
  },
  {
    'id': crypto.randomUUID(),
    'description': getRandomArrayElement(DESCRIPTIONS),
    'name': getRandomArrayElement(DESTINATIONS),
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        'description': getRandomArrayElement(DESCRIPTIONS),
      }
    ]
  }
];


