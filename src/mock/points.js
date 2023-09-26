import {getRandomArrayElement, getRandomInteger} from '../util.js';
import {TYPES} from '../const.js';
import {destinations} from './destination.js';
import {offers} from './offers.js';

const points = [
  {
    'id': getRandomInteger(1,4),
    'basePrice': 1100,
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': destinations[getRandomInteger(0,3)],
    'isFavorite': false,
    'offers': Array.from({ length: getRandomInteger(1, 4) }, () => getRandomArrayElement(offers)),
    'type': getRandomArrayElement(TYPES)
  },
  {
    'id': getRandomInteger(1,4),
    'basePrice': 2100,
    'dateFrom': '2020-07-11T12:55:56.845Z',
    'dateTo': '2020-07-12T14:22:13.375Z',
    'destination': destinations[getRandomInteger(0,3)],
    'isFavorite': false,
    'offers':Array.from({ length: getRandomInteger(1, 4) }, () => getRandomArrayElement(offers)),
    'type': getRandomArrayElement(TYPES)
  },
  {
    'id': getRandomInteger(1,4),
    'basePrice': 2100,
    'dateFrom': '2020-07-11T12:55:56.845Z',
    'dateTo': '2020-07-12T14:22:13.375Z',
    'destination': destinations[getRandomInteger(0,3)],
    'isFavorite': false,
    'offers':Array.from({ length: getRandomInteger(1, 4) }, () => getRandomArrayElement(offers)),
    'type': getRandomArrayElement(TYPES)
  },
  {
    'id': getRandomInteger(1,4),
    'basePrice': 3100,
    'dateFrom': '2021-07-14T21:55:56.845Z',
    'dateTo': '2021-07-15T12:22:13.375Z',
    'destination': destinations[getRandomInteger(0,3)],
    'isFavorite': true,
    'offers': Array.from({ length: getRandomInteger(1, 4) }, () => getRandomArrayElement(offers)),
    'type': getRandomArrayElement(TYPES)
  }
];

export function getRandomPoint() {
  return getRandomArrayElement(points);
}

export const randomPoint = getRandomPoint();
