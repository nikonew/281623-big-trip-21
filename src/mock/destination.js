import {getRandomArrayElement} from '../util.js';
import {DESCRIPTIONS,DESTINATIONS} from '../const.js';

export const destinations = [
  {
    'id': 1,
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
    'id': 2,
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
    'id': 3,
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
    'id': 4,
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


