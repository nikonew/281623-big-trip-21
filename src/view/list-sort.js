import {SORT_TYPE} from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';

function createSortTemplate() {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            <div class="trip-sort__item  trip-sort__item--day">
              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" data-sort-type="${SORT_TYPE.DAY}" checked>

              <label class="trip-sort__btn" for="sort-day">${SORT_TYPE.DAY}</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--event">
              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" data-sort-type="${SORT_TYPE.EVENT}" disabled>
              <label class="trip-sort__btn" for="sort-event">${SORT_TYPE.EVENT}</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--time">
              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" data-sort-type="${SORT_TYPE.TIME}">
              <label class="trip-sort__btn" for="sort-time">${SORT_TYPE.TIME}</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--price">
              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
              <label class="trip-sort__btn" for="sort-price" data-sort-type="${SORT_TYPE.PRICE}">${SORT_TYPE.PRICE}</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--offer">
              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" data-sort-type="${SORT_TYPE.OFFERS}" disabled>
              <label class="trip-sort__btn" for="sort-offer" data-sort-type="${SORT_TYPE.OFFERS}">${SORT_TYPE.OFFERS}</label>
            </div>
          </form>`
  );
}

export default class SortView extends AbstractView {
  #handleSortTypeChange = null;

  constructor({onSortTypeChange}) {
    super();
    this.#handleSortTypeChange = onSortTypeChange;

    this.element.addEventListener('click', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortTemplate();
  }

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'LABEL') {
      return;
    }
    evt.preventDefault();
    this.#handleSortTypeChange(evt.target.dataset);
  };
}

