import EditList from '../view/list-view.js';
import SortView from '../view/list-sort.js';
import PointView from '../view/list-point.js';
import EventEditView from '../view/list-event-view.js';
import {render} from '../framework/render.js';
import {POINTS_COUNT} from '../const.js';

export default class BoardPresenter {
  #listComponent = new EditList();
  #listEventEdit = new EventEditView();
  #listSort = new SortView();
  #pointsModel = null;
  #boardContainer = null;
  #listPoints = [];

  constructor({boardContainer, pointsModel}) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#listPoints = [...this.#pointsModel.points];

    render(this.#listSort, this.#boardContainer);
    render(this.#listComponent, this.#boardContainer);
    render(this.#listEventEdit, this.#listComponent.element);

    for (let i = 0; i < POINTS_COUNT; i++) {
      render(new PointView({point: this.#listPoints[i]}), this.#listComponent.element);
    }
  }
}
