import {isEscapeKey} from '../util.js';
import EditList from '../view/list-view.js';
import SortView from '../view/list-sort.js';
import PointView from '../view/list-point.js';
import EventEditView from '../view/list-event-view.js';
import {render,replace} from '../framework/render.js';

export default class BoardPresenter {
  #listComponent = new EditList();
  #listSort = new SortView();
  #pointsModel = null;
  #boardContainer = null;
  #listPoints = [];

  constructor({boardContainer, pointsModel}) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    render(this.#listSort, this.#boardContainer);
    this.#listPoints = [...this.#pointsModel.points];
    this.#renderPointList();
  }

  #renderTask(point) {
    const escKeyDownHandler = (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        replaceCardToForm();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView({
      point,
      onEditClick: () => {
        replaceFormToCard();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const pointForm = new EventEditView({
      point,

      onSubmitClick: () => {
        replaceCardToForm();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onFormEdit: () => {
        replaceCardToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      },
    });

    function replaceFormToCard() {
      replace(pointForm, pointComponent);
    }

    function replaceCardToForm() {
      replace(pointComponent, pointForm);
    }

    render(pointComponent, this.#listComponent.element);
  }

  #renderPointList() {
    render(this.#listComponent, this.#boardContainer);
    this.#listPoints.map((item) => {
      this.#renderTask(item);
    });
  }
}
