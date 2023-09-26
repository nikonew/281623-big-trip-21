import {isEscapeKey} from '../util.js';
import EditList from '../view/list-view.js';
import SortView from '../view/list-sort.js';
import PointView from '../view/list-point.js';
import EventEditView from '../view/list-event-view.js';
import {render,replace, RenderPosition} from '../framework/render.js';
import NoPointView from '../view/no-task-view.js';

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
  }

  #renderPoint(point) {
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

    function onSubmitClick () {
      replaceCardToForm();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    const pointForm = new EventEditView({
      point, onSubmitClick
    });

    function replaceFormToCard() {
      replace(pointForm, pointComponent);
    }

    function replaceCardToForm() {
      replace(pointComponent, pointForm);
    }

    render(pointComponent, this.#listComponent.element);
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

  init() {
    this.#listPoints = [...this.#pointsModel.points];
    this.#renderPointComponent();
  }
}
