import { FILTER_TYPE } from '../const';
import dayjs from 'dayjs';

const isStartDateExpired = (dateFrom) => dayjs(dateFrom).isAfter(dayjs());

const isEndDateExpired = (dateTo) => dayjs(dateTo).isAfter(dayjs());

const isFutureEvent = (dateFrom, dateTo) => isStartDateExpired(dateFrom) && isEndDateExpired(dateTo);

const isPresentEvent = (dateFrom, dateTo) => !isStartDateExpired(dateFrom) && isEndDateExpired(dateTo);

const isPastEvent = (dateFrom, dateTo) => !isStartDateExpired(dateFrom) && !isEndDateExpired(dateTo);


const filterElements = {
  [FILTER_TYPE.EVERYTHING]: (points) => points,
  [FILTER_TYPE.FUTURE]: (points) => points.filter((point) => isFutureEvent(point.dateFrom, point.dateTo)),
  [FILTER_TYPE.PRESENT]: (points) => points.filter((point) => isPresentEvent(point.dateFrom, point.dateTo)),
  [FILTER_TYPE.PAST]: (points) => points.filter((point) => isPastEvent(point.dateFrom, point.dateTo)),
};

export function generateFilter(points){
  return Object.entries(filterElements).map(//получем массив массивов ключ-значение из объекта и итерируемся по нему
    ([filterType,filterPoints])=>({
      type:filterType,
      count:filterPoints(points).length,//количество задач соответствующих фильтру
    })
  );
}

