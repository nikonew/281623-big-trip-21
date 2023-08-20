import {DATE_FORMAT, TIME_FORMAT, EDIT_DATE_FORMAT,} from './const.js';
import dayjs from 'dayjs';

export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// функция возвращает случайное число
export const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

export function humanizeTravelDate(dateForm) {
  return dateForm ? dayjs(dateForm).format(DATE_FORMAT) : '';
}

export function humanizeTimeFromTo(dateTo) {
  return dateTo ? dayjs(dateTo).format(TIME_FORMAT) : '';
}

export function humanizeTimeEdit(dateTime) {
  return dateTime ? dayjs(dateTime).format(EDIT_DATE_FORMAT) : '';
}

export function humanizeTravelTime(from, to) {
  return dayjs(to).diff(dayjs(from), 'h');
}
