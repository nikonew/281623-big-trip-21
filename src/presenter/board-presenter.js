import {isEscapeKey} from '../util.js';
import EditList from '../view/list-view.js';
import SortView from '../view/list-sort.js';
import {render, RenderPosition} from '../framework/render.js';
import NoPointView from '../view/no-task-view.js';
import PointPresenter from './point-presenter.js';

export default class BoardPresenter {
  #listComponent = new EditList();
  #listSort = new SortView();
  #noPointComponent = new NoPointView();
  #pointsModel = null;
  #boardContainer = null;
  #listPoints = [];

  constructor({boardContainer, pointsModel}) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
    this.#listPoints = [...this.#pointsModel.points];
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      container: this.#listComponent.element,
    });
    pointPresenter.init(point);
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
