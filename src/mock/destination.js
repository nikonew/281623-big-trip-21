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


export const generateMockDestinations = () => {
  const photos = `https://loremflickr.com/300/200?random=${crypto.randomUUID()}`;

  return {
    id: crypto.randomUUID(),
    name: getRandomArrayElement(DESTINATIONS),
    description: getRandomArrayElement(DESCRIPTIONS),
    pictures:[
      {'src': photos,
        'description':getRandomArrayElement(DESCRIPTIONS),
      }
    ]
  };
};
