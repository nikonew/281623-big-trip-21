import {getRandomArrayElement} from '../util.js';
import {DESCRIPTIONS,DESTINATIONS} from '../const.js';

export const mockDestinations = [
  {
    id: '1',
    description: getRandomArrayElement(DESCRIPTIONS),
    name: getRandomArrayElement(DESTINATIONS),
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=35',
        description: getRandomArrayElement(DESCRIPTIONS)
      },
      {
        src: 'https://loremflickr.com/248/152?random=45',
        description: getRandomArrayElement(DESCRIPTIONS)
      }
    ]
  },
  {
    id: '2',
    description: getRandomArrayElement(DESCRIPTIONS),
    name: getRandomArrayElement(DESTINATIONS),
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=45',
        description: getRandomArrayElement(DESCRIPTIONS)
      },
      {
        src: 'https://loremflickr.com/248/152?random=12',
        description: getRandomArrayElement(DESCRIPTIONS)
      }
    ]
  },
  {
    id: '3',
    description: getRandomArrayElement(DESCRIPTIONS),
    name: getRandomArrayElement(DESTINATIONS),
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=11',
        description: getRandomArrayElement(DESCRIPTIONS)
      },
      {
        src: 'https://loremflickr.com/248/152?random=1',
        description: getRandomArrayElement(DESCRIPTIONS)
      }
    ]
  },
];
