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
    this.#listPoints = [...this.#pointsModel.points];

    render(this.#listSort, this.#boardContainer);
    render(this.#listComponent, this.#boardContainer);

    for (let i = 0; i < this.#listPoints.length; i++) {
      this.#renderTask(this.#listPoints[i]);
    }
  }

  #renderTask(point) {
    const escKeyDownHandler = (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView({
      point,
      onEditClick: () => {
        replaceCardToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const pointEvent = new EventEditView({point,
      onFormSubmit: () => {
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onCloseEdit: () => {
        replaceFormToCard();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    function replaceFormToCard () {
      replace(pointComponent, pointEvent);
    }

    function replaceCardToForm() {
      replace(pointComponent, pointEvent);
    }

    render(pointComponent, this.#listComponent.element);
  }
}
