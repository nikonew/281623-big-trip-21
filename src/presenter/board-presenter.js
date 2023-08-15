import EditList from '../view/list-view.js';
import SortView from '../view/list-sort.js';
import PointView from '../view/list-point.js';
import EventEditView from '../view/list-event-view.js';
import {render} from '../render.js';

const POINTS_COUNT = 4;

export default class BoardPresenter {
  listComponent = new EditList();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(new SortView(), this.boardContainer);
    render(this.listComponent, this.boardContainer);
    render(new EventEditView(), this.listComponent.getElement());

    for (let i = 0; i < POINTS_COUNT; i++) {
      render(new PointView, this.listComponent.getElement());
    }
  }
}
