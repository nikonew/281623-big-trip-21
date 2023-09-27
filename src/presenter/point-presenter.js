import {render, replace} from '../framework/render.js';
import {isEscapeKey} from '../util.js';
import EventEditView from '../view/list-event-view.js';
import PointView from '../view/list-point.js';

export default class PointPresenter {
  #pointListContainer = null;
  #pointComponent = null;
  #pointEditComponent = null;
  #point = null;


  constructor({container}) {
    this.#pointListContainer = container;
  }

  init(point) {
    this.#point = point;

    this.#pointComponent = new PointView({
      point: this.#point,
      onEditClick: this.#handleBtnClick,
    });

    this.#pointEditComponent = new EventEditView({
      point: this.#point,
      onSubmitClick: this.#handleSubmitClick,
    });

    render(this.#pointComponent,this.#pointListContainer);
  }

  #handleBtnClick = () => {
    this.#replaceFormToCard();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #handleSubmitClick = () => {
    this.#replaceCardToForm();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #replaceFormToCard() {
    replace(this.#pointEditComponent, this.#pointComponent);
  }

  #replaceCardToForm() {
    replace(this.#pointComponent, this.#pointEditComponent);
  }

  #escKeyDownHandler = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.#handleSubmitClick();
    }
  };

}
