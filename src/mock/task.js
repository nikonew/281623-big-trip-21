import {getRandomArrayElement} from '../util.js';
import {DESCRIPTIONS,DESTINATIONS,OFFERS,TYPES} from '../const.js';

const destinations = [
  {
    'id': 0,
    'description': getRandomArrayElement(DESCRIPTIONS),
    'name': getRandomArrayElement(DESTINATIONS),
    'pictures': [
      {
        'src': 'https://loremflickr.com/248/152?random=0.0562563005163317',
        'description': getRandomArrayElement(DESCRIPTIONS),
      }
    ]
  },
  {
    'id': 1,
    'description': getRandomArrayElement(DESCRIPTIONS),
    'name': getRandomArrayElement(DESTINATIONS),
    'pictures': [
      {
        'src': 'https://loremflickr.com/248/152?random=0.0762563005163317',
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
        'src': 'https://loremflickr.com/248/152?random=0.0962563005163317',
        'description': getRandomArrayElement(DESCRIPTIONS),
      }
    ]
  }
];

const offers = [
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

const points = [
  {
    'id': 0,
    'basePrice': 1100,
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': getRandomArrayElement(destinations),
    'isFavorite': false,
    'offers': getRandomArrayElement(offers),
    'type': getRandomArrayElement(TYPES)
  },
  {
    'id': 1,
    'basePrice': 2100,
    'dateFrom': '2020-07-11T12:55:56.845Z',
    'dateTo': '2020-07-12T14:22:13.375Z',
    'destination': getRandomArrayElement(destinations),
    'isFavorite': false,
    'offers': getRandomArrayElement(offers),
    'type': getRandomArrayElement(TYPES)
  },
  {
    'id': 2,
    'basePrice': 3100,
    'dateFrom': '2021-07-14T21:55:56.845Z',
    'dateTo': '2021-07-15T12:22:13.375Z',
    'destination': getRandomArrayElement(destinations),
    'isFavorite': true,
    'offers': getRandomArrayElement(offers),
    'type': getRandomArrayElement(TYPES)
  }
];

export function getRandomPoint() {
  return getRandomArrayElement(points);
}


