import {DATE_FORMAT, TIME_FORMAT, FULL_DATE_FORMAT,} from './const.js';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// функция возвращает случайное число
export const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

dayjs.extend(duration);
dayjs.extend(relativeTime);

const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;

const MSEC_IN_HOUR = MIN_IN_HOUR * SEC_IN_MIN * MSEC_IN_SEC;

const MSEC_IN_DAY = HOUR_IN_DAY * MSEC_IN_HOUR;

export function humanizeTravelDate(date) {
  return dayjs(date).format(DATE_FORMAT);
}

export function humanizeTimeFromTo(date) {
  return date ? dayjs(date).format(TIME_FORMAT) : '';
}

export function humanizeTimeEdit(date) {
  return date ? dayjs(date).format(FULL_DATE_FORMAT) : '';
}

export const isEscapeKey = (evt) => evt.key === 'Escape';

export function getPointDuration(dateFrom, dateTo) {
  const timeDiff = dayjs(dateTo).diff(dayjs(dateFrom));

  let pointDuration = 0;

  switch (true) {
    case timeDiff >= MSEC_IN_DAY:
      pointDuration = dayjs.duration(timeDiff).format('DD[D] HH[H] mm[M]');
      break;
    case timeDiff >= MIN_IN_HOUR:
      pointDuration = dayjs.duration(timeDiff).format('HH[H] mm[M]');
      break;
    case timeDiff >= MSEC_IN_HOUR:
      pointDuration = dayjs.duration(timeDiff).format('mm[M]');
      break;
  }
  return pointDuration;
}

dayjs.extend(duration);

export const sortByTime = (pointA, pointB) => {
  const durationPointA = dayjs(pointA.dateTo).valueOf() - dayjs(pointA.dateFrom).valueOf();
  const durationPointB = dayjs(pointB.dateTo).valueOf() - dayjs(pointB.dateFrom).valueOf();

  return durationPointB - durationPointA;
};

export const sortByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;

export const sortByDate = (pointA, pointB) => {
  const dateA = dayjs(pointA.dateFrom).valueOf();
  const dateB = dayjs(pointB.dateFrom).valueOf();

  return dateA - dateB;
};


export function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}
