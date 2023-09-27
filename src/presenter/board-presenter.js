import EditList from '../view/list-view.js';
import SortView from '../view/list-sort.js';
import {render, RenderPosition} from '../framework/render.js';
import NoPointView from '../view/no-task-view.js';
import PointPresenter from './point-presenter.js';
import {updateItem} from '../util.js';

export default class BoardPresenter {
  #listComponent = new EditList();
  #listSort = new SortView();
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

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      container: this.#listComponent.element,
      onDataChange: this.#handlePointChange,
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #renderSort() {
    render(this.#listSort, this.#boardContainer, RenderPosition.AFTERBEGIN);
  }

  #renderNoPoint() {
    render(this.#noPointComponent, this.#boardContainer);
  }

  #renderPointList () {
    this.#listPoints.map((item) => {
      this.#renderPoint(item);
    });
  }

  #renderPointComponent() {
    if(this.#listPoints.length === 0) {
      render(this.#renderNoPoint());
      return;
    }

    render(this.#listComponent, this.#boardContainer);
    this.#renderSort();
    this.#renderPointList();

  }

  #renderPointsContainer() {
    render(this.#listComponent, this.#boardContainer);
  }

  init() {
    this.#renderPointComponent();
  }
}
