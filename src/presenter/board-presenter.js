import EditList from '../view/list-view.js';
import SortView from '../view/list-sort.js';
import {render, RenderPosition} from '../framework/render.js';
import NoPointView from '../view/no-task-view.js';
import PointPresenter from './point-presenter.js';
import {updateItem} from '../util.js';

export default class BoardPresenter {
  #listComponent = new EditList();
  #sortComponent = null;
  #noPointComponent = new NoPointView();
  #pointsModel = null;
  #boardContainer = null;
  #listPoints = [];

  #pointPresenters = new Map();

  constructor({boardContainer, pointsModel}) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
    this.#listPoints = [...this.#pointsModel.points];
  }

  #handlePointChange = (updatedPoint) => {
    this.#listPoints = updateItem(this.#listPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #handleSortTypeChange = (sortType) => {
    // - Сортируем задачи
    // - Очищаем список
    // - Рендерим список заново
  };

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      container: this.#listComponent.element,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #renderSort() {
    this.#sortComponent = new SortView({
      onSortTypeChange: this.#handleSortTypeChange
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
    this.#renderSort();
    this.#renderPointList();

  }

  init() {
    this.#renderPointComponent();
  }
}
