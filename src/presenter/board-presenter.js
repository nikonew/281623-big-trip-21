import EditList from '../view/list-view.js';
import SortView from '../view/list-sort.js';
import PointView from '../view/list-point.js';
import EventEditView from '../view/list-event-view.js';
import {render} from '../render.js';
import {POINTS_COUNT} from '../const.js';

export default class BoardPresenter {
  listComponent = new EditList();

  constructor({boardContainer, pointsModel}) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.listPoints = [...this.pointsModel.getPoints()];

    render(new SortView(), this.boardContainer);
    render(this.listComponent, this.boardContainer);
    render(new EventEditView(), this.listComponent.getElement());

    for (let i = 0; i < POINTS_COUNT; i++) {
      render(new PointView({point: this.listPoints[i]}), this.listComponent.getElement());
    }
  }
}
