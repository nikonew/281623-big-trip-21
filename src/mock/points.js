import {getRandomArrayElement} from '../util.js';
import {TYPES} from '../const.js';
import {offers} from './offers.js';
import {destinations} from './destination.js';

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

