import EditList from '../view/list-view.js';
import SortView from '../view/list-sort.js';
import {render, RenderPosition} from '../framework/render.js';
import NoPointView from '../view/no-task-view.js';
import PointPresenter from './point-presenter.js';
import {updateItem} from '../util.js';
import {ENABLE_SORT_TYPE, SORT_TYPE} from '../const.js';
import { sortByDate, sortByPrice, sortByTime} from '../util.js';

export default class BoardPresenter {
  #listComponent = new EditList();
  #sortComponent = null;
  #noPointComponent = new NoPointView();
  #pointsModel = null;
  #boardContainer = null;
  #listPoints = [];

  #pointPresenters = new Map();
  #currentSortType = SORT_TYPE.DAY;

  constructor({boardContainer, pointsModel}) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
    this.#listPoints = [...this.#pointsModel.points];
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      container: this.#listComponent.element,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #handlePointChange = (updatedPoint) => {
    this.#listPoints = updateItem(this.#listPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #sortPoints(sortType) {
    // 2. Этот исходный массив задач
    switch (sortType) {
      case SORT_TYPE.TIME:
        // sort встроенный метод массива
        this.#listPoints.sort(sortByTime);
        break;
      case SORT_TYPE.PRICE:
        this.#listPoints.sort(sortByPrice);
        break;
      case SORT_TYPE.DAY:
        this.#listPoints.sort(sortByDate);
        break;
      case SORT_TYPE.EVENT:
        break;
      case SORT_TYPE.OFFERS:
        break;
    }
    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#sortPoints(sortType);
    this.#clearPointList();
    this.#renderPointList();
  };

  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #renderSort() {
    const sortTypes = Object.values(SORT_TYPE)
      // для каждого типа сортировки формирует объект
      .map((type) => ({
        type,
        isChecked: (type === this.#currentSortType),
        isDisabled: !ENABLE_SORT_TYPE[type]
      }));

    this.#sortComponent = new SortView({
      items: sortTypes,
      onSortTypeChange: this.#handleSortTypeChange,
    });

    render(this.#sortComponent, this.#boardContainer, RenderPosition.AFTERBEGIN);
  }

  #renderNoPoint() {
    render(this.#noPointComponent, this.#boardContainer);
  }

  #renderPointList () {
    this.#listPoints.map((item) => {
      this.#renderPoint(item);
    });
  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #renderPointComponent() {
    if(this.#listPoints.length === 0) {
      render(this.#renderNoPoint());
      return;
    }

    render(this.#listComponent, this.#boardContainer);
    this.#renderPointList();
    this.#renderSort();
  }

  init() {
    this.#renderPointComponent();
  }
}
