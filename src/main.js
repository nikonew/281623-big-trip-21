import PointsModel from './model/point-model.js';
import {render, RenderPosition} from './render.js';
import FilterView from './view/list-filter.js';
import BoardPresenter from '../src/presenter/board-presenter.js';
import InfoTrip from './view/list-info.js';

const tripInfoElement = document.querySelector('.trip-main');
const filterElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
const pointsModel = new PointsModel();

const boardPresenter = new BoardPresenter({
  boardContainer: tripEventsElement,
  pointsModel
});

render(new InfoTrip(), tripInfoElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filterElement);

boardPresenter.init();
