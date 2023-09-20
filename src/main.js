import PointsModel from './model/point-model.js';
import {render, RenderPosition} from './framework/render.js';
import FilterView from './view/list-filter.js';
import BoardPresenter from '../src/presenter/board-presenter.js';
import InfoTrip from './view/list-info.js';
import {generateFilter} from './mock/filter.js';

const tripInfoElement = document.querySelector('.trip-main');
const filterElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
const pointsModel = new PointsModel();

const boardPresenter = new BoardPresenter({
  boardContainer: tripEventsElement,
  pointsModel
});

const filters = generateFilter(pointsModel.points);

render(new InfoTrip(), tripInfoElement, RenderPosition.AFTERBEGIN);
render(new FilterView({filters}), filterElement);

boardPresenter.init();
